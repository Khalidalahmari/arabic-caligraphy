import { GiFlowerStar as StarIcon } from "react-icons/gi";
import Image, { StaticImageData } from "next/image";
import React from "react";
import { FaTwitter } from "react-icons/fa";
import image1 from "@/public/profile pictures/5.png";

type Props = {
  name?: string;
  username?: string;
  profilepic?: StaticImageData;
  rating?: number;
  Comment?: string;
};

export default function TestimonialCard({
  name = "Bessie Alexa",
  username = "bessiee",
  profilepic = image1,
  rating = 4.9,
  Comment = "My wife and I had a dream of downsizing from our house in Cape Elizabeth into a small condo closer to where we work and play in Portland. David and his skilled team helped make that dream a reality. The sale went smoothly, and we just closed on an ideal new place we're excited to call home.!",
}: Props) {
  return (
    <div className="flex w-full flex-col gap-y-4 divide-y-2 divide-peacoat-200/30 border-[1px] border-peacoat-600/30 bg-[#373741] px-8 py-6 text-peacoat-800 xl:px-16 xl:py-12">
      {/* top */}
      <div className="flex flex-row-reverse items-center justify-between text-end">
        <div className="xs:text-2xl flex flex-col gap-y-2 text-xl">
          <p className=" font-bold text-almondFrost-200 ">{name}</p>
          <div className="xs:text-xl flex flex-row items-center gap-x-2 text-base font-semibold text-almondFrost-400">
            <FaTwitter className="h-5 w-5"></FaTwitter> <p>{"@" + username}</p>
          </div>
        </div>
        <figure className="relative aspect-square w-20 overflow-hidden rounded-full">
          <Image
            className="object-cover opacity-50"
            fill
            src={profilepic}
            alt={""}
          ></Image>
        </figure>
      </div>

      {/* rating */}
      <div className="flex flex-col items-end gap-y-2 pt-3">
        <div className="flex flex-row-reverse items-center gap-x-3">
          <figure className="flex flex-row items-center gap-x-1">
            <StarIcon className="h-6 w-6 text-almondFrost-400"></StarIcon>
            <StarIcon className="h-6 w-6 text-almondFrost-400"></StarIcon>
            <StarIcon className="h-6 w-6 text-almondFrost-400"></StarIcon>
            <StarIcon className="h-6 w-6 text-almondFrost-400"></StarIcon>
            <StarIcon className="h-6 w-6 text-almondFrost-400"></StarIcon>
          </figure>
          <p className="mb-1 text-xl font-semibold text-almondFrost-400">
            {rating}
            <span className="font-medium">/5</span>
          </p>
        </div>
        <p className="text-end font-medium text-almondFrost-400/60">
          {Comment}
        </p>
      </div>
    </div>
  );
}
