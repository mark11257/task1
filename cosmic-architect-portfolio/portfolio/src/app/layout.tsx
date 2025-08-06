import type { Metadata } from 'next';
import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import { SEO_CONFIG, SITE_CONFIG } from '@/lib/constants';
import { Toaster } from 'react-hot-toast';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: SEO_CONFIG.defaultTitle,
    template: SEO_CONFIG.titleTemplate,
  },
  description: SEO_CONFIG.defaultDescription,
  keywords: [
    'software engineer',
    'portfolio',
    'web development',
    'space theme',
    'cosmic architect',
    'frontend developer',
    'backend developer',
    'full stack developer',
    'React',
    'Next.js',
    'TypeScript',
    'JavaScript',
  ],
  authors: [{ name: SITE_CONFIG.author, url: SITE_CONFIG.url }],
  creator: SITE_CONFIG.author,
  publisher: SITE_CONFIG.author,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: SITE_CONFIG.url,
    title: SEO_CONFIG.defaultTitle,
    description: SEO_CONFIG.defaultDescription,
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: SEO_CONFIG.defaultImage,
        width: 1200,
        height: 630,
        alt: `${SITE_CONFIG.name} - ${SEO_CONFIG.defaultDescription}`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SEO_CONFIG.defaultTitle,
    description: SEO_CONFIG.defaultDescription,
    site: SEO_CONFIG.twitterHandle,
    creator: SEO_CONFIG.twitterHandle,
    images: [SEO_CONFIG.defaultImage],
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
  manifest: '/manifest.json',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
  alternates: {
    canonical: SITE_CONFIG.url,
  },
  category: 'technology',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <head>
        {/* Preload critical fonts */}
        <link
          rel="preload"
          href="/fonts/SpaceGrotesk/SpaceGrotesk-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/Inter/Inter-Regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        
        {/* Theme Color */}
        <meta name="theme-color" content="#0A192F" />
        <meta name="msapplication-TileColor" content="#0A192F" />
        
        {/* Viewport for mobile */}
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        
        {/* Security Headers */}
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="Referrer-Policy" content="origin-when-cross-origin" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: SITE_CONFIG.author,
              url: SITE_CONFIG.url,
              image: `${SITE_CONFIG.url}/images/profile/profile-photo.jpg`,
              sameAs: [
                SITE_CONFIG.social.github,
                SITE_CONFIG.social.linkedin,
                SITE_CONFIG.social.twitter,
              ],
              jobTitle: 'Software Engineer',
              worksFor: {
                '@type': 'Organization',
                name: 'The Cosmic Architect',
              },
              description: SEO_CONFIG.defaultDescription,
            }),
          }}
        />
        
        {/* Analytics */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
                    page_title: document.title,
                    page_location: window.location.href,
                  });
                `,
              }}
            />
          </>
        )}
      </head>
      <body className="font-sans antialiased">
        {/* Skip to main content for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 bg-space-gold text-space-black px-4 py-2 rounded-md font-medium"
        >
          Skip to main content
        </a>
        
        {/* Main Application */}
        <div id="root" className="min-h-screen flex flex-col">
          {children}
        </div>
        
        {/* Toast Notifications */}
        <Toaster
          position="bottom-right"
          toastOptions={{
            duration: 4000,
            style: {
              background: 'rgba(10, 25, 47, 0.9)',
              color: '#CCD6F6',
              border: '1px solid #64FFDA',
              borderRadius: '8px',
              backdropFilter: 'blur(10px)',
            },
            success: {
              iconTheme: {
                primary: '#64FFDA',
                secondary: '#0A192F',
              },
            },
            error: {
              iconTheme: {
                primary: '#FF6B6B',
                secondary: '#0A192F',
              },
            },
          }}
        />
        
        {/* Accessibility announcements */}
        <div
          id="announcements"
          aria-live="polite"
          aria-atomic="true"
          className="sr-only"
        />
        
        {/* Service Worker Registration */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js')
                    .then(function(registration) {
                      console.log('SW registered: ', registration);
                    })
                    .catch(function(registrationError) {
                      console.log('SW registration failed: ', registrationError);
                    });
                });
              }
            `,
          }}
        />
      </body>
    </html>
  );
}