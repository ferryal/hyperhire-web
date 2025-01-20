import React from 'react';

interface IBadgeProps {
  label: string;
}

const Badge: React.FC<IBadgeProps> = ({ label }) => {
  return (
    <div className={'py-1 px-3 border border-border rounded-md text-sm lg:text-base text-foreground-gray'}>{label}</div>
  );
};

export default Badge;
