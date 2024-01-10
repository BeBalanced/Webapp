"use client";
import { addAccount } from "@/lib/supabase/database-helpers";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
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
import { useState } from "react";
import { toast } from "sonner";
import { CheckCircleIcon } from "@heroicons/react/24/outline";

const addAccountSchema = z.object({
  name: z.string().min(2).max(50),
  balance: z.string().min(0),
});

export default function AddAccountButton() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const form = useForm<z.infer<typeof addAccountSchema>>({
    resolver: zodResolver(addAccountSchema),
    defaultValues: {
      name: "",
      balance: "0.00",
    },
  });

  async function onSubmit(values: z.infer<typeof addAccountSchema>) {
    setIsLoading(true);
    await addAccount(values);
    setIsLoading(false);
    setIsOpen(false);
  }

  return (
    <Dialog open={isOpen}>
      <DialogTrigger asChild>
        <Button
          onClick={() => {
            console.log("opening");
            setIsOpen(true);
          }}
        >
          Add Account
        </Button>
      </DialogTrigger>
      <DialogContent className="rounded-md">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <DialogHeader className="py-2">
              <DialogTitle>Add Account</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="new account"
                        {...field}
                        className="focus:ring-black"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="balance"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Balance</FormLabel>
                    <FormControl>
                      <Input placeholder="0.00" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <DialogFooter className="pt-4">
              <Button type="submit" disabled={isLoading}>
                Submit
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
