import React from "react";
import dynamic from "next/dynamic";
import Carousel from "@/components/logoCarousel/carousel";
import GradualSpacing from "@/components/ui/gradual-spacing";
import { Instagram, Linkedin, Twitter, YoutubeIcon,Facebook } from "lucide-react";

const Scene = dynamic(() => import("@/components/model/scene"), { ssr: false });

const socialIcons = [
  { Icon: Instagram, url: "https://www.instagram.com/robocon.mit/", hoverColor: "hover:text-pink-500" },
  { Icon: Linkedin, url: "https://www.linkedin.com/company/mittechteam/", hoverColor: "hover:text-blue-400" },
  { Icon: Twitter, url: "https://x.com/MITtechTeam", hoverColor: "hover:text-white" },
  { Icon: Facebook, url: "https://www.facebook.com/MITTechTeam/", hoverColor: "hover:text-blue-800" },
  { Icon: YoutubeIcon, url: "https://www.youtube.com/c/MITRoboconTechTeam", hoverColor: "hover:text-red-500" },
];

export default function Page() {
  return (
    <>
      <div className="flex items-center justify-between min-h-screen p-10">
        <div className="max-w-2xl mb-8 md:mb-0">
          <h1 className="text-4xl md:text-7xl font-bold text-white mb-4">
            <span className="text-[#c73808]">MIT</span> Tech Team
          </h1>
          <p className="mt-4 font-normal text-base text-justify text-gray-400">
            At MIT-World Peace University, Pune, India, we are proud
            participants in the prestigious ABU Robocon event each year. With
            over 100 Indian teams competing annually, our team stands out as one
            of the top robotics teams in the country. As we set our sights on
            the DD Robocon 2025, we are more determined than ever to achieve
            victory and once again proudly represent India on the international
            stage. Join us on this exciting journey!
          </p>
          <div className="ml-3">
            <GradualSpacing
              className="font-display text-start text-lg font-bold -tracking-widest text-[#c73808] dark:text-white md:text-xl md:leading-[5rem]"
              text="We don't just build Robots, We build people who build robots."
            />
          </div>
          <div className="flex gap-x-6">
            {socialIcons.map(({ Icon, url, hoverColor }, index) => (
              <a 
                key={index} 
                href={url} 
                className={`text-gray-400 ${hoverColor} transition-colors duration-300`}
              >
                <Icon size={30} />
              </a>
            ))}
          </div>
        </div>
        <div className="w-full md:w-1/2 h-[50vh] md:h-[70vh] flex items-center justify-center">
          <Scene />
        </div>
      </div>
      <Carousel />
    </>
  );
}