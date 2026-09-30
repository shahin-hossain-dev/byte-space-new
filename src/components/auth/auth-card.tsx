import Link from "next/link";
import { cn } from "@/lib/utils";

interface AuthCardProps {
  eyebrow: string;
  title: string;
  footer: { prompt: string; link: string; href: string };
  children: React.ReactNode;
  className?: string;
}

/** White form card on the auth pages: eyebrow, h1, form, and a switch-page link at the bottom. */
export function AuthCard({ eyebrow, title, footer, children, className }: AuthCardProps) {
  return (
    <section
      aria-labelledby="auth-title"
      className={cn(
        "flex flex-col rounded-2xl bg-card px-5 py-8 text-card-foreground sm:px-10 sm:py-12 lg:min-h-196 lg:rounded-3xl lg:px-16 lg:pt-16 lg:pb-12",
        className,
      )}
    >
      <p className="text-base text-primary md:text-lg">{eyebrow}</p>
      <h1
        id="auth-title"
        className="mt-1 max-w-[9em] text-4xl leading-[1.15] font-semibold tracking-tight md:text-5xl"
      >
        {title}
      </h1>

      <div className="mt-8 lg:mt-7">{children}</div>

      <p className="mt-10 pt-2 text-center text-base text-muted-foreground lg:mt-auto">
        {footer.prompt}{" "}
        <Link href={footer.href} className="rounded-sm text-primary hover:underline">
          {footer.link}
        </Link>
      </p>
    </section>
  );
}
