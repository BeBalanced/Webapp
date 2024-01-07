// import { createClient } from "@supabase/supabase-js";
import { createBrowserClient } from "@supabase/ssr";
import { redirect } from "next/navigation";

export const supabase = createBrowserClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export const signOut = async () => {
  // Create a single supabase client for interacting with your database
  const { error } = await supabase.auth.signOut();
  if (!error) {
    redirect("/signin");
  }
};

export const fetchAccounts = async () => {
  let { data: accounts, error } = await supabase.from("accounts").select("id");
  return accounts;
};

export const addAccount = async () => {
  const { data, error } = await supabase
    .from("accounts")
    .insert([{ name: "someValue", type: "otherValue", balance: 123412 }])
    .select();

  return data;
};
