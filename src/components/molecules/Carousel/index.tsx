'use client';
import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import CardHomeInfo from '@/components/atoms/Card/CardHomeInfo';
import { HOME_CAROUSEL_INFO } from '@/constants/menus';

const Carousel = () => {
  const [emblaRef] = useEmblaCarousel(
    {
      dragFree: true,
    },
    [Autoplay({ delay: 5000, stopOnInteraction: false })],
  );

  return (
    <div className="animate-in fade-in duration-500" ref={emblaRef}>
      <div className="flex gap-2.5 mr-2.5">
        {HOME_CAROUSEL_INFO?.map((item) => (
          <div className="" key={item?.label}>
            <CardHomeInfo item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
