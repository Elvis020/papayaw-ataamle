/**
 * Shared statistics data
 * Source of truth for all site statistics
 */

export const stats = [
  { number: "5+", label: "Years" },
  { number: "500+", label: "Shows" },
  { number: "100K+", label: "Followers" },
  { number: "5+", label: "Partners" },
] as const;

export type Stat = (typeof stats)[number];
