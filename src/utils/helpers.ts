import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines css class names using clsx and tailwind-merge. Used when
 * making custom components that have default values that can be overridden,
 * or when conditionally adding css/tailwind classes.
 * @param inputs css class names to merge
 * @returns the merged class string
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const images = import.meta.glob<{ default: string }>(
  "../assets/**/*.{png,jpg,jpeg,gif}",
  {
    eager: true,
  }
);

export function getAssetUrl(relativePath: string): string {
  const key = `../assets/${relativePath}`;

  if (!images[key]) {
    console.warn(`Asset not found: ${key}`);
    return "";
  }

  return images[key].default;
}
