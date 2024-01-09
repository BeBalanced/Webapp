import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Plan() {
  return (
    <div className="space-y-4">
      <Card>
        <CardHeader className="flex flex-row justify-between items-center">
          <CardTitle className="mt-2">🏠 Mortgage</CardTitle>
          <p className=" bg-orange-200 rounded-md p-1">$250.00</p>
        </CardHeader>
        <CardContent>
          <div className=" bg-gray-200 rounded-md h-2">
            <div className=" bg-orange-400 w-3/6 h-2 rounded-md"></div>
          </div>
        </CardContent>
        <CardFooter>
          <p className=" text-gray-400 ml-1">$250.00 more needed by the 12th</p>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader className="flex flex-row justify-between items-center">
          <CardTitle className="mt-2">🛒 Groceries</CardTitle>
          <p className=" bg-green-300 rounded-md p-1">$500.00</p>
        </CardHeader>
        <CardContent>
          <div className=" bg-gray-200 rounded-md h-2">
            <div className=" bg-green-400 w-6/6 h-2 rounded-md"></div>
          </div>
        </CardContent>
        <CardFooter>
          <p className=" text-gray-400 ml-1">Funded</p>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader className="flex flex-row justify-between items-center">
          <CardTitle className="mt-2">🚗 Car Insurance</CardTitle>
          <p className=" bg-gray-200 rounded-md p-1">$0.00</p>
        </CardHeader>
        <CardContent>
          <div className=" bg-gray-200 rounded-md h-2">
            <div className=" bg-green-200 w-6/6 h-2 rounded-md"></div>
          </div>
        </CardContent>
        <CardFooter>
          <p className=" text-gray-400 ml-1">Spent</p>
        </CardFooter>
      </Card>
    </div>
  );
}
