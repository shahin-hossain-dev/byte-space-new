import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Join Us",
  description:
    "Create your free ByteSpace account and get access to hundreds of courses.",
};

export default function SignupPage() {
  return (
    <section className="w-full max-w-md">
      <h1 className="text-3xl font-semibold tracking-tight">Join Us</h1>
    </section>
  );
}
