import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'

export const metadata: Metadata = {
  title: 'SparkVista – Architecture, Design, 3D Visualization',
  description: 'SparkVista is a leading architecture and design studio, specializing in innovative architectural solutions, sustainable design, and 3D visualization.',
  keywords: 'architecture, architectural design, 3D visualization, sustainable design, building design, SparkVista, Meharjot Singh, architecture firm, interior design, exterior design, modern architecture, green architecture',
  authors: [
    { name: 'Meharjot Singh', url: 'https://meharjot.shop' }
  ],
  creator: 'Meharjot Singh',
  openGraph: {
    title: 'SparkVista Design Studio',
    description: 'Innovative architectural solutions blending functionality, sustainability, and aesthetic excellence.',
    url: 'https://sparkvista.com',
    siteName: 'SparkVista',
    images: [
      {
        url: '/images/sparkvista-logo.png',
        width: 1200,
        height: 630,
        alt: 'SparkVista Design Studio',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  icons: {
    icon: '/images/sparkvista-logo.png',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SparkVista – Architecture, Design, 3D Visualization',
    description: 'Innovative, sustainable, and modern architectural solutions. Discover SparkVista\'s creativity in architecture and 3D visualization.',
    images: ['/images/sparkvista-logo.png'],
    creator: '@meharjot', // Replace with actual Twitter username
  },
};

export default function RootLayout({
  children,
}: { children: React.ReactNode }) {
  const organizationJSONLD = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "SparkVista",
    "url": "https://sparkvista.com",
    "logo": "https://sparkvista.com/images/sparkvista-logo.png",
    "sameAs": [
      "https://www.linkedin.com/company/sparkvista"
      // Add other social profiles
    ],
    "description": "SparkVista is a leading architecture and design studio, specializing in innovative architectural solutions, sustainable design, and 3D visualization.",
    "founder": {
      "@type": "Person",
      "name": "Meharjot Singh"
    }
  }

  return (
    <html lang="en">
      <head>
        <style>{`
          html {
            font-family: ${GeistSans.style.fontFamily};
            --font-sans: ${GeistSans.variable};
            --font-mono: ${GeistMono.variable};
          }
        `}</style>

        {/* Google Site Verification */}
        <meta name="google-site-verification" content="YOUR-VERIFICATION-CODE" />

        {/* Google Analytics (replace G-XXXXXXXXXX with actual code) */}
        {/* <script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script> */}
        {/* <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XXXXXXXXXX', {
                page_path: window.location.pathname,
              });
            `,
          }}
        /> */}

        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJSONLD) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
