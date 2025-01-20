import React from 'react';
import CustomImage from '@/components/atoms/CustomImage';
import { FOOTER_CARD } from '@/constants/menus';
import CardFooter from '@/components/atoms/Card/CardFooter';

const Footer = () => {
  return (
    <footer
      className={
        '3xl:mt-4 3xl:ml-[6.125rem] px-4 lg:px-8 2xl:px-[18rem] 3xl:px-[21.625rem] pt-16 3xl:pt-20 pb-[3.75rem] 3xl:pb-20 text-foreground-gray bg-background'
      }>
      <section className={'flex flex-col lg:grid lg:grid-cols-12 lg:items-center'}>
        <div className={'lg:col-span-4'}>
          <CustomImage src={'/images/logo.svg'} alt={'logo'} containerClassName={'w-[11.6875rem] h-[2.125rem]'} />
          <p className={'text-sm mt-4 text-foreground-black'}>
            우리는 국가의 장벽을 넘어 최고의 인재를 매칭해드립니다.
          </p>
          <p className={'mt-[1.125rem] text-[0.8125rem] leading-[1.21875rem] mb-2'}>010-0000-0000</p>
          <p className={'text-13'}>aaaaa@naver.com</p>
        </div>
        <div className={'grid grid-cols-8 lg:flex gap-2 lg:gap-4 mt-[1.125rem] lg:mt-0 lg:col-span-8'}>
          {FOOTER_CARD.map((item) => (
            <div className={'col-span-4 flex lg:w-[11.6875rem]'} key={item?.label}>
              <CardFooter item={item} />
            </div>
          ))}
        </div>
      </section>
      <section className={'flex flex-col mt-[3.75rem] gap-9 lg:gap-0 lg:grid lg:grid-cols-12 lg:mt-[2.875rem]'}>
        <div className={'flex gap-2 lg:gap-3 lg:col-span-4'}>
          <div className={'flex flex-col flex-1 font-black'}>
            <p className={'text-foreground-black text-xs'}>상호명</p>
            <p className={'text-13 mt-2.5 mb-[0.3125rem]'}>하이퍼하이어</p>
            <p className={'text-13'}>Hyperhire India Private Limited</p>
          </div>
          <div className={'flex flex-col flex-1 ml-9 lg:ml-0'}>
            <p className={'text-foreground-black text-xs'}>대표 CEO</p>
            <p className={'text-13 mt-2.5 mb-[0.3125rem]'}>김주현</p>
            <p className={'text-13'}>Juhyun Kim</p>
          </div>
        </div>
        <div className={'flex flex-col gap-9 lg:gap-[2.625rem] lg:flex-row lg:col-span-8'}>
          <div>
            <p className={'text-foreground-black text-xs'}>사업자등록번호 CIN</p>
            <p className={'text-13 mt-2.5 mb-[0.3125rem]'}>427-86-01187</p>
            <p className={'text-13'}>U74110DL2016PTC290812</p>
          </div>
          <div>
            <p className={'text-foreground-black text-xs'}>주소 ADDRESS</p>
            <p className={'text-13 mt-2.5 mb-[0.3125rem]'}>서울특별시 강남대로 479, 지하 1층 238호 </p>
            <p className={'text-13'}>
              D-138, Street number 11, Jagjeet Nagar, North East Delhi, New Delhi, 110053 India
            </p>
          </div>
        </div>
      </section>
      <section className={'mt-9 lg:mt-7 text-13'}>ⓒ 2023 Hyperhire</section>
    </footer>
  );
};

export default Footer;
