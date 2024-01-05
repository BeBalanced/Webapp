"use client";
import { useContext, useEffect } from "react";
import { TopButtonContext } from "@/lib/topButtonContext";
import { TopButton } from "@/lib/topButtonContext";
export default function Accounts() {
  const [topButtons, setTopButtons] = useContext(TopButtonContext);
  const addAccountButton: TopButton = {
    name: "Add Account",
    fn: () => {
      console.log("add account");
    },
  };

  useEffect(() => {
    setTopButtons([addAccountButton]);
  }, []);

  return (
    <>
      <h1>Welcome to Accounts</h1>
    </>
  );
}
