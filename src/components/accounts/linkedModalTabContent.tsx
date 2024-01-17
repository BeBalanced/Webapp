"use client";
import { Button } from "../ui/button";
import { getUserId } from "@/lib/supabase/client";
import { usePlaidLink } from "react-plaid-link";
import { generateLinkToken } from "@/lib/plaid/client-helpers";
import { useState, useEffect } from "react";
export default function LinkedModalTabContent() {
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
    onSuccess: (public_token, metadata) => {
      console.log(public_token);
      console.log(metadata);
    },
  });
  return (
    <>
      <p>
        Creating a Linked account means linking your bank or financial
        institution so transactions do not need to be logged manually.
      </p>
      <Button
        className="w-full"
        onClick={() => {
          openLink();
        }}
        disabled={!ready}
      >
        Add Linked Account
      </Button>
    </>
  );
}
