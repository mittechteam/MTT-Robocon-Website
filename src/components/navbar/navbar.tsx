"use client";
import React, { useState } from "react";
import { Menu } from "../ui/navbar-menu";
import { cn } from "@/lib/utils";
import TransitionLink from "../transition/transitionLink";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import { animatePageOut } from "@/utils/animations";
import { ChevronDown } from "lucide-react";

export function NavbarDemo() {
  return (
    <div className="absolute top-0 left-0 right-0 z-40">
      <Navbar />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [isTeamOpen, setIsTeamOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const handleNavigate = (href: string) => {
    setIsTeamOpen(false);
    const basePath = href.split("?")[0];
    if (pathname !== basePath) {
      animatePageOut(href, router);
    } else {
      router.push(href);
    }
  };

  return (
    <div className={cn("max-w-2xl mx-auto font-spaceGrotesk py-4", className)}>
      <Menu>
        <TransitionLink href="/" label="Home" />

        <div
          className="relative"
          onMouseEnter={() => setIsTeamOpen(true)}
          onMouseLeave={() => setIsTeamOpen(false)}
        >
          <button
            type="button"
            className="flex items-center gap-1 text-lg font-spaceGrotesk text-gray-400 hover:text-[#c73808]"
          >
            Team
            <ChevronDown
              className={`h-4 w-4 transition-transform duration-200 ${
                isTeamOpen ? "rotate-180" : ""
              }`}
            />
          </button>
          <AnimatePresence>
            {isTeamOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.15 }}
                className="absolute left-1/2 top-full z-50 mt-3 flex min-w-[12rem] -translate-x-1/2 flex-col rounded-2xl border border-white/10 bg-black/90 px-4 py-3 shadow-lg backdrop-blur"
              >
                <button
                  type="button"
                  onClick={() => handleNavigate("/team?batch=2025-26")}
                  className="py-1 text-left text-sm font-spaceGrotesk text-gray-300 hover:text-[#c73808]"
                >
                  Current Team
                </button>
                <button
                  type="button"
                  onClick={() => handleNavigate("/team?batch=2024-25")}
                  className="mt-1 py-1 text-left text-sm font-spaceGrotesk text-gray-300 hover:text-[#c73808]"
                >
                  2024–25 Batch
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <TransitionLink href="/achievements" label="Achievements" />
        <TransitionLink href="/gallery" label="Gallery" />
        <TransitionLink href="/alumni" label="Alumni" />
        <TransitionLink href="/contact" label="Contact" />
      </Menu>
    </div>
  );
}
