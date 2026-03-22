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
      {/* Radial glow at top */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[260px] bg-[radial-gradient(ellipse_at_top,rgba(168,85,247,0.13),transparent_70%)]" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-[1900px] px-4 py-20 sm:px-6 lg:px-8 xl:px-10">
        <p className="text-base uppercase tracking-[0.28em] text-zinc-500 sm:text-lg">
          {eyebrow}
        </p>

        {title && (
          <h3 className="mt-4 text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl lg:text-6xl xl:text-7xl">
            {title}
          </h3>
        )}

        {description && (
          <p className="mt-6 max-w-4xl text-lg leading-8 text-zinc-400 sm:text-xl lg:text-2xl lg:leading-10">
            {description}
          </p>
        )}

        {children}
      </div>
    </section>
  );
}