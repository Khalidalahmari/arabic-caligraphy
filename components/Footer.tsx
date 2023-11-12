"use client";
import React from "react";
import logo from "@/public/files/logo_light_small.svg";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import star from "@/public/images/star.png";
import {
  FaFacebook,
  FaInstagram,
  FaSnapchatGhost,
  FaTiktok,
} from "react-icons/fa";
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
          <nav className="flex flex-row-reverse gap-x-5 truncate text-sm text-peacoat-50 sm:gap-x-[74px] sm:text-base">
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
              href="#آراء المتدربين"
              className="transition-all duration-300 hover:text-peacoat-200"
            >
              آراء المتدربين
            </Link>
            <Link
              href="#سجل الآن"
              className="transition-all duration-300 hover:text-peacoat-200"
            >
              سجل الآن
            </Link>
          </nav>

          <div className="flex min-w-0 max-w-full flex-row items-start justify-center gap-x-2 sm:gap-x-8">
            <div className="group flex w-1/4 min-w-0 flex-col items-center justify-center gap-y-3 tracking-wider text-stone-100/50 sm:flex-1">
              <FaTiktok className="h-5 w-5 cursor-pointer text-stone-100 transition-transform duration-200 hover:scale-105 active:scale-90 sm:h-6 sm:w-6"></FaTiktok>
              <span className="transition-color xs:text-sm flex items-center justify-center truncate px-2  text-xs opacity-0 duration-200 group-hover:opacity-100">
                TikTok:
                <br />
                @amshag
              </span>
            </div>
            <div className="group flex w-1/4 min-w-0 flex-col items-center justify-center gap-y-3 tracking-wider text-stone-100/50 sm:flex-1">
              <FaSnapchatGhost className="h-5 w-5 cursor-pointer text-stone-100 transition-transform duration-200 hover:scale-105 active:scale-90 sm:h-6 sm:w-6"></FaSnapchatGhost>
              <span className="transition-color xs:text-sm flex truncate px-2 text-center text-xs opacity-0 duration-200 group-hover:opacity-100">
                Snapchat:
                <br />
                @amshag
              </span>
            </div>

            <Link
              target="_blank"
              href={"https://www.instagram.com/amshag_com/"}
              className="group flex w-1/4 min-w-0 flex-col items-center justify-center gap-y-3 tracking-wider text-stone-100/50 sm:flex-1"
            >
              <FaInstagram className="h-5 w-5 cursor-pointer text-stone-100 transition-transform duration-200 hover:scale-105 active:scale-90 sm:h-6 sm:w-6"></FaInstagram>
              <span className="transition-color xs:text-sm text-xs opacity-0 duration-200 group-hover:opacity-100">
                Instagram
              </span>
            </Link>
            <Link
              target="_blank"
              href={"https://twitter.com/Amshag_com"}
              className="group flex w-1/4 min-w-0 flex-col items-center justify-center gap-y-3 tracking-wider text-stone-100/50 sm:flex-1"
            >
              <FaXTwitter className="h-5 w-5 cursor-pointer text-stone-100 transition-transform duration-200 hover:scale-105 active:scale-90 sm:h-6 sm:w-6"></FaXTwitter>
              <span className="transition-color xs:text-sm truncate text-xs opacity-0 duration-200 group-hover:opacity-100">
                XTwitter
              </span>
            </Link>
          </div>
          <p className="text-sm text-stone-100/50">@Copyright 2023 - Amshag</p>
        </motion.div>
      </div>
    </div>
  );
}
