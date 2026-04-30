import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Procedures } from "@/components/site/Procedures";
import { Timeline } from "@/components/site/Timeline";
import { Testimonials } from "@/components/site/Testimonials";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Timeline />
      <Procedures />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
