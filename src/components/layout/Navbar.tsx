"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, ArrowRight, ArrowUpRight } from "lucide-react";
import { useRFQ } from "@/context/RFQContext";
import { KANHAV_DATA } from "@/data/kanhav-data";

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(true);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const pathname = usePathname();
  const { openRFQ } = useRFQ();

  const handleMouseEnterAbout = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
      dropdownTimeoutRef.current = null;
    }
    setAboutDropdownOpen(true);
  };

  const handleMouseLeaveAbout = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setAboutDropdownOpen(false);
    }, 180);
  };

  const isLinkActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const isAboutActive = pathname.startsWith("/about-us");

  const aboutSubLinks = [
    {
      name: "About Us",
      href: "/about-us",
      desc: "Corporate profile, infrastructure & German warp knitting capacity",
    },
    {
      name: "Our Story & Heritage",
      href: "/about-us/our-story",
      desc: "Thirty-year evolution from 1994 texturising to 2024 composite glass fabrics",
    },
  ];

  const primaryNavLinks = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "Careers", href: "/careers" },
    { name: "Contact Us", href: "/contact-us" },
  ];

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

          {/* Center Navigation Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-7 xl:gap-9">
            {/* 1. Home */}
            <Link
              href="/"
              className={`text-xs sm:text-[13px] font-sans font-medium transition-colors flex items-center ${
                pathname === "/" ? "text-black font-semibold" : "text-black/75 hover:text-black"
              }`}
            >
              {pathname === "/" && (
                <span className="inline-block w-1.5 h-1.5 bg-[#cc410f] mr-1.5 -translate-y-[1px]" />
              )}
              <span>Home</span>
            </Link>

            {/* 2. About Us with Dropdown (containing About Us & Our Story) */}
            <div
              className="relative py-2"
              onMouseEnter={handleMouseEnterAbout}
              onMouseLeave={handleMouseLeaveAbout}
            >
              <button
                type="button"
                onClick={() => setAboutDropdownOpen(!aboutDropdownOpen)}
                className={`text-xs sm:text-[13px] font-sans font-medium transition-colors flex items-center gap-1 focus:outline-none ${
                  isAboutActive ? "text-black font-semibold" : "text-black/75 hover:text-black"
                }`}
                aria-haspopup="true"
                aria-expanded={aboutDropdownOpen}
              >
                {isAboutActive && (
                  <span className="inline-block w-1.5 h-1.5 bg-[#cc410f] mr-1 -translate-y-[1px]" />
                )}
                <span>About Us</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 text-black/60 transition-transform duration-200 ${
                    aboutDropdownOpen ? "rotate-180 text-[#cc410f]" : ""
                  }`}
                />
              </button>

              {/* Desktop Dropdown Card */}
              {aboutDropdownOpen && (
                <div
                  className="absolute top-full left-0 mt-1 w-80 bg-white border border-black/10 shadow-2xl p-2.5 z-50 [clip-path:polygon(0_0,calc(100%-12px)_0,100%_12px,100%_100%,0_100%)] animate-in fade-in slide-in-from-top-2 duration-150"
                  onMouseEnter={handleMouseEnterAbout}
                  onMouseLeave={handleMouseLeaveAbout}
                >
                  <div className="px-3 pt-2 pb-1.5 border-b border-black/[0.06] mb-1.5">
                    <span className="font-mono text-[9px] uppercase tracking-widest text-black/40 font-bold block">
                      COMPANY DIRECTORY
                    </span>
                  </div>

                  <div className="space-y-1">
                    {aboutSubLinks.map((subLink) => {
                      const active = pathname === subLink.href;
                      return (
                        <Link
                          key={subLink.name}
                          href={subLink.href}
                          onClick={() => setAboutDropdownOpen(false)}
                          className={`p-3 rounded transition-all duration-150 flex items-start justify-between group ${
                            active
                              ? "bg-[#faf9f6] border border-black/10"
                              : "hover:bg-[#faf9f6] border border-transparent hover:border-black/[0.06]"
                          }`}
                        >
                          <div className="pr-3">
                            <div className="flex items-center gap-1.5 mb-0.5">
                              {active && <span className="w-1.5 h-1.5 bg-[#cc410f] rounded-full" />}
                              <span
                                className={`text-xs font-sans font-bold uppercase tracking-wide transition-colors ${
                                  active
                                    ? "text-[#cc410f]"
                                    : "text-kraft-headline group-hover:text-[#cc410f]"
                                }`}
                              >
                                {subLink.name}
                              </span>
                            </div>
                            <p className="text-[11px] text-kraft-cream/80 leading-relaxed font-sans line-clamp-2">
                              {subLink.desc}
                            </p>
                          </div>
                          <ArrowRight
                            className={`w-3.5 h-3.5 mt-0.5 shrink-0 transition-all ${
                              active
                                ? "text-[#cc410f] translate-x-0.5"
                                : "text-black/30 group-hover:text-[#cc410f] group-hover:translate-x-0.5"
                            }`}
                          />
                        </Link>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* 3. Products */}
            <Link
              href="/products"
              className={`text-xs sm:text-[13px] font-sans font-medium transition-colors flex items-center ${
                isLinkActive("/products") ? "text-black font-semibold" : "text-black/75 hover:text-black"
              }`}
            >
              {isLinkActive("/products") && (
                <span className="inline-block w-1.5 h-1.5 bg-[#cc410f] mr-1.5 -translate-y-[1px]" />
              )}
              <span>Products</span>
            </Link>

            {/* 4. Careers */}
            <Link
              href="/careers"
              className={`text-xs sm:text-[13px] font-sans font-medium transition-colors flex items-center ${
                isLinkActive("/careers") ? "text-black font-semibold" : "text-black/75 hover:text-black"
              }`}
            >
              {isLinkActive("/careers") && (
                <span className="inline-block w-1.5 h-1.5 bg-[#cc410f] mr-1.5 -translate-y-[1px]" />
              )}
              <span>Careers</span>
            </Link>

            {/* 5. Contact Us */}
            <Link
              href="/contact-us"
              className={`text-xs sm:text-[13px] font-sans font-medium transition-colors flex items-center ${
                isLinkActive("/contact-us") ? "text-black font-semibold" : "text-black/75 hover:text-black"
              }`}
            >
              {isLinkActive("/contact-us") && (
                <span className="inline-block w-1.5 h-1.5 bg-[#cc410f] mr-1.5 -translate-y-[1px]" />
              )}
              <span>Contact Us</span>
            </Link>
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
              className="bg-black hover:bg-[#252320] text-white px-5 sm:px-6 py-2 sm:py-2.5 font-mono text-xs font-bold tracking-wider uppercase transition-colors shrink-0 shadow-sm [clip-path:polygon(0_0,calc(100%-8px)_0,100%_8px,100%_100%,0_100%)]"
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
        <div className="fixed inset-0 top-[57px] z-40 bg-[#ece8e1] border-b border-black/10 flex flex-col justify-between p-6 lg:hidden overflow-y-auto">
          <div className="flex flex-col gap-4">
            {/* 1. Home */}
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className={`text-xl font-bold uppercase tracking-wider flex items-center ${
                pathname === "/" ? "text-black" : "text-black/70 hover:text-black"
              }`}
            >
              {pathname === "/" && <span className="inline-block w-2 h-2 bg-[#cc410f] mr-2" />}
              Home
            </Link>

            {/* 2. About Us Accordion in Mobile */}
            <div className="flex flex-col">
              <button
                type="button"
                onClick={() => setMobileAboutOpen(!mobileAboutOpen)}
                className={`text-xl font-bold uppercase tracking-wider flex items-center justify-between text-left ${
                  isAboutActive ? "text-black" : "text-black/70 hover:text-black"
                }`}
              >
                <div className="flex items-center">
                  {isAboutActive && <span className="inline-block w-2 h-2 bg-[#cc410f] mr-2" />}
                  <span>About Us</span>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-black/60 transition-transform duration-200 ${
                    mobileAboutOpen ? "rotate-180 text-[#cc410f]" : ""
                  }`}
                />
              </button>

              {mobileAboutOpen && (
                <div className="pl-4 mt-2.5 space-y-2 border-l-2 border-[#cc410f]/40">
                  {aboutSubLinks.map((subLink) => {
                    const active = pathname === subLink.href;
                    return (
                      <Link
                        key={subLink.name}
                        href={subLink.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`block py-1.5 text-base font-semibold uppercase tracking-wider transition-colors ${
                          active ? "text-[#cc410f]" : "text-black/60 hover:text-black"
                        }`}
                      >
                        {subLink.name}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>

            {/* 3. Products */}
            <Link
              href="/products"
              onClick={() => setMobileMenuOpen(false)}
              className={`text-xl font-bold uppercase tracking-wider flex items-center ${
                isLinkActive("/products") ? "text-black" : "text-black/70 hover:text-black"
              }`}
            >
              {isLinkActive("/products") && <span className="inline-block w-2 h-2 bg-[#cc410f] mr-2" />}
              Products
            </Link>

            {/* 4. Careers */}
            <Link
              href="/careers"
              onClick={() => setMobileMenuOpen(false)}
              className={`text-xl font-bold uppercase tracking-wider flex items-center ${
                isLinkActive("/careers") ? "text-black" : "text-black/70 hover:text-black"
              }`}
            >
              {isLinkActive("/careers") && <span className="inline-block w-2 h-2 bg-[#cc410f] mr-2" />}
              Careers
            </Link>

            {/* 5. Contact Us */}
            <Link
              href="/contact-us"
              onClick={() => setMobileMenuOpen(false)}
              className={`text-xl font-bold uppercase tracking-wider flex items-center ${
                isLinkActive("/contact-us") ? "text-black" : "text-black/70 hover:text-black"
              }`}
            >
              {isLinkActive("/contact-us") && <span className="inline-block w-2 h-2 bg-[#cc410f] mr-2" />}
              Contact Us
            </Link>
          </div>

          <div className="pt-6 border-t border-black/10 flex flex-col gap-3 font-mono text-xs mt-6">
            <span className="text-black/50 uppercase">SALES DESK</span>
            <a href={`tel:${KANHAV_DATA.contact.phone}`} className="text-[#cc410f] font-bold text-sm">
              {KANHAV_DATA.contact.phone}
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openRFQ();
              }}
              className="mt-2 w-full bg-black text-white py-3 font-mono text-xs uppercase font-bold tracking-wider [clip-path:polygon(0_0,calc(100%-8px)_0,100%_8px,100%_100%,0_100%)]"
            >
              Get started
            </button>
          </div>
        </div>
      )}
    </>
  );
};
