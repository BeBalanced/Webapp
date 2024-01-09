// import { createClient } from "@supabase/supabase-js";

import { createBrowserClient } from "@supabase/ssr";

export const supabase = createBrowserClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

type NextRouter = any;

export const signOut = async (router: NextRouter) => {
  const { error } = await supabase.auth.signOut();
  console.log("Trying to refresh");
  if (!error) {
    router.refresh();
    console.log("refresh successful");
  }
};
