"use client";
import WorldMap from "@/components/ui/world-map";

export function WorldMapDemo() {
  return (
    <div className=" pb-20 w-full">
      <WorldMap
        dots={[
          {
            start: {
              lat: 64.2008,
              lng: -149.4937,
            }, // Alaska (Fairbanks)
            end: {
              lat: 34.0522,
              lng: -118.2437,
              label: "Los Angeles",
            }, // Los Angeles
          },
          {
            start: { lat: 64.2008, lng: -149.4937 }, // Alaska (Fairbanks)
            end: { lat: -15.7975, lng: -47.8919 }, // Brazil (Brasília)
          },
        ]}
      />
    </div>
  );
}
