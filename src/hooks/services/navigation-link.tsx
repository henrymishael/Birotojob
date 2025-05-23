"use client";

import type React from "react";
import Link from "next/link";
import { useNavigation } from "./navigation-context";

interface NavigationLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  loadingTime?: number;
  onClick?: (e: React.MouseEvent) => void;
}

export function NavigationLink({
  href,
  children,
  className,
  loadingTime = 1000,
  onClick,
  ...props
}: NavigationLinkProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "onClick">) {
  const { navigateTo } = useNavigation();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onClick) onClick(e);
    navigateTo(href, loadingTime);
  };

  return (
    <Link href={href} onClick={handleClick} className={className} {...props}>
      {children}
    </Link>
  );
}
