import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function JoinWaitlist() {
  return (
    <main className="min-h-screen flex flex-col items-center gap-8 bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100 p-32">
      <figure className="mt-10">
        <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
          <p>
            I started Balance so that anyone could get on top of their finances
            and not be limited by cost or hardware. Balance costs nothing and
            runs on anything.
          </p>
        </blockquote>
        <figcaption className="mt-10">
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
      <Card className="container">
        <CardHeader>
          <CardTitle>Join Waitlist</CardTitle>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Email</Label>
                <Input id="name" placeholder="name@domain.com" />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Join</Button>
        </CardFooter>
      </Card>
    </main>
  );
}
