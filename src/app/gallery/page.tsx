import React from "react";
import Gallery from "./gallery";

const page = () => {
  return (
    <div>
      <h1 className="text-5xl font-semibold mt-48 mb-4 font-spaceGrotesk text-[#F5F5F5] text-center">
        A Collection of <span className="text-[#c73808]">Memories</span> 📸
      </h1>
      <Gallery />
    </div>
  );
};

export default page;
