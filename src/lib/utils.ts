import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function HttpRequest(
  url: string,
  method: string,
  data: Object | null = null
) {
  const requestOptions: RequestInit = {
    method,
    headers: {
      "Content-Type": "application/json",
    },
  };

  if (method !== "GET" && data !== null) {
    requestOptions.body = JSON.stringify(data);
  }

  const res = await fetch(url, requestOptions);
  if (!res.ok) {
    throw new Error(`HTTP request failed with status ${res.status}`);
  }
  return res.json();
}
