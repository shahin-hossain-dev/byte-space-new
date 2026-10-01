import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign In",
  description: "Sign in to your ByteSpace account to continue learning.",
};

export default function LoginPage() {
  return (
    <section className="w-full max-w-md">
      <h1 className="text-3xl font-semibold tracking-tight">Sign In</h1>
    </section>
  );
}
