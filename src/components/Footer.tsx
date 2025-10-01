"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const navItems = [
    { name: t("nav.services"), url: "#services" },
    { name: t("nav.gym"), url: "#gym" },
    { name: t("nav.events"), url: "#events" },
    { name: t("nav.kids"), url: "#kids" },
    { name: t("nav.pricing"), url: "#pricing" },
    { name: t("nav.shop"), url: "#shop" }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Top Section: Logo, Navbar Buttons, Subscribe */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-8">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Image
              className="h-10 w-auto"
              src="/sila_logo.svg"
              alt="Sila Logo"
              width={40}
              height={40}
            />
          </div>

          {/* Navbar Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            {navItems.map((item) => {
              return (
                <Link
                  key={item.name}
                  href={item.url}
                  className="text-gray-300 hover:text-white transition-colors px-3 py-2 rounded-lg hover:bg-gray-800"
                >
                  <span className="text-sm font-medium">{item.name}</span>
                </Link>
              );
            })}
          </div>

          {/* Subscribe Section */}
          <div className="flex-shrink-0">
            <h3 className="text-lg font-semibold mb-2 text-left">{t('footer.stayUpdated')}</h3>
            <p className="text-gray-400 mb-4 text-sm text-left max-w-xs">
              {t('footer.newsletterText')}
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder={t('footer.emailPlaceholder')}
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-l-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent text-white placeholder-gray-400 text-sm"
              />
              <button className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-r-lg transition-colors font-semibold">
                {t('footer.subscribe')}
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Sila. {t('footer.allRightsReserved')}
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                {t('footer.privacyPolicy')}
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                {t('footer.termsOfService')}
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                {t('footer.cookiePolicy')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
