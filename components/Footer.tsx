"use client";
import React from "react";
import logo from "@/public/files/logo_light_small.svg";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import star from "@/public/images/star.png";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import background from "@/public/Images/11.2.png";

type Props = {};

export default function Footer({}: Props) {
  return (
    <div className="relative flex w-full items-center justify-center overflow-hidden bg-peacoat-800">
      <Image
        src={background}
        alt={""}
        fill
        className="h-full w-full object-cover opacity-20 "
      />
      <div className="xs:px-16 relative mx-auto flex max-w-[2500px] px-4 py-12 lg:px-20">
        <motion.div
          viewport={{ once: true }}
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{
            duration: 0.5,
            type: "spring",
            damping: 30,
            stiffness: 50,
          }}
          className="flex origin-center flex-col items-center justify-center gap-y-8 py-6 md:gap-y-12"
        >
          <Image src={logo} alt={""} className="h-80 object-contain" />
          <nav className="xs:gap-x-12 flex flex-row-reverse gap-x-5 truncate text-base text-peacoat-50 sm:gap-x-[74px]">
            <Link
              href="#الرئيسية"
              className="transition-all duration-300 hover:text-peacoat-200"
            >
              الرئيسية
            </Link>
            <Link
              href="#أهدافنا"
              className="transition-all duration-300 hover:text-peacoat-200"
            >
              أهدافنا
            </Link>
            <Link
              href="#تزكيات"
              className="transition-all duration-300 hover:text-peacoat-200"
            >
              تزكيات
            </Link>
            <Link
              href="#سجل الآن"
              className="transition-all duration-300 hover:text-peacoat-200"
            >
              سجل الآن
            </Link>
          </nav>

          <div className="flex min-w-0 flex-1 flex-row gap-x-4 sm:gap-x-8">
            <Link
              href={"#"}
              className="group flex min-w-0 flex-1 flex-col items-center justify-center gap-y-3 tracking-wider text-stone-100/50"
            >
              <FaFacebook className="h-6 w-6 cursor-pointer text-stone-100 transition-transform duration-200 hover:scale-105 active:scale-90"></FaFacebook>
              <span className="transition-color xs:text-sm text-xs opacity-0 duration-200 group-hover:opacity-100">
                facebook
              </span>
            </Link>

            <Link
              href={"#"}
              className="group flex min-w-0 flex-1 flex-col items-center justify-center gap-y-3 tracking-wider text-stone-100/50"
            >
              <FaInstagram className="h-6 w-6 cursor-pointer text-stone-100 transition-transform duration-200 hover:scale-105 active:scale-90"></FaInstagram>
              <span className="transition-color xs:text-sm text-xs opacity-0 duration-200 group-hover:opacity-100">
                Instagram
              </span>
            </Link>
            <Link
              href={"#"}
              className="group flex min-w-0 flex-1 flex-col items-center justify-center gap-y-3 tracking-wider text-stone-100/50"
            >
              <FaXTwitter className="h-6 w-6 cursor-pointer text-stone-100 transition-transform duration-200 hover:scale-105 active:scale-90"></FaXTwitter>
              <span className="transition-color xs:text-sm truncate text-xs opacity-0 duration-200 group-hover:opacity-100">
                XTwitter
              </span>
            </Link>
          </div>
          <p className="text-sm text-stone-100/50">@Copyright 2023 - Test</p>
        </motion.div>
      </div>
    </div>
  );
}
