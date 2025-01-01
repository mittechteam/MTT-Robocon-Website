import React from "react";
import { AlumniSection } from "./alumniSection";
import dynamic from "next/dynamic";
import { WorldMapDemo } from "./worldMap";

const page = () => {
  const RobotAnimation = dynamic(() => import("../alumni/robotAnimation"), {
    ssr: false,
  });
  return (
    <section className="min-h-screen w-full px-4 md:px-8 lg:px-10 ">
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
        <div className=" gap-6 lg:grid grid-cols-2 items-center justify-center">
          <RobotAnimation />
          <AlumniSection />
        </div>
      </div>
    </section>
  );
};

export default page;
