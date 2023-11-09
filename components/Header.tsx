"use client";
import Image from "next/image";
import React, { Fragment, useEffect, useState } from "react";
import logo2 from "@/public/files/Logo_dark.svg";
import Link from "next/link";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { AnimatePresence, motion } from "framer-motion";
type Props = {
  nav?: {
    title: string;
    href: string;
  }[];
  button?: string;
  href: string;
  soon?: boolean;
};

const variants = {
  open: { innerHeight: "0" },
  closed: { innerHeight: "-100%" },
};

export default function Header({ nav, button, href, soon }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [width, setWidth] = useState<number>(0);
  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    handleWindowSizeChange();
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);
  const isMobile = width == 0 ? false : width <= 1024;
  return (
    <div className="fixed top-0 z-50 mx-auto w-screen select-none bg-almondFrost-50 text-peacoat-800 drop-shadow-sm">
      <Menu as="div" className="mx-auto flex max-w-[2250px] flex-col">
        <div className="mx-5 flex h-20 min-h-[48px] items-center justify-between sm:mx-16 xl:mx-28">
          {width > 0 && (
            <>
              {/* CTA */}
              <motion.div
                viewport={{ once: true }}
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{
                  duration: 0.4,
                  type: "spring",
                  damping: 15,
                  stiffness: 50,
                }}
                className="flex flex-1 items-center justify-start lg:flex-none "
              >
                <Link
                  href={href && "/#"}
                  className="flex shrink scale-100 cursor-pointer select-none items-center rounded-full bg-almondFrost-800 px-5 py-3 text-xs font-bold text-peacoat-800 shadow-peacoat-400 drop-shadow-md !transition-all !duration-200 hover:bg-almondFrost-600 hover:drop-shadow-xl active:scale-95 lg:px-7 lg:py-4 lg:text-base"
                >
                  {soon && (
                    <span className="animate-pulse lg:text-sm">(قريبا)</span>
                  )}
                  &nbsp;{button}
                </Link>
              </motion.div>
              {/* logo & navigation*/}
              <motion.div
                viewport={{ once: true }}
                initial={{
                  scale: isMobile ? 0 : 1,
                  x: isMobile ? 0 : 100,
                  opacity: 0,
                }}
                whileInView={{ scale: 1, x: 0, opacity: 1 }}
                transition={{
                  duration: 0.5,
                  type: "spring",
                  damping: 15,
                  stiffness: 50,
                }}
                className="relative flex items-center justify-start gap-x-16"
              >
                {/* navigation */}
                <nav className="hidden flex-row-reverse items-center gap-x-2 text-peacoat-800 lg:flex lg:gap-x-4">
                  {nav?.map((v, index) => {
                    return (
                      <Link
                        key={index}
                        className="hidden flex-auto items-center truncate rounded-2xl px-4 py-3 transition-all duration-300 hover:text-peacoat-600 sm:flex"
                        href={v.href}
                      >
                        {v.title}
                      </Link>
                    );
                  })}
                </nav>
                <Link
                  href="/"
                  className="relative flex h-full flex-grow-0 cursor-pointer justify-start"
                >
                  <Image
                    src={logo2 as any}
                    alt={"Logo"}
                    className="aspect-square h-20 w-20 object-contain"
                  />
                  {/* <Image
                  src={logo2 as any}
                  alt={"Logo"}
                  className="aspect-square h-16 w-16  object-contain invert"
                /> */}
                </Link>
              </motion.div>

              <div className="flex flex-1 items-center justify-end lg:hidden lg:flex-none ">
                <Menu.Button
                  onClick={() => setIsOpen((isOpen) => !isOpen)}
                  className="justify-self-end"
                  aria-label="openNavigation"
                >
                  {({ open }) => (
                    <div
                      className={`flex cursor-pointer transition-all duration-200 ${
                        open ? "bg-almondFrost-800/100" : "bg-almondFrost-800/0"
                      } select-none p-2 text-sm font-medium text-peacoat-800 active:scale-95`}
                    >
                      <HiOutlineMenuAlt3
                        className={`h-7 w-7 text-peacoat-800`}
                      />
                    </div>
                  )}
                </Menu.Button>
              </div>
            </>
          )}
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-300"
          enterFrom="transform opacity-0 "
          enterTo="transform opacity-100 "
          leave="transition ease-in duration-300"
          leaveFrom="transform opacity-100 "
          leaveTo="transform opacity-0 "
        >
          <Menu.Items className="mx-5 text-sm text-peacoat-800 sm:mx-16 xl:mx-28">
            {({ open }) => (
              <div className="flex overflow-hidden lg:hidden">
                <AnimatePresence>
                  {open && (
                    <motion.div
                      initial={{
                        height: 0,
                      }}
                      animate={{
                        height: "auto",
                      }}
                      exit={{
                        height: 0,
                      }}
                      className={"flex w-full flex-col gap-y-2 py-4"}
                    >
                      {/* <Link
                        href={"/#تواصل معنا"}
                        className="flex w-full cursor-pointer select-none items-center justify-center bg-almondFrost-800 px-7 py-3 text-sm font-medium text-peacoat-800 transition-all duration-100 hover:bg-almondFrost-600 active:scale-95"
                      >
                        {button}
                      </Link> */}
                      <nav className="w-full divide-y divide-almondFrost-600/40 py-2 ">
                        {nav?.map((v, index) => {
                          return (
                            <Menu.Item key={index}>
                              {({ active }) => (
                                <Link
                                  href={v.href}
                                  className={`w-full ${
                                    active ? "cursor-pointer" : ""
                                  } group flex w-full items-center justify-end px-4 py-[16px] text-sm`}
                                >
                                  {v.title}
                                </Link>
                              )}
                            </Menu.Item>
                          );
                        })}
                        {/* <Menu.Item>
                          {({ active }) => (
                            <Link
                              href={"/"}
                              className={`w-full ${
                                active ? "cursor-pointer" : ""
                              } group flex w-full items-center px-4 py-[16px] text-sm`}
                            >
                              الرئيسية
                            </Link>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              href={"/"}
                              className={`w-full ${
                                active ? "cursor-pointer" : ""
                              } group flex w-full items-center px-4 py-[16px] text-sm`}
                            >
                              أهدافنا
                            </Link>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              href={"/"}
                              className={`w-full ${
                                active ? "cursor-pointer" : ""
                              } group flex w-full items-center px-4 py-[16px] text-sm`}
                            >
                              تزكيات
                            </Link>
                          )}
                        </Menu.Item>
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              href={"/#سجل الآن"}
                              className={`w-full ${
                                active ? "cursor-pointer" : ""
                              } group flex w-full items-center px-4 py-[16px] text-sm`}
                            >
                              سجل الآن
                            </Link>
                          )}
                        </Menu.Item> */}
                      </nav>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )}
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
