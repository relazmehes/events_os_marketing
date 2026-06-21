import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import type { VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

interface ButtonLinkProps extends VariantProps<typeof buttonVariants> {
  href: string;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
}

export function ButtonLink({
  href,
  children,
  className,
  variant = "default",
  size = "default",
  external = false,
}: ButtonLinkProps) {
  const cls = cn(buttonVariants({ variant, size }), "cursor-pointer", className);

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}
