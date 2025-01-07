import React from "react";
import { AlumniSection } from "./alumniSection";
import { WorldMapDemo } from "./worldMap";
import { Metadata } from "next";

export const metaData: Metadata = {
  title: "Alumni | MIT Tech Team",
  description:
    "Alumni of MIT Tech Team have gone on to achieve remarkable success in various fields across the globe.",
  icons: {
    icon: "/MTT-Logo.svg",
  },
};

const page = () => {
  return (
    <section className="min-h-screen w-full px-4 md:px-8 lg:px-10 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center mt-36 mb-10">
        <p className="text-3xl lg:text-5xl font-semibold mb-4 text-white">
          Our <span className="text-red-500">Alumni</span>
        </p>
        <p className="text-white dark:text-neutral-300 text-sm md:text-base text-justify py-4">
          Our alumni have gone on to achieve remarkable success in various
          fields across the globe. From pioneering technological advancements to
          leading major corporations, they continue to make significant
          contributions to society. Their journey with our club has equipped
          them with the skills and experiences necessary to excel in their
          respective careers. We are proud of their accomplishments and the
          positive impact they are making in the world.
        </p>
        <WorldMapDemo />
        <div className=" gap-6 flex flex-row items-center justify-center">
          <AlumniSection />
        </div>
      </div>
    </section>
  );
};

export default page;
