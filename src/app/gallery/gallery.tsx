"use client";
import { ParallaxScroll } from "@/components/ui/parallax-scroll";

export default function Gallery() {
  return <ParallaxScroll images={images} />;
}

const images = [
  "/images/A-0.jpg",
  "/images/A-1.JPG",
  "/images/A-2.JPG",
  "/images/A-3.jpg",
  "/images/A-4.jpg",
];
