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
  toast.error("Sorry, something went wrong.");
}

export async function joinWaitlist(userEmail: string) {
  const { data, error } = await supabase
    .from("waitlist")
    .insert({ email: userEmail });
  if (!error) {
    toast.success(
      "Congrats, you're all signed up. You will get an email when a spot opens up."
    );
    return data;
  }
  toast.error("Sorry, something went wrong.");
}
