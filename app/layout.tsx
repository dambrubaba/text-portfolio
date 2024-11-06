import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { ModeToggle } from '@/components/mode-toggle';
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ['latin'] });
const interBlack = Inter({ 
  subsets: ['latin'],
  weight: ['900'] // Using black weight
});

export const metadata: Metadata = {
  title: 'Damburudhar - No-Code Developer',
  description: 'Building innovative apps using free tools',
  icons: {
    icon: '/boy.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
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