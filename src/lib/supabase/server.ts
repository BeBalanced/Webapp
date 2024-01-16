import { createServerComponentClient } from "./config";
import { cookies } from "next/headers";
import { Account } from "./schemas";

export const supabase = createServerComponentClient(cookies());

export async function retrieveAccounts() {
  const { data, error } = await supabase.from("accounts").select();
  if (!error && data) {
    return data.map((pgAccount) => {
      let tempAccount: Account = {
        id: pgAccount.id,
        name: pgAccount.name,
        balance: pgAccount.balance,
        countTowardsAssign: pgAccount.count_towards_assign,
      };
      return tempAccount;
    });
  }
  console.log(error);
}
