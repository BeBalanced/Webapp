"use client";
import { addAccount } from "@/lib/supabase/client";
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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";
import { useRouter } from "next/navigation";
// import LinkedModalTabContent from "./linkedModalTabContent";

const addAccountSchema = z.object({
  name: z.string().min(2).max(50),
  balance: z.string().min(0),
  countTowardsAssign: z.boolean().default(false),
});

export default function AddAccountButton() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const router = useRouter();

  const form = useForm<z.infer<typeof addAccountSchema>>({
    resolver: zodResolver(addAccountSchema),
    defaultValues: {
      name: "",
      balance: "",
      countTowardsAssign: false,
    },
  });

  async function onSubmit(values: z.infer<typeof addAccountSchema>) {
    setIsLoading(true);
    await addAccount(values);
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
          Add Account
        </Button>
      </DialogTrigger>
      <DialogContent className="rounded-md">
        <Tabs className="tabs-class">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="unlinked">Unlinked</TabsTrigger>
            <TabsTrigger value="linked">Linked</TabsTrigger>
          </TabsList>
          <TabsContent value="unlinked">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)}>
                <DialogHeader className="py-2">
                  <DialogTitle>Add Unlinked Account</DialogTitle>
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
                            placeholder="account name"
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

                  <FormField
                    control={form.control}
                    name="countTowardsAssign"
                    render={({ field }) => (
                      <FormItem className="py-2">
                        <span className="flex gap-2 items-center">
                          <FormControl>
                            <Checkbox
                              checked={field.value}
                              onCheckedChange={field.onChange}
                            />
                          </FormControl>
                          <FormLabel>Count Toward Assign?</FormLabel>
                        </span>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <DialogFooter className="pt-4">
                  <Button type="submit" disabled={isLoading} className="w-full">
                    Add Unlinked Account
                  </Button>
                </DialogFooter>
              </form>
            </Form>
          </TabsContent>
          <TabsContent value="linked" className="flex flex-col justify-between">
            {/* <LinkedModalTabContent
              closeModal={() => {
                setIsOpen(false);
              }}
            /> */}
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}
