"use client";

import { useEffect, useState } from "react";
import Lottie from "lottie-react";

const RobotAnimation = () => {
  const [animation, setAnimation] = useState<object | null>(null);

  useEffect(() => {
    // Import the animation file dynamically
    import("../../../public/robot.json").then((animationData) => {
      setAnimation(animationData.default);
    });
  }, []);

  if (!animation) {
    return null; // or a loading placeholder
  }

  return (
    <div className="h-fit ">
      <Lottie animationData={animation} loop={true} />
    </div>
  );
};

export default RobotAnimation;
