"use client";
import { addAccount } from "@/lib/supabase/helpers";
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
import { useState, useEffect } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import LinkedModalTabContent from "./linkedModalTabContent";

const addAccountSchema = z.object({
  name: z.string().min(2).max(50),
  balance: z.string().min(0),
});

export default function AddAccountButton() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      // Check if the click is outside the dialog content
      if (
        isOpen &&
        event.target instanceof Element &&
        !event.target.closest(".tabs-class")
      ) {
        setIsOpen(false);
      }
    };

    // Add event listener to handle outside click
    document.addEventListener("click", handleOutsideClick);

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isOpen]);

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
      <DialogContent className="rounded-md h-80">
        <Tabs className="tabs-class">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="unlinked">Unlinked</TabsTrigger>
            <TabsTrigger value="linked">Linked</TabsTrigger>
          </TabsList>
          <TabsContent value="unlinked">
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
                </div>
                <DialogFooter className="pt-4">
                  <Button type="submit" disabled={isLoading} className="w-full">
                    Add Unlinked Account
                  </Button>
                </DialogFooter>
              </form>
            </Form>
          </TabsContent>
          <TabsContent
            value="linked"
            className="flex flex-col justify-between h-60"
          >
            Unfinished
            {/* <LinkedModalTabContent /> */}
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  );
}
