"use client";

import type React from "react";
import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
} from "react";
import { useRouter } from "next/navigation";

interface NavigationContextType {
  isLoading: boolean;
  navigateTo: (href: string, loadingTime?: number) => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(
  undefined
);

export function NavigationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [targetHref, setTargetHref] = useState<string | null>(null);
  const router = useRouter();

  // Function to handle navigation with loading
  const navigateTo = useCallback((href: string, loadingTime = 1000) => {
    setIsLoading(true);
    setProgress(0);
    setTargetHref(href);

    // Simulate progress
    const startTime = Date.now();
    const endTime = startTime + loadingTime;

    const updateProgress = () => {
      const now = Date.now();
      const elapsed = now - startTime;
      const newProgress = Math.min((elapsed / loadingTime) * 100, 99);

      setProgress(newProgress);

      if (now < endTime - 100) {
        requestAnimationFrame(updateProgress);
      }
    };

    requestAnimationFrame(updateProgress);
  }, []);

  // Complete navigation when loading is done
  useEffect(() => {
    if (!isLoading || !targetHref) return;

    const timer = setTimeout(() => {
      setProgress(100);

      setTimeout(() => {
        router.push(targetHref);

        // Reset after navigation
        setTimeout(() => {
          setIsLoading(false);
          setProgress(0);
          setTargetHref(null);
        }, 300);
      }, 200);
    }, 1000);

    return () => clearTimeout(timer);
  }, [isLoading, targetHref, router]);

  return (
    <NavigationContext.Provider value={{ isLoading, navigateTo }}>
      {/* Progress bar */}
      {isLoading && (
        <div className='fixed left-0 top-0 z-50 h-[3px] w-full'>
          <div
            className='h-full transition-all duration-300 ease-out'
            style={{
              width: `${progress}%`,
              background:
                "linear-gradient(to right, hsl(220 83% 48%), hsl(220 83% 48%))", // Example: replace with your project's primary colors
              // boxShadow: "0 0 10px hsl(220 83% 48%), 0 0 5px hsl(220 83% 60%)", // Example: matching shadow
            }}
          />
        </div>
      )}
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigation() {
  const context = useContext(NavigationContext);
  if (context === undefined) {
    throw new Error("useNavigation must be used within a NavigationProvider");
  }
  return context;
}
