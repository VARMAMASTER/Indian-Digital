import { AboutSection } from "@/components/sections/home/about-section";
import { FullVersionSection } from "@/components/sections/home/full-version-section";
import { HeroSection } from "@/components/sections/home/hero-section";
import { PortfolioSection } from "@/components/sections/home/portfolio-section";
import { Services } from "@/components/sections/home/services";
import { Services2 } from "@/components/sections/home/services-2";
import { Stats } from "@/components/sections/home/stats";
import { Testimonials } from "@/components/testimonials";
import { Footer } from "@/components/footer";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection />
      {/* <Services /> */}
      <Services2 />
      <PortfolioSection />
      <Stats />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
