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
      className={`relative w-full overflow-hidden bg-black text-white ${className}`}
    >
      {/* Radial glow */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[280px] bg-[radial-gradient(ellipse_at_top,rgba(168,85,247,0.11),transparent_70%)]" />

      <div className="relative z-10 mx-auto w-full max-w-[1900px] px-4 pb-24 pt-20 sm:px-6 sm:pb-28 sm:pt-24 lg:px-8 xl:px-10">

        {/* Eyebrow */}
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-zinc-500 sm:text-sm">
          {eyebrow}
        </p>

        {/* Title — generous letter-spacing & bottom margin */}
        {title && (
          <h3 className="mt-5 text-3xl font-semibold leading-tight tracking-[-0.03em] text-white sm:text-4xl lg:text-5xl xl:text-6xl">
            {title}
          </h3>
        )}

        {description && (
          <p className="mt-6 max-w-3xl text-base leading-7 text-zinc-400 sm:text-lg sm:leading-8 lg:text-xl lg:leading-9">
            {description}
          </p>
        )}

        {/* Extra gap before children so content breathes */}
        {children && (
          <div className="mt-12 sm:mt-14">
            {children}
          </div>
        )}
      </div>
    </section>
  );
}