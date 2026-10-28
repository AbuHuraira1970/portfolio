import { Hero } from "@/components/home/hero";
import { About } from "@/components/home/about";
import { Work } from "@/components/home/work";
import { Receipt } from "@/components/home/receipt";
import { Process } from "@/components/home/process";
import { Experience } from "@/components/home/experience";
import { Review } from "@/components/home/review";
import { ContactCard } from "@/components/contact-card";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Work />
      <Receipt />
      <Process />
      <Experience />
      <Review />
      <section id="contact" className="py-[72px]">
        <div className="wrap">
          <ContactCard />
        </div>
      </section>
    </>
  );
}
