"use client";
import { Button } from "@/components/ui/button";
import { CoolMode } from "@/components/ui/cool-mode";

export function RecruitmentButton() {
  return (
    <div className="relative justify-center">
      <CoolMode>
        <Button className="bg-red-800 hover:bg-red-500">Recruitment Form!</Button>
      </CoolMode>
    </div>
  );
}
