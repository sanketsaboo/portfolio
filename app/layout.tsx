import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import ThemeProvider from '../components/ThemeProvider'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Sanket Saboo - Senior Software Engineer',
    template: '%s | Sanket Saboo',
  },
  description:
    'Senior Software Engineer at BrowserStack with 8+ years building distributed systems, APIs, and backend infrastructure at scale. Previously at IDfy (1.2M+ websites processed) and Metalytics.',
  keywords: [
    'Senior Software Engineer',
    'Backend Engineer',
    'Distributed Systems',
    'BrowserStack',
    'Node.js',
    'Python',
    'TypeScript',
    'Elixir',
    'GCP',
    'AWS',
    'Bengaluru',
    'India',
    'Remote Engineer',
    'System Design',
    'API Design',
    'Microservices',
  ],
  authors: [{ name: 'Sanket Saboo', url: 'https://sanketsaboo.com' }],
  creator: 'Sanket Saboo',
  metadataBase: new URL('https://sanketsaboo.com'),
  alternates: { canonical: 'https://sanketsaboo.com' },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://sanketsaboo.com',
    title: 'Sanket Saboo - Senior Software Engineer',
    description:
      'Senior SWE at BrowserStack. 8+ years building distributed systems and backend infrastructure at scale.',
    siteName: 'Sanket Saboo',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Sanket Saboo' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sanket Saboo - Senior Software Engineer',
    description: 'Senior SWE at BrowserStack. Node.js, Python, Elixir, TypeScript, GCP.',
    creator: '@sanketsaboo',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large' },
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Sanket Saboo',
  url: 'https://sanketsaboo.com',
  jobTitle: 'Senior Software Engineer',
  worksFor: { '@type': 'Organization', name: 'BrowserStack', url: 'https://www.browserstack.com' },
  address: { '@type': 'PostalAddress', addressLocality: 'Bengaluru', addressCountry: 'IN' },
  knowsAbout: [
    'Distributed Systems', 'Node.js', 'Python', 'TypeScript', 'Elixir',
    'GCP', 'AWS', 'PostgreSQL', 'Redis', 'Kubernetes', 'System Design', 'API Design',
  ],
  email: 'mailto:sanket.saboo@somaiya.edu',
  sameAs: [
    'https://github.com/sanketsaboo',
    'https://linkedin.com/in/sanketsaboo',
    'https://x.com/sanketsaboo',
    'https://read.cv/sanketsaboo',
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Restore accent color + heading font from localStorage before first paint */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var a=localStorage.getItem('accent')||'cyan';var f=localStorage.getItem('headingFont')||'modern';var el=document.documentElement;el.dataset.accent=a;el.dataset.font=f;}catch(e){}})()`,
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
