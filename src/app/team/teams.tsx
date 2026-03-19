"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { LinkedinIcon } from 'lucide-react';

interface TeamProps {
  cards: Array<{
    description: string;
    title: string;
    src: string;
    ctaLink: string;
    content: () => JSX.Element;
  }>;
}

export default function Teams({ cards }: TeamProps) {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(null);
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(null);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  // Sort cards by role
  const facultyMentor = cards.find(card => /Faculty Mentor/i.test(card.description));
  const captainByDesc = cards.find(card => /\bCaptain\b/i.test(card.description) && !/\bVice[-\s]?Captain\b/i.test(card.description));
  const viceCaptainByDesc = cards.find(card => /\bVice[-\s]?Captain\b/i.test(card.description));
  const captain =
    captainByDesc ??
    cards.find(card => ["Jayesh Sangave", "Harsh Chourasia"].includes(card.title));
  const viceCaptain =
    viceCaptainByDesc ??
    cards.find(card => ["Avnish Deshmukh", "Om Gunjal"].includes(card.title));
  const controlsMembers = cards.filter(card => 
    card.description.includes("Controls") &&
    !card.description.includes("Faculty Mentor") &&
    (!captain || card.title !== captain.title) &&
    (!viceCaptain || card.title !== viceCaptain.title)
  );
  const circuitsMembers = cards.filter(card => 
    card.description.includes("Circuits") &&
    !card.description.includes("Faculty Mentor") &&
    (!captain || card.title !== captain.title) &&
    (!viceCaptain || card.title !== viceCaptain.title)
  );
  const mechMembers = cards.filter(card => 
    card.description.includes("Mech") &&
    !card.description.includes("Faculty Mentor") &&
    (!captain || card.title !== captain.title) &&
    (!viceCaptain || card.title !== viceCaptain.title)
  );
  const nonTechMembers = cards.filter(card => 
    card.description.includes("Non-Tech") &&
    !card.description.includes("Faculty Mentor") &&
    (!captain || card.title !== captain.title) &&
    (!viceCaptain || card.title !== viceCaptain.title)
  );

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10 backdrop-blur-sm"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0 grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{
                opacity: 0,
                transition: { duration: 0.05 },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-neutral-800 rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[90%] sm:max-w-[500px] h-fit md:h-fit flex flex-col bg-neutral-800 rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.title}-${id}`} className="relative h-96">
                <Image
                  priority
                  fill
                  src={active.src}
                  alt={active.title}
                  className="sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                  quality={95}
                  sizes="(max-width: 768px) 100vw, 500px"
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div>
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-medium text-neutral-200 text-base"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.title}-${id}`}
                      className="text-neutral-400 text-base"
                    >
                      {active.description}
                    </motion.p>
                  </div>

                  <div className="flex items-center">
                    <motion.a
                      layout
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      href={active.ctaLink}
                      target="_blank"
                      className="px-4 py-3 text-sm rounded-full font-bold bg-blue-500 text-white flex items-center"
                    >
                      <LinkedinIcon className="h-4 w-4" />
                    </motion.a>
                  </div>
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-400 text-xs md:text-sm lg:text-base  md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)]"
                  >
                    {typeof active.content === "function" ? active.content() : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>

      <div className="max-w-5xl mx-auto w-full space-y-8">
        {/* Faculty Mentor Row */}
        {facultyMentor && (
          <div className="flex justify-center">
            <motion.div
              layoutId={`card-${facultyMentor.title}-${id}`}
              onClick={() => setActive(facultyMentor)}
              className="p-4 w-full max-w-sm flex flex-col hover:bg-neutral-800 rounded-xl cursor-pointer"
            >
              <div className="flex gap-4 flex-col w-full">
                <motion.div
                  layoutId={`image-${facultyMentor.title}-${id}`}
                  className="relative aspect-square"
                >
                  <Image
                    fill
                    src={facultyMentor.src}
                    alt={facultyMentor.title}
                    className="rounded-lg object-cover object-top"
                    quality={90}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </motion.div>
                <div className="flex justify-center items-center flex-col">
                  <motion.h3
                    layoutId={`title-${facultyMentor.title}-${id}`}
                    className="font-medium text-neutral-200 text-center text-base"
                  >
                    {facultyMentor.title}
                  </motion.h3>
                  <motion.p
                    layoutId={`description-${facultyMentor.title}-${id}`}
                    className="text-center text-base text-purple-500"
                  >
                    {facultyMentor.description}
                  </motion.p>
                </div>
              </div>
            </motion.div>
          </div>
        )}

        {/* Captain and Vice-Captain Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {captain && (
            <TeamCard card={captain} id={id} setActive={setActive} />
          )}
          {viceCaptain && (
            <TeamCard card={viceCaptain} id={id} setActive={setActive} />
          )}
        </div>

        {/* Other Members Grid */}
        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {controlsMembers.map((card) => (
              <TeamCard key={card.title} card={card} id={id} setActive={setActive} />
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {circuitsMembers.map((card) => (
              <TeamCard key={card.title} card={card} id={id} setActive={setActive} />
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {mechMembers.map((card) => (
              <TeamCard key={card.title} card={card} id={id} setActive={setActive} />
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {nonTechMembers.map((card) => (
              <TeamCard key={card.title} card={card} id={id} setActive={setActive} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

function TeamCard({ 
  card, 
  id, 
  setActive 
}: { 
  card: TeamProps['cards'][number], 
  id: string, 
  setActive: (card: TeamProps['cards'][number]) => void 
}) {
  return (
    <motion.div
      layoutId={`card-${card.title}-${id}`}
      onClick={() => setActive(card)}
      className="p-4 w-full flex flex-col hover:bg-neutral-800 rounded-xl cursor-pointer"
    >
      <div className="flex gap-4 flex-col w-full">
        <motion.div
          layoutId={`image-${card.title}-${id}`}
          className="relative aspect-square"
        >
          <Image
            fill
            src={card.src}
            alt={card.title}
            className="rounded-lg object-cover object-top"
            quality={90}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </motion.div>
        <div className="flex justify-center items-center flex-col">
          <motion.h3
            layoutId={`title-${card.title}-${id}`}
            className="font-medium text-neutral-200 text-center text-base"
          >
            {card.title}
          </motion.h3>
          <motion.p
            layoutId={`description-${card.title}-${id}`}
            className={`text-center text-base ${
              card.description.includes("Captain") ? "text-purple-500" :
              card.description.includes("Circuits") ? "text-red-500" :
              card.description.includes("Controls") ? "text-yellow-500" :
              card.description.includes("Mech") ? "text-green-500" :
              card.description.includes("Non-Tech") ? "text-blue-500" :
              "text-neutral-400"
            }`}
          >
            {card.description}
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
}

const CloseIcon = () => {
  return (
    <motion.svg
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{
        opacity: 0,
        transition: { duration: 0.05 },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 bg-black text-red-500 z-50"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};
