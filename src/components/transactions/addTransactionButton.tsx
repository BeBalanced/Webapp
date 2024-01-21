"use client";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "../ui/input";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { getAccountNamesWithSearch } from "@/lib/supabase/client";

const addTransactionSchema = z.object({
  account_from: z.string(),
});

export default function AddTransactionButton() {
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [accounts, setAccounts] = useState<any>([]);
  const router = useRouter();

  useEffect(() => {
    getAccountNamesWithSearch("").then((incomingAccounts) => {
      setAccounts(incomingAccounts);
    });
  }, []);

  const form = useForm<z.infer<typeof addTransactionSchema>>({
    resolver: zodResolver(addTransactionSchema),
    defaultValues: {
      account_from: "",
    },
  });

  async function onSubmit(values: z.infer<typeof addTransactionSchema>) {
    setIsSubmitting(true);
    console.log(values);
    setIsSubmitting(false);
    setIsOpen(false);
    router.refresh();
  }
  return (
    <Dialog open={isOpen}>
      <DialogTrigger asChild>
        <Button
          onClick={() => {
            setIsOpen(true);
          }}
        >
          Add Transaction
        </Button>
      </DialogTrigger>
      <DialogContent className="rounded-md">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <DialogHeader className="py-2">
              <DialogTitle>Add Transaction</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="account_from"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input {...field} list="accounts" name="accounts" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <DialogFooter className="pt-4">
              <Button type="submit" disabled={isSubmitting} className="w-full">
                Add Transaction
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
