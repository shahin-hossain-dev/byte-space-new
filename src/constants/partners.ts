import type { Partner } from "@/types";

export const PARTNERS_SECTION = {
  title: "Trusted by leading companies",
} as const;

export const PARTNERS: Partner[] = [
  { id: "partner-waves", name: "Logoipsum", mark: "waves" },
  { id: "partner-sunburst", name: "Logoipsum", mark: "sunburst" },
  { id: "partner-bolt", name: "Logoipsum", mark: "bolt" },
  { id: "partner-clover", name: "Logoipsum", mark: "clover" },
  { id: "partner-rings", name: "Logoipsum", mark: "rings" },
];
