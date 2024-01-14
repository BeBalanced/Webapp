"use client";
import { Button } from "../ui/button";
import { generateToken } from "@/lib/plaid/client-helpers";
export default function AddPlanButton() {
  return (
    <Button
      onClick={async () => {
        const data = await generateToken("123");
        console.log(data);
      }}
    >
      Add Plan
    </Button>
  );
}
