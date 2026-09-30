import type { Metadata } from "next";
import { AUTH_SHOWCASE, LOGIN_COPY } from "@/constants";
import { AuthCard } from "@/components/auth/auth-card";
import { AuthShell } from "@/components/auth/auth-shell";
import { LoginForm } from "@/components/auth/login-form";

export const metadata: Metadata = {
  title: "Sign In",
  description: "Sign in to your ByteSpace account to continue learning.",
};

export default function LoginPage() {
  return (
    <AuthShell showcase={AUTH_SHOWCASE.login}>
      <AuthCard eyebrow={LOGIN_COPY.eyebrow} title={LOGIN_COPY.title} footer={LOGIN_COPY.footer}>
        <LoginForm />
      </AuthCard>
    </AuthShell>
  );
}
