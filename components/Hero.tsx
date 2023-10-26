"use client";
import Image from "next/image";
import React from "react";
import background from "@/public/Images/2.jpg";
import logo from "@/public/logo.png";
import { Aref_Ruqaa } from "next/font/google";
import { motion } from "framer-motion";
import Link from "next/link";
const aref = Aref_Ruqaa({ subsets: ["arabic"], weight: ["400", "700"] });

type Props = {};

export default function Hero({}: Props) {
  return (
    <div className="w-full h-full relative">
      <Image
        src={background}
        alt={""}
        fill
        className="object-cover w-full h-full opacity-10 blur-[2px]"
      />

      {/* Logo - pattern */}
      <div className="w-full h-full lg:flex-row flex-col-reverse p-11 flex items-center justify-between gap-y-5 gap-x-10">
        <motion.div className="lg:w-3/6 lg:p-12 h-full">
          <Image src={logo} alt={"Logo"} className="h-full object-contain" />
        </motion.div>
        <div
          className={`lg:w-3/5 lg:pr-20 flex items-center flex-col gap-y-5 lg:gap-y-16 justify-center text-3xl sm:text-5xl md:text-7xl lg:text-8xl text-almondFrost-200`}
        >
          <div
            className={`!font-serif flex flex-col lg:text-end text-center items-center lg:items-end justify-center w-full`}
          >
            <p className="-rotate-0">تعلم قوام الخط يا ذا التأدب</p>
            ،،
            <br />
            <p className="-rotate-0">فما الخط إلا زينة المتأدب</p>
          </div>

          {/* Description */}
          <div className="self-end max-w-xl text-sm lg:text-base text-center lg:text-end">
            ايمانا بأهمية المحافظة على هذا التراث العربي الجميل في زمن كثر
            الاعتماد فيه على الكتابة بوسائل التعنية الحديثة تسعى منصة أمشاق
            لتقديم دورات تحسين الخط العربي لجميع الفئات العمرية
          </div>

          {/* CAButton */}
          <motion.div
            viewport={{ once: true }}
            initial={{ x: -300, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              duration: 0.4,
              type: "spring",
              damping: 30,
              stiffness: 80,
              delay: 0.3,
            }}
            className="z-0 lg:mb-20 flex w-full flex-col items-center gap-y-2 sm:flex-row sm:justify-center sm:gap-0 sm:gap-x-12 lg:justify-end 3xl:mb-32"
          >
            <Link href={"/#"} className="bordered_Button">
              تواصل معنا
            </Link>
            <Link href={"/#"} className="simple_Button">
              سجل الآن
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
