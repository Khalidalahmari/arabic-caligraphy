import Logo from "@/components/Logos/Logo_Light";
import Pattern from "@/components/Patterns/Pattern";
import Pattern_Dark from "@/components/Patterns/Pattern_Dark";
import Pattern_white from "@/components/Patterns/Pattern_white";
import React from "react";

type Props = {};

export default function page({}: Props) {
  return (
    <div className="h-screen w-screen bg-stone-900">
      <Logo />
      <Pattern_white className="mt-[900px] w-96" />
      {/*<Pattern className="w-96" />
      <Pattern_Dark className="w-96" /> */}
    </div>
  );
}
