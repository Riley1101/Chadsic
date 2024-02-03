import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const STATIC_ENDPOINT =
  process.env.NEXT_PUBLIC_STATIC_ENDPOINT || "http://localhost:1337";
