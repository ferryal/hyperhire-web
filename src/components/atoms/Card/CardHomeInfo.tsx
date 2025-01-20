import React from 'react';
import CustomImage from '@/components/atoms/CustomImage';

interface ICardHomeInfoProps {
  item: {
    label: string;
    image: string;
  };
}

const CardHomeInfo: React.FC<ICardHomeInfoProps> = ({ item }) => {
  const { label, image } = item || {};
  return (
    <div className={'flex items-center gap-6 rounded-xl p-4 bg-white bg-opacity-20 w-[20.75rem]'}>
      <CustomImage containerClassName={'h-14 w-14'} src={image} alt={image} />
      <p className={'text-2xl'}>{label}</p>
    </div>
  );
};

export default CardHomeInfo;
