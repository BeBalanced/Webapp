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

export default function AccountsTable() {
  const account1 = {
    name: "PNC Checking",
    type: "Checking",
    balance: 12234,
  };
  const [accounts, setAccounts] = useState([account1]);

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
