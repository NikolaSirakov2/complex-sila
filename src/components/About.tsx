"use client";

import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
            {t('about.title')}
          </h2>
        </div>
        
        <div className="prose prose-lg max-w-none text-gray-600">
          <div className="flex items-start mb-4">
            <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
            <p className="mb-0">
              {t('about.noContract')}
            </p>
          </div>
          
          <div className="flex items-start mb-4">
            <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
            <p className="mb-0">
              {t('about.diversity')}
            </p>
          </div>
          
          <div className="flex items-start mb-4">
            <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
            <p className="mb-0">
              {t('about.kidsCorner')}
            </p>
          </div>
          
          <div className="flex items-start mb-4">
            <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
            <p className="mb-0">
              {t('about.kidsTraining')}
            </p>
          </div>
          
          <div className="flex items-start mb-6">
            <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2 flex-shrink-0"></div>
            <p className="mb-0">
              {t('about.parking')}
            </p>
          </div>
          
          <p className="text-center text-lg font-semibold text-gray-800 bg-gray-100 p-4 rounded-lg">
            {t('about.visit')}
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
