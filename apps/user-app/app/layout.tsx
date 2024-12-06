import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Providers } from '../provider';
import ClientWrapper from '../ClientWrapper';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Wallet',
  description: 'Simple wallet app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  const showAppbarAndFooter = true; // default value

  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <ClientWrapper>
            <SpeedInsights />
            <Analytics />
            {children}
          </ClientWrapper>
        </Providers>
      </body>
    </html>
  );
}
