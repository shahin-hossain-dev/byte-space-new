import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface AuthFieldProps extends React.ComponentProps<"input"> {
  name: string;
  label: string;
  error?: string;
}

/** Labelled input with an inline error, styled for the auth card. */
export function AuthField({ name, label, error, className, ...props }: AuthFieldProps) {
  const id = `auth-${name}`;
  const errorId = `${id}-error`;

  return (
    <div className={className}>
      <label htmlFor={id} className="text-sm">
        {label}
      </label>
      <Input
        id={id}
        name={name}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId : undefined}
        className="mt-2 h-12 rounded-xl px-5 text-base placeholder:text-muted-foreground md:h-13 md:px-6 md:text-lg"
        {...props}
      />
      {error && (
        <p id={errorId} className={cn("mt-1.5 text-sm text-destructive")}>
          {error}
        </p>
      )}
    </div>
  );
}
