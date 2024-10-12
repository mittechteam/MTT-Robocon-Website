"use client";
import React, { useState } from "react";
import { Menu, MenuItem } from "../ui/navbar-menu";
import { cn } from "@/lib/utils";

export function NavbarDemo() {
  return (
    <div className="absolute top-0 left-0 right-0 z-40">
      <Navbar />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("max-w-2xl mx-auto z-50 font-spaceGrotesk py-4", className)}
    >
      <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item="Home" />
        <MenuItem setActive={setActive} active={active} item="Achievements" />
        <MenuItem setActive={setActive} active={active} item="Our Team" />
        <MenuItem setActive={setActive} active={active} item="Alumni" />
        <MenuItem setActive={setActive} active={active} item="Contact" />
      </Menu>
    </div>
  );
}