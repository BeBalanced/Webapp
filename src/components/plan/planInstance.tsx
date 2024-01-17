import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export default function PlanInstance() {
  return (
    <Card>
      <CardHeader className="flex flex-row justify-between items-center">
        <CardTitle className="mt-2">🚗 Car Insurance</CardTitle>
        <p className=" bg-gray-200 rounded-md p-1">$0.00</p>
      </CardHeader>
      <CardContent>
        <div className=" bg-gray-200 rounded-md h-2">
          <Progress className="" value={40} />
        </div>
      </CardContent>
      <CardFooter>
        <p className=" text-gray-400 ml-1">Spent</p>
      </CardFooter>
    </Card>
  );
}
