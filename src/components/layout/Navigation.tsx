"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { NAV_LINKS } from "@/lib/constants";

interface NavigationProps {
  className?: string;
  onLinkClick?: () => void;
  isScrolled?: boolean;
}

function Navigation({ className, onLinkClick, isScrolled = true }: NavigationProps) {
  const pathname = usePathname();

  const handleClick = (href: string) => {
    if (href === "/") {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
    onLinkClick?.();
  };

  return (
    <nav className={className}>
      <ul className="flex flex-col md:flex-row md:items-center md:gap-8 gap-4">
        {NAV_LINKS.map((link) => {
          const isActive = pathname === link.href;
          return (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={() => handleClick(link.href)}
                className={cn(
                  "text-base font-medium transition-colors duration-200",
                  isScrolled
                    ? isActive
                      ? "text-primary-600 hover:text-primary-700"
                      : "text-neutral-700 hover:text-primary-600"
                    : isActive
                    ? "text-primary-300 hover:text-primary-200"
                    : "text-white hover:text-primary-200"
                )}
              >
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export { Navigation };
