'use client';

import React, { useState } from 'react';
import clsx from 'clsx';
import CustomImage from '@/components/atoms/CustomImage';
import Badge from '@/components/atoms/Badge';

interface ICarouselCardProps {
  data: {
    name: string;
    status: string;
    badges: string[];
  }[];
}

const CarouselCard: React.FC<ICarouselCardProps> = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % data?.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + data?.length) % data?.length);
  };

  return (
    <div className="relative w-full h-[21.8rem] lg:h-[26rem] xl:h-[29rem] flex justify-center items-center overflow-hidden">
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Left Button */}
        <button
          className="absolute z-50 -translate-y-1/2 rounded-full top-1/2 left-1 md:left-8 2xl:[left:calc(16%)] 3xl:[left:calc(18%)]"
          onClick={handlePrev}>
          <CustomImage
            src={'/icons/ic-chevron.svg'}
            alt={'ic-chevron'}
            containerClassName={'h-6 sm:h-8 w-6 sm:w-8 rotate-180'}
          />
        </button>

        <button
          className="absolute z-50 -translate-y-1/2 rounded-full top-1/2 right-1 md:right-8 2xl:[right:calc(16%)] 3xl:[right:calc(18%)]"
          onClick={handleNext}>
          <CustomImage src={'/icons/ic-chevron.svg'} alt={'ic-chevron'} containerClassName={'h-6 sm:h-8 w-6 sm:w-8'} />
        </button>

        {data?.map((item, index) => {
          const position = index - activeIndex;

          return (
            <div
              key={index}
              className={clsx(
                'absolute py-9 px-4 w-[14.625rem] xl:w-[18.25rem] text-center bg-white flex flex-col items-center transition-transform duration-300 ease-in-out rounded-lg shadow-lg',
                {
                  'z-30 scale-110': position === 0, // Active card
                  'z-20 translate-x-[-2.5rem] xs:translate-x-[-3.5rem] md:translate-x-[-5rem] xl:translate-x-[-7rem] scale-95':
                    position === -1 || (position === data?.length - 1 && activeIndex === 0), // Left card
                  'z-20 translate-x-[2.5rem] xs:translate-x-[3.5rem] md:translate-x-[5rem] xl:translate-x-[7rem] scale-95':
                    position === 1 || (position === -(data?.length - 1) && activeIndex === data?.length - 1), // Right card
                  'opacity-0 z-0': Math.abs(position) > 1 && Math.abs(position) !== data?.length - 1, // Hidden cards
                },
              )}>
              <div className={'relative'}>
                <CustomImage
                  src={'/images/img-testimony.png'}
                  alt={'img-testimony'}
                  containerClassName={'h-16 w-16 xl:w-[7.5rem] xl:h-[7.5rem]'}
                />
                <CustomImage
                  src={'/images/img-colombia.png'}
                  alt={'img-colombia'}
                  containerClassName={'w-6 h-[1.125rem] !absolute -right-1 xl:right-1 bottom-0'}
                />
              </div>
              <p className={'text-foreground-black text-lg xl:text-2xl mt-4'}>{item?.name}</p>
              <p className={'text-foreground-purple text-sm xl:text-base'}>{item?.status}</p>
              <div className={'flex flex-wrap justify-center gap-1 items-center mt-4 xl:mt-10'}>
                {item?.badges.map((badge) => <Badge label={badge} key={badge} />)}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CarouselCard;
