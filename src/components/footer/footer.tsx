import React from "react";
import { TextHoverEffect } from "../ui/text-hover-effect";
import { LinkPreview } from "../ui/link-preview";

const Footer = () => {
  return (
    <>
      <div className="h-[40rem] flex items-center justify-center">
        <TextHoverEffect text="MTT Robocon" />
      </div>
      <div>
        <hr className="border-t border-gray-600" />
        <p className="text-neutral-400 text-center md:text-left text-sm ml-10 m-5">
          &copy; 2024 MIT-WPU Tech Team. Developed with ❤️ by{" "}
          <LinkPreview url="https://mehul-uttam-portfolio.vercel.app/" className="text-blue-300">
            Mehul Uttam
          </LinkPreview>.
        </p>
      </div>
    </>
  );
};

export default Footer;
