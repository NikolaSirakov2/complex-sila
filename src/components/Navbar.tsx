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
    <nav className="fixed top-0 left-0 right-0 z-50 bg-secondary/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img src={silaLogo} alt="СИЛА Logo" className="h-12 w-auto" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            <NavBar items={navItems} />
          </div>

          {/* Right Side Icons */}
          <div className="flex items-center gap-4">
            {/* Social Icons */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary-foreground hover:text-primary transition-smooth"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary-foreground hover:text-primary transition-smooth"
              aria-label="Facebook"
            >
              <Facebook className="h-5 w-5" />
            </a>

            {/* Language Switcher */}
            <button
              onClick={toggleLanguage}
              className="flex items-center justify-center gap-2 px-3 py-2 rounded-full bg-primary text-white hover:bg-primary/90 transition-smooth font-semibold shadow-soft min-w-[80px]"
              aria-label="Change language"
            >
              <span className="text-lg">{language === "BG" ? "🇧🇬" : "🇬🇧"}</span>
              <span className="text-sm font-bold">{language}</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
