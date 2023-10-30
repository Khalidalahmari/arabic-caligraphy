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
import TestimonialCard2 from "./TestimonialCard2";

type Props = {
  title?: string;
  description?: string;
  button?: string;
  testimonials?: {
    comment: string;
    applicant: {
      name: string;
      job: string;
    };
  }[];
};

export default function Testimonials({
  title,
  description,
  button,
  testimonials,
}: Props) {
  return (
    <div id={"تزكيات"} className="relative w-full bg-peacoat-800 py-12">
      <Image
        src={background}
        alt={""}
        fill
        className="h-full w-full object-cover opacity-20 "
      />
      <div className="relative mx-auto max-w-[2500px]">
        {/* Patterns */}
        <Pattern className="absolute -left-96 -top-[60%] z-0 h-[120%] origin-center opacity-60" />
        <div className="z-10 mx-3 flex h-[1000px] flex-col items-center gap-y-14 text-peacoat-200 sm:mx-8 lg:mx-16 lg:h-[780px] lg:flex-row lg:gap-x-24 xl:mx-28">
          <div className="z-10 flex h-full w-full flex-col items-center justify-center gap-x-8 gap-y-12 lg:flex-row-reverse lg:gap-y-0">
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
                {title}
              </h1>
              <p className="text-center text-sm font-medium text-peacoat-200 sm:text-base md:text-lg lg:text-end">
                {description}
              </p>
              <div className="hidden h-24 w-full flex-row items-center justify-end text-peacoat-50 lg:flex">
                <Link
                  href={"/#سجل الآن"}
                  tabIndex={0}
                  className="group flex h-16 w-full cursor-pointer flex-row-reverse items-center justify-center gap-x-5 overflow-hidden bg-almondFrost-800 px-8 py-0 font-bold transition-all duration-100 hover:bg-almondFrost-600 active:scale-95 lg:w-60"
                >
                  <p className="transition-transform duration-300 group-focus:-translate-x-4">
                    {button}
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
                  {testimonials?.map((testimonial, index) => {
                    return (
                      <TestimonialCard2
                        key={index}
                        name={testimonial.applicant.name}
                        username={testimonial.applicant.job}
                        rating={4.5}
                        Comment={testimonial.comment}
                      />
                    );
                  })}
                </motion.div>

                {/* <div className="flex h-96 w-full flex-col rounded-3xl border-[3px] border-gray-300 bg-[#fafafa]"></div> */}
              </div>

              {/* fog */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.6,
                  type: "spring",
                  damping: 37,
                  stiffness: 100,
                }}
                className="absolute bottom-0 mx-auto flex h-60 w-full items-end bg-gradient-to-t from-[#373741]"
              ></motion.div>
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
                  href={"/#سجل الآن"}
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
