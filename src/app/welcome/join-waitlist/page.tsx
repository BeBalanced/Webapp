"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { joinWaitlistAndSendEmail } from "@/lib/supabase/helpers";
import { useRouter } from "next/navigation";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const joinWaitlistSchema = z.object({
  email: z.string().min(2).max(50),
});

export default function JoinWaitlist() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const router = useRouter();

  const form = useForm<z.infer<typeof joinWaitlistSchema>>({
    resolver: zodResolver(joinWaitlistSchema),
    defaultValues: {
      email: "",
    },
  });
  async function onSubmit(values: z.infer<typeof joinWaitlistSchema>) {
    setIsLoading(true);
    await joinWaitlistAndSendEmail(values.email);
    setIsLoading(false);
    router.push("/welcome");
  }
  return (
    <main className="min-h-screen flex flex-col items-center gap-8 bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100 py-32 px-4 sm:px-32 min-w-[350px]">
      <figure className="mt-10">
        <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
          <p>
            I started Balance so that anyone could get on top of their finances
            and not be limited by cost or hardware. Balance{" "}
            <span className="text-blue-600 font-bold">costs nothing</span> and{" "}
            <span className="text-blue-600 font-bold">runs on anything</span>.
          </p>
        </blockquote>
        <figcaption>
          <div className="mt-4 flex items-center justify-center space-x-3 text-base">
            <div className="font-semibold text-gray-900">Chase Rensberger</div>
            <svg
              viewBox="0 0 2 2"
              width={3}
              height={3}
              aria-hidden="true"
              className="fill-gray-900"
            >
              <circle cx={1} cy={1} r={1} />
            </svg>
            <div className="text-gray-600">Founder</div>
          </div>
        </figcaption>
      </figure>
      <Card className="w-full sm:w-[500px]">
        <CardHeader>
          <CardTitle>Join Waitlist</CardTitle>
        </CardHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <CardContent>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            className="focus:ring-black"
                            placeholder="name@domain.com"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full" type="submit" disabled={isLoading}>
                Join
              </Button>
            </CardFooter>
          </form>
        </Form>
      </Card>
    </main>
  );
}
