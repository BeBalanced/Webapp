// import { createClient } from "@supabase/supabase-js";
import { createBrowserClient } from "@supabase/ssr";
import { redirect } from "next/navigation";

export const signOut = async () => {
  // Create a single supabase client for interacting with your database
  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
  const { error } = await supabase.auth.signOut();
  if (!error) {
    redirect("/signin");
  }
};
