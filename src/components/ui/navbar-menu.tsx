"use client";
import React from "react";
import { motion } from "framer-motion";

export const MenuItem = ({
  setActive,

  item,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
}) => {
  return (
    <div onMouseEnter={() => setActive(item)} className="relative ">
      <motion.p
        transition={{ duration: 0.3 }}
        className="cursor-pointer gap-x-10 text-white hover:opacity-[0.9] dark:text-white"
      >
        {item}
      </motion.p>
    </div>
  );
};

export const Menu = ({ children }: { children: React.ReactNode }) => {
  return (
    <nav className="relative rounded-full border border-transparent dark:bg-black dark:border-white/[0.2]  shadow-input flex justify-center gap-x-10 px-8 py-6 ">
      {children}
    </nav>
  );
};
