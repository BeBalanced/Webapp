"use client";
import { createContext, useState } from "react";

export interface TopButton {
  name: string;
  fn: () => any;
}

const defaultButton: TopButton = {
  name: "default",
  fn: () => {},
};

export const TopButtonContext = createContext<any>(undefined);

const TopButtonProvider = ({ children }: { children: React.ReactNode }) => {
  const [topButtons, setTopButtons] = useState<TopButton[] | undefined>([
    defaultButton,
  ]);
  return (
    <TopButtonContext.Provider value={[topButtons, setTopButtons]}>
      {children}
    </TopButtonContext.Provider>
  );
};

export default TopButtonProvider;
