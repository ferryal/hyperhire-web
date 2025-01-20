import type { Metadata } from 'next';
import './globals.css';
import clsx from 'clsx';
import { poppins } from '@/constants/fonts';

export const metadata: Metadata = {
  title: 'Hyperhire Test',
  description: 'This is Hyperhire test',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={clsx(poppins.className, 'text-white')}>{children}</body>
    </html>
  );
}
