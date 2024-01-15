"use client";
import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { formatCentsToDollars } from "@/lib/money/helpers";
import { retrieveAccounts } from "@/lib/supabase/helpers";
import { Account } from "@/lib/supabase/schemas";

export default function Accounts() {
  const [accounts, setAccounts] = useState<Account[]>([]);
  useEffect(() => {
    retrieveAccounts().then((data) => {
      if (data) {
        let tempAccountsList: Account[] = [];
        data.forEach((account) => {
          tempAccountsList.push({
            id: account.id,
            name: account.name,
            balance: account.balance,
            countTowardsAssign: account.count_towards_assign,
          });
        });
        setAccounts(tempAccountsList);
      }
    });
  }, []);

  return (
    <main className="space-y-4">
      {accounts.map((account) => {
        return (
          <Card className="w-full" key={account.id}>
            <CardHeader>
              <CardTitle>{account.name}</CardTitle>
            </CardHeader>
            <CardContent>{formatCentsToDollars(account.balance)}</CardContent>
            <CardFooter>
              {account.countTowardsAssign ? "Can Assign ✅" : "Can't Assign ❌"}
            </CardFooter>
          </Card>
        );
      })}
    </main>
  );
}
