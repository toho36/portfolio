import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import {
  SITE_NAME,
  AUTHOR_NAME,
  JOB_TITLE,
  BASE_URL,
  META_DESCRIPTION,
  SOCIAL_LINKS,
} from '@/lib/constants';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  preload: true,
});

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: AUTHOR_NAME,
  jobTitle: JOB_TITLE,
  url: BASE_URL,
  sameAs: SOCIAL_LINKS.map((link) => link.href),
} as const;

export const metadata: Metadata = {
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: META_DESCRIPTION,
  keywords: ['portfolio', 'developer', 'web developer', 'software engineer'],
  authors: [{ name: AUTHOR_NAME }],
  creator: AUTHOR_NAME,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: BASE_URL,
    title: SITE_NAME,
    description: META_DESCRIPTION,
    siteName: SITE_NAME,
    // TODO: Create OG image (1200×630px) and add to /public/og-image.jpg
    // images: [
    //   {
    //     url: '/og-image.jpg',
    //     width: 1200,
    //     height: 630,
    //     alt: `${SITE_NAME} - Personal portfolio website`,
    //   },
    // ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_NAME,
    description: META_DESCRIPTION,
    // TODO: Create Twitter Card image (1200×630px) and add to /public/og-image.jpg
    // images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: BASE_URL,
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className={`${inter.className} scrollbar-thin antialiased`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
