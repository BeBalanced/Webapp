// import { retrieveAccounts } from "@/lib/supabase/server";
import { Account } from "@/lib/supabase/schemas";
import { AccountsList } from "@/components/accounts/accountsList";
import { cookies, headers } from "next/headers";
import { getAccounts } from "@/lib/supabase/server";
import { createServerComponentClient } from "@/lib/supabase/config";

export default async function Accounts() {
  const accounts = await (
    await fetch("http://localhost:3000/api/accounts", {
      method: "GET",
      headers: headers(),
    })
  ).json();
  console.log(accounts);
  // const cookieStore = cookies();
  // const supabaseServerClient = createServerComponentClient(cookieStore);
  // const accounts: Account[] = await getAccounts(supabaseServerClient);

  return (
    <main className="space-y-4">
      {/* <AccountsList accounts={accounts!} /> */}
    </main>
  );
}
