import React from "react";
import Image from "next/image";

import logo1 from "@/assets/logos/sponsor-1.svg";
import logo2 from "@/assets/logos/sponsor-2.svg";
import logo3 from "@/assets/logos/sponsor-31.svg";
import logo4 from "@/assets/logos/sponsor-4.svg";
import logo5 from "@/assets/logos/sponsor-5.svg";
import logo6 from "@/assets/logos/sponsor-61.svg";
import logo7 from "@/assets/logos/sponsor-7.svg";

const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7];

const Carousel: React.FC = () => {
  return (
    <div className="min-w-full pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-center font-semibold text-white mb-4">
          Our <span className="text-[#c73808]">Sponsors</span>
        </h3>
        <p className="px-10 text-base font-normal text-center text-gray-400 mb-8">
          Our valued sponsors who make our projects and initiatives possible.
          Their support drives innovation and empowers us to create meaningful
          impact. Thank you for being a key part of our journey!
        </p>
        <div className="flex overflow-hidden select-none">
          <div className="flex shrink-0 items-center justify-around whitespace-nowrap animate-marquee">
            {logos.concat(logos).map((logo, index) => (
              <div key={index} className="mx-4">
                <Image
                  src={logo}
                  alt={`Partner logo ${index + 1}`}
                  width={200}
                  height={200}
                />
              </div>
            ))}
          </div>
          <div className="flex shrink-0 items-center justify-around whitespace-nowrap animate-marquee">
            {logos.concat(logos).map((logo, index) => (
              <div key={index + logos.length} className="mx-4">
                <Image
                  src={logo}
                  alt={`Partner logo ${index + 1}`}
                  width={200}
                  height={200}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
