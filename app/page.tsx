import OptIn from "@/components/Contactus/OptIn";
import Discover from "@/components/Discover/Discover";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials/Testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative mx-auto flex h-full min-h-screen w-screen flex-col items-center justify-start pt-20">
      <Header />
      <Hero />
      <Discover />
      <Testimonials />
      <OptIn />
      <Footer />
    </div>
  );
}
