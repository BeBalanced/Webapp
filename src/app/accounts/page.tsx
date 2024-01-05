"use client";
import { addAccount } from "@/lib/supabase/data-helpers";
import { Button } from "@/components/ui/button";
export default function Accounts() {
  return (
    <>
      <h1>Welcome to Accounts</h1>
      <Button onClick={() => addAccount("test", 1002234)}>HEY</Button>
    </>
  );
}
