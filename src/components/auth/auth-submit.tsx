import { Button } from "@/components/ui/button";

interface AuthSubmitProps {
  pending: boolean;
  label: string;
  pendingLabel: string;
}

/** Right-aligned lime pill submit button used by both auth forms (spacing comes from the form's gap). */
export function AuthSubmit({ pending, label, pendingLabel }: AuthSubmitProps) {
  return (
    <div className="flex justify-end">
      <Button
        type="submit"
        variant="highlight"
        size="pill"
        disabled={pending}
        className="w-full text-lg sm:w-auto md:h-11.5"
      >
        {pending ? pendingLabel : label}
      </Button>
    </div>
  );
}
