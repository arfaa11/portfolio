import { Header } from "@/components/layout/header";
import { AnimatedPortfolioPage } from "@/components/portfolio/animated-portfolio";

export default function Home() {
  return (
    <main
      id="main"
      className="min-h-dvh bg-white text-slate-900 dark:bg-black dark:text-white"
    >
      <Header />
      <AnimatedPortfolioPage />
    </main>
  );
}
