import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { ModeToggle } from '@/components/mode-toggle';
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ['latin'] });
const interBlack = Inter({ 
  subsets: ['latin'],
  weight: ['900']
});

export const metadata: Metadata = {
  title: 'Damburudhar - No-Code Developer',
  description: 'Building innovative apps using free tools',
  authors: [{ name: 'Damburudhar' }],
  keywords: ['No-Code Developer', 'Web Development', 'Apps', 'Tools'],
  metadataBase: new URL('https://damburudhar.vercel.app'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://damburudhar.vercel.app',
    title: 'Damburudhar - No-Code Developer',
    description: 'Building innovative apps using free tools',
    siteName: 'Damburudhar',
    images: [
      {
        url: '/og-image.png', // Add OpenGraph image
        width: 1200,
        height: 630,
        alt: 'Damburudhar - No-Code Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Damburudhar - No-Code Developer',
    description: 'Building innovative apps using free tools',
    creator: '@scionofshiv',
    images: ['/twitter-image.png'], // Add your Twitter card image
  },
  icons: {
    icon: [
      {
        url: '/favicon.ico',
        sizes: '32x32',
        type: 'image/x-icon',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
      {
        url: '/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
      },
      {
        url: '/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
    ],
    apple: [
      {
        url: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
        color: '#000000',
      },
    ],
  },
  manifest: '/site.webmanifest',
  other: {
    'msapplication-TileColor': '#ffffff',
    'msapplication-config': '/browserconfig.xml',
    'theme-color': '#ffffff',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Additional meta tags for better SEO and device support */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Damburudhar" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="min-h-screen bg-background relative">
            <div className="absolute top-4 right-4 z-50">
              <ModeToggle />
            </div>
            <main>{children}</main>
          </div>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}