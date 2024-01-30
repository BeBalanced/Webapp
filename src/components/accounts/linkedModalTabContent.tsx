"use client";
import { Button } from "../ui/button";
import { getUserId } from "@/lib/supabase/helpers";
import { usePlaidLink } from "react-plaid-link";
import {
  generateLinkToken,
  exchangeTempTokenForPermanentToken,
} from "@/lib/plaid/client-helpers";
import { useState, useEffect } from "react";

interface Props {
  closeModal: () => void;
}
export default function LinkedModalTabContent({ closeModal }: Props) {
  const [linkToken, setLinkToken] = useState<string | null>(null);

  useEffect(() => {
    const getLinkToken = async () => {
      const currentUserId = await getUserId();
      const token = (await generateLinkToken(currentUserId!)).link_token;
      setLinkToken(token);
    };

    getLinkToken();
  }, []);

  const { open: openLink, ready } = usePlaidLink({
    token: linkToken!,
    onSuccess: async (public_token, metadata) => {
      console.log(public_token);
      console.log(metadata);

      const permanentAccessToken = await exchangeTempTokenForPermanentToken(
        public_token
      );
      console.log(permanentAccessToken);
    },
  });
  return (
    <>
      <Button
        className="w-full"
        onClick={() => {
          console.log("Closing Modal");
          closeModal();
          console.log("Opening Link");
          openLink();
        }}
        disabled={!ready}
      >
        Add Linked Account
      </Button>
    </>
  );
}
