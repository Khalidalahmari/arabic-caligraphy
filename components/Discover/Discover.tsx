"use client";
import React, { useRef } from "react";
import Card from "./Card";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import background from "@/public/Images/6.png";
import Cover1 from "@/public/Images/5.png";
import Cover2 from "@/public/Images/3.png";
import Cover3 from "@/public/Images/2.png";

type Props = {
  title?: string;
  title2?: string;
  goals?: {
    title: string;
    description: string;
    button: string;
    image: string;
  }[];
};

export default function Discover({ title, title2, goals }: Props) {
  const ref = useRef<any>(null);
  const isInView = useInView(ref, { once: true });
  const parent = {
    hidden: { opacity: 0 },
    show: {
      opacity: isInView ? 1 : 0,
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
  return (
    <div
      id={"أهدافنا"}
      className="relative flex h-full w-full flex-col items-center justify-center gap-y-16 bg-white py-12 text-peacoat-800 md:!py-24 lg:min-h-[840px]"
    >
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
        viewport={{ once: true }}
        className="discover-titleSize-Small z-10 mx-auto mt-10 flex flex-col items-center justify-center px-5 text-center font-extrabold leading-tight sm:px-16 md:max-w-[70%]"
      >
        <motion.p
          transition={{
            duration: 0.4,
            type: "spring",
            damping: 30,
            stiffness: 80,
          }}
          variants={child}
          viewport={{ once: true }}
          className=""
        >
          {title}
        </motion.p>
        {/* <motion.p
          transition={{
            duration: 0.4,
            type: "spring",
            damping: 30,
            stiffness: 80,
          }}
          variants={child}
          viewport={{ once: true }}
        >
          {title2}
        </motion.p> */}
      </motion.h1>

      <motion.div
        transition={{
          duration: 0.4,
          type: "spring",
          damping: 30,
          stiffness: 80,
        }}
        ref={ref}
        variants={parent}
        initial={"hidden"}
        animate={"show"}
        exit={"exit"}
        viewport={{ once: true }}
        className="z-10 mb-10 grid grid-cols-1 grid-rows-3 items-center justify-center gap-x-4 gap-y-5 lg:grid-cols-3 lg:grid-rows-1 lg:flex-row"
      >
        <>
          {goals?.map((goal, index) => {
            return (
              <Card
                key={index}
                title={goal.title}
                description={goal.description}
                image={goal.image}
              />
            );
          })}
        </>
        {/* <Card
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
        /> */}
        {/**/}
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
