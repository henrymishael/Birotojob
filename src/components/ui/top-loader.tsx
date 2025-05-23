"use client";

import { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { cn } from "@/lib/utils";

interface TopLoaderProps {
  color?: string;
  height?: number;
  showSpinner?: boolean;
  startPosition?: number;
  stopDelayMs?: number;
  options?: {
    showSpinner?: boolean;
  };
}

export default function TopLoader({
  color = "linear-gradient(to right, #533ae9, #6d5aff)",
  height = 3,
  showSpinner = false,
  startPosition = 0.3,
  stopDelayMs = 200,
}: TopLoaderProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [progress, setProgress] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [prevPath, setPrevPath] = useState("");

  // Start the loader
  const start = () => {
    setIsAnimating(true);
    setProgress(startPosition);

    // Simulate progress
    const incrementInterval = setInterval(() => {
      setProgress((oldProgress) => {
        const diff = Math.random() * 10;
        const newProgress = Math.min(oldProgress + diff, 90);

        if (newProgress === 90) {
          clearInterval(incrementInterval);
        }

        return newProgress;
      });
    }, 300);

    return () => clearInterval(incrementInterval);
  };

  // Complete the loader
  const complete = () => {
    setProgress(100);

    setTimeout(() => {
      setIsAnimating(false);
      setProgress(0);
    }, stopDelayMs);
  };

  // Watch for route changes
  useEffect(() => {
    const currentPath = `${pathname}${searchParams.toString()}`;

    if (currentPath !== prevPath) {
      setPrevPath(currentPath);
      start();

      // Simulate completion after a delay
      const timeout = setTimeout(() => {
        complete();
      }, 1000); // Adjust this time based on your average page load time

      return () => clearTimeout(timeout);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname, searchParams]);

  return (
    <>
      {/* Progress Bar */}
      <div
        className={cn(
          "fixed left-0 top-0 z-[60] h-[3px] w-full pointer-events-none",
          isAnimating
            ? "opacity-100"
            : "opacity-0 transition-opacity duration-300"
        )}
        style={{ height: `${height}px` }}
      >
        <div
          className='h-full transition-all ease-out duration-300'
          style={{
            width: `${progress}%`,
            background: color,
            boxShadow: `0 0 10px ${color}, 0 0 5px ${color}`,
          }}
        />
      </div>

      {/* Spinner (optional) */}
      {showSpinner && isAnimating && (
        <div className='fixed right-2 top-2 z-50'>
          <div
            className='h-6 w-6 animate-spin rounded-full border-2 border-t-transparent'
            style={{ borderColor: `transparent #6d5aff #533ae9 #6d5aff` }}
          />
        </div>
      )}
    </>
  );
}
