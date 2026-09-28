import type { Metadata } from "next";

// Private area: keep every dashboard route out of search results.
export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function DashboardLayout({ children }: LayoutProps<"/">) {
  return <main className="flex flex-1 flex-col">{children}</main>;
}
