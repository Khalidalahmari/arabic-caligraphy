"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import background from "@/public/Images/2.jpg";
// import logo from "@/public/logo.png";
import { Aref_Ruqaa } from "next/font/google";
import { motion } from "framer-motion";
import Link from "next/link";
import Pattern_Dark from "./Patterns/Pattern_Dark";
import Pattern from "./Patterns/Pattern";
import Logo from "./Logos/Logo_Light";
const aref = Aref_Ruqaa({ subsets: ["arabic"], weight: ["400", "700"] });

type Props = {
  title?: string;
  title2?: string;
  description?: string;
  button1?: string;
  button2?: string;
};

export default function Hero({
  title,
  title2,
  description,
  button1,
  button2,
}: Props) {
  return (
    <div className="relative mx-auto h-full w-full max-w-[2250px]">
      {/* <Image
        src={background}
        alt={""}
        fill
        className="h-full w-full select-none object-cover opacity-10 blur-[2px]"
      /> */}

      {/* Patterns */}
      <Pattern_Dark className="absolute -left-96 -top-1/2 z-10 h-full origin-center opacity-60" />
      <Pattern className="absolute -right-96 top-1/2 z-10 h-full origin-center opacity-70" />
      {/* Fading sides */}
      {/* <div className="absolute left-0 top-1/2 z-0 hidden h-full w-96 -translate-y-1/2 bg-gradient-to-r from-peacoat-800 xl:flex"></div>
      <div className="absolute right-0 top-1/2 z-0 hidden h-full w-96 -translate-y-1/2 bg-gradient-to-l from-peacoat-800 xl:flex"></div> */}
      {/* Logo - pattern */}
      <div className="z-20 flex h-full w-full flex-col-reverse items-center justify-between gap-x-10 gap-y-5 p-11 lg:flex-row">
        <motion.div className="z-20 flex w-full items-center justify-center lg:w-1/2 lg:p-0">
          <Pattern className="mx-auto aspect-square w-full object-contain !p-0" />
        </motion.div>
        <div
          className={`z-20 flex flex-col items-center justify-center gap-y-5 text-almondFrost-200 lg:w-3/5 lg:gap-y-16 lg:pr-20`}
        >
          <motion.div
            viewport={{ once: true }}
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.4,
              type: "spring",
              damping: 30,
              stiffness: 80,
            }}
            className={`title-size titleFont flex w-full flex-col items-center justify-center text-center lg:items-end lg:text-end`}
          >
            <p className="-rotate-0">تعلم قوام الخط يا ذا التأدب</p>
            ،،
            <br />
            <p className="-rotate-0">فما الخط إلا زينة المتأدب</p>
          </motion.div>

          {/* Description */}
          <motion.div
            viewport={{ once: true }}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.4,
              type: "spring",
              damping: 30,
              stiffness: 80,
              delay: 0.3,
            }}
            className="z-10 max-w-xl self-end text-center text-sm lg:text-end lg:text-base"
          >
            {description}
          </motion.div>

          {/* CAButton */}
          {/* <motion.div
            viewport={{ once: true }}
            initial={{ x: -300, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              duration: 0.4,
              type: "spring",
              damping: 30,
              stiffness: 80,
              delay: 0.5,
            }}
            className="3xl:mb-32 z-10 flex w-full flex-col items-center gap-y-2 sm:flex-row sm:justify-center sm:gap-0 sm:gap-x-12 lg:mb-20 lg:justify-end"
          >
            <Link href={"/#سجل الآن"} className="bordered_Button">
              تواصل معنا
            </Link>
            <Link href={"/#سجل الآن"} className="simple_Button">
              سجل الآن
            </Link>
          </motion.div> */}
        </div>
      </div>
    </div>
  );
}
