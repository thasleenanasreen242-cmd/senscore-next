import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ReactNode } from "react";

export default function GlowButton({
  href,
  children,
  variant = "primary",
  icon = true,
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  icon?: boolean;
}) {
  if (variant === "primary") {
    return (
      <Link
        href={href}
        className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-teal px-6 py-3 font-medium text-void transition-transform duration-300 hover:scale-[1.03] active:scale-[0.98]"
      >
        <span className="relative z-10">{children}</span>
        {icon && (
          <ArrowUpRight
            size={16}
            strokeWidth={2.5}
            className="relative z-10 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        )}
        <span className="absolute inset-0 -z-0 bg-gradient-to-r from-teal via-white to-teal bg-[length:200%_100%] opacity-0 transition-opacity duration-300 group-hover:opacity-30" />
      </Link>
    );
  }

  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 font-medium text-ink transition-colors duration-300 hover:border-teal/50 hover:text-teal"
    >
      {children}
      {icon && (
        <ArrowUpRight
          size={16}
          strokeWidth={2.5}
          className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        />
      )}
    </Link>
  );
}
