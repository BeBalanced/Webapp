import { supabase } from "./client";

interface account {
  name: string;
  balance: string;
}

export async function addAccount(params: account) {
  const { data, error } = await supabase
    .from("accounts")
    .insert([{ name: params.name, balance: 1234 }])
    .select();

  return { data, error };
}
