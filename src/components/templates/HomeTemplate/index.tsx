import React from 'react';
import Header from '../../molecules/Header';
import CustomImage from '@/components/atoms/CustomImage';
import Footer from '../../molecules/Footer';
import Carousel from '@/components/molecules/Carousel';

const HomeTemplate = ({ children }: { children: React.ReactNode }) => (
  <div className={'flex flex-col min-h-screen bg-white font-black overflow-hidden'}>
    <section className={'relative 3xl:mr-[5.75rem]'}>
      <CustomImage
        src={'/backgrounds/bg-home-mobile.png'}
        alt={'bg-home-mobile'}
        containerClassName={'!absolute h-full w-full lg:hidden'}
        imageClassName={'object-cover'}
        priority={true}
      />
      <CustomImage
        src={'/backgrounds/bg-home-desktop.png'}
        alt={'bg-home-desktop'}
        containerClassName={'!absolute h-full w-full hidden lg:block'}
        imageClassName={'object-cover'}
        priority={true}
      />
      <Header />
      <main className={'relative z-10 pt-9 lg:pt-[3.75rem] pb-[3.75rem]'}>{children}</main>
      <div
        className={
          'relative z-10 hidden lg:block lg:pl-8 2xl:pl-[14rem] 3xl:px-0 3xl:pl-[22.5rem] 3xl:pr-[18.5rem] mb-[6.75rem]'
        }>
        <Carousel />
      </div>
    </section>
    <Footer />
  </div>
);

export default HomeTemplate;
