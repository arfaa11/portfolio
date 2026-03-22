import Image from "next/image";

const navItems = [
  { name: "Projects", href: "#projects" },
  { name: "Skill Stack", href: "#skills" },
  { name: "About Me", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export function Header() {
  return (
    <header className="fixed top-0 z-50 w-full bg-black/80 backdrop-blur-xl">
      {/* Scaled up container: increased padding and max-width */}
      <div className="mx-auto flex w-full max-w-[1800px] items-center justify-between px-6 py-5 sm:px-10 lg:px-12">
        
        <a href="#top" className="flex items-center transition-transform duration-300 hover:scale-105">
          {/* Bigger Profile Image: scaled from h-12 to h-16 */}
          <div className="relative h-14 w-14 overflow-hidden rounded-full border border-zinc-700 sm:h-16 sm:w-16">
            <Image
              src="/profile.png"
              alt="Arfaa Mumtaz"
              fill
              className="object-cover"
              priority
            />
          </div>
        </a>

        {/* Scaled Nav: increased gap and font size */}
        <nav className="flex items-center gap-8 sm:gap-10 lg:gap-14">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="group relative text-base font-medium tracking-[0.1em] text-zinc-400 transition-colors duration-200 hover:text-white lg:text-lg"
            >
              {item.name}
              {/* Animated underline - matching your purple accent */}
              <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-purple-500 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>
      </div>

      {/* The Divider: Radial gradient border-bottom effect */}
      <div className="absolute bottom-0 left-0 h-[1px] w-full bg-gradient-to-r from-transparent via-zinc-500/50 to-transparent shadow-[0_1px_10px_rgba(168,85,247,0.1)]" />
    </header>
  );
}