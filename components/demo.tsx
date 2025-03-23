"use client";
import React from "react";
import { WavyBackground } from "@/components/ui/wavy-background";

export function WavyBackgroundDemo() {
  return (
    <WavyBackground 
      className="max-w-4xl mx-auto pb-40"
      colors={[
        "#2F4F2F", // Dunkelgrün matt
        "#3A5A40", // Waldgrün matt
        "#588157", // Mittleres Grün matt
        "#90A959", // Helles Grün matt
        "#4F6F4F"  // Olivgrün matt
      ]}
      speed="slow"
      waveOpacity={0.6}
      backgroundFill="#1a1a1a"
      blur={8}
    >
      <div className="h-[40vh] md:h-[60vh]" />
    </WavyBackground>
  );
} 