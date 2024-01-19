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
import { useState } from "react";
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
import { formatCentsToDollars } from "@/lib/money/helpers";

const addPlanSchema = z.object({
  name: z
    .string()
    .min(2, { message: "name must be at least 2 characters" })
    .max(50),
  amount: z.string(),
});

export default function AddPlanButton() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const router = useRouter();

  const form = useForm<z.infer<typeof addPlanSchema>>({
    resolver: zodResolver(addPlanSchema),
    defaultValues: {
      name: "",
      amount: "0",
    },
  });

  async function onSubmit(values: z.infer<typeof addPlanSchema>) {
    setIsLoading(true);
    setTimeout(() => {
      console.log("hey");
    }, 100);
    setIsLoading(false);
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
          Add Plan
        </Button>
      </DialogTrigger>
      <DialogContent className="rounded-md">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <DialogHeader className="py-2">
              <DialogTitle>Add Plan</DialogTitle>
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
                        placeholder="plan name"
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
                name="amount"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Amount</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <DialogFooter className="pt-4">
              <Button type="submit" disabled={isLoading} className="w-full">
                Add Plan
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
