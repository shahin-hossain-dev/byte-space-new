import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default function DashboardPage() {
  return (
    <section className="flex flex-1 items-center justify-center">
      <h1 className="text-3xl font-semibold tracking-tight">Dashboard</h1>
    </section>
  );
}
