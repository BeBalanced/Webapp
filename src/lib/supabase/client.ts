import "client-only";
import { createBrowserClient } from "@supabase/ssr";
import { toast } from "sonner";

interface accountToAdd {
  name: string;
  balance: string;
  countTowardsAssign: boolean;
}

interface transactionToAdd {
  accountFrom: string;
  accountTo: string;
  amount: number;
}

export const supabase = createBrowserClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

type NextRouter = any;

export const signOut = async (router: NextRouter) => {
  const { error } = await supabase.auth.signOut();
  if (!error) {
    router.push("/welcome");
  }
};

export async function getUserId() {
  return (await supabase.auth.getUser()).data.user?.id;
}

export async function addTransaction(params: transactionToAdd) {
  supabase.from("accounts").select("*").eq("external", true);
}

export async function addAccount(params: accountToAdd) {
  const currentUserId = await getUserId();

  const { data, error } = await supabase
    .from("accounts")
    .insert([
      {
        name: params.name,
        balance: parseInt(params.balance),
        user_id: currentUserId,
        count_towards_assign: params.countTowardsAssign,
      },
    ])
    .select();
  if (!error) {
    toast.success("Account added successfully.");
    return data;
  }
  toast.error("Sorry, something went wrong.");
  console.log(error);
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
