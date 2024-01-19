import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Tailwind CSS classnames generator
 * @param input - Classnames
 * @returns Tailwind CSS classnames
 */

export function cn(...input: ClassValue[]): string {
  return twMerge(clsx(input))
}
