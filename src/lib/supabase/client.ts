import { createBrowserClient } from "@supabase/ssr";

export const supabase = createBrowserClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

type NextRouter = any;

export const signOut = async (router: NextRouter) => {
  const { error } = await supabase.auth.signOut();
  if (!error) {
    router.refresh();
  }
};
