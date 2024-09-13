import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import IconFooter from '@/components/IconFooter';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL('https://freshers-23.vercel.app'),// new wesite link
  title: 'PCE Purnea Freshers 2023 | Welcome to Purnea College of Engineering',
  description: 'Official website for PCE Purnea Freshers 2023. Get all information about orientation, events, and resources for new students at Purnea College of Engineering.',
  keywords: 'PCE Purnea, Purnea College of Engineering, Freshers 2023, new students, orientation, college events',
  openGraph: {
    title: 'PCE Purnea Freshers 2023',
    description: 'Welcome to Purnea College of Engineering - Freshers 2023 Information Hub',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'PCE Purnea Freshers 2023',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PCE Purnea Freshers 2023',
    description: 'Welcome to Purnea College of Engineering - Freshers 2023 Information Hub',
    images: ['/twitter-image.jpg'],
    creator: '@PCEPurnea',
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
  verification: {
    google: 'G4iEeDPTf3dszjIt0SXYcSmhfCpAQktCGa4fM_f2f0c',
    // yandex: 'your-yandex-verification-code',
    // yahoo: 'your-yahoo-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        {/* <link rel="canonical" href="https://freshers-23.vercel.app" /> */}
        {/* <link rel="alternate" hrefLang="en" href="https://freshers-23.vercel.app/en" /> */}
        {/* <link rel="alternate" hrefLang="hi" href="https://freshers-23.vercel.app/hi" /> */}
      </head>
      <body className={inter.className}>
        <div className="relative w-full flex items-center justify-center">
          <Navbar />
        </div>
        {children}
        <IconFooter />
      </body>
    </html>
  );
}