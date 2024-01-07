import { signOut } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";
export default function SignOutButton() {
  return <Button onClick={signOut}>Sign out</Button>;
}
