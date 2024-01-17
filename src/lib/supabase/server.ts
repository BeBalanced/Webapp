import "server-only";
import { createServerComponentClient } from "./config";
import { cookies, headers } from "next/headers";
import { Account } from "./schemas";
import { redirect } from "next/navigation";

export async function retrieveAccounts() {
  "use server";
  const cookieStore = cookies();
  const supabase = createServerComponentClient(cookieStore);
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

export const signIn = async (formData: FormData) => {
  "use server";

  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const cookieStore = cookies();
  const supabase = createServerComponentClient(cookieStore);

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    return redirect("/signin?message=Could not authenticate user");
  }

  return redirect("/plan");
};

export const signUp = async (formData: FormData) => {
  "use server";

  const origin = headers().get("origin");
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const cookieStore = cookies();
  const supabase = createServerComponentClient(cookieStore);

  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${origin}/auth/callback`,
    },
  });

  if (error) {
    return redirect("/signin?message=Could not authenticate user");
  }

  return redirect("/signin?message=Check email to continue sign in process");
};
