"use client";
import { signOut } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
export default function SignOutButton() {
  const router = useRouter();
  return (
    <Button
      onClick={() => {
        signOut(router);
      }}
    >
      Sign out
    </Button>
  );
}
