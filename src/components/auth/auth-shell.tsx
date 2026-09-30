import { Container } from "@/components/layout/container";
import { Logo } from "@/components/layout/logo";
import { AuthCollage } from "./auth-collage";

interface AuthShellProps {
  /** Left-hand showcase copy. */
  showcase: { title: string; description: string };
  /** The form card. */
  children: React.ReactNode;
}

/** Blue grid page shared by sign-in and sign-up: showcase on the left, form card on the right. */
export function AuthShell({ showcase, children }: AuthShellProps) {
  return (
    <div className="flex-1 bg-primary bg-grid text-primary-foreground [background-position-y:-2px]">
      <Container className="grid min-h-dvh content-start gap-8 py-6 lg:content-normal md:py-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,579px)] lg:py-0">
        <div className="lg:pt-8.75 lg:pb-10">
          <Logo markOnly />
          <div className="mt-6 lg:mt-11.5 lg:min-h-48">
            <p className="font-heading text-xl font-semibold md:text-[22px]">{showcase.title}</p>
            <p className="mt-3 max-w-118 text-base leading-[1.6] text-primary-foreground/90 md:text-lg">
              {showcase.description}
            </p>
          </div>
          {/* Fixed-size artwork: scaled to fit the narrower column on small desktops. */}
          <AuthCollage className="hidden origin-top-left lg:block lg:scale-[0.72] xl:scale-100" />
        </div>

        <div className="lg:self-center lg:py-10">{children}</div>
      </Container>
    </div>
  );
}
