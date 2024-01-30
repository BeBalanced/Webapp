import { Account } from "@/lib/supabase/schemas";

import { formatCentsToDollars } from "@/lib/money/helpers";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

interface Props {
  accounts: Account[];
}

export function AccountsList({ accounts }: Props) {
  return (
    <>
      {accounts &&
        accounts.map((account) => {
          return (
            <Card className="w-full" key={account.id}>
              <CardHeader>
                <CardTitle>{account.name}</CardTitle>
              </CardHeader>
              <CardContent>{formatCentsToDollars(account.balance)}</CardContent>
              <CardFooter>
                {account.countTowardsAssign
                  ? "Can Assign ✅"
                  : "Can't Assign ❌"}
              </CardFooter>
            </Card>
          );
        })}
    </>
  );
}
