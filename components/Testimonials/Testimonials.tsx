"use client";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
import { profile } from "console";
import Image from "next/image";
import React from "react";

import TestimonialCard from "./TestimonialCard";
import { motion } from "framer-motion";
import Link from "next/link";
import Pattern from "../Patterns/Pattern";
import background from "@/public/Images/11.2.png";

type Props = {};

export default function Testimonials({}: Props) {
  return (
    <div className="relative w-full bg-peacoat-800 py-20">
      <Image
        src={background}
        alt={""}
        fill
        className="h-full w-full object-cover opacity-20 "
      />
      <div className="relative mx-auto max-w-[2500px]">
        {/* Patterns */}
        <Pattern className="absolute -left-96 -top-[60%] h-[120%] origin-center opacity-60" />
        <div className="z-10 mx-3 flex h-[1000px] flex-col items-center gap-y-14 text-peacoat-200 sm:mx-8 lg:mx-16 lg:h-[780px] lg:flex-row lg:gap-x-24 xl:mx-28">
          <div className="flex h-full w-full flex-col items-center justify-center gap-x-8 gap-y-12 lg:flex-row-reverse lg:gap-y-0">
            {/* Col 2.1 */}
            <motion.div
              viewport={{ once: true }}
              initial={{ x: -300, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{
                duration: 0.3,
                type: "spring",
                damping: 15,
                stiffness: 50,
              }}
              className="flex w-full flex-col gap-y-6 sm:gap-y-12 lg:h-full lg:w-7/12"
            >
              <h1 className="font-Ruwudu-Bold xs:text-5xl mt-10 text-center text-4xl font-extrabold text-peacoat-50 sm:text-6xl md:!leading-normal lg:text-end lg:text-5xl lg:!leading-relaxed xl:text-6xl xl:leading-[90px] 2xl:text-[70px]">
                استمع إلى آراء الأشخاص الذين اختبروا خبرتنا
              </h1>
              <p className="text-center text-sm font-medium text-peacoat-200 sm:text-base md:text-lg lg:text-end">
                تعرّف على ما يقوله تلاميذنا الراضون عن دورتنا الشاملة
              </p>
              <div className="hidden h-24 w-full flex-row items-center justify-end text-peacoat-50 lg:flex">
                <Link
                  href={"#"}
                  tabIndex={0}
                  className="group flex h-16 w-full cursor-pointer flex-row-reverse items-center justify-center gap-x-5 overflow-hidden bg-almondFrost-800 px-8 py-0 font-bold transition-all duration-100 hover:bg-almondFrost-600 active:scale-95 lg:w-60"
                >
                  <p className="transition-transform duration-300 group-focus:-translate-x-4">
                    سجل الآن
                  </p>
                  <HiArrowLeft className="xs:group-focus:-translate-x-96 h-5 w-5 pt-1 transition-transform duration-200 ease-out group-focus:-translate-x-32 group-focus:ease-in-out md:group-focus:-translate-x-[500px] lg:group-focus:-translate-x-24"></HiArrowLeft>
                </Link>
              </div>
            </motion.div>

            {/* Col 2.2 */}
            <div className="relative h-full w-full overflow-hidden lg:w-8/12">
              <div className="grid h-full w-full grid-cols-1 gap-8">
                <motion.div
                  viewport={{ once: true }}
                  initial={{ y: 500, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{
                    duration: 0.6,
                    type: "spring",
                    damping: 37,
                    stiffness: 100,
                  }}
                  className="flex flex-col gap-y-8"
                >
                  <TestimonialCard
                    name="Bowen Ala"
                    username="bowen_ala"
                    rating={4.5}
                    Comment={
                      "I hired this interior design company to help me decorate my new home, and I couldn't be happier with the outcome. They listened to my ideas and helped me to create a space that is both stylish and functional. They were a pleasure to work with and I would recommend them to anyone looking for a top-notch interior design team."
                    }
                  />
                  <TestimonialCard
                    name={"Jimi Nurul"}
                    username={"jimi_nurul"}
                    rating={4.9}
                    Comment={
                      "These guys transformed my living room into a beautiful and inviting space. They were able to work within my budget and gave me great advice on how to make the most of my small space. I am so impressed with the final result and would recommend them to anyone looking for a professional interior designer."
                    }
                  />
                  <TestimonialCard
                    name={"Karter Gerrard"}
                    username={"karter_gerrard"}
                    rating={4.9}
                    Comment={
                      "I had the pleasure of working with this interior design company on a recent renovation project, and I couldn't be happier with the results. They took the time to understand my vision and preferences, and then brought it to life in a way that exceeded my expectations. Their attention to detail and creativity was impressive, and I highly recommend them to anyone looking for a professional and talented team."
                    }
                  />
                </motion.div>

                {/* <div className="flex h-96 w-full flex-col rounded-3xl border-[3px] border-gray-300 bg-[#fafafa]"></div> */}
              </div>

              {/* fog */}
              <div className="absolute bottom-0 mx-auto flex h-60 w-full items-end bg-gradient-to-t from-[#373741]"></div>
            </div>

            {/* Col 2.3 */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 1,
                type: "spring",
                damping: 30,
                stiffness: 100,
                delay: 0.5,
              }}
              className="flex h-20 w-full items-center lg:hidden"
            >
              <div className="h-24 w-full items-center justify-end text-peacoat-50 lg:flex">
                <Link
                  href={"#"}
                  tabIndex={0}
                  className="group flex h-16 w-full cursor-pointer flex-row items-center justify-center gap-x-5 overflow-hidden bg-almondFrost-800 px-8 py-0 font-medium transition-all duration-100 hover:bg-almondFrost-600 active:scale-[99%] lg:w-72"
                >
                  <p className="transition-transform duration-300 group-focus:translate-x-4">
                    سجل الآن
                  </p>
                  <HiArrowRight className="h-5 w-5 pt-1 transition-transform duration-200 ease-out group-focus:translate-x-[60vw] group-focus:ease-in-out md:group-focus:translate-x-[500px] lg:group-focus:translate-x-24"></HiArrowRight>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
    // What People Are Saying About Us
  );
}
