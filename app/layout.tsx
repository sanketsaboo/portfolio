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
    'Senior Software Engineer at BrowserStack building AI observability infrastructure. Previously founding engineer at IDfy on privacy and compliance platforms. Based in Mumbai, India.',
  keywords: [
    'Sanket Saboo',
    'Software Engineer',
    'Full Stack Engineer',
    'Distributed Systems',
    'AI Observability',
    'BrowserStack',
    'Node.js',
    'Python',
    'TypeScript',
    'Go',
    'Agentic AI',
    'LLM',
    'OpenTelemetry',
    'GCP',
    'AWS',
    'Mumbai',
    'India',
    'System Design',
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
      'Senior Software Engineer at BrowserStack building AI observability infrastructure. Turning ideas into products that scale and people love.',
    siteName: 'Sanket Saboo',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Sanket Saboo' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sanket Saboo - Senior Software Engineer',
    description:
      'Senior Software Engineer at BrowserStack building AI observability infrastructure. Turning ideas into products that scale and people love.',
    creator: '@SanketSaboo',
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
  address: { '@type': 'PostalAddress', addressLocality: 'Mumbai', addressCountry: 'IN' },
  knowsAbout: [
    'Distributed Systems', 'Node.js', 'Python', 'TypeScript', 'Go', 'Elixir',
    'GCP', 'AWS', 'PostgreSQL', 'Redis', 'Kubernetes', 'OpenTelemetry',
    'Generative AI', 'LLMs', 'Agentic AI', 'System Design', 'Microservices',
  ],
  sameAs: [
    'https://github.com/sanketsaboo',
    'https://linkedin.com/in/sanketsaboo',
    'https://x.com/SanketSaboo',
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
        <link rel="alternate" type="text/plain" title="LLMs.txt" href="/llms.txt" />
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
