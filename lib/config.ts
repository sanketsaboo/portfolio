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
    'Engineer passionate about building efficient, scalable, and user-friendly solutions to real-world problems. I like working on things that actually matter - especially when nobody\'s figured out the answer yet.',
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
      'Now building RAG and knowledge base products - retrieval and grounding systems that let LLM applications answer from enterprise knowledge.',
      'Developed an AI Tracing and Observability platform enabling end-to-end tracing, monitoring, and debugging for LLM applications.',
      'Built across multiple LLM providers and SDK integrations for enterprise-grade observability.',
      'Rearchitected and implemented the ingestion pipeline - making it ~2x faster and reducing infrastructure costs by 70% (saving ~$40K at current traffic volumes), processing 5.76M+ events per day on average (~4K rpm) and growing.',
      'Implemented automatic SDK generation from APIs, along with performance improvements in client-side CPU and memory.',
      'Worked on AI Evals - enabling teams to measure and benchmark LLM application quality at scale.',
    ],
    tech: ['RAG', 'Vector Databases', 'Semantic Search', 'Embeddings', 'Node.js', 'TypeScript', 'Python', 'Go', 'Java', 'Next.js', 'Redis', 'BullMQ', 'OpenTelemetry', 'SDK', 'Generative AI', 'LLM', 'Agentic AI', 'AWS', 'GitHub', 'Git'],
  },
  {
    company: 'IDfy',
    logoSrc: '/logos/idfy.jpeg',
    logoColor: '#1A4DE5',
    role: 'Software Engineer · Founding Engineer: Labs and Privy',
    period: 'Jan 2023 – Jan 2026',
    current: false,
    highlights: [
      'Founding engineer at Privy by IDfy and IDfy Labs - building privacy, compliance and merchant-onboarding products used by Razorpay, SBI, HDFC, Axis Bank, Federal Bank and Airtel.',
      'Architected, built and scaled SiteScan end-to-end - automated compliance checks and merchant due diligence for RBI-regulated onboarding, reducing onboarding TAT by 50% and manual effort by 90%.',
      'Scaled to 6.9M+ website scans with P90 scan time of 48s and 70k+ domains per bulk job, powered by AI-driven MCC prediction at 72–85% accuracy.',
      'Designed a modular, event-driven microservices architecture (scraper, bulk-job, core app and report-generation services) and ran the full stack on GCP (GKE, Cloud Functions, Cloud SQL). Owned RBAC and CI/CD across all products.',
      'Architected and built the Cookie Management platform end-to-end - a web crawler that discovers and auto-categorises cookies on client websites, plus configurable cookie banners and consent management for GDPR and DPDP compliance. Grew to ~3.2M hits a day (Axis Bank, Federal Bank).',
      'Built Privy\'s Consent Governance platform for DPDP - granular consent collection, withdrawal flows, and immutable audit trails for regulatory review.',
      'Reduced daily bandwidth by ~77% through size optimization and caching for 1.5M daily hits, cutting infrastructure costs by over 75% - saving ~$25K/year per client.',
      'Built the entire backend and parts of the AI layer for Inspect AI - a privacy compliance co-pilot for dark pattern detection, journey intelligence, and real-time consent alignment, across 6+ microservices.',
      'Built the backend and AI for TPRM\'s Contract Analysis module - automatically detecting missing or non-compliant clauses, running high-risk checks on processors, and maintaining a live contract inventory with risk tags.',
      'Privy recognised as a winner of the MeitY DPDP Innovation Challenge.',
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
      'Tech lead for Wallet Intel, a crypto wallet-intelligence product, working with a global remote team serving 30+ business clients.',
      'Scaled the system from 25K to 400K+ wallets while keeping the error rate under 0.0001%.',
      'Built and automated serverless microservices on AWS (Lambda, SQS, DynamoDB, Redis, Serverless Framework).',
      'Enhanced fraud detection by adding new risk signals to wallet scoring.',
      'Built automated pipelines for generating, scoring, and analyzing NFT and wallet intelligence data.',
      'Conducted in-depth data analysis on NFTs and wallet intelligence, identifying fraudulent wallets and visualizing wallet relationships.',
      'Implemented web scraping with Selenium to extract data from Cloudflare-protected sites.',
    ],
    tech: ['Python', 'AWS Lambda', 'Redis', 'SQS', 'DynamoDB', 'S3', 'PostgreSQL', 'Serverless', 'Selenium', 'Blockchain'],
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
      '6.9M+ website scans with P90 scan time of 48s',
      '70k+ domains per bulk job, 72-85% MCC accuracy',
      'Reduced onboarding TAT by 50% and manual effort by 90%',
    ],
    role: 'Architected & built end-to-end',
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
      'Cookie crawler and banners serving ~3.2M hits a day',
      'Granular, multilingual consent collection, withdrawal and immutable audit trails',
      'Adopted by Axis Bank, Federal Bank and Airtel',
    ],
    role: 'Cookie Manager end-to-end · Founding engineer on Consent Governance',
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
  'Frameworks & Tools': ['Express.js', 'React', 'Next.js', 'Remix', 'FastAPI', 'Flask', 'Phoenix', 'RabbitMQ', 'BullMQ', 'OpenTelemetry', 'Flutter', 'Selenium', 'Generative AI', 'LLMs', 'RAG', 'Embeddings', 'Semantic Search', 'Agentic AI'],
  Databases: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL', 'ClickHouse', 'Vector Databases'],
  'Cloud & DevOps': ['GCP', 'AWS', 'Docker', 'Kubernetes', 'Argo', 'Kustomize', 'CI/CD', 'Git', 'GitHub', 'GitLab'],
}

// ─── Writing ──────────────────────────────────────────────────────────────────

export const WRITING = [
  {
    date: 'Aug 2026',
    title: 'ClickHouse',
    href: 'https://learn.sanketsaboo.com/clickhouse',
  },
]
