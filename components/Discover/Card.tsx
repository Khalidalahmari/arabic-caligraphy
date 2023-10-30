"use client";
import React, { useRef } from "react";
import Icon1 from "./icon1";
import { HiArrowRight } from "react-icons/hi";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Pattern from "../Patterns/Pattern";
import Pattern_white from "../Patterns/Pattern_white";

type Props = {
  title: string;
  description: string;
  image: string;
};

export default function Card({ title, description, image }: Props) {
  const ref = useRef<any>(null);
  const isInView = useInView(ref, { once: true });
  const child = {
    hidden: { y: 50, opacity: 0 },
    show: { y: isInView ? 0 : 50, opacity: isInView ? 1 : 0 },
    exit: {
      y: 50,
      opacity: 0,
    },
  };
  return (
    <motion.div
      variants={child}
      initial={"hidden"}
      animate={"show"}
      exit={"exit"}
      ref={ref}
      transition={{
        duration: 0.4,
        type: "spring",
        damping: 30,
        stiffness: 80,
      }}
      className="relative z-10 mx-1 flex aspect-[10/10] max-w-sm flex-col items-center justify-center gap-y-4 px-4 text-center text-almondFrost-50 md:gap-y-6"
    >
      <Image
        src={image}
        alt={""}
        fill
        className="absolute left-0 top-0 -z-10 h-full w-full object-cover opacity-100 blur-[2px]"
      />
      <div className="absolute left-0 top-0 -z-10 h-full w-full bg-peacoat-800/60"></div>
      <Pattern_white className="h-32 w-32 !fill-white" />
      <h4 className="text-center font-bold md:text-lg">{title}</h4>
      <div className="text-sm font-normal">{description}</div>
      <Link
        href={"/#سجل الآن"}
        className="flex w-28 cursor-pointer select-none items-center justify-center gap-x-2 rounded-full bg-almondFrost-800 px-3 py-2 text-sm font-medium transition-all duration-200 hover:bg-almondFrost-600 active:scale-90"
      >
        سجل الآن
        <HiArrowRight className="text-sm text-peacoat-50" />
      </Link>
    </motion.div>
  );
}
