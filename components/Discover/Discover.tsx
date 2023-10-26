import React from "react";
import { HiArrowRight } from "react-icons/hi";

type Props = {};

export default function Discover({}: Props) {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center gap-y-4 bg-white">
      <h1 className="title-size">اكتشف فن الخط العربي في دورتنا الشاملة</h1>
      <div className="flex w-full items-center justify-center gap-x-4 gap-y-4">
        <div className="flex aspect-[3/2] flex-col items-center justify-start gap-y-2 bg-zinc-600">
          <h4 className="text-base font-medium">
            Learn the techniques and styles of Arabic calligraphy from expert
            instructors
          </h4>
          <div className="text-sm font-light">
            Master the fundomentol strokes and letterforms of Atabic Calligraphy
          </div>

          <div className="flex items-center justify-center gap-x-2 text-sm font-medium transition-all duration-200 hover:bg-peacoat-200">
            Enroll
            <HiArrowRight className="text-sm text-peacoat-400" />
          </div>
        </div>
      </div>
    </div>
  );
}
