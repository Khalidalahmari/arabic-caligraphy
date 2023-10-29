"use client";
import React from "react";
import Card from "./Card";
import { motion } from "framer-motion";
import Image from "next/image";
import background from "@/public/Images/6.png";
import Cover1 from "@/public/Images/5.png";
import Cover2 from "@/public/Images/3.png";
import Cover3 from "@/public/Images/2.png";

type Props = {};
const parent = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.21,
    },
  },
  exit: {
    opacity: 1,
    transition: {
      staggerChildren: 0.21,
    },
  },
};
const child = {
  hidden: { y: -25, opacity: 0 },
  show: { y: 0, opacity: 1 },
  exit: {
    y: -25,
    opacity: 0,
  },
};
export default function Discover({}: Props) {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center gap-y-16 bg-white py-12 text-peacoat-800 md:py-24">
      <motion.h1
        variants={parent}
        initial={"hidden"}
        whileInView={"show"}
        exit={"exit"}
        transition={{
          duration: 0.4,
          type: "spring",
          damping: 30,
          stiffness: 80,
        }}
        className="discover-titleSize font-Ruwudu-Bold z-10 flex flex-col items-center justify-center font-medium leading-tight"
      >
        <motion.p
          transition={{
            duration: 0.4,
            type: "spring",
            damping: 30,
            stiffness: 80,
          }}
          variants={child}
        >
          اكتشف فن الخط العربي
        </motion.p>
        <motion.p
          transition={{
            duration: 0.4,
            type: "spring",
            damping: 30,
            stiffness: 80,
          }}
          variants={child}
        >
          في دورتنا الشاملة
        </motion.p>
      </motion.h1>

      <motion.div
        transition={{
          duration: 0.4,
          type: "spring",
          damping: 30,
          stiffness: 80,
        }}
        variants={parent}
        initial={"hidden"}
        whileInView={"show"}
        exit={"exit"}
        className="z-10 flex w-full flex-col items-center justify-center gap-x-4 gap-y-5 lg:flex-row"
      >
        <Card
          title="تعلم تقنيات وأنماط الخط العربي على يد مدربين خبراء"
          description="أتقن الرسم باليد وأشكال الحروف الأساسية للخط العربي"
          image={Cover1.src}
        />
        <Card
          title="تعلم تقنيات وأنماط الخط العربي على يد مدربين خبراء"
          description="أتقن الرسم باليد وأشكال الحروف الأساسية للخط العربي"
          image={Cover2.src}
        />
        <Card
          title="تعلم تقنيات وأنماط الخط العربي على يد مدربين خبراء"
          description="أتقن الرسم باليد وأشكال الحروف الأساسية للخط العربي"
          image={Cover3.src}
        />
      </motion.div>
      <Image
        src={background}
        alt={""}
        fill
        className="h-full w-full object-cover opacity-70 blur-[2px]"
      />
    </div>
  );
}
