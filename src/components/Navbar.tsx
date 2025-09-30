"use client";

import { Dumbbell, Calendar, Baby, ShoppingBag, DollarSign, Building2, Facebook, Instagram } from "lucide-react";
import { NavBar } from "@/components/ui/tubelight-navbar";
import silaLogo from "@/assets/sila_logo.svg";
import { useLanguage } from "@/contexts/LanguageContext";

const Navbar = () => {
  const { language, setLanguage, t } = useLanguage();

  const navItems = [
    { name: t("nav.services"), url: "#services", icon: Dumbbell },
    { name: t("nav.gym"), url: "#gym", icon: Building2 },
    { name: t("nav.events"), url: "#events", icon: Calendar },
    { name: t("nav.kids"), url: "#kids", icon: Baby },
    { name: t("nav.pricing"), url: "#pricing", icon: DollarSign },
    { name: t("nav.shop"), url: "#shop", icon: ShoppingBag }
  ];

  const toggleLanguage = () => {
    setLanguage(language === "BG" ? "EN" : "BG");
  };

  return (
    <>
      {/* Traditional navbar for logo and social icons */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-gray-800/80 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <img src={silaLogo} alt="СИЛА Logo" className="h-10 w-auto" />
            </div>

            {/* Right Side Icons */}
            <div className="flex items-center gap-4">
              {/* Social Icons */}
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-pink-500 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-pink-500 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>

              {/* Language Switcher */}
              <button
                onClick={toggleLanguage}
                className="flex items-center justify-center gap-2 px-3 py-2 rounded-full bg-pink-500 text-white hover:bg-pink-600 transition-colors font-semibold shadow-lg min-w-[80px]"
                aria-label="Change language"
              >
                <span className="text-sm font-bold">{language}</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Tubelight Navigation */}
      <NavBar items={navItems} />
    </>
  );
};

export default Navbar;
