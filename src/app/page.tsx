import { NavbarDemo } from "@/components/navbar/navbar";
import Image from "next/image";
import React from "react";
import MTTlogo from "@/assets/logos/MTT-Logo.svg";

export default function Page() {
  return (
    <div className="min-h-screen relative bg-black dark:bg-white bg-dot-white/[0.2] dark:bg-dot-white/[0.2]">
      <div className="absolute top-4 left-6 z-50">
        <Image
          src={MTTlogo}
          alt="MTT-Logo"
          width={75}
          height={75}
        />
      </div>
      <NavbarDemo />
      <div className="flex flex-col items-start justify-center min-h-screen p-6">
        <div className="max-w-7xl">
          <h1 className="text-4xl md:text-7xl max-w-2xl font-bold text-white mb-4">
            Spotlight is the new trend.
          </h1>
          <p className="mt-4 font-normal text-base text-neutral-300 max-w-2xl mx-auto">
            Spotlight effect is a great way to draw attention to a specific part
            of the page. Here, we are drawing the attention towards the text
            section of the page. I don&apos;t know why but I&apos;m running out of
            copy.
          </p>
        </div>
      </div>
    </div>
  );
}