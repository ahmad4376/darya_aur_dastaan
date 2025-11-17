import dynamic from "next/dynamic";
import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";

export const metadata: Metadata = {
  title: "Darya aur Dastaan | Climate Storytelling Initiative",
  description: "A Pakistan-based, women-centred climate storytelling initiative documenting how ordinary people experience floods and water disasters through videos, voice notes, and testimonies.",
};

// Dynamic imports for below-the-fold content
const AboutPreview = dynamic(() => import("@/components/sections/about-preview").then(mod => ({ default: mod.AboutPreview })), {
  loading: () => <div className="py-24 px-4 bg-muted/30" />,
});

const WorkPreview = dynamic(() => import("@/components/sections/work-preview").then(mod => ({ default: mod.WorkPreview })), {
  loading: () => <div className="py-20 px-4" />,
});

const Contact = dynamic(() => import("@/components/sections/contact").then(mod => ({ default: mod.Contact })), {
  loading: () => <div className="py-20 px-4 bg-muted/30" />,
});

export default function Home() {
  return (
    <main className="relative w-full">
      <Hero />
      <AboutPreview />
      <WorkPreview />
      <Contact />
    </main>
  );
}
