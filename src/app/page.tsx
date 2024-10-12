import { NavbarDemo } from "@/components/navbar/navbar";
import Image from "next/image";
import React from "react";
import MTTlogo from "@/assets/logos/MTT-Logo.svg";
import dynamic from "next/dynamic";

const Scene = dynamic(() => import("@/components/model/scene"), { ssr: false });

export default function Page() {
  return (
    <div className="min-h-screen relative bg-black dark:bg-white bg-dot-white/[0.2] dark:bg-dot-white/[0.2] overflow-hidden">
      <div className="absolute top-4 left-10 z-50">
        <Image src={MTTlogo} alt="MTT-Logo" width={75} height={75} />
      </div>
      <NavbarDemo />
      <div className="flex flex-col md:flex-row items-center justify-between min-h-screen p-10">
        <div className="max-w-2xl mb-8 md:mb-0">
          <h1 className="text-4xl md:text-7xl font-bold text-white mb-4">
            <span className="text-[#c73808]">MIT</span> Tech Team
          </h1>
          <p className="mt-4 font-normal text-base text-justify text-neutral-300">
            At MIT-World Peace University, Pune, India, we are proud
            participants in the prestigious ABU Robocon event each year. With
            over 100 Indian teams competing annually, our team stands out as one
            of the top robotics teams in the country.
          </p>
        </div>
        <div className="w-full md:w-1/2 h-[50vh] md:h-[80vh] flex items-center justify-center">
          <div className="w-full h-full">
            <Scene />
          </div>
        </div>
      </div>
    </div>
  );
}
