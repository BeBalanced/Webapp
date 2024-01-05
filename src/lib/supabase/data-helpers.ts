import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

async function addAccount(name: string, amount: number) {
  const { error } = await supabase
    .from("accounts")
    .insert({ name: name, amount: amount });
  console.log(error);
}

export { addAccount };
