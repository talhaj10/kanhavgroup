"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useRFQ } from "@/context/RFQContext";
import { KANHAV_DATA } from "@/data/kanhav-data";

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { openRFQ } = useRFQ();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about-us" },
    { name: "Our Story", href: "/about-us/our-story" },
    { name: "Products", href: "/products" },
    { name: "Careers", href: "/careers" },
    { name: "Contact Us", href: "/contact-us" },
  ];

  const isLinkActive = (href: string) => {
    if (href === "/") return pathname === "/";
    if (href === "/about-us") return pathname === "/about-us";
    return pathname.startsWith(href);
  };

  return (
    <>
      <header className="sticky top-0 left-0 right-0 z-50 bg-[#ece8e1] border-b border-black/10 text-black">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-8 py-3 flex items-center justify-between">
          {/* Official Brand Logo */}
          <Link href="/" className="flex items-center group shrink-0">
            <Image
              src="/assets/images/logo-website.png"
              alt="Kanhav Industries"
              width={180}
              height={53}
              priority
              className="h-8 sm:h-9 md:h-10 w-auto object-contain group-hover:opacity-90 transition-opacity"
            />
          </Link>

          {/* Center Nav Links - Exactly the 6 requested links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => {
              const active = isLinkActive(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-xs sm:text-[13px] font-sans font-medium transition-colors flex items-center ${
                    active ? "text-black font-semibold" : "text-black/75 hover:text-black"
                  }`}
                >
                  {active && (
                    <span className="inline-block w-1.5 h-1.5 bg-[#cc410f] mr-1.5 -translate-y-[1px]" />
                  )}
                  <span>{link.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* Right Section: Sales Desk + Phone + Get Started Button */}
          <div className="flex items-center gap-4 sm:gap-6">
            <div className="hidden sm:flex flex-col text-right leading-tight">
              <span className="font-mono text-[9px] uppercase tracking-wider text-black/50 font-medium">
                SALES DESK
              </span>
              <a
                href={`tel:${KANHAV_DATA.contact.phone.replace(/\s+/g, "")}`}
                className="font-mono text-xs sm:text-[13px] font-bold text-[#cc410f] hover:underline"
              >
                {KANHAV_DATA.contact.phone}
              </a>
            </div>

            <button
              onClick={() => openRFQ()}
              className="bg-black hover:bg-[#252320] text-white px-5 sm:px-6 py-2 sm:py-2.5 font-mono text-xs font-bold tracking-wider uppercase transition-colors shrink-0 shadow-sm"
            >
              Get started
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-1.5 text-black hover:text-[#cc410f]"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[57px] z-40 bg-[#ece8e1] border-b border-black/10 flex flex-col justify-between p-6 lg:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => {
              const active = isLinkActive(link.href);
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-xl font-bold uppercase tracking-wider flex items-center ${
                    active ? "text-black" : "text-black/70 hover:text-black"
                  }`}
                >
                  {active && (
                    <span className="inline-block w-2 h-2 bg-[#cc410f] mr-2" />
                  )}
                  {link.name}
                </Link>
              );
            })}
          </div>

          <div className="pt-6 border-t border-black/10 flex flex-col gap-3 font-mono text-xs">
            <span className="text-black/50 uppercase">SALES DESK</span>
            <a href={`tel:${KANHAV_DATA.contact.phone}`} className="text-[#cc410f] font-bold text-sm">
              {KANHAV_DATA.contact.phone}
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openRFQ();
              }}
              className="mt-2 w-full bg-black text-white py-3 font-mono text-xs uppercase font-bold tracking-wider"
            >
              Get started
            </button>
          </div>
        </div>
      )}
    </>
  );
};
