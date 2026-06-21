// ─── Portfolio Data Configuration ────────────────────────────────────────────
// Edit this file to update your portfolio content. No other files need changing.

export const PERSONAL = {
  name: 'Sanket Saboo',
  role: 'Senior Software Engineer',
  location: 'Mumbai, India',
  careerStart: '2022-04-01', // experience auto-calculates from this date
  focus: 'Distributed Systems · Web · Agentic AI',
  tagline: 'Turning ideas into products that scale and people love.',
  email: 'sanket.saboo@somaiya.edu',
  availability: 'Open to good opportunities',
  resumeUrl: 'https://drive.google.com/file/d/14fSLxgzr0AJXrV8cpLm1I6MlFCyuAK_6/view?usp=sharing',
  bio: [
    'Engineer passionate about building efficient, scalable, and user-friendly solutions to real-world problems. I like working on things that actually matter — especially when nobody\'s figured out the answer yet.',
    'I thrive in high-paced environments, love taking full ownership of what I build, and genuinely enjoy turning ideas into reality. If you\'re building something interesting, I\'d love to be part of it.',
  ],
}

export const SOCIAL = {
  github: 'https://github.com/sanketsaboo',
  linkedin: 'https://linkedin.com/in/sanketsaboo',
  twitter: 'https://x.com/SanketSaboo',
  readcv: 'https://read.cv/sanketsaboo',
}

// ─── Experience ───────────────────────────────────────────────────────────────

export const EXPERIENCE = [
  {
    company: 'BrowserStack',
    logoSrc: '/logos/browserstack.jpeg',
    logoColor: '#F96716',
    role: 'Senior Software Engineer',
    period: 'Jan 2026 – Present',
    current: true,
    highlights: [
      'Developing an AI Tracing and Observability platform enabling end-to-end tracing, monitoring, and debugging for LLM applications.',
      'Building across multiple LLM providers and SDK integrations for enterprise-grade observability.',
      'Rearchitected and implemented the ingestion pipeline - making it ~2x faster and ~50% cheaper, processing 5.76M+ events per day on average (~4K rpm) and growing.',
      'Working on AI Evals - enabling teams to measure and benchmark LLM application quality at scale.',
    ],
    tech: ['Node.js', 'TypeScript', 'Python', 'Go', 'Java', 'Next.js', 'Redis', 'BullMQ', 'OpenTelemetry', 'SDK', 'Generative AI', 'LLM', 'Agentic AI', 'AWS', 'GitHub', 'Git'],
  },
  {
    company: 'IDfy',
    logoSrc: '/logos/idfy.jpeg',
    logoColor: '#1A4DE5',
    role: 'Full Stack Engineer',
    period: 'Jan 2023 – Jan 2026',
    current: false,
    highlights: [
      'Built and scaled SiteScan end-to-end - automated compliance checks and merchant due diligence for RBI-regulated onboarding, contributing 1.25% of revenue.',
      'Scaled to 4.9M+ website scans with P90 scan time of 48s and 70k+ domains per bulk job, powered by AI-driven MCC prediction at 72–85% accuracy.',
      'Architected and built the Cookie Management platform end-to-end - auto-scanning, categorising, and managing cookie banners for GDPR and India\'s DPDP Act compliance.',
      'Founding engineer on the Consent Governance platform - built granular consent collection, withdrawal flows, and immutable audit trails enabling enterprise-grade regulatory compliance.',
      'Reduced daily bandwidth by ~77% through size optimization and caching for 1.5M daily hits, cutting infrastructure costs by over 75% - saving ~$25K/year per client.',
      'Delivered event-driven infrastructure using modular microservices on GCP for secure, scalable data handling.',
      'Built the entire backend and parts of the AI layer for Inspect AI - a privacy compliance co-pilot enabling dark pattern detection, journey intelligence, and real-time consent alignment across web and mobile.',
      'Built the backend and AI for TPRM\'s Contract Analysis module - automatically detecting missing or non-compliant clauses, running high-risk checks on processors, and maintaining a live contract inventory with risk tags.',
      'Privy products adopted by Axis Bank, Federal Bank, and Airtel - Privy recognised as a winner of the MeitY DPDP Innovation Challenge.',
    ],
    tech: ['Node.js', 'Python', 'Elixir', 'React', 'PostgreSQL', 'Redis', 'RabbitMQ', 'Generative AI', 'LLM', 'Docker', 'Kubernetes', 'Argo', 'Kustomize', 'GitLab', 'GCP'],
    products: [
      { name: 'SiteScan', description: 'Automated merchant due diligence and RBI compliance platform for financial onboarding, with AI-powered MCC prediction.', href: 'https://www.idfy.com/industries/payments/acquirers/' },
      { name: 'Inspect AI', description: 'AI privacy co-pilot - scans apps for dark patterns, PII leaks, and consent misalignment.', href: 'https://www.privybyidfy.com/products/inspect' },
      { name: 'Cookie Management', description: 'Enterprise cookie consent platform - auto-scans, categorises, and manages cookie banners for GDPR and DPDP Act compliance.', href: 'https://www.privybyidfy.com/products/cookie-manager' },
      { name: 'Consent Governance', description: 'End-to-end consent lifecycle management - granular consent collection, withdrawal, and immutable audit trails for regulatory review. Adopted by Axis Bank, Federal Bank, and Airtel.', href: 'https://www.privybyidfy.com/products/consent-governance' },
      { name: 'TPRM', description: 'AI-powered vendor contract scanning and third-party risk management platform.', href: 'https://www.privybyidfy.com/products/tprm' },
    ],
  },
  {
    company: 'Metalytics',
    logoSrc: '/logos/metalytics.jpeg',
    logoColor: '#7C3AED',
    role: 'Full Stack Engineer',
    period: 'Apr 2022 – Jan 2023',
    current: false,
    highlights: [
      'Engineered and deployed microservices on AWS using the Serverless framework, supporting 30+ global business clients.',
      'Scaled the system from 25K to 400K+ wallets - automated the entire microservice workflow using Redis, SQS, and Lambda.',
      'Enhanced fraud detection by integrating additional indicators, reducing error rates to under 0.0001%.',
      'Built automated pipelines for generating, scoring, and analyzing NFT and wallet intelligence data.',
      'Conducted in-depth blockchain data analysis to identify fraudulent wallets and visualize wallet relationships.',
    ],
    tech: ['Python', 'AWS Lambda', 'Redis', 'SQS', 'DynamoDB', 'S3', 'PostgreSQL', 'Serverless', 'Blockchain'],
  },
  {
    company: 'Crypto Koffee',
    logoSrc: '/logos/crypto-koffee.jpeg',
    logoColor: '#D97706',
    role: 'Freelance Full Stack Developer',
    period: 'Sep 2021 – Feb 2022',
    current: false,
    highlights: [
      'Built an internal system using Node.js, Express.js, React.js and MongoDB - 21 core pages with full CRUD.',
      'Built an automated system to generate SVG files from an API for promotional use.',
      'Developed a custom calendar for viewing, adding, and editing events.',
      'Created KPI metrics dashboard and a leaderboard to track user performance.',
    ],
    tech: ['Node.js', 'Express.js', 'React', 'MongoDB'],
  },
]

// ─── Products ─────────────────────────────────────────────────────────────────

export const PRODUCTS = [
  {
    name: 'SiteScan',
    company: 'IDfy · Privy',
    href: 'https://www.idfy.com/industries/payments/acquirers/',
    description: 'Automated merchant due diligence and RBI compliance platform for financial onboarding.',
    highlights: [
      '4.9M+ website scans with P90 scan time of 48s',
      '70k+ domains per bulk job, 72-85% MCC accuracy',
      'Reduced onboarding TAT by 50% and manual effort by 90%',
    ],
    role: 'Built end-to-end',
  },
  {
    name: 'Inspect AI',
    company: 'IDfy · Privy',
    href: 'https://www.privybyidfy.com/products/inspect',
    description: 'AI Data Privacy and Compliance Co-Pilot enabling dark pattern detection, journey intelligence, and real-time consent alignment.',
    highlights: [
      'Scans every digital touchpoint for PII collection and invisible trackers',
      'Detects dark patterns in privacy policies automatically',
      'Aligns consent notices with real data usage in real time',
    ],
    role: 'Entire backend + AI',
  },
  {
    name: 'Cookie Management & Consent Governance',
    company: 'IDfy · Privy',
    href: 'https://www.privybyidfy.com/products/consent-governance',
    description: 'Enterprise platform governing user consent flows and ensuring compliance with GDPR and India\'s DPDP Act.',
    highlights: [
      'Granular, multilingual consent collection and withdrawal',
      'Immutable audit trails for regulatory review',
      'Adopted by Axis Bank and other enterprises',
    ],
    role: 'Cookie Manager end-to-end · Consent Governance (partial)',
  },
  {
    name: 'TPRM - Contract Analysis',
    company: 'IDfy · Privy',
    href: 'https://www.privybyidfy.com/products/tprm',
    description: 'AI-powered vendor contract scanning and third-party risk management for enterprise compliance.',
    highlights: [
      'Automatically detects missing or non-compliant clauses',
      'Runs high-risk checks on new and existing processors',
      'Maintains a live contract inventory with risk tags and alerts',
    ],
    role: 'Backend + AI',
  },
]

// ─── Skills ───────────────────────────────────────────────────────────────────

export const SKILLS: Record<string, string[]> = {
  Languages: ['Node.js', 'Python', 'JavaScript', 'TypeScript', 'Elixir', 'Go'],
  'Frameworks & Tools': ['Express.js', 'React', 'Next.js', 'Remix', 'FastAPI', 'Flask', 'Phoenix', 'RabbitMQ', 'BullMQ', 'OpenTelemetry', 'Flutter', 'Generative AI', 'LLMs', 'Agentic AI'],
  Databases: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL', 'ClickHouse'],
  'Cloud & DevOps': ['GCP', 'AWS', 'Docker', 'Kubernetes', 'Argo', 'Kustomize', 'CI/CD', 'Git', 'GitHub', 'GitLab'],
}

// ─── Writing ──────────────────────────────────────────────────────────────────

export const WRITING = [
  {
    date: 'Nov 2024',
    title: 'Why idempotent APIs are the most underrated design pattern',
    href: '#',
  },
  {
    date: 'Aug 2024',
    title: 'Scaling Postgres to 10M rows without breaking a sweat',
    href: '#',
  },
  {
    date: 'May 2024',
    title: 'Boring technology is a feature, not a bug',
    href: '#',
  },
  {
    date: 'Feb 2024',
    title: "Code review isn't about the code - it's about the team",
    href: '#',
  },
]
