import { createClient } from "@supabase/supabase-js";

export const signOut = async () => {
  // Create a single supabase client for interacting with your database
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
  const { error } = await supabase.auth.signOut();
  console.log(error);
};
