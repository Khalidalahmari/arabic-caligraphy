"use client";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-screen pt-20 h-full flex relative min-h-screen mx-auto max-w-[2250px] flex-col items-center justify-between">
      <Header />
      <Hero />
    </div>
  );
}
