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
      className={`relative flex min-h-screen w-full flex-col overflow-hidden bg-black text-white ${className}`}
    >
      {/* TOP RADIAL GRADIENT GLOW */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[300px] bg-[radial-gradient(ellipse_at_top,rgba(168,85,247,0.18),transparent_70%)]" />

      {/* TOP FADE */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-32 bg-gradient-to-b from-black via-black/90 to-transparent" />

      {/* CONTENT */}
      <div className="relative z-20 mx-auto w-full max-w-[1900px] px-4 pt-28 pb-20 sm:px-6 lg:px-8 xl:px-10">
        <p className="text-base uppercase tracking-[0.28em] text-zinc-500 sm:text-lg">
          {eyebrow}
        </p>

        {title && (
          <h3 className="mt-5 text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl lg:text-6xl xl:text-7xl 2xl:text-[5.25rem]">
            {title}
          </h3>
        )}

        {description && (
          <p className="mt-8 max-w-4xl text-lg leading-8 text-zinc-400 sm:text-xl lg:text-2xl lg:leading-10 xl:text-[1.7rem] xl:leading-[1.75]">
            {description}
          </p>
        )}

        {children}
      </div>
    </section>
  );
}