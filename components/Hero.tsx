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
    <div className="relative mx-auto h-full w-full  max-w-[2250px]">
      <Image
        src={background}
        alt={""}
        fill
        className="h-full w-full object-cover opacity-10 blur-[2px]"
      />

      {/* Logo - pattern */}
      <div className="flex h-full w-full flex-col-reverse items-center justify-between gap-x-10 gap-y-5 p-11 lg:flex-row">
        <motion.div
          viewport={{ once: true }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 0.4,
            type: "spring",
            damping: 30,
            stiffness: 80,
          }}
          className="h-full lg:w-3/6 lg:p-12"
        >
          <Image src={logo} alt={"Logo"} className="h-full object-contain" />
        </motion.div>
        <div
          className={`flex flex-col items-center justify-center gap-y-5 text-almondFrost-200 lg:w-3/5 lg:gap-y-16 lg:pr-20`}
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
            className={`title-size flex w-full flex-col items-center justify-center text-center !font-serif lg:items-end lg:text-end`}
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
            className="max-w-xl self-end text-center text-sm lg:text-end lg:text-base"
          >
            ايمانا بأهمية المحافظة على هذا التراث العربي الجميل في زمن كثر
            الاعتماد فيه على الكتابة بوسائل التعنية الحديثة تسعى منصة أمشاق
            لتقديم دورات تحسين الخط العربي لجميع الفئات العمرية
          </motion.div>

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
              delay: 0.5,
            }}
            className="3xl:mb-32 z-0 flex w-full flex-col items-center gap-y-2 sm:flex-row sm:justify-center sm:gap-0 sm:gap-x-12 lg:mb-20 lg:justify-end"
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
