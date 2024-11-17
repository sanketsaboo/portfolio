import React from "react";
import {
  mobile,
  backend,
  creator,
  web,
  crypto_koffee,
  metalytics,
  idfy,
  carrent,
  jobit,
  tripguide,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Engineer",
    icon: web,
  },
  {
    title: "Backend Engineer",
    icon: backend,
  },
  {
    title: "Cloud Engineer",
    icon: creator,
  },
  {
    title: "Flutter Developer",
    icon: mobile,
  },
];

const technologies = {
    "Programming Languages": ['Node.js', 'Python', 'JavaScript', 'Elixir'],
    "Databases & Cache": ['Postgres', 'MongoDB', 'Redis', 'SQL'],
    "DevOps": ['Docker', 'GitLab', 'Git' ,'CI/CD', 'Kubernetes'],
    "Cloud": ['Google Cloud Platform (GCP)', 'Amazon Web Services(AWS)'],
    "Tools & Frameworks": ['RabbitMQ', 'Express.js', 'Flask', 'Remix', 'Phoenix', 'FastAPI', 'Data Visualization', 'Automation'],
    "Frontend & Styling": ['React','Svelte' ,'HTML', 'CSS', 'Redux', 'TailwindCSS', 'Bootstrap'],
    "Mobile Development": ['Flutter']
  }
const experiences = [
  {
    title: "Full Stack Engineer",
    company_name: "IDfy",
    icon: idfy,
    iconBg: "#383E56",
    date: "January 2023 - Present",
    points: 
    [
      "Collaborated with cross-functional teams to build products such as Sitescan, Inspect AI, DSCI <> IDfy, and Consent Governance Platform.",
      "Contributed to the development of solutions like polygonID, hospital DB, e-sign, and interview-safe tools.",
      "Independently built an end-to-end system/product to automate web scraping and due diligence which were integrated by companies like Razorpay (for merchant onboarding process and due diligence), SBI, HDFC, PayMongo and others (for due diligence)",
      "Contributed 1.25% of company revenue by developing a tool that streamlined merchant onboarding and compliance checks regulated by RBI.",
      "Automated data collection for website liveness, SSL details, domain information, social media links, Google reviews, and critical legal pages such as terms, privacy, shipping, FAQs, contact, about, and returns policies.",
      "Implemented advanced text analysis to identify redundant content and restricted words, ensuring compliance across all scraped data.",
      "Developed search functionalities for legal policies and integrated screenshots to enhance due diligence efficiency.",
      "Engineered scoring models for page-level risk, overall website risk, and merchant classification codes (MCC).",
      "Processed more than 1.2 million websites (in around 1 years), with the capability of running around 72k websites in bulk jobs at once (last tested).",
      "Built a modular, event-driven microservices architecture that included scraper, bulk job, main app, and report generation services for optimal performance.",
      "Managed full-stack development and GCP infrastructure, leveraging GKE, Cloud Functions, and Cloud SQL to ensure high scalability and performance.",
      "Developed the backend for Inspect AI, facilitating communication between five different microservices for seamless integration.",
      "Integrated frontend with backend and contributed to parts of the ML services.",
      "Role based access management and CI CD for all the projects.",
      "Currently working on developing a Cookie Manager to enhance user data management and privacy as part of the Consent Governance Platform of IDfy"
    ]
  },
  {
    title: "Backend Engineer",
    company_name: "Metalytics",
    icon: metalytics,
    iconBg: "#E6DEDD",
    date: "April 2022 - January 2023",
    points: [
      "Technical Lead for Wallet Intel",
      "Worked with global remote team, supporting over 30+ business clients",
      "Engineered and deployed microservices on AWS using the Serverless framework",
      "Scaled the system from 25K to 400K wallets (last tested threshold and me scaled to more)",
      "Achieved significant performance improvements, reducing error rates to less than 0.0001%",
      "Enhanced fraud detection by integrating additional indicators to score wallets more effectively",
      "Automated the entire microservice workflow on AWS utilizing Redis, SQS, and Lambda functions",
      "Developed automated processes for generating and scoring data, including Excel sheets with complex formulas",
      "Conducted in-depth data analysis on NFTs and wallet intelligence, identifying fraudulent wallets and visualizing wallet relationships",
      "Implemented web scraping solutions with Selenium to extract data from sites protected by Cloudflare",
    ],
  },
  {
    title: "Freelance Full Stack Developer",
    company_name: "Crypto Koffee",
    icon: crypto_koffee,
    iconBg: "#383E56",
    date: "September 2021 - February 2022",
    points: [
      "Developed an internal system using Node.js, Express.js, React.js and MongoDB, implementing 21 core functionality pages and full CRUD operations across the platform",
      "Collaborated with a global remote team to deliver key projects",
      "Built an automated system to generate SVG files from an API, supporting the company's promotional efforts",
      "Designed and implemented a dashboard allowing authorized users to create and manage tasks",
      "Developed a leader-board to track and display user performance",
      "Created KPI metrics for events stored in a MongoDB database",
      "Built a custom calendar for viewing, adding, and editing events, similar to Google Calendar"
    ],
  }
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
