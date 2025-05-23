"use client";

import { Button } from "@/components/ui/button";
import type { ButtonProps } from "@/components/ui/button";
import { useNavigation } from "./navigation-context";

interface NavigationButtonProps extends ButtonProps {
  href: string;
  loadingTime?: number;
}

export function NavigationButton({
  href,
  children,
  loadingTime = 1000,
  ...props
}: NavigationButtonProps) {
  const { navigateTo } = useNavigation();

  const handleClick = () => {
    navigateTo(href, loadingTime);
  };

  return (
    <Button onClick={handleClick} {...props}>
      {children}
    </Button>
  );
}
