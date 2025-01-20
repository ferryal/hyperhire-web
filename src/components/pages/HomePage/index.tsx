import React from 'react';
import HomeTemplate from '@/components/templates/HomeTemplate';
import CustomImage from '@/components/atoms/CustomImage';
import { HOME_MENU_DESKTOP, HOME_MENU_MOBILE, HOME_TESTIMONIAL } from '@/constants/menus';
import CarouselCard from '@/components/molecules/Carousel/CarouselCard';

const HomePage = () => {
  return (
    <HomeTemplate>
      <section className={'flex flex-col lg:grid lg:grid-cols-12 lg:gap-3.5'}>
        <div
          className={'lg:col-span-6 lg:mt-10 px-4 lg:px-8 2xl:px-[14rem] 3xl:px-0 3xl:pl-[22.5rem] 3xl:pr-[18.5rem]'}>
          <CustomImage
            src={'/images/tooltip-home.png'}
            alt={'tooltip-home'}
            containerClassName={'w-[9.375rem] h-[3rem] lg:hidden'}
          />
          <CustomImage
            src={'/images/tooltip-home-desktop.png'}
            alt={'tooltip-home-desktop'}
            containerClassName={'w-[9.375rem] h-[3rem] hidden lg:block home-tooltip-animation'}
          />
          <h1
            className={
              'text-4xl lg:text-5xl my-4 leading-[2.925rem] lg:leading-[3.9rem] animate-in fade-in slide-in-from-bottom duration-500'
            }>
            최고의 실력을 가진
            <br />
            외국인 인재를 찾고 계신가요?
          </h1>
          <p
            className={
              'text-lg leading-[1.6875rem] opacity-80 lg:hidden animate-in fade-in slide-in-from-bottom duration-500'
            }>
            법률 및 인사관리 부담없이 1주일 이내에 원격으로 채용해보세요.
          </p>

          <p className={'text-2xl opacity-90 hidden lg:block animate-in fade-in slide-in-from-bottom duration-500'}>
            법률 및 인사관리 부담없이
            <br />
            1주일 이내에 원격으로 채용해보세요.
          </p>

          <div className={'hidden lg:block mt-6'}>
            <p className={'underline-skip-ink animate-in fade-in slide-in-from-bottom duration-500'}>
              개발자가 필요하신가요?
            </p>
            <div className={'mt-[3.75rem] grid grid-cols-12 gap-12 animate-in fade-in duration-500'}>
              {HOME_MENU_DESKTOP.map((item) => (
                <div key={item?.title} className={'col-span-4'}>
                  <div className={'bg-white w-[8.0625rem] h-[1px]'} />
                  <p className={'my-2 text-lg'}>{item?.title}</p>
                  <p className={'text-base opacity-80'}>{item?.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={'mt-9 lg:mt-0 mb-6 lg:mb-0 lg:col-span-6 animate-in fade-in duration-500'}>
          <CustomImage
            src={'/images/tooltip-slider-home.png'}
            alt={'tooltip-slider-home'}
            containerClassName={'w-[9.5rem] h-[3.1875rem] mx-auto mb-4'}
          />
          <CarouselCard data={HOME_TESTIMONIAL} />
        </div>
      </section>
      <section className={'lg:hidden px-4 lg:px-8 2xl:px-[14rem] 3xl:px-0 3xl:pl-[22.5rem] 3xl:pr-[18.5rem]'}>
        <div className={'flex flex-wrap gap-2 mb-2'}>
          {HOME_MENU_MOBILE.slice(0, 2).map((menu) => (
            <div key={menu?.label} className={'flex items-center gap-3 min-w-[6.8125rem]'}>
              <CustomImage src={'/icons/ic-checkbox.svg'} alt={'ic-checkbox'} containerClassName={'h-5 w-5'} />
              <p className={'text-base'}>{menu?.label}</p>
            </div>
          ))}
        </div>
        <div className={'flex flex-wrap gap-2'}>
          {HOME_MENU_MOBILE.slice(2, 4).map((menu) => (
            <div key={menu?.label} className={'flex items-center gap-3 min-w-[6.8125rem]'}>
              <CustomImage src={'/icons/ic-checkbox.svg'} alt={'ic-checkbox'} containerClassName={'h-5 w-5'} />
              <p className={'text-base'}>{menu?.label}</p>
            </div>
          ))}
        </div>
        <p className={'mt-4 text-foreground-yellow underline-skip-ink text-base'}>개발자가 필요하신가요?</p>
      </section>
    </HomeTemplate>
  );
};

export default HomePage;
