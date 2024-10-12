import React from "react";
import Image from "next/image";

// Import your logos here. You'll need to adjust the paths based on your project structure.
import logo1 from "@/assets/logos/sponsor-1.png";
import logo2 from "@/assets/logos/sponsor-2.png";
import logo3 from "@/assets/logos/sponsor-3.png";
import logo4 from "@/assets/logos/sponsor-4.png";
import logo5 from "@/assets/logos/sponsor-5.png";
import logo6 from "@/assets/logos/sponsor-6.png";
import logo7 from "@/assets/logos/sponsor-7.png";


const logos = [logo1,logo2,logo3,logo4,logo5,logo6,logo7];

const Carousel: React.FC = () => {
  return (
    <div className="min-w-full pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-5xl text-center font-semibold text-white mb-4">
          Our Sponsors
        </h3>
        <p className="text-base font-normal text-center text-neutral-300 mb-8">
          Our SponsorOur SponsorOur SponsorOur SponsorOur SponsorOur Sponsor
        </p>
        <div className="flex overflow-hidden select-none">
          <div className="flex shrink-0 items-center justify-around whitespace-nowrap w-full animate-marquee">
            {logos.concat(logos).map((logo, index) => (
              <div key={index} className="mx-4">
                <Image
                  src={logo}
                  alt={`Partner logo ${index + 1}`}
                  width={100}
                  height={100}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
          <div className="flex shrink-0 items-center justify-around whitespace-nowrap w-full animate-marquee">
            {logos.concat(logos).map((logo, index) => (
              <div key={index + logos.length} className="mx-4">
                <Image
                  src={logo}
                  alt={`Partner logo ${index + 1}`}
                  width={100}
                  height={100}
                  className="object-contain"
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
