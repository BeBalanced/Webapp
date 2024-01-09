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
