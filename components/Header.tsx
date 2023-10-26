"use client";
import Image from "next/image";
import React, { Fragment, useState } from "react";
import logo from "@/public/logo.png";
import Link from "next/link";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { AnimatePresence, motion } from "framer-motion";
type Props = {};

const variants = {
  open: { innerHeight: "0" },
  closed: { innerHeight: "-100%" },
};

export default function Header({}: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-0 mx-auto w-screen select-none bg-almondFrost-400 text-peacoat-800 z-10">
      <Menu as="div" className="mx-auto flex max-w-[2250px] flex-col">
        <div className="mx-5 flex h-20 min-h-[48px] items-center justify-between sm:mx-16 xl:mx-28">
          {/* logo & navigation*/}
          <motion.div
            viewport={{ once: true }}
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              duration: 0.5,
              type: "spring",
              damping: 15,
              stiffness: 50,
            }}
            className="relative flex items-center justify-start gap-x-16"
          >
            <Link
              href="/"
              className="relative flex h-full flex-grow-0 cursor-pointer justify-start"
            >
              <Image
                src={logo}
                alt={"Logo"}
                className="h-16 w-16 aspect-square  invert object-contain"
              />
            </Link>

            {/* navigation */}
            <nav className="hidden items-center gap-x-2 text-peacoat-800 flex-row-reverse lg:flex lg:gap-x-4">
              <Link
                className="hidden flex-auto items-center truncate rounded-2xl py-3 px-4 transition-all duration-300 hover:text-peacoat-600 sm:flex"
                href="#الرئيسية"
              >
                الرئيسية
              </Link>
              <Link
                className="hidden flex-auto items-center truncate rounded-2xl py-3 px-4 transition-all duration-300 hover:text-peacoat-600 sm:flex"
                href="#أهدافنا"
              >
                أهدافنا
              </Link>
              <Link
                className="hidden flex-auto items-center truncate rounded-2xl py-3 px-4 transition-all duration-300 hover:text-peacoat-600 sm:flex"
                href="#تزكيات"
              >
                تزكيات
              </Link>
              <Link
                className="hidden flex-auto items-center truncate rounded-2xl py-3 px-4 transition-all duration-300 hover:text-peacoat-600 sm:flex"
                href="#تواصل معنا"
              >
                تواصل معنا
              </Link>
            </nav>
          </motion.div>

          {/* CTA */}
          <motion.div
            viewport={{ once: true }}
            initial={{ x: 200, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{
              duration: 0.4,
              type: "spring",
              damping: 15,
              stiffness: 50,
            }}
          >
            <button
              type="button"
              className="hidden rounded-full cursor-pointer select-none bg-almondFrost-800 px-7 py-4 text-base font-medium text-peacoat-800 !transition-all !duration-200 drop-shadow-md shadow-peacoat-400 hover:drop-shadow-xl hover:bg-almondFrost-600 scale-100 active:scale-95 lg:flex"
            >
              سجل الآن
            </button>
          </motion.div>
          <Menu.Button
            onClick={() => setIsOpen((isOpen) => !isOpen)}
            className="flex lg:hidden"
            aria-label="openNavigation"
          >
            {({ open }) => (
              <div
                className={`flex cursor-pointer transition-all duration-200 ${
                  open ? "bg-almondFrost-800/100" : "bg-almondFrost-800/0"
                } select-none p-2 text-sm font-medium text-peacoat-800 active:scale-95`}
              >
                <HiOutlineMenuAlt3 className={`h-7 w-7 text-peacoat-800`} />
              </div>
            )}
          </Menu.Button>
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
                      className={"flex w-full flex-col gap-y-2 "}
                    >
                      <button className="mt-5 w-full cursor-pointer select-none bg-almondFrost-800 px-7 py-3 text-sm font-medium text-peacoat-800 transition-all duration-100 hover:bg-almondFrost-600 active:scale-95">
                        سجل الآن
                      </button>
                      <nav className="w-full divide-y divide-almondFrost-600 py-2 ">
                        <Menu.Item>
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
                              href={"/"}
                              className={`w-full ${
                                active ? "cursor-pointer" : ""
                              } group flex w-full items-center px-4 py-[16px] text-sm`}
                            >
                              تواصل معن
                            </Link>
                          )}
                        </Menu.Item>
                      </nav>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )}
          </Menu.Items>
        </Transition>

        {/* </motion.div> */}
      </Menu>
    </div>
  );
}
