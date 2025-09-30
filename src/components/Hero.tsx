"use client";

import React from 'react';
import { CircularGallery, GalleryItem } from '@/components/ui/circular-gallery';
import { useLanguage } from '@/contexts/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();

  const galleryData: GalleryItem[] = [
    {
      common: 'Fitness',
      binomial: t('carousel.innovation.subtitle'),
      photo: {
        url: '/carousel/carousel-1.jpg',
        text: 'Fitness equipment and training area',
        pos: 'center',
        by: ''
      }
    },
    {
      common: 'Cardio Zone',
      binomial: t('carousel.excellence.subtitle'),
      photo: {
        url: '/carousel/carousel-2.jpg',
        text: 'Cardio training equipment and machines',
        pos: 'center',
        by: ''
      }
    },
    {
      common: 'Sports Hall',
      binomial: t('carousel.partnership.subtitle'),
      photo: {
        url: '/carousel/carousel-3.jpg',
        text: 'Multi-purpose sports and activity hall',
        pos: 'center',
        by: ''
      }
    },
    {
      common: 'Pool',
      binomial: t('carousel.growth.subtitle'),
      photo: {
        url: '/carousel/carousel-4.jpg',
        text: 'Swimming pool and aquatic facilities',
        pos: 'center',
        by: ''
      }
    },
    {
      common: 'Spa Zone',
      binomial: t('carousel.success.subtitle'),
      photo: {
        url: '/carousel/carousel-5.jpg',
        text: 'Relaxation and wellness spa area',
        pos: 'center',
        by: ''
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
