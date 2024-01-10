"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase/client";

export default function AccountsTable() {
  const account1 = {
    name: "PNC Checking",
    type: "Checking",
    balance: 12234,
  };
  const [accounts, setAccounts] = useState([account1]);

  const fetchData = async () => {
    let { data, error } = await supabase.from("accounts").select("*");
    return data;
  };

  useEffect(() => {
    const data = fetchData();
    console.log(data);
  }, []);
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Type</TableHead>
          <TableHead>Balance</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {accounts.map((account) => {
          return (
            <TableRow key={account.name} className="hover:cursor-pointer">
              <TableCell>{account.name}</TableCell>
              <TableCell>{account.type}</TableCell>
              <TableCell>${account.balance}</TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}
