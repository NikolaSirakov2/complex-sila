"use client";

import React from 'react';
import { CircularGallery, GalleryItem } from '@/components/ui/circular-gallery';
import { useLanguage } from '@/contexts/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();

  const galleryData: GalleryItem[] = [
    {
      common: t('carousel.innovation.title'),
      binomial: t('carousel.innovation.subtitle'),
      photo: {
        url: '/carousel/carousel-1.jpg',
        text: t('carousel.innovation.description'),
        pos: 'center',
        by: t('carousel.photoBy')
      }
    },
    {
      common: t('carousel.excellence.title'),
      binomial: t('carousel.excellence.subtitle'),
      photo: {
        url: '/carousel/carousel-2.jpg',
        text: t('carousel.excellence.description'),
        pos: 'center',
        by: t('carousel.photoBy')
      }
    },
    {
      common: t('carousel.partnership.title'),
      binomial: t('carousel.partnership.subtitle'),
      photo: {
        url: '/carousel/carousel-3.jpg',
        text: t('carousel.partnership.description'),
        pos: 'center',
        by: t('carousel.photoBy')
      }
    },
    {
      common: t('carousel.growth.title'),
      binomial: t('carousel.growth.subtitle'),
      photo: {
        url: '/carousel/carousel-4.jpg',
        text: t('carousel.growth.description'),
        pos: 'center',
        by: t('carousel.photoBy')
      }
    },
    {
      common: t('carousel.success.title'),
      binomial: t('carousel.success.subtitle'),
      photo: {
        url: '/carousel/carousel-5.jpg',
        text: t('carousel.success.description'),
        pos: 'center',
        by: t('carousel.photoBy')
      }
    },
  ];
  return (
    // This outer container provides the scrollable height
    <div className="w-full bg-gradient-to-br from-blue-50 to-indigo-100" style={{ height: '500vh' }}>
      {/* This inner container sticks to the top while scrolling */}
      <div className="w-full h-screen sticky top-0 flex flex-col items-center justify-center overflow-hidden">
        <div className="w-full h-full">
          <CircularGallery items={galleryData} radius={350} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
