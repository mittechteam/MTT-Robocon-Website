import React from "react";
import { GlobeDemo } from "./heroSection";
import { AlumniSection } from "./alumniSection";

const page = () => {
  return (
    <section className="min-h-screen w-full ">
      <div className="max-w-7xl mx-auto text-center mt-36 mb-10">
        <p className="font-bold text-xl md:text-4xl text-white">
          Our <span className="text-red-500">Alumni</span>
        </p>
        <p className="text-base text-neutral-300 max-w-6xl text-justify mx-auto py-4">
          Our alumni have gone on to achieve remarkable success in various
          fields across the globe. From pioneering technological advancements to
          leading major corporations, they continue to make significant
          contributions to society. Their journey with our club has equipped
          them with the skills and experiences necessary to excel in their
          respective careers. We are proud of their accomplishments and the
          positive impact they are making in the world.
        </p>
        <div className=" gap-6 lg:grid grid-cols-2 items-center justify-center">
          <GlobeDemo />
          <AlumniSection />
        </div>
      </div>
    </section>
  );
};

export default page;
