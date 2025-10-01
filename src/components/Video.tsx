"use client";

import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

const Video = () => {
  const { t } = useLanguage();
  
  return (
    <section id="video" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('video.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('video.subtitle')}
          </p>
        </div>
        
        <div className="flex justify-center">
          <div className="relative w-full max-w-4xl">
            <div className="relative aspect-video rounded-lg overflow-hidden shadow-2xl">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/hxAvJJ05hXI?si=Shag2jAjGOZS3U49&amp;start=1"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Video;
