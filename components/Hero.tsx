"use client";
import React, { useEffect, useRef } from "react";
import { Aref_Ruqaa } from "next/font/google";
import { motion } from "framer-motion";
import Pattern from "./Patterns/Pattern";

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
  const videoRef = useRef<HTMLVideoElement>(null);

  // useEffect(() => {
  //   setTimeout(() => {
  //     if (videoRef.current) {
  //       videoRef.current.play();
  //     }
  //   }, 1000);
  // }, [videoRef]);
  return (
    <div className="relative mx-auto h-full w-full max-w-[2250px]">
      <motion.div
        viewport={{ once: true }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.1 }}
        transition={{
          duration: 0.4,
          type: "spring",
          damping: 30,
          stiffness: 80,
        }}
        className="absolute left-0 top-0 z-10 h-full w-full overflow-hidden blur-[2px]"
      >
        <video
          ref={videoRef}
          playsInline={true}
          muted={true}
          autoPlay={true}
          loop={true}
          controls={false}
          // type="video/webm"
          preload="auto"
          width="100%"
          height="100%"
          className="pointer-events-none h-full w-full select-none overflow-hidden object-cover"
        >
          <source src="/BackgroundVideo.mp4" type="video/mp4" />
          <source src="/BackgroundVideo.webm#t=0.001" type="video/webm" />
        </video>
      </motion.div>
      {/* Patterns */}
      <Pattern className="absolute -right-96 top-1/2 z-10 h-full origin-center opacity-70" />
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
            <p className="-rotate-0">{title}</p>
            ،،
            <br />
            <p className="-rotate-0">{title2}</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
