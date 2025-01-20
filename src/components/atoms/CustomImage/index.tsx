import React from 'react';
import Image from 'next/image';
import clsx from 'clsx';

interface CustomImageProps {
  containerClassName?: string; // TailwindCSS classes for the div
  imageClassName?: string; // TailwindCSS classes for the image
  src: string; // Source for the image
  alt: string; // Alt text for the image
  priority?: boolean;
}

const CustomImage: React.FC<CustomImageProps> = ({
  containerClassName,
  imageClassName,
  src,
  alt = 'image',
  priority = false,
}) => {
  return (
    <div className={clsx('relative', containerClassName)}>
      <Image className={clsx(imageClassName)} src={src} fill alt={alt} priority={priority} sizes={'auto'} />
    </div>
  );
};

export default CustomImage;
