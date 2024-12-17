"use client";
import React from "react";
import { Menu } from "../ui/navbar-menu";
import { cn } from "@/lib/utils";
import TransitionLink from "../transition/transitionLink";

export function NavbarDemo() {
  return (
    <div className="absolute top-0 left-0 right-0 z-40">
      <Navbar />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  return (
    <div className={cn("max-w-2xl mx-auto font-spaceGrotesk py-4", className)}>
      <Menu>
        <TransitionLink href="/" label="Home" />
        <TransitionLink href="/team" label="Team" />
        <TransitionLink href="/achievements" label="Achievements" />
        <TransitionLink href="/gallery" label="Gallery" />
        <TransitionLink href="/contact" label="Contact" />
      </Menu>
    </div>
  );
}
