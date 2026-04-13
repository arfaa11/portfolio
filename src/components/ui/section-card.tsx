import { ReactNode } from "react";

type SectionCardProps = {
  eyebrow: string;
  title?: string;
  description?: string;
  children?: ReactNode;
  className?: string;
};

export function SectionCard({
  eyebrow,
  title,
  description,
  children,
  className = "",
}: SectionCardProps) {
  return (
    <section
      className={`relative w-full overflow-hidden bg-white text-slate-900 dark:bg-black dark:text-white ${className}`}
    >
      {/* Radial glow — subtle purple tint at top */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[280px] bg-[radial-gradient(ellipse_at_top,rgba(147,51,234,0.05),transparent_70%)] dark:bg-[radial-gradient(ellipse_at_top,rgba(168,85,247,0.10),transparent_70%)]" />

      <div className="relative z-10 mx-auto w-full max-w-[1900px] px-4 pb-24 pt-20 sm:px-6 sm:pb-28 sm:pt-24 lg:px-8 xl:px-10">

        {/* Eyebrow */}
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400 dark:text-zinc-500 sm:text-sm">
          {eyebrow}
        </p>

        {/* Title */}
        {title && (
          <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-[-0.03em] text-slate-900 dark:text-white sm:text-4xl lg:text-5xl xl:text-6xl">
            {title}
          </h2>
        )}

        {description && (
          <p className="mt-6 max-w-3xl text-base leading-7 text-slate-500 dark:text-zinc-400 sm:text-lg sm:leading-8 lg:text-xl lg:leading-9">
            {description}
          </p>
        )}

        {children && (
          <div className="mt-12 sm:mt-14">
            {children}
          </div>
        )}
      </div>
    </section>
  );
}
