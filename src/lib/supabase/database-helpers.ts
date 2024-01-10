import { supabase } from "./client";
import { toast } from "sonner";

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
  if (!error) {
    toast.success("Account added successfully.");
    return data;
  }
  toast.error(error.toString());
}
