"use client";

import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { Spotlight } from "@/components/ui/spotlight-new";
import { Button } from "@/components/ui/button";
import { TopControls } from "@/components/layout/top-controls";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export const Hero = () => {
  const words = [
    { text: "The" },
    { text: "floods" },
    { text: "memoir," },
    { text: "written" },
    { text: "in" },
    { text: "their" },
    { text: "voices", className: "text-secondary" },
  ];

  return (
    <div className="relative w-full">
      <Spotlight
        gradientFirst="radial-gradient(68.54% 68.72% at 55.02% 31.46%, rgba(51, 72, 74, 0.12) 0, rgba(51, 72, 74, 0.04) 50%, rgba(51, 72, 74, 0) 80%)"
        gradientSecond="radial-gradient(50% 50% at 50% 50%, rgba(152, 118, 85, 0.1) 0, rgba(152, 118, 85, 0.03) 80%, transparent 100%)"
        gradientThird="radial-gradient(50% 50% at 50% 50%, rgba(184, 153, 104, 0.08) 0, rgba(184, 153, 104, 0.02) 80%, transparent 100%)"
      />

      <TopControls />

      <div className="text-center w-full py-40 relative z-10">
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-8 bg-clip-text text-transparent bg-gradient-to-b from-foreground to-foreground/70">
          Darya aur Dastaan
        </h1>

        <TypewriterEffectSmooth
          words={words}
          className="justify-center"
          cursorClassName="bg-secondary"
        />

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/about">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg"
            >
              Learn More
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <Link href="/our-work">
            <Button
              size="lg"
              variant="outline"
              className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground px-8 py-6 text-lg"
            >
              View Our Work
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
