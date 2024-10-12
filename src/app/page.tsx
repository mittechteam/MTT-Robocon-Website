import React from "react";

import dynamic from "next/dynamic";
import Carousel from "@/components/logoCarousel/carousel";
import Footer from "@/components/footer/footer";

const Scene = dynamic(() => import("@/components/model/scene"), { ssr: false });

export default function Page() {
  return (
    <>
      <div className="flex items-center justify-between min-h-screen p-10">
        <div className="max-w-2xl mb-8 md:mb-0">
          <h1 className="text-4xl md:text-7xl font-bold text-white mb-4">
            <span className="text-[#c73808]">MIT</span> Tech Team
          </h1>
          <p className="mt-4 font-normal text-base text-justify text-neutral-300">
            At MIT-World Peace University, Pune, India, we are proud
            participants in the prestigious ABU Robocon event each year. With
            over 100 Indian teams competing annually, our team stands out as one
            of the top robotics teams in the country. As we set our sights on the
            DD Robocon 2025, we are more determined than ever to achieve victory
            and once again proudly represent India on the international stage.
            Join us on this exciting journey!
          </p>
          <p className="mt-4 font-normal text-base text-justify text-neutral-300">Social Logos</p>
        </div>
        <div className="w-full md:w-1/2 h-[50vh] md:h-[80vh] flex items-center justify-center">
          <Scene />
        </div>
      </div>
      <Carousel />
      <Footer />
    </>
  );
}
