import { ColumnDef } from "@tanstack/react-table";
import { DataTable } from "@/components/shared/dataTable";
import { getTransactions } from "@/lib/supabase/server";
import { cookies } from "next/headers";
import { createServerComponentClient } from "@/lib/supabase/config";

// You can use a Zod schema here if you want.
export type Transaction = {
  account_from_name: string;
  account_to_name: string;
  amount: number;
};

const columns: ColumnDef<Transaction>[] = [
  {
    accessorKey: "account_from_name",
    header: "Account From",
  },
  {
    accessorKey: "account_to_name",
    header: "Account To",
  },
  {
    accessorKey: "amount",
    header: "Amount",
  },
];

export default async function TransactionTable() {
  const cookieStore = cookies();
  const supabaseClient = createServerComponentClient(cookieStore);
  const transactions = await getTransactions(supabaseClient);
  return <DataTable columns={columns} data={transactions} />;
}
