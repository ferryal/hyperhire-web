import React from 'react';
import CustomImage from '@/components/atoms/CustomImage';

interface IFooterCardProps {
  item: {
    img: string;
    label: string;
  };
}

const CardFooter: React.FC<IFooterCardProps> = ({ item }) => {
  const { img, label } = item || {};
  return (
    <div className={'bg-white p-4 rounded-xl flex flex-col justify-between flex-1'}>
      <div>
        <CustomImage src={img} alt={label} containerClassName={'h-10 w-10 mb-3'} />
        <p className={'text-foreground-black text-sm'}>{label}</p>
      </div>
      <a href={'/#'} className={'flex items-center mt-4 gap-1'}>
        <p className={'text-sm'}>바로가기</p>
        <CustomImage src={'/icons/ic-arrow-right-square.svg'} alt={'ic-arrow-right'} containerClassName={'h-5 w-5'} />
      </a>
    </div>
  );
};

export default CardFooter;
