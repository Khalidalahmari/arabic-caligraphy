import { GiFlowerStar as StarIcon } from "react-icons/gi";
import Image, { StaticImageData } from "next/image";
import React from "react";
import { FaTwitter } from "react-icons/fa";
import image1 from "@/public/profile pictures/5.png";
import { FaQuoteLeft } from "react-icons/fa6";

type Props = {
  name?: string;
  username?: string;
  rating?: number;
  Comment?: string;
};

export default function TestimonialCard2({
  name = "Bessie Alexa",
  username = "bessiee",
  rating = 4.9,
  Comment = "My wife and I had a dream of downsizing from our house in Cape Elizabeth into a small condo closer to where we work and play in Portland. David and his skilled team helped make that dream a reality. The sale went smoothly, and we just closed on an ideal new place we're excited to call home.!",
}: Props) {
  return (
    <div className="flex w-full flex-col gap-y-4 divide-y-2 divide-peacoat-200/30 border-[1px] border-peacoat-600/30 bg-[#373741] px-8 py-6 text-peacoat-800 xl:px-10 xl:py-8">
      {/* top */}
      <div className="flex flex-col items-end justify-start text-end">
        <FaQuoteLeft className="h-28 w-28 text-almondFrost-extra1" />
        <p className="text-end font-medium text-almondFrost-400/60">
          {Comment}
        </p>
      </div>

      {/* rating */}
      <div className="flex flex-col items-end gap-y-2 pt-3">
        <div className="xs:text-xl flex flex-col items-end gap-y-1 text-lg">
          <p className=" font-bold text-almondFrost-200 ">{name}</p>
          <div className="xs:text-xl flex flex-row items-end gap-x-2 text-base font-semibold text-almondFrost-400/40">
            {username}
          </div>
        </div>
      </div>
    </div>
  );
}
