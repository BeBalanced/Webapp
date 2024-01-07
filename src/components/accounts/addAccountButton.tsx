"use client";
import { Button } from "../ui/button";
import { addAccount } from "@/lib/supabase/client";
import { supabase } from "@/lib/supabase/client";

export default async function AddAccountButton() {
  const { data, error } = await supabase.auth.getSession();
  return (
    <Button
      onClick={() => {
        console.log(data);
      }}
    >
      Add Account
    </Button>
  );
}
