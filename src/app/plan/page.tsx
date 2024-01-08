import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Plan() {
  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card Content</p>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
      <div className="bg-gray-50 border border-black w-full rounded-lg p-2 flex flex-col gap-2">
        <div className="flex flex-row justify-between items-center">
          <p>🏠 Mortgage</p>
          <p className=" bg-orange-200 rounded-md p-1">$500.00</p>
        </div>{" "}
        <div className=" bg-gray-200 rounded-md h-2">
          <div className=" bg-orange-400 w-3/6 h-2 rounded-md"></div>
        </div>
        <p className=" text-gray-400 ml-1">$250.00 more needed by the 12th</p>
      </div>

      <div className="bg-gray-100 w-full rounded-lg p-2 flex flex-col gap-2">
        <div className="flex flex-row justify-between items-center">
          <p>🛒 Groceries</p>
          <p className=" bg-orange-200 rounded-md p-1">$500.00</p>
        </div>{" "}
        <div className=" bg-gray-200 rounded-md h-2">
          <div className=" bg-green-500 w-3/6 h-2 rounded-md"></div>
        </div>
        <p className=" text-gray-400 ml-1">Funded</p>
      </div>

      <div className="bg-gray-100 w-full rounded-lg p-2 flex flex-col gap-2">
        <div className="flex flex-row justify-between items-center">
          <p>🚗 Car Insurance</p>
          <p className=" bg-orange-200 rounded-md p-1">$500.00</p>
        </div>{" "}
        <div className=" bg-gray-200 rounded-md h-2">
          <div className=" bg-green-200 w-3/6 h-2 rounded-md"></div>
        </div>
        <p className=" text-gray-400 ml-1">Spent</p>
      </div>
    </div>
  );
}
