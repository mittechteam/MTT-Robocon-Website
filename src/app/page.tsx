import React from "react";
import dynamic from "next/dynamic";
import Carousel from "@/components/logoCarousel/carousel";
import GradualSpacing from "@/components/ui/gradual-spacing";
import {
  Instagram,
  Linkedin,
  Twitter,
  YoutubeIcon,
  Facebook,
} from "lucide-react";
import { HeroVideoDialogDemo } from "@/components/videoHero/heroVideo";
import { Metadata } from "next";

const Scene = dynamic(() => import("@/components/model/scene"), { ssr: false });

const socialIcons = [
  {
    Icon: Instagram,
    url: "https://www.instagram.com/robocon.mit/",
    hoverColor: "hover:text-pink-500",
  },
  {
    Icon: Linkedin,
    url: "https://www.linkedin.com/company/mittechteam/",
    hoverColor: "hover:text-blue-500",
  },
  {
    Icon: Twitter,
    url: "https://x.com/MITtechTeam",
    hoverColor: "hover:text-white",
  },
  {
    Icon: Facebook,
    url: "https://www.facebook.com/MITTechTeam/",
    hoverColor: "hover:text-blue-800",
  },
  {
    Icon: YoutubeIcon,
    url: "https://www.youtube.com/c/MITRoboconTechTeam",
    hoverColor: "hover:text-[#ff0000]",
  },
];

const ScrollDown = dynamic(() => import("@/components/ui/scrollDown"), {
  ssr: false,
});

export const metadata: Metadata = {
  title: "Home | MIT Tech Team",
  description:
    "At MIT-World Peace University, Pune, India, we are proud participants of ABU Robocon. With over 100 Indian teams competing annually, our team stands out as one of the top robotics teams in the country. As we set our sights on the DD Robocon 2025, we are more determined than ever to achieve victory and once again proudly represent India on the international stage. Join us on this exciting journey!",
  icons: {
    icon: "/MTT_logo.svg",
  },
};

export default function Page() {
  return (
    <>
      <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen p-4 sm:p-6 md:p-8 lg:p-10 mt-32 sm:mt-24 md:mt-32 lg:mt-0 relative overflow-hidden">
        <div className="hidden lg:block absolute bottom-12 md:bottom-16 lg:bottom-28 left-1/2 transform -translate-x-1/2">
          <ScrollDown />
        </div>
        <div className="max-w-full lg:max-w-2xl mb-8 lg:mb-0 lg:w-1/2">
          <h1 className="sm:text-4xl lg:text-7xl text-4xl font-bold text-white mb-4">
            <span className="text-[#c73808]">MIT</span> Tech Team
          </h1>
          <p className="mt-4 font-normal text-sm sm:text-base text-justify text-gray-400">
            At MIT - World Peace University, Pune, India, we are proud
            participants of ABU Robocon. With over 100 Indian teams competing
            annually, our team stands out as one of the top robotics teams in
            the country. As we set our sights on the DD Robocon 2025, we are
            more determined than ever to achieve victory and once again proudly
            represent India on the international stage. Join us on this exciting
            journey!
          </p>
          <div className="w-fit mx-auto mt-4 sm:mt-6 hidden sm:block">
            <GradualSpacing
              className="font-display italic text-start text-base sm:text-lg md:text-xl font-bold -tracking-widest text-[#c73808] dark:text-white md:leading-[3rem] lg:leading-[5rem]"
              text="We don't just build Robots, We build people who build robots"
            />
          </div>
          <div className="flex gap-x-4 sm:gap-x-6 flex-wrap justify-start mt-4 sm:mt-6">
            {socialIcons.map(({ Icon, url, hoverColor }, index) => (
              <a
                key={index}
                href={url}
                className={`text-gray-400 ${hoverColor} transition-colors duration-300`}
              >
                <Icon
                  size={24}
                  className="sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-10 lg:h-10"
                />
              </a>
            ))}
          </div>
        </div>
        <div className="w-full lg:w-1/2 h-[50vh] sm:h-[40vh] md:h-[50vh] lg:h-[60vh] flex items-center justify-center mt-8 lg:mt-0">
          <Scene />
        </div>
      </div>
      <div className="p-4 sm:p-6 md:p-8 lg:p-10 mb-16 sm:mb-24 md:mb-32 flex items-center justify-center">
        <HeroVideoDialogDemo />
      </div>
      <Carousel />
    </>
  );
}
