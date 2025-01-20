'use client';

import React, { useMemo, useState } from 'react';
import Link from 'next/link';
import CustomImage from '@/components/atoms/CustomImage';

interface INavigationMenuProps {
  label: string;
  data: {
    label: string;
    separator?: boolean;
  }[];
}

const NavigationMenu: React.FC<INavigationMenuProps> = ({ data, label }) => {
  const [isHovered, setIsHovered] = useState(false);

  const scaleValue = useMemo(() => {
    return isHovered ? 1 : 0;
  }, [isHovered]);

  return (
    <div className="relative" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      {/* Main Link */}
      <Link href="/" className="flex items-center gap-2 text-base">
        {label}
        <CustomImage
          src={'/icons/ic-chevron.svg'}
          alt={'ic-chevron'}
          containerClassName={`h-4 w-4 transition-transform ${isHovered ? 'rotate-0' : 'rotate-90'}`}
        />
      </Link>

      {/* Dropdown Menu */}
      <div
        style={{
          transform: `scaleY(${scaleValue})`,
        }}
        className="absolute left-0 mt-2 text-sm w-60 bg-white shadow-lg overflow-hidden rounded-lg origin-top transition-transform duration-300">
        <p className={'py-2.5 px-4 text-foreground-black font-bold'}>{label}</p>
        {data?.map((item) => (
          <div className={'rounded-lg'} key={item?.label}>
            {item?.separator && <hr className="border-t border-divider" />}
            <div className="px-4 py-2.5 text-foreground-gray font-medium hover:bg-gray-100 hover:cursor-pointer">
              {item.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NavigationMenu;
