import { useState, useEffect } from "react";
import { DateTime } from "luxon";

export function useMonth() {
  const [currentMonth, setCurrentMonth] = useState(DateTime.local());

  const incrementMonth = () => {
    setCurrentMonth((prevMonth) => prevMonth.plus({ months: 1 }));
  };

  const decrementMonth = () => {
    setCurrentMonth((prevMonth) => prevMonth.minus({ months: 1 }));
  };

  useEffect(() => {
    setCurrentMonth(DateTime.local());
  }, []);

  return {
    currentMonth,
    incrementMonth,
    decrementMonth,
  };
}
