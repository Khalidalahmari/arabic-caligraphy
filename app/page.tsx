"use client";
import OptIn from "@/components/Contactus/OptIn";
import Discover from "@/components/Discover/Discover";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials/Testimonials";
import Image from "next/image";
import { useEffect, useState } from "react";
import { contentType } from "@/utils/content";
export default function Home() {
  const [Content, SetContent] = useState<contentType | null>(null);
  useEffect(() => {
    const Fetch = async () => {
      const response = await fetch("/api/content", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      const sdata: contentType = await response.json();
      SetContent(sdata);
      console.log(sdata);
    };
    Fetch();
  }, []);
  return (
    <div className="relative mx-auto flex h-full min-h-screen w-screen flex-col items-center justify-start pt-20">
      <Header
        href={Content?.header.href ? Content?.header.href : "/#"}
        nav={Content?.header.nav}
        button={Content?.header.button}
        soon={Content?.header.soon}
      />
      <Hero
        button1={Content?.hero.button1}
        button2={Content?.hero.button1}
        description={Content?.hero.description}
        title={Content?.hero.title}
        title2={Content?.hero.title2}
      />
      <Discover
        goals={Content?.ourGoals.goals}
        title2={Content?.ourGoals.title2}
        title={Content?.ourGoals.title}
      />
      <Testimonials
        button={Content?.testimonial.button}
        description={Content?.testimonial.description}
        testimonials={Content?.testimonial.testimonials}
        title={Content?.testimonial.title}
      />
      <OptIn
        description={Content?.joinNow.description}
        title={Content?.joinNow.title}
        email={Content?.joinNow.email}
        location={Content?.joinNow.location}
        phone={Content?.joinNow.phone}
        coordinates={Content?.joinNow.coordinates}
      />
      <Footer />
    </div>
  );
}
