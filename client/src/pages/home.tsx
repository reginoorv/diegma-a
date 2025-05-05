import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { Stats } from "@/components/sections/stats";
import { About } from "@/components/sections/about";
import { Clients } from "@/components/sections/clients";
import { Projects } from "@/components/sections/projects";
import { Services } from "@/components/sections/services";
import { ContactForm } from "@/components/sections/contact-form";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <Clients />
        <Projects />
        <Services />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
