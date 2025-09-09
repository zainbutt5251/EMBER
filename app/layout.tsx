import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'EMBER Consulting Group - Strategic Business Solutions',
  description: 'Transform your business with expert consulting services. We deliver strategic solutions that drive growth, optimize operations, and maximize ROI.',
  keywords: 'business consulting, strategic planning, digital transformation, operations consulting, management consulting',
  authors: [{ name: 'EMBER Consulting Group' }],
  openGraph: {
    title: 'EMBER Consulting Group - Strategic Business Solutions',
    description: 'Transform your business with expert consulting services.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EMBER Consulting Group - Strategic Business Solutions',
    description: 'Transform your business with expert consulting services.',
  },
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}