"use client";
import { createContext, useState } from "react";

interface TopButton {
  name: string;
  fn: () => any;
}

export const TopButtonContext = createContext<any>(undefined);

const TopButtonProvider = ({ children }: { children: React.ReactNode }) => {
  const [topButtonState, setTopButtonState] = useState<TopButton | undefined>(
    undefined
  );
  return (
    <TopButtonContext.Provider value={[topButtonState, setTopButtonState]}>
      {children}
    </TopButtonContext.Provider>
  );
};

export default TopButtonProvider;
