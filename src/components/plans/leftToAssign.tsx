import { getAccountSums } from "@/lib/supabase/server";
import { cookies } from "next/headers";
import { createServerComponentClient } from "@/lib/supabase/config";
import { formatCentsToDollars } from "@/lib/money/helpers";

export default async function LeftToAssign() {
  const supabaseServerClient = createServerComponentClient(cookies());
  const value: number = await getAccountSums(supabaseServerClient);
  return (
    <>
      <p>Left to assign: {formatCentsToDollars(value)}</p>
    </>
  );
}
