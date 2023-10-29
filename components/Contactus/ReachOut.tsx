"use client";
import { MouseContext } from "@/Components/Providers/mouse_context";
import { AtSymbolIcon } from "@heroicons/react/24/solid";
import { AnimatePresence, motion } from "framer-motion";
import React, {
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import emailjs from "@emailjs/browser";
import {
  getOpenContact,
  useAppSelector,
} from "@/Components/Providers/store/store";
import { setClose, setOpen } from "@/Components/Providers/Redux/openContact";
import { useDispatch } from "react-redux";
type Props = {};

export default function ReachOut({}: Props) {
  const { cursorBorderColorHandler, cursorChangeHandler } =
    useContext(MouseContext);

  const [Error, setError] = useState<boolean>(false);
  const ContactstateRef = useRef<boolean>();
  // const [Contactstate, setContactstate] = useState<boolean>(false);
  const [status, setStatus] = useState<string>("");
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
          "TDG44JLNUvfBRcavi"
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
          }
        );
    }, 1500);
  };
  //const [Open, setopen] = useState(false);
  const DraggableArea = useRef<HTMLDivElement>(null);

  const dispatch = useDispatch();
  const Close = useCallback(() => dispatch(setClose()), []);
  const OpenReach = useCallback(() => dispatch(setOpen()), []);
  const IsContactOpen = useAppSelector(getOpenContact);
  //mouse event to close when clicking outside
  const handleClickOutside = useCallback(
    (event: any) => {
      if (
        DraggableArea.current &&
        !DraggableArea.current.contains(event.target)
      ) {
        if (ContactstateRef.current) {
          //setopen(false)
          Close();
        }
      }
    },
    [IsContactOpen]
  );
  useEffect(() => {
    /*
     * Invoke Function onClick outside of element
     */

    // Bind
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // dispose
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  //set new state
  useEffect(() => {
    ContactstateRef.current = IsContactOpen;
  }, [IsContactOpen]);

  return (
    <motion.div
      ref={DraggableArea}
      onMouseMove={() =>
        cursorBorderColorHandler(
          "dark:!border-alto-900 !border-alto-200",
          "dark:!bg-alto-900 !bg-alto-200"
        )
      }
      onMouseLeave={() => cursorBorderColorHandler("", "")}
      className={
        "ButtonPos pointer-events-none fixed z-40 flex h-full max-h-[440px] w-full max-w-[320px] flex-col items-center justify-center overflow-hidden rounded-[34px] lg:bottom-14 lg:right-14 lg:max-h-[460px] lg:max-w-[420px]"
      }
    >
      <motion.div
        style={{
          clipPath: IsContactOpen
            ? "circle(50% at 50% 50%)"
            : "circle(0% at 50% 50%)",
        }}
        className={`font-lato pointer-events-auto absolute bottom-0 right-0 z-0 flex h-[1230px] w-[1230px] translate-y-[615px] translate-x-[615px] flex-col items-start justify-start gap-y-6 rounded-full bg-alto-900 pt-52 pl-[305px] transition-all duration-300 ease-in-out dark:bg-alto-200 lg:pl-60 lg:pt-48`}
      >
        {/* Title */}
        <div
          className={`flex flex-col items-start justify-center pl-8 text-xl font-medium text-alto-200 dark:text-alto-900`}
        >
          <h1>
            Let&apos;s{" "}
            <span className={`font-pacifico text-2xl font-bold text-anzac-400`}>
              Brainstorm
            </span>
          </h1>
          <h2>
            & Create something{" "}
            <span className={`font-pacifico text-2xl font-bold text-anzac-400`}>
              Great
            </span>
          </h2>
        </div>
        {/* Form */}
        <form
          ref={form}
          onSubmit={sendEmail}
          // onSubmit={handleSubmit(onSubmit)}
          className="flex max-w-[300px] flex-col gap-y-2 lg:max-w-[340px]"
        >
          <div className="flex flex-row gap-x-2">
            <input
              // {...register("name")}
              placeholder="Name"
              className={`${Error ? "!border-red-500" : ""} ContactInput w-1/2`}
              type="text"
              name="from_name"
            />
            <input
              // {...register("email")}
              placeholder="Email"
              className={`${Error ? "!border-red-500" : ""} ContactInput w-1/2`}
              type="text"
              name={"reply_to"}
            />
          </div>

          <input
            // {...register("subject")}
            placeholder="Subject"
            className="ContactInput"
            type="text"
            name={"Subject"}
          />

          <textarea
            // {...register("message")}
            placeholder="Message"
            className="ContactInput"
            name="message"
          />
          <button
            type={"submit"}
            className="group relative cursor-none rounded-md bg-amber-500 px-10 py-4 font-bold text-gray-900 transition-colors duration-300 hover:bg-[#f7b038]"
          >
            <span className=" transition-all duration-300 group-active:scale-90">
              Reach out
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
                  className="absolute right-4 top-1/2 h-7 w-7 -translate-y-1/2 stroke-orange-300"
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
                  className="absolute right-4 top-1/2 h-7 w-7 -translate-y-1/2 stroke-orange-500"
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
      <motion.div
        className="absolute bottom-[6px] right-[6px] z-40 flex h-[70px] w-[70px] items-center justify-center p-3 lg:bottom-3 lg:right-3 lg:h-20 lg:w-20"
        drag
        dragElastic={0.04}
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, bounce: 0.5, type: "spring" }}
        dragConstraints={DraggableArea}
      >
        <motion.button
          // eslint-disable-next-line react-hooks/rules-of-hooks
          onTap={() => {
            if (IsContactOpen) {
              Close();
            } else {
              OpenReach();
            }
          }}
          className="group pointer-events-auto z-10 cursor-none items-center justify-center rounded-full bg-alto-900 p-3 ring-alto-400 transition-all duration-300 ease-in-out hover:scale-110 active:scale-95 dark:bg-alto-200 dark:ring-alto-400"
        >
          <AtSymbolIcon
            onMouseEnter={() => {
              cursorChangeHandler(55);
            }}
            onMouseLeave={() => {
              cursorChangeHandler(35);
            }}
            onMouseDown={() => {
              cursorChangeHandler(65);
            }}
            onMouseUp={() => {
              cursorChangeHandler(55);
            }}
            className="h-full w-full scale-100 text-alto-200 dark:text-alto-900"
          />
        </motion.button>
      </motion.div>
    </motion.div>
  );
}
