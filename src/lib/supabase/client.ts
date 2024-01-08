// import { createClient } from "@supabase/supabase-js";

import { createBrowserClient } from "@supabase/ssr";
import { navigate } from "./server";

export const supabase = createBrowserClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export const signOut = async () => {
  const { error } = await supabase.auth.signOut();
  if (!error) {
    navigate("/signin");
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
