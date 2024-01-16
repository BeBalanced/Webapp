"use client";

import { ColumnDef } from "@tanstack/react-table";
import { DataTable } from "../shared/dataTable";

export const transactions: Transaction[] = [
  {
    id: "string",
    account_from: "PNC Checking",
    account_to: "McDonalds",
    amount: 100,
    time: new Date(),
  },
];

export type Transaction = {
  id: string;
  time: Date;
  account_from: string;
  account_to: string;
  amount: number;
};

export const columns: ColumnDef<Transaction>[] = [
  {
    accessorKey: "time",
    header: "Date",
  },
  {
    accessorKey: "account_from",
    header: "Account From",
  },
  {
    accessorKey: "account_to",
    header: "Account To",
  },
  {
    accessorKey: "amount",
    header: () => <div className="text-right">Amount</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount);

      return <span className="text-right font-medium">{formatted}</span>;
    },
  },
];

export default async function TransactionTable() {
  return (
    <div>
      <DataTable columns={columns} data={transactions} />
    </div>
  );
}
