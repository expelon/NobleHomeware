import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from 'sonner';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Noble Homeware - Premium Plastic Manufacturing & White Label Solutions',
  description: 'Leading manufacturer of high-quality plastic homeware products. Specializing in white-label manufacturing, custom solutions, and B2B sourcing with 12+ years of industry expertise.',
  keywords: 'plastic manufacturing, white label homeware, B2B sourcing, custom plastic products, furniture manufacturing, kitchenware, household products, industrial storage',
  authors: [{ name: 'Noble Homeware' }],
  creator: 'Noble Homeware',
  publisher: 'Noble Homeware',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://noblehomeware.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Noble Homeware - Premium Plastic Manufacturing & White Label Solutions',
    description: 'Leading manufacturer of high-quality plastic homeware products. Specializing in white-label manufacturing, custom solutions, and B2B sourcing with 12+ years of industry expertise.',
    url: 'https://noblehomeware.com',
    siteName: 'Noble Homeware',
    images: [
      {
        url: '/home.webp',
        width: 1200,
        height: 630,
        alt: 'Noble Homeware - Premium Plastic Manufacturing',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Noble Homeware - Premium Plastic Manufacturing & White Label Solutions',
    description: 'Leading manufacturer of high-quality plastic homeware products. Specializing in white-label manufacturing, custom solutions, and B2B sourcing.',
    images: [
      {
        url: '/home.webp',
        width: 1200,
        height: 630,
        alt: 'Noble Homeware - Premium Plastic Manufacturing',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/icon.svg',
    shortcut: '/icon.svg',
    apple: '/icon.svg',
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Toaster richColors position="top-right" />
      </body>
    </html>
  );
}
