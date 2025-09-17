"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { ModeToggle } from "./mode-toggle";
import { NavigationLink } from "@/hooks/services/navigation-link";
import Image from "next/image";

function Banner() {
  return (
    <div
      className="w-full bg-yellow-100 text-yellow-900 py-2 px-4 flex items-center justify-center overflow-hidden"
      style={{ position: "sticky", top: 0, zIndex: 30 }}
    >
      <div className="whitespace-nowrap animate-marquee font-semibold text-sm flex items-center gap-2">
        <span>🎉</span>
        <span>
          New! Last Cohort for 2025 is now open for enrollment.{" "}
          <a
            href="/apply"
            className="underline text-green-700 hover:text-green-900 ml-2"
          >
            Learn More & Enroll
          </a>
        </span>
      </div>
      <style jsx>{`
        .animate-marquee {
          display: inline-block;
          animation: marquee 18s linear infinite;
        }
        @keyframes marquee {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </div>
  );
}

const navigation = [
  { name: "Home", href: "/" },
  { name: "Courses", href: "/courses" },
  { name: "About", href: "/about" },
  {
    name: "Contact",
    href: "https://api.whatsapp.com/send/?phone=2349081893000&text&type=phone_number&app_absent=0",
  },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {pathname !== "/apply" && pathname !== "/summerschool" && <Banner />}
      <header className="sticky top-0 z-20 w-full border-b bg-transparent backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            {pathname !== "/apply" && (
              <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="md:hidden">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Toggle menu</span>
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-[240px] sm:w-[300px]">
                  <div className="flex flex-col gap-6 py-4">
                    <Image
                      src={"/images/biroblack.svg"}
                      alt=""
                      width={120}
                      height={50}
                      className={cn(
                        "transition-all duration-500 ease-in-out",
                        "block dark:hidden opacity-100 scale-100"
                      )}
                      style={{ zIndex: 2 }}
                    />
                    {/* White logo */}
                    <Image
                      src={"/images/birowhite.svg"}
                      alt=""
                      width={120}
                      height={50}
                      className={cn(
                        " transition-all duration-500 ease-in-out",
                        "hidden dark:block opacity-100 scale-100"
                      )}
                      style={{ zIndex: 2 }}
                    />
                    <nav className="flex flex-col gap-4">
                      {navigation.map((item) => (
                        <NavigationLink
                          key={item.name}
                          href={item.href}
                          className={cn(
                            "text-muted-foreground hover:text-foreground transition-colors",
                            pathname === item.href &&
                              "text-foreground font-medium"
                          )}
                          onClick={() => setIsOpen(false)}
                        >
                          {item.name}
                        </NavigationLink>
                      ))}
                    </nav>
                  </div>
                </SheetContent>
              </Sheet>
            )}
            <Link
              href="/"
              className="flex items-center gap-2 font-bold text-xl relative "
            >
              {/* Logo transition */}
              <span className="relative w-[150px] h-[50px] flex items-center">
                {/* Black logo */}
                <Image
                  src={"/images/biroblack.svg"}
                  alt=""
                  width={150}
                  height={50}
                  className={cn(
                    "absolute left-0  transition-all duration-500 ease-in-out",
                    "block dark:hidden",
                    scrolled
                      ? "opacity-0 scale-90 translate-y-2"
                      : "opacity-100 scale-100"
                  )}
                  style={{ zIndex: 2 }}
                />
                {/* White logo */}
                <Image
                  src={"/images/birowhite.svg"}
                  alt=""
                  width={150}
                  height={50}
                  className={cn(
                    "absolute left-0  transition-all duration-500 ease-in-out",
                    "hidden dark:block",
                    scrolled
                      ? "opacity-0 scale-90 translate-y-2"
                      : "opacity-100 scale-100"
                  )}
                  style={{ zIndex: 2 }}
                />
                {/* Switch logo */}
                <Image
                  src={"/images/switchlogo.svg"}
                  alt=""
                  width={30}
                  height={50}
                  className={cn(
                    "absolute left-8  -translate-x-1/2 transition-all duration-500 ease-in-out",
                    scrolled
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-90 -translate-y-2"
                  )}
                  style={{ zIndex: 3 }}
                />
              </span>
            </Link>
          </div>
          {pathname !== "/apply" && pathname !== "/summerschool" && (
            <nav className="hidden md:flex items-center gap-6">
              {navigation.map((item) => (
                <NavigationLink
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "text-sm font-medium text-muted-foreground hover:text-foreground transition-colors",
                    pathname === item.href && "text-foreground"
                  )}
                >
                  {item.name}
                </NavigationLink>
              ))}
            </nav>
          )}
          <div className="flex items-center gap-2">
            <ModeToggle />

            {pathname === "/apply" || pathname === "/summerschool" ? (
              <div
                onClick={() => {
                  const formSection = document.getElementById("apply");
                  if (formSection) {
                    formSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                <Button>Enroll Now</Button>
              </div>
            ) : (
              <Link
                target="_blank"
                href="https://docs.google.com/forms/d/e/1FAIpQLSfXTG_TMdKOSIjwgYRoYtJGiCBTX2HGjCrm0DUKB6U7V7EbtQ/viewform?usp=header"
              >
                <Button>Enroll Now</Button>
              </Link>
            )}
          </div>
        </div>
      </header>
    </>
  );
}
