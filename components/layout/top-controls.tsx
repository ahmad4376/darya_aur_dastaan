"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { Home } from "lucide-react";

export const TopControls = () => {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <div className="absolute top-4 right-4 md:top-8 md:right-8 z-50 flex items-center gap-3">
      {!isHomePage && (
        <Link href="/">
          <Button
            size="sm"
            variant="outline"
            className="rounded-full border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors"
          >
            <Home className="h-4 w-4 mr-2" />
            Home
          </Button>
        </Link>
      )}
      <ThemeToggle />
      <Button
        size="sm"
        className="bg-secondary hover:bg-secondary/90 text-secondary-foreground rounded-full"
      >
        Donate Now
      </Button>
    </div>
  );
};
