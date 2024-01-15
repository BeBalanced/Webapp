import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { formatCentsToDollars } from "@/lib/money/helpers";
import { retrieveAccounts } from "@/lib/supabase/server";
import { Account } from "@/lib/supabase/schemas";

export default async function Accounts() {
  const accounts: Account[] | undefined = await retrieveAccounts();

  return (
    <main className="space-y-4">
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
    </main>
  );
}
