"use client";
import React, { useState } from "react";
import { Menu} from "../ui/navbar-menu";
import { cn } from "@/lib/utils";
import TransitionLink from "../transition/transitionLink";

export function NavbarDemo() {
  return (
    <div className="absolute top-0 left-0 right-0">
      <Navbar />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("max-w-2xl mx-auto font-spaceGrotesk py-4", className)}
    >
      <Menu setActive={setActive}>
        {/* <MenuItem setActive={setActive} active={active} item="Home" />
        <MenuItem setActive={setActive} active={active} item="Achievements" />
        <MenuItem setActive={setActive} active={active} item="Our Team" />
        <MenuItem setActive={setActive} active={active} item="Alumni" />
        <MenuItem setActive={setActive} active={active} item="Contact" /> */}
        <TransitionLink href="/" label="Home" />
        <TransitionLink href="/team" label="Team" />
        <TransitionLink href="/achievements" label="Achievements" />
        <TransitionLink href="/alumni" label="Alumni" />
        <TransitionLink href="/contact" label="Contact" />
      </Menu>
    </div>
  );
}
