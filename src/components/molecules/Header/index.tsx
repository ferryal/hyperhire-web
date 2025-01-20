import React from 'react';
import CustomImage from '@/components/atoms/CustomImage';
import Button from '@/components/atoms/Button';
import Link from 'next/link';
import NavigationMenu from '@/components/atoms/NavigationMenu';
import { HEADER_MENU } from '@/constants/menus';

const Header = () => {
  return (
    <header className={'relative bg-transparent py-5 px-4 lg:px-8 lg:py-3 z-20'}>
      <div className={'flex justify-between lg:hidden'}>
        <CustomImage src={'/images/logo-white.png'} alt={'logo'} containerClassName={'w-[7.125rem] h-[1.31rem]'} />
        <CustomImage
          src={'/icons/ic-burger-line.svg'}
          alt={'burger-line'}
          containerClassName={'w-6 h-1.5 mt-[-0.96rem]'}
        />
      </div>
      <div className={'justify-between hidden items-center lg:flex'}>
        <Link href={'/'}>
          <CustomImage src={'/images/logo-white.png'} alt={'logo'} containerClassName={'w-[7.125rem] h-[1.31rem]'} />
        </Link>
        <div className={'flex items-center gap-[3.75rem]'}>
          <NavigationMenu data={HEADER_MENU} label={'채용'} />
          <Link href={'/public'} className={'text-base'}>
            해외 개발자 활용 서비스
          </Link>
        </div>
        <Button>문의하기</Button>
      </div>
    </header>
  );
};

export default Header;
