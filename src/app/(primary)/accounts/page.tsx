// import { retrieveAccounts } from "@/lib/supabase/server";
import { Account } from "@/lib/supabase/schemas";
import { AccountsList } from "@/components/accounts/accountsList";
import { cookies } from "next/headers";
import { retrieveAccounts } from "@/lib/supabase/server";

export default async function Accounts() {
  const cookieStore = cookies();
  const accounts: Account[] = await retrieveAccounts(cookieStore);

  return (
    <main className="space-y-4">
      <AccountsList accounts={accounts!} />
    </main>
  );
}
