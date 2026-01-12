"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Container } from "@/components/ui";
import { Navigation } from "./Navigation";
import { SITE_CONFIG } from "@/lib/constants";
import { getPhoneLink } from "@/lib/utils";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "";
    }

    return () => {
      document.body.style.overflowY = "";
    };
  }, [isOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled || !isHomePage
          ? "bg-gradient-to-r from-blue-50 via-blue-100 to-primary-600 shadow-sm py-3"
          : "bg-transparent py-4"
      )}
    >
      <Container size="xl" className="px-2 sm:px-4 lg:px-6">
        <div className="flex items-center justify-between lg:grid lg:grid-cols-3">
          {/* Logo */}
          <Link
            href="/"
            className="flex-shrink-0"
            onClick={() => {
              window.scrollTo({ top: 0, behavior: "instant" });
            }}
          >
            <Image
              src="/images/logo.png"
              alt="Satisfait Services"
              width={80}
              height={80}
              className="w-16 h-16 sm:w-20 sm:h-20 transition-all duration-300"
              priority
            />
          </Link>

          {/* Navigation - Centered */}
          <div className="hidden lg:flex items-center justify-center">
            <Navigation isScrolled={isScrolled || !isHomePage} />
          </div>

          {/* Phone Button - Right side */}
          <div className="hidden lg:flex items-center justify-end">
            <a
              href={getPhoneLink(SITE_CONFIG.contact.phone)}
              className={cn(
                "flex items-center gap-2 font-semibold px-4 py-2.5 rounded transition-all duration-300",
                isScrolled || !isHomePage
                  ? "bg-primary-600 hover:bg-primary-700 text-white"
                  : "bg-white/90 hover:bg-white text-primary-600 backdrop-blur-sm"
              )}
            >
              <Phone size={18} />
              <span className="text-sm sm:text-base">{SITE_CONFIG.contact.phone}</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={cn(
              "lg:hidden p-2 transition-colors",
              isScrolled || !isHomePage
                ? "text-neutral-700 hover:text-primary-600"
                : "text-white hover:text-primary-200"
            )}
            aria-label={isOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </Container>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-white border-t border-neutral-100"
          >
            <Container size="xl" className="px-2 sm:px-4 lg:px-6">
              <div className="py-6">
                <Navigation onLinkClick={() => setIsOpen(false)} />
                <div className="mt-6 pt-6 border-t border-neutral-100">
                  <a
                    href={getPhoneLink(SITE_CONFIG.contact.phone)}
                    className="flex items-center justify-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-semibold px-4 py-2.5 rounded transition-colors w-full"
                    onClick={() => setIsOpen(false)}
                  >
                    <Phone size={18} className="text-white" />
                    <span>{SITE_CONFIG.contact.phone}</span>
                  </a>
                </div>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export { Header };
