"use client";

import { useEffect, useState } from "react";
import Lottie from "lottie-react";

const ScrollDown = () => {
  const [animation, setAnimation] = useState<object | null>(null);

  useEffect(() => {
    // Import the animation file dynamically
    import("../../../public/scrollDown.json").then((animationData) => {
      setAnimation(animationData.default);
    });
  }, []);

  if (!animation) {
    return null; // or a loading placeholder
  }

  return (
    <div className="w-16 h-16">
      <Lottie animationData={animation} loop={true} />
    </div>
  );
};

export default ScrollDown;