import { supabase } from "./client";

interface account {
  name: string;
  balance: string;
}

async function getUserId() {
  return (await supabase.auth.getSession()).data.session?.user.id;
}

export async function addAccount(params: account) {
  const currentUserId = await getUserId();
  const { data, error } = await supabase
    .from("accounts")
    .insert([{ name: params.name, balance: 1234, user_id: currentUserId }])
    .select();
  console.log(data);
  return { data, error };
}
