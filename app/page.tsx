// components

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Cars from "@/components/Cars";
import About from "@/components/About";
import Why from "@/components/Why";
import Testimonial from "@/components/Testimonial";
import Cta from "@/components/Cta";
import Footer from "@/components/Footer";
import BacktoTopBtn from "@/components/BackToTopBtn";



export default function Home() {
  return (
    <main className="bg-white">
      <Header />
      <Hero />
      <Cars />
      <About />
      <Why />
      <Testimonial />
      <Cta />
      <Footer />
      <BacktoTopBtn />

      <div className="h-[4000px]"></div>
    </main>
  );
}
