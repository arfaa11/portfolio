import Link from "next/link";
import { ReactNode } from "react";
import clsx from "clsx";

type ButtonProps = {
  href?: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

export function Button({
  href,
  children,
  variant = "primary",
  className,
}: ButtonProps) {
  const styles = clsx(
    "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-400 focus-visible:ring-offset-2 focus-visible:ring-offset-black active:scale-[0.98]",
    {
      "bg-purple-500 text-white hover:bg-purple-400 hover:-translate-y-0.5":
        variant === "primary",
      "border border-zinc-700 bg-transparent text-white hover:border-zinc-500 hover:bg-zinc-900 hover:-translate-y-0.5":
        variant === "secondary",
      "text-zinc-300 hover:text-white hover:bg-zinc-900":
        variant === "ghost",
    },
    className
  );

  if (href) {
    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    );
  }

  return <button className={styles}>{children}</button>;
}