"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { cn } from "@/lib/utils";

interface HeroCarouselProps {
  images: {
    src: string;
    alt: string;
  }[];
  autoplayDelay?: number;
  className?: string;
}

export function HeroCarousel({
  images,
  autoplayDelay = 5000,
  className,
}: HeroCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    emblaApi.on("select", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  useEffect(() => {
    if (!emblaApi || !autoplayDelay) return;

    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, autoplayDelay);

    return () => clearInterval(interval);
  }, [emblaApi, autoplayDelay]);

  if (!images || images.length === 0) {
    return (
      <div className='flex h-full items-center justify-center bg-muted'>
        <p>No images available</p>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "relative h-full w-full overflow-hidden rounded-xl",
        className
      )}
    >
      <div className='h-full overflow-hidden' ref={emblaRef}>
        <div className='flex h-full'>
          {images.map((image, index) => (
            <div
              className='relative h-full min-w-full'
              key={`${image.src}-${index}`}
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className='object-cover transition-opacity duration-500 ease-in-out'
                priority={index === 0}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation buttons */}
      {/* <button
        onClick={scrollPrev}
        className='absolute left-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 shadow-md backdrop-blur-sm transition-all hover:bg-white dark:bg-black/50 dark:hover:bg-black/70'
        aria-label='Previous slide'
      >
        <ChevronLeft className='h-6 w-6 text-primary' />
      </button>

      <button
        onClick={scrollNext}
        className='absolute right-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 shadow-md backdrop-blur-sm transition-all hover:bg-white dark:bg-black/50 dark:hover:bg-black/70'
        aria-label='Next slide'
      >
        <ChevronRight className='h-6 w-6 text-primary' />
      </button> */}

      {/* Dots indicator */}
      <div className='absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2'>
        {images.map((_, index) => (
          <button
            key={index}
            className={cn(
              "h-2 w-2 rounded-full transition-all",
              selectedIndex === index
                ? "w-6 bg-white"
                : "bg-white/70 hover:bg-white dark:bg-black/50 dark:hover:bg-black/70"
            )}
            onClick={() => emblaApi?.scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
