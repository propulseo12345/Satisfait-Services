"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock, ChevronRight, LucideIcon } from "lucide-react";
import { Container } from "@/components/ui";
import { SITE_CONFIG, NAV_LINKS } from "@/lib/constants";
import { getPhoneLink, getEmailLink } from "@/lib/utils";

const iconMap: Record<string, LucideIcon> = { phone: Phone, mail: Mail, mapPin: MapPin };

function Footer({ data }: { data?: any }) {
  const currentYear = new Date().getFullYear();
  const logo = data?.logo || { text: "Satisfait", highlight: "Services" };
  const description = data?.description || SITE_CONFIG.slogan + ". Services de ménage, nettoyage professionnel et home organising à Narcastet, Pau et dans les Pyrénées-Atlantiques.";
  const contactInfo = data?.contactInfo?.map((c: any) => ({ ...c, icon: iconMap[c.icon] })) || [];
  const navigation = data?.navigation || NAV_LINKS;
  const hours = data?.hours || [];

  return (
    <footer className="bg-neutral-900 text-neutral-300">
      <Container size="xl" className="px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-8 md:py-12 lg:py-16">
          {/* Mobile Layout */}
          <div className="md:hidden space-y-8">
            {/* Logo & Brand */}
            <div className="text-center">
              <Link href="/" className="inline-flex items-center gap-2 mb-3">
                <Image
                  src="/images/logo.png"
                  alt="Satisfait Services"
                  width={44}
                  height={44}
                  className="w-11 h-11 bg-white rounded-lg p-0.5"
                />
                <div>
                  <span className="text-lg font-bold text-white">{logo.text}</span>
                  <span className="text-lg font-light text-primary-400"> {logo.highlight}</span>
                </div>
              </Link>
              <p className="text-xs text-neutral-500 max-w-xs mx-auto">
                Ménage, nettoyage & home organising à Pau
              </p>
            </div>

            {/* Quick Info Cards */}
            <div className="grid grid-cols-2 gap-3">
              {/* Location */}
              <div className="bg-neutral-800/50 rounded-xl p-3 text-center">
                <MapPin size={18} className="text-primary-400 mx-auto mb-1.5" />
                <p className="text-[11px] text-neutral-400">Zone</p>
                <p className="text-xs font-medium text-white">Pau & environs</p>
              </div>
              {/* Hours */}
              <div className="bg-neutral-800/50 rounded-xl p-3 text-center">
                <Clock size={18} className="text-primary-400 mx-auto mb-1.5" />
                <p className="text-[11px] text-neutral-400">Horaires</p>
                <p className="text-xs font-medium text-white">Lun-Ven 8h-18h</p>
              </div>
            </div>

            {/* Navigation Links - Horizontal scroll */}
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
              {navigation.map((link: any) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-xs text-neutral-400 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <Link href="/" className="inline-flex items-center gap-3 mb-4">
                <Image
                  src="/images/logo.png"
                  alt="Satisfait Services"
                  width={52}
                  height={52}
                  className="w-13 h-13 bg-white rounded-lg p-1"
                />
                <div>
                  <span className="text-xl font-bold text-white">{logo.text}</span>
                  <span className="text-xl font-light text-primary-400"> {logo.highlight}</span>
                </div>
              </Link>
              <p className="text-sm text-neutral-400 mb-5 max-w-md leading-relaxed">
                {description}
              </p>
              <div className="space-y-2.5">
                {contactInfo.map((info: any, i: number) => {
                  const Icon = info.icon;
                  const href = info.icon === Phone ? getPhoneLink(info.value) : info.icon === Mail ? getEmailLink(info.value) : undefined;
                  const Element = href ? "a" : "div";
                  return (
                    <Element key={i} {...(href && { href })} className="flex items-center gap-2.5 text-sm text-neutral-400 hover:text-white transition-colors">
                      <Icon size={16} className="text-primary-400" />
                      <span>{info.value}</span>
                    </Element>
                  );
                })}
              </div>
            </div>

            {/* Navigation Column */}
            <div>
              <h3 className="text-white font-semibold mb-4 text-sm">Navigation</h3>
              <ul className="space-y-2.5">
                {navigation.map((link: any) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-neutral-400 hover:text-white transition-colors inline-flex items-center gap-1 group"
                    >
                      <ChevronRight size={12} className="opacity-0 -ml-3 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Hours Column */}
            <div>
              <h3 className="text-white font-semibold mb-4 text-sm">Horaires</h3>
              <ul className="space-y-2.5 text-sm">
                {hours.map((hour: any, i: number) => (
                  <li key={i} className="flex justify-between text-neutral-400">
                    <span>{hour.day}</span>
                    <span className={hour.time === "Fermé" ? "text-neutral-500" : "text-white"}>{hour.time}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-4 md:py-5 border-t border-neutral-800">
          {/* Mobile Bottom */}
          <div className="md:hidden text-center space-y-2">
            <div className="flex justify-center gap-4 text-[10px]">
              <Link
                href="/mentions-legales"
                className="text-neutral-500 hover:text-white transition-colors"
              >
                Mentions légales
              </Link>
              <span className="text-neutral-700">•</span>
              <a
                href="https://propulseo-site.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-500 hover:text-white transition-colors"
              >
                Site par <span className="text-primary-400">Propul&apos;SEO</span>
              </a>
            </div>
            <p className="text-[10px] text-neutral-600">
              © {currentYear} Satisfait Services
            </p>
          </div>

          {/* Desktop Bottom */}
          <div className="hidden md:flex justify-between items-center">
            <p className="text-xs text-neutral-500">
              © {currentYear} Satisfait Services. Tous droits réservés.
            </p>
            <div className="flex items-center gap-5">
              <Link
                href="/mentions-legales"
                className="text-xs text-neutral-500 hover:text-white transition-colors"
              >
                Mentions légales
              </Link>
              <span className="text-neutral-700">|</span>
              <span className="text-xs text-neutral-500">
                Fait avec passion par{" "}
                <a
                  href="https://propulseo-site.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-400 hover:text-primary-300 transition-colors"
                >
                  Propul&apos;SEO
                </a>
              </span>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export { Footer };
