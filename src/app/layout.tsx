import * as React from 'react';
import type { Viewport } from 'next';
import Head from 'next/head';

import '@/styles/global.css';

import { UserProvider } from '@/contexts/user-context';
import { LocalizationProvider } from '@/components/core/localization-provider';
import { ThemeProvider } from '@/components/core/theme-provider/theme-provider';

export const viewport = { width: 'device-width', initialScale: 1 } satisfies Viewport;

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps): React.JSX.Element {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>SLUJST</title>
        <meta name="description" content="SLUJST is your go-to platform for managing scholarly journals and research." />
        <meta name="author" content="SLUJST Team" />
        <meta name="keywords" content="scholarly journals, research management, academic publishing" />
        <meta property="og:title" content="SLUJST - Scholarly Journal Management" />
        <meta property="og:description" content="Manage your scholarly journals with ease. Discover features for journal metrics, task management, and more." />
        <meta property="og:image" content="/path/to/image.jpg" />
        <meta property="og:url" content="https://www.slujst.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="SLUJST - Scholarly Journal Management" />
        <meta name="twitter:description" content="Manage your scholarly journals with ease. Discover features for journal metrics, task management, and more." />
        <meta name="twitter:image" content="/path/to/image.jpg" />
        <meta name="robots" content="index, follow" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://www.slujst.com" />
        {/* Add more meta tags or links as needed */}
      </Head>
      <body>
        <LocalizationProvider>
          <UserProvider>
            <ThemeProvider>{children}</ThemeProvider>
          </UserProvider>
        </LocalizationProvider>
      </body>
    </html>
  );
}

