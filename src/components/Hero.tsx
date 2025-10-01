"use client";

import React from 'react';
import { Carousel } from '@/components/ui/carousel';
import { useLanguage } from '@/contexts/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();

  const slideData = [
    {
      title: 'Fitness',
      button: t('carousel.innovation.subtitle') || 'Explore Fitness',
      src: '/carousel/carousel-1.jpg'
    },
    {
      title: 'Cardio Zone',
      button: t('carousel.excellence.subtitle') || 'Explore Cardio',
      src: '/carousel/carousel-2.jpg'
    },
    {
      title: 'Sports Hall',
      button: t('carousel.partnership.subtitle') || 'Explore Sports',
      src: '/carousel/carousel-3.jpg'
    },
    {
      title: 'Pool',
      button: t('carousel.growth.subtitle') || 'Explore Pool',
      src: '/carousel/carousel-4.jpg'
    },
    {
      title: 'Spa Zone',
      button: t('carousel.success.subtitle') || 'Explore Spa',
      src: '/carousel/carousel-5.jpg'
    },
  ];

  return (
    <div className="w-full h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex flex-col items-center justify-center overflow-hidden">
      <div className="w-full h-full flex items-center justify-center">
        <Carousel slides={slideData} />
      </div>
    </div>
  );
};

export default Hero;
