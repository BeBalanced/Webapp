"use server";
import { redirect } from "next/navigation";
export const navigate = (path: string) => {
  redirect(path);
};
