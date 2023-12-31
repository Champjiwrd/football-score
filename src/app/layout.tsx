// import './globals.css';
import type { Metadata } from 'next';
import { Mitr, Roboto } from 'next/font/google';

const mitr = Mitr({ weight: '400', subsets: ['latin'], display: 'swap' });

export const metadata: Metadata = {
  title: 'Thai League',
  description: 'score football',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={mitr.className}>
      <body style={{ margin: 0 }}>{children}</body>
    </html>
  );
}
