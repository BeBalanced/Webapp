"use client";
import { TriangleRightIcon, TriangleLeftIcon } from "@radix-ui/react-icons";
import { useMonth } from "@/lib/time/hooks";
export default function ChangeMonth() {
  const { currentMonth, incrementMonth, decrementMonth } = useMonth();
  return (
    <span className="flex justify-evenly w-40 items-center">
      <button onClick={decrementMonth}>
        <TriangleLeftIcon width={25} height={25} />
      </button>
      <span className="leading-none font-bold">
        {currentMonth.toFormat("MMM yyyy").toUpperCase()}
      </span>
      <button onClick={incrementMonth}>
        <TriangleRightIcon width={25} height={25} />
      </button>
    </span>
  );
}
