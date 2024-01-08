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
        <CardHeader className="flex flex-row justify-between items-center">
          <CardTitle className="mt-2">🏠 Mortgage</CardTitle>
          <p className=" bg-orange-200 rounded-md p-1">$500.00</p>
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
          <CardTitle className="mt-2">🏠 Mortgage</CardTitle>
          <p className=" bg-orange-200 rounded-md p-1">$500.00</p>
        </CardHeader>
        <CardContent>
          <div className=" bg-gray-200 rounded-md h-2">
            <div className=" bg-green-500 w-3/6 h-2 rounded-md"></div>
          </div>
        </CardContent>
        <CardFooter>
          <p className=" text-gray-400 ml-1">$250.00 more needed by the 12th</p>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader className="flex flex-row justify-between items-center">
          <CardTitle className="mt-2">🏠 Mortgage</CardTitle>
          <p className=" bg-orange-200 rounded-md p-1">$500.00</p>
        </CardHeader>
        <CardContent>
          <div className=" bg-gray-200 rounded-md h-2">
            <div className=" bg-green-200 w-3/6 h-2 rounded-md"></div>
          </div>
        </CardContent>
        <CardFooter>
          <p className=" text-gray-400 ml-1">$250.00 more needed by the 12th</p>
        </CardFooter>
      </Card>
    </div>
  );
}
