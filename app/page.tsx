"use client";
import Discover from "@/components/Discover/Discover";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative mx-auto flex h-full min-h-screen w-screen flex-col items-center justify-between pt-20">
      <Header />
      <Hero />
      <Discover />
    </div>
  );
}
