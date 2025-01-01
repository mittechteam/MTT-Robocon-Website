"use client";
import Image from "next/image";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { LinkedinIcon } from "lucide-react";
import Link from "next/link";

export const Card = React.memo(
  ({
    card,
    index,
    hovered,
    setHovered,
  }: {
    card: Card;
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
  }) => (
    <div
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "rounded-lg relative bg-gray-100 dark:bg-neutral-900 overflow-hidden h-60 md:h-96 w-full transition-all duration-300 ease-out",
        hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
      )}
    >
      <Image
        src={card.src}
        alt={card.title}
        fill
        className="object-cover absolute inset-0 h-fit w-full"
      />
      <div
        className={cn(
          "absolute inset-0 bg-black/50 flex flex-col text-left items-start py-8 px-4 transition-opacity duration-300",
          hovered === index ? "opacity-100" : "opacity-0"
        )}
      >
        <div className="flex justify-between w-full">
          <div className="text-xs md:text-sm font-bold bg-clip-text text-red-700 bg-gradient-to-b from-neutral-50 to-neutral-200">
            {card.title}
          </div>
          <Link href={card.linkedIn}>
            <LinkedinIcon className="text-blue-400 cursor-pointer" />
          </Link>
        </div>
        <div className="text-xs md:text-sm font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200">
          {card.designation}
        </div>
        <div className="text-xs md:text-sm font-normal bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200">
          {card.location}
        </div>
      </div>
    </div>
  )
);

Card.displayName = "Card";

type Card = {
  title: string;
  src: string;
  designation: string;
  location: string;
  linkedIn: string;
};

export function FocusCards({ cards }: { cards: Card[] }) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-10 max-w-7xl mx-auto md:px-8 w-full">
      {cards.map((card, index) => (
        <Card
          key={card.title}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
        />
      ))}
    </div>
  );
}
