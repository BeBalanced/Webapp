import { retrieveAccounts } from "@/lib/supabase/server";
import { Account } from "@/lib/supabase/schemas";
import { AccountsList } from "@/components/accounts/accountsList";

export default async function Accounts() {
  const accounts: Account[] | undefined = await retrieveAccounts();

  return (
    <main className="space-y-4">
      <AccountsList accounts={accounts!} />
    </main>
  );
}
