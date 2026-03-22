type SectionCardProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionCard({
  eyebrow,
  title,
  description,
}: SectionCardProps) {
  return (
    <section className="relative flex h-screen w-full items-center overflow-hidden bg-black text-white">
      
      {/* TOP RADIAL GRADIENT GLOW */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[300px] bg-[radial-gradient(ellipse_at_top,rgba(168,85,247,0.18),transparent_70%)]" />

      {/* TOP FADE (keeps clean transition) */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-10 h-32 bg-gradient-to-b from-black via-black/90 to-transparent" />

      {/* CONTENT */}
      <div className="relative z-20 mx-auto w-full max-w-[1900px] px-4 pt-28 sm:px-6 lg:px-8 xl:px-10">
        <div className="max-w-6xl">
          <p className="text-base uppercase tracking-[0.28em] text-zinc-500 sm:text-lg">
            {eyebrow}
          </p>

          <h3 className="mt-5 text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl lg:text-6xl xl:text-7xl 2xl:text-[5.25rem]">
            {title}
          </h3>

          <p className="mt-8 max-w-4xl text-lg leading-8 text-zinc-400 sm:text-xl lg:text-2xl lg:leading-10 xl:text-[1.7rem] xl:leading-[1.75]">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}