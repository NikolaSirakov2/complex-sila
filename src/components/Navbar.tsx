"use client";

import { Dumbbell, Calendar, Baby, ShoppingBag, DollarSign, Building2, Facebook, Instagram } from "lucide-react";
// Remove the import and use the public path directly
import { useLanguage } from "@/contexts/LanguageContext";
import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const { language, setLanguage, t } = useLanguage();
  const [activeTab, setActiveTab] = useState(t("nav.services"));

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
    <nav className="fixed top-0 left-0 right-0 z-40 bg-gray-800/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img src="/sila_logo.svg" alt="СИЛА Logo" className="h-10 w-auto" />
          </div>

          {/* Navigation Menu */}
          <div className="flex items-center gap-3 bg-white border border-gray-200 backdrop-blur-lg py-1 px-1 rounded-full shadow-lg">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.name;

              return (
                <Link
                  key={item.name}
                  href={item.url}
                  onClick={() => setActiveTab(item.name)}
                  className={`relative cursor-pointer text-sm font-semibold px-6 py-2 rounded-full transition-colors ${
                    isActive 
                      ? "bg-gray-200 text-gray-800" 
                      : "text-gray-600 hover:text-gray-800"
                  }`}
                >
                  <span className="hidden md:inline">{item.name}</span>
                  <span className="md:hidden">
                    <Icon size={18} strokeWidth={2.5} />
                  </span>
                </Link>
              );
            })}
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
  );
};

export default Navbar;
