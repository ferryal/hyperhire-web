import React from 'react';
import clsx from 'clsx';

interface IButtonProps {
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<IButtonProps> = ({ children, className }) => {
  return (
    <button className={clsx('px-6 py-1.5 bg-white text-foreground-purple rounded-lg text-base', className)}>
      {children}
    </button>
  );
};

export default Button;
