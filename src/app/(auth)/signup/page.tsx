import type { Metadata } from "next";
import { AUTH_SHOWCASE, SIGNUP_COPY } from "@/constants";
import { AuthCard } from "@/components/auth/auth-card";
import { AuthShell } from "@/components/auth/auth-shell";
import { SignupForm } from "@/components/auth/signup-form";

export const metadata: Metadata = {
  title: "Join Us",
  description:
    "Create your free ByteSpace account and get access to hundreds of courses.",
};

export default function SignupPage() {
  return (
    <AuthShell showcase={AUTH_SHOWCASE.signup}>
      <AuthCard eyebrow={SIGNUP_COPY.eyebrow} title={SIGNUP_COPY.title} footer={SIGNUP_COPY.footer}>
        <SignupForm />
      </AuthCard>
    </AuthShell>
  );
}
