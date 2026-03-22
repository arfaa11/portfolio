import { Header } from "@/components/layout/header";
import { AnimatedPortfolioPage } from "@/components/portfolio/animated-portfolio";

export default function Home() {
  return (
    <main id="top" className="min-h-screen bg-black text-white">
      <Header />
      <AnimatedPortfolioPage />
    </main>
  );
}