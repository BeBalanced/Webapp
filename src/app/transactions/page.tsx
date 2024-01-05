"use client";
import { useContext, useEffect } from "react";
import { TopButton, TopButtonContext } from "@/lib/topButtonContext";
export default function Transactions() {
  const [topButtons, setTopButtons] = useContext(TopButtonContext);
  const addAccountButton: TopButton = {
    name: "Add Transaction",
    fn: () => {
      console.log("add transaction");
    },
  };

  useEffect(() => {
    setTopButtons([addAccountButton]);
  }, []);
  return (
    <>
      <h1>Welcome to Transactions</h1>
    </>
  );
}
