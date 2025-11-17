"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="space-y-2">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground">
            Something went wrong
          </h1>
          <p className="text-lg text-muted-foreground">
            We're sorry, but something unexpected happened. Please try again.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={reset}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            Try again
          </Button>
          <Button
            onClick={() => window.location.href = "/"}
            size="lg"
            variant="outline"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
          >
            Go home
          </Button>
        </div>
      </div>
    </div>
  );
}
