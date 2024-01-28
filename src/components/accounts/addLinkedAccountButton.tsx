"use client";

import { getUserId } from "@/lib/supabase/client";
import { usePlaidLink } from "react-plaid-link";
import {
  generateLinkToken,
  exchangeTempTokenForPermanentToken,
} from "@/lib/plaid/client-helpers";
import { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { HttpRequest } from "@/lib/utils";
export default function AddLinkedAccountButton() {
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
      const res = await HttpRequest(
        `/api/plaid/accounts?access_token=${permanentAccessToken}`,
        "GET"
      );
      console.log(res);
    },
  });
  return (
    <>
      <Button
        disabled={!ready}
        onClick={() => {
          openLink();
        }}
      >
        Add Linked Account
      </Button>
    </>
  );
}
