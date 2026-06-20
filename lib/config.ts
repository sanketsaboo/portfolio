// ─── Portfolio Data Configuration ────────────────────────────────────────────
// Edit this file to update your portfolio content. No other files need changing.

export const PERSONAL = {
  name: 'Sanket Saboo',
  role: 'Senior Software Engineer',
  location: 'Mumbai, India',
  careerStart: '2022-04-01', // experience auto-calculates from this date
  focus: 'Distributed Systems & Web',
  tagline: 'Turning ideas into products that scale and ship. I build for real users, real constraints, and lasting impact.',
  email: 'sanketsaboo@gmail.com',
  availability: 'Open to senior & staff roles · select freelance',
  resumeUrl: '/resume.pdf',
  bio: [
    'Full-stack engineer passionate about building efficient, scalable, and user-friendly solutions to real-world problems. I love the craft — from distributed backend systems to polished product interfaces — and I pick up new technologies fast.',
    'I\'ve shipped products used by Razorpay, SBI, HDFC, Netflix, Google, and Microsoft. Whether it\'s processing 1.2M+ websites at IDfy, scaling a crypto analytics platform to 400K wallets at Metalytics, or building browser testing infrastructure at BrowserStack — I care about the outcome, not just the code.',
    'I thrive on collaboration and genuinely enjoy turning ideas into reality. If you\'re building something interesting, I\'d love to be part of it.',
  ],
  stats: [
    { value: '1.2M+', label: 'websites processed' },
    { value: '400K+', label: 'wallets analyzed' },
    { value: '99.99%', label: 'uptime achieved' },
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
    description: 'Building browser testing infrastructure used by Netflix, Google, and Microsoft. Working on core platform reliability and developer tooling at scale.',
    highlights: [
      'Building browser testing infrastructure used by Netflix, Google, and Microsoft.',
      'Working on core platform reliability and developer tooling at scale.',
    ],
    tech: ['Node.js', 'TypeScript', 'Go', 'Kubernetes', 'GCP'],
  },
  {
    company: 'IDfy',
    logoSrc: '/logos/idfy.jpeg',
    logoColor: '#1A4DE5',
    role: 'Full Stack Engineer',
    period: 'Jan 2023 – Jan 2026',
    current: false,
    description: 'Independently built an end-to-end system to automate web scraping and due diligence, integrated by Razorpay, SBI, HDFC, PayMongo and others for merchant onboarding. Contributed 1.25% of company revenue.',
    highlights: [
      'Independently built an end-to-end merchant onboarding system — integrated by Razorpay, SBI, HDFC, and PayMongo.',
      'Contributed 1.25% of company revenue via a tool that streamlined merchant onboarding and RBI compliance checks.',
      'Processed more than 1.2 million websites (~1 year), with bulk jobs running 72K websites at once.',
      'Built a modular, event-driven microservices architecture: scraper, bulk job, main app, and report generation.',
      'Engineered scoring models for page-level risk, website risk, and merchant classification codes (MCC).',
      'Built Inspect AI backend, facilitating communication between five microservices for seamless integration.',
      'Collaborated on Sitescan, Consent Governance Platform, polygonID, e-sign, and interview-safe tools.',
      'Managed full-stack development and GCP infrastructure — GKE, Cloud Functions, Cloud SQL.',
    ],
    tech: ['Node.js', 'Python', 'React', 'PostgreSQL', 'RabbitMQ', 'Docker', 'GCP', 'GKE'],
  },
  {
    company: 'Metalytics',
    logoSrc: '/logos/metalytics.jpeg',
    logoColor: '#7C3AED',
    role: 'Backend Engineer',
    period: 'Apr 2022 – Jan 2023',
    current: false,
    description: 'Technical Lead for Wallet Intel. Scaled from 25K to 400K wallets with 30+ enterprise clients globally. Reduced error rates to under 0.0001% across AWS Serverless infrastructure.',
    highlights: [
      'Technical Lead for Wallet Intel — the company\'s flagship crypto analytics product.',
      'Scaled the system from 25K to 400K wallets; worked with 30+ global enterprise clients.',
      'Reduced error rates to under 0.0001% across AWS Serverless infrastructure.',
      'Automated the entire microservice workflow using Redis, SQS, and Lambda functions.',
      'Enhanced fraud detection by integrating additional indicators to score wallets more effectively.',
      'Conducted in-depth data analysis on NFTs and wallet intelligence, identifying fraudulent wallets.',
      'Implemented web scraping with Selenium to extract data from Cloudflare-protected sites.',
    ],
    tech: ['Elixir', 'Phoenix', 'AWS Lambda', 'Redis', 'SQS', 'PostgreSQL', 'Selenium'],
  },
  {
    company: 'Crypto Koffee',
    logoSrc: '/logos/crypto-koffee.jpeg',
    logoColor: '#D97706',
    role: 'Freelance Full Stack Developer',
    period: 'Sep 2021 – Feb 2022',
    current: false,
    description: 'Built an internal platform with 21 core pages including a custom calendar, leaderboard, KPI dashboards, and task management. Delivered full-stack using Node.js and React.',
    highlights: [
      'Built an internal system using Node.js, Express.js, React.js and MongoDB — 21 core pages with full CRUD.',
      'Built an automated system to generate SVG files from an API for promotional use.',
      'Developed a custom calendar for viewing, adding, and editing events (similar to Google Calendar).',
      'Created KPI metrics dashboard and a leaderboard to track user performance.',
      'Designed a task management dashboard for authorized users.',
    ],
    tech: ['Node.js', 'Express.js', 'React', 'MongoDB'],
  },
]

// ─── Skills ───────────────────────────────────────────────────────────────────

export const SKILLS: Record<string, string[]> = {
  Languages: ['Node.js', 'Python', 'JavaScript', 'TypeScript', 'Elixir'],
  'Frameworks & Tools': ['Express.js', 'React', 'Next.js', 'Remix', 'FastAPI', 'Flask', 'Phoenix', 'RabbitMQ', 'Flutter'],
  Databases: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL', 'ClickHouse'],
  'Cloud & DevOps': ['GCP', 'AWS', 'Docker', 'Kubernetes', 'CI/CD', 'GitHub', 'GitLab'],
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
    title: "Code review isn't about the code — it's about the team",
    href: '#',
  },
]
