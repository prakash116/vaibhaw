import { Navbar } from "@/components/Navbar";
import { Preloader } from "@/components/Preloader";
import { BackToTop } from "@/components/BackToTop";
import { WhatsAppButton } from "@/components/WhatsAppButton";

import { Hero } from "@/components/sections/Hero";
import { TrustedBy } from "@/components/sections/TrustedBy";
import { Services } from "@/components/sections/Services";
import { Products } from "@/components/sections/Products";
import { Industries } from "@/components/sections/Industries";
import { Portfolio } from "@/components/sections/Portfolio";
import { Process } from "@/components/sections/Process";
import { TechStack } from "@/components/sections/TechStack";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import { Testimonials } from "@/components/sections/Testimonials";
import { Blog } from "@/components/sections/Blog";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Preloader />
      <Navbar />
      <main id="main">
        <Hero />
        <TrustedBy />
        <Services />
        <Products />
        <Industries />
        <Portfolio />
        <Process />
        <TechStack />
        <WhyChooseUs />
        <Testimonials />
        <Blog />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
      <WhatsAppButton />
    </>
  );
}
