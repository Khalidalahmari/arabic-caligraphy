"use client";
import { AnimatePresence, motion } from "framer-motion";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaAsterisk } from "react-icons/fa";
import { AiFillPhone, AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import { BsGeoAlt } from "react-icons/bs";
import Image from "next/image";
import background from "@/public/Images/6.png";

type Props = {
  title?: string;
  description?: string;
  email?: string;
  phone?: string;
  location?: string;
};
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
export default function OptIn({
  title,
  description,
  email,
  phone,
  location,
}: Props) {
  const [status, setStatus] = useState<string>("");
  const [Error, setError] = useState<boolean>(false);
  const ContactstateRef = useRef<boolean>();
  const form = useRef<HTMLFormElement>(null!);
  const sendEmail = (event: React.SyntheticEvent): void => {
    setStatus("pending");
    event.preventDefault();
    setTimeout(() => {
      emailjs
        .sendForm(
          "service_bmut4ji",
          "template_s6o6oy9",
          form.current,
          "TDG44JLNUvfBRcavi",
        )
        .then(
          (result) => {
            form.current.reset();
            setStatus("succeded");
            if (Error) {
              setError(false);
            }
            setTimeout(() => {
              setStatus("");
            }, 2000);
          },
          (error) => {
            setStatus("failed");
            setError(true);
            setTimeout(() => setStatus(""), 2000);
          },
        );
    }, 1500);
  };
  //const [Open, setopen] = useState(false);
  const DraggableArea = useRef<HTMLDivElement>(null);

  return (
    <div id="سجل الآن" className="relative w-full bg-white py-20">
      <Image
        src={background}
        alt={""}
        fill
        className="h-full w-full object-cover opacity-70 blur-[2px]"
      />
      <div className="relative mx-auto max-w-[2500px]">
        <div className="mx-3 flex flex-col items-center gap-y-14 text-peacoat-200 sm:mx-8 lg:mx-16 lg:flex-row lg:gap-x-24 xl:mx-28">
          {/* <motion.h1
            variants={parent}
            initial={"hidden"}
            animate={"show"}
            exit={"exit"}
            transition={{
              duration: 0.4,
              type: "spring",
              damping: 30,
              stiffness: 80,
            }}
            className="discover-titleSize titleFont flex flex-col items-center justify-center font-medium leading-tight"
          >
             ابدأ لآن
          </motion.h1> */}
          <div className="flex h-full w-full flex-col items-center justify-center gap-x-20 gap-y-12 lg:flex-row lg:gap-y-0">
            {/* Left Side: Col 2.1 */}
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
              className="flex w-full flex-col items-end justify-start gap-y-6 text-peacoat-800 sm:gap-y-12 lg:h-full lg:w-7/12 lg:self-start"
            >
              <h1
                className={`font-Ruwudu-Bold xs:text-5xl discover-titleSize text-center font-extrabold sm:text-6xl md:!leading-normal lg:text-end lg:!leading-relaxed`}
              >
                {title}
              </h1>
              <p className="text-end text-sm font-medium text-peacoat-600 sm:text-base md:text-lg lg:text-end">
                {description}
              </p>
              <div className="flex w-full flex-col items-end justify-center gap-y-4 text-sm lg:text-base">
                {/* #1 */}
                <div className="flex flex-row-reverse items-center justify-end gap-x-2">
                  <AiOutlineMail className="h-6 w-6 text-peacoat-800" />
                  <div className="font-medium"> {email}</div>
                </div>
                {/* #2 */}
                <div className="flex flex-row-reverse items-center justify-end gap-x-2">
                  <AiOutlinePhone className="h-6 w-6 text-peacoat-800" />
                  <div className="font-medium">{phone}</div>
                </div>
                {/* #3 */}
                <div className="flex flex-row-reverse items-center justify-end gap-x-2">
                  <BsGeoAlt className="h-6 w-6 text-peacoat-800" />
                  <div className="font-medium">{location}</div>
                </div>
              </div>
            </motion.div>

            {/* Form - Col 2.2 */}
            <motion.div
              viewport={{ once: true }}
              initial={{ y: 60, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.3,
                type: "spring",
                damping: 15,
                stiffness: 50,
              }}
              className="relative h-full w-full overflow-hidden lg:w-8/12"
            >
              <form
                ref={form}
                onSubmit={sendEmail}
                // onSubmit={handleSubmit(onSubmit)}
                className="flex w-full flex-col gap-y-8 text-xs md:text-base"
              >
                <div className="relative flex flex-row-reverse gap-x-4">
                  <div className="relative flex w-1/2 flex-col items-end justify-start gap-y-1">
                    <div className="flex flex-row items-center justify-end gap-x-2 px-0">
                      <FaAsterisk className="text-[8px] text-red-700/70" />
                      <label
                        htmlFor="from_name"
                        className=" font-bold text-peacoat-800"
                      >
                        الإسم
                      </label>
                    </div>
                    <input
                      placeholder="الإسم"
                      className={`${
                        Error ? "!border-red-500" : ""
                      } ContactInput w-full`}
                      type="text"
                      name="from_name"
                      id="from_name"
                      required
                    />
                  </div>
                  <div className="relative flex w-1/2 flex-col items-end justify-start gap-y-1">
                    <div className="flex flex-row items-center justify-end gap-x-2 ">
                      <FaAsterisk className="text-[8px] text-red-700/70" />
                      <label
                        htmlFor="from_name"
                        className=" font-bold text-peacoat-800"
                      >
                        البريد الإلكتروني
                      </label>
                    </div>

                    <input
                      placeholder="البريد الإلكتروني"
                      className={`${
                        Error ? "!border-red-500" : ""
                      } ContactInput w-full`}
                      type="text"
                      required
                      name={"reply_to"}
                      id={"reply_to"}
                    />
                  </div>
                </div>

                <div className="relative flex flex-col items-end justify-start gap-y-1">
                  <div className="flex flex-row items-center justify-end gap-x-2 ">
                    <FaAsterisk className="text-[8px] text-red-700/70" />
                    <label
                      htmlFor="from_name"
                      className=" font-bold text-peacoat-800"
                    >
                      الموضوع
                    </label>
                  </div>
                  <input
                    placeholder="الموضوع"
                    className="ContactInput w-full "
                    type="text"
                    required
                    name={"Subject"}
                  />
                </div>

                <div className="relative flex flex-col items-end justify-start gap-y-1">
                  <div className="flex flex-row items-center justify-end gap-x-2 ">
                    <FaAsterisk className="text-[8px] text-red-700/70" />
                    <label
                      htmlFor="from_name"
                      className=" font-bold text-peacoat-800"
                    >
                      الرسالة
                    </label>
                  </div>
                  <textarea
                    placeholder="الرسالة"
                    className="ContactInput h-28 w-full"
                    name="message"
                    required
                  />
                </div>

                <button
                  type={"submit"}
                  className="bg-peacot-500 color_Button group relative cursor-pointer px-10 py-4 font-bold transition-all duration-300 active:scale-95 "
                >
                  <span className=" transition-all duration-300 group-active:scale-90">
                    أرسل الآن
                  </span>
                  <AnimatePresence mode="wait">
                    {status === "" ? (
                      <></>
                    ) : status === "succeded" ? (
                      <svg
                        key={0}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2.5"
                        stroke="currentColor"
                        className="absolute right-4 top-1/2 h-7 w-7 -translate-y-1/2 stroke-almondFrost-200"
                      >
                        <motion.path
                          initial={{ pathLength: 0, opacity: 1 }}
                          animate={{ pathLength: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 1.4, type: "spring" }}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                    ) : status === "failed" ? (
                      <svg
                        key={1}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        strokeWidth="2.3"
                        className="absolute right-4 top-1/2 h-7 w-7 -translate-y-1/2 stroke-almondFrost-200"
                      >
                        <motion.path
                          initial={{ pathLength: 0, opacity: 1 }}
                          animate={{ pathLength: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 1.4, type: "spring" }}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    ) : (
                      <div
                        className="absolute right-4 top-1/2 my-0 -translate-y-1/2"
                        key={2}
                      >
                        <svg
                          className="svg-container"
                          height="40"
                          width="40"
                          viewBox="0 0 40 40"
                        >
                          <circle
                            className="loader-svg bg"
                            cx="20"
                            cy="20"
                            r="15"
                          ></circle>
                          <circle
                            className="loader-svg animate"
                            cx="20"
                            cy="20"
                            r="15"
                          ></circle>
                        </svg>
                      </div>
                    )}
                  </AnimatePresence>
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
