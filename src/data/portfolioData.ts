export interface Project {
  id: string;
  stepNumber: string;
  title: string;
  tagline: string;
  shortCaption: string;
  fullDescription: string;
  tags: string[];
  role: string;
  status: string;
  architectureHighlights: string[];
  metrics: { label: string; value: string }[];
  visualType: 'cloud' | 'pos' | 'sql' | 'leadership';
  githubUrl?: string;
  liveUrl?: string;
}

export interface SkillCategory {
  title: string;
  icon: string;
  description: string;
  skills: { name: string; level: string; note: string }[];
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  organization: string;
  relationship: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  tag: string;
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Kushi T H",
    initials: "KT",
    tagline: "Software Developer & Data Science Engineer",
    location: "Bengaluru, Karnataka, India",
    college: "CMR Institute of Technology (CMRIT)",
    degree: "B.E. Computer Science & Engineering (Data Science)",
    cgpa: "9.13 / 10.0",
    graduationYear: "2023 – 2027",
    email: "kushith0120@gmail.com",
    collegeEmail: "kuth23cseds@cmrit.ac.in",
    phone: "+91 8073470854",
    phoneFormatted: "+91 80734 70854",
    links: {
      github: "https://github.com/Kushith01",
      linkedin: "https://www.linkedin.com/in/kushi-t-h-24754728b",
      leetcode: "https://leetcode.com/u/Kushith01/",
      resume: "/Kushi_T_H_Resume.pdf"
    },
    bio: [
      "I am a third-year Computer Science & Data Science engineering undergraduate at CMRIT, Bengaluru, maintaining a 9.13 CGPA. My focus centers on full-stack application architecture, cloud telemetry engines, and high-integrity database systems.",
      "Beyond technical coursework, I captain the CMRIT Women's Volleyball Team and serve as Hostel Secretary (2025–26). Athletics has instilled in me rapid decision-making, disciplined team coordination, and perseverance under high pressure."
    ],
    stats: [
      { label: "Academic CGPA", value: "9.13", sub: "Top Tier @ CMRIT" },
      { label: "Unit Tests Written", value: "100%", sub: "Pytest Coverage" },
      { label: "SIH Hackathon", value: "1st", sub: "Internal Winner 2025" },
      { label: "Sports Leadership", value: "Captain", sub: "CMRIT Volleyball" }
    ]
  },

  projects: [
    {
      id: "cloudfinops",
      stepNumber: "01",
      title: "CloudFinOps AI — Cloud Cost Telemetry & Anomaly Detector",
      tagline: "Financial observability engine tracking AWS expenditures and LLM inference token burnout.",
      shortCaption: "Real-time telemetry pipeline analyzing multi-cloud billing logs, isolating budget overruns, and enforcing automated variance alerts.",
      fullDescription: "CloudFinOps AI tackles unpredictable cloud expenditures by marrying continuous billing ingestion with statistical variance analysis. The system aggregates mock multi-region AWS billing dumps, calculates moving standard deviations on resource groups, and flags runaway serverless or LLM token usage before month-end billing surprises occur.",
      tags: ["Python", "Streamlit", "Pandas", "NumPy", "SQLite", "Plotly", "Pytest"],
      role: "Lead Systems Architect & Developer",
      status: "Production Ready / 13 Pytest Suites Passed",
      architectureHighlights: [
        "Ingests 50,000+ transaction lines from JSON/CSV with SQLite staging persistence.",
        "Implements 3-sigma anomaly boundary flags to spot rogue compute spin-ups.",
        "Tracks token-level expenditure curves for OpenAI and Anthropic API proxying.",
        "Maintains 13 automated unit tests validating currency parsing and outlier filtering."
      ],
      metrics: [
        { label: "Unit Tests", value: "13 / 13" },
        { label: "Idle Waste Flagged", value: "15%" },
        { label: "Ingestion Speed", value: "< 1.2s" }
      ],
      visualType: "cloud",
      githubUrl: "https://github.com/Kushith01",
      liveUrl: "https://github.com/Kushith01"
    },
    {
      id: "pharmacy-pos",
      stepNumber: "02",
      title: "Smart Pharmacy POS & Inventory Intelligence System",
      tagline: "High-throughput dispensary terminal with batch expiration surveillance and automated restocking.",
      shortCaption: "Modern retail medical inventory platform reducing manual entry overhead by 60% through barcode acceleration and expiry tracking.",
      fullDescription: "A purpose-built dispensary point-of-sale engineered for rapid OTC and prescription checkouts. Handles 100+ pharmaceutical SKUs with precise batch-level expiry auditing, minimum threshold warnings, and instant bill generation formatted for local receipt printers.",
      tags: ["React", "TypeScript", "Vite", "Tailwind CSS", "Node.js", "Express"],
      role: "Full-Stack Engineer",
      status: "Deployed & Validated",
      architectureHighlights: [
        "Sub-100ms barcode scanner input listener with auto-debounce and cart matching.",
        "Dual-level safety alert system detecting medicines approaching 30-day expiry.",
        "Decreases counter clerk manual keyboard entries by 60% with instant search indexing.",
        "Strict decimal arithmetic preventing floating-point rounding errors on tax and discounts."
      ],
      metrics: [
        { label: "Medicines Cataloged", value: "100+" },
        { label: "Manual Overhead", value: "-60%" },
        { label: "Checkout Latency", value: "< 100ms" }
      ],
      visualType: "pos",
      githubUrl: "https://github.com/Kushith01",
      liveUrl: "https://github.com/Kushith01"
    },
    {
      id: "mysql-cleaning",
      stepNumber: "03",
      title: "Automated MySQL Layoffs Data Cleansing Pipeline",
      tagline: "Enterprise SQL pipeline transforming noisy global workforce datasets into structured reporting marts.",
      shortCaption: "Advanced SQL window partitioning and normalization removing duplicates and reconciling missing industry classifications.",
      fullDescription: "A deep dive into high-integrity relational database processing. Cleaned a real-world multi-year global tech layoffs dataset comprising over 2,000 messy records using advanced SQL staging tables, window partition rankings, and conditional field harmonization.",
      tags: ["MySQL", "SQL Workbench", "Window Functions", "Data Staging", "Indexing"],
      role: "Database Engineer & Data Analyst",
      status: "Documented & Audited",
      architectureHighlights: [
        "Implemented ROW_NUMBER() OVER(PARTITION BY company, location, industry, total_laid_off, percentage_laid_off, date, stage, country, funds_raised_millions) to safely isolate and delete duplicates.",
        "Harmonized inconsistent text labels (e.g. 'Crypto', 'Crypto Currency', 'CryptoCurrency') into singular canonical taxonomies.",
        "Built self-joining UPDATE pipelines to backfill missing industry values from counterpart records.",
        "Purged dead records where both layoffs and percentage columns remained unpopulated."
      ],
      metrics: [
        { label: "Records Cleaned", value: "2,000+" },
        { label: "Duplicates Purged", value: "100% Exact" },
        { label: "Query Execution", value: "< 80ms" }
      ],
      visualType: "sql",
      githubUrl: "https://github.com/Kushith01",
      liveUrl: "https://github.com/Kushith01"
    },
    {
      id: "leadership-hackathon",
      stepNumber: "04",
      title: "Athletic Leadership & SIH Hackathon Champions",
      tagline: "Bridging competitive sports discipline with rapid 36-hour hackathon execution.",
      shortCaption: "CMRIT Women's Volleyball Team Captain and 1st Place Winner at CMRIT Internal Smart India Hackathon 2025.",
      fullDescription: "Leadership on the sports court directly shapes engineering leadership. As Volleyball Team Captain and Hostel Secretary (2025–26), I direct team dynamics, motivate peers under pressure, and drive tactical strategy. This same mindset led our team to 1st Place at CMRIT's Internal SIH Hackathon 2025.",
      tags: ["Team Leadership", "Smart India Hackathon", "Strategy", "Volleyball Captain", "Hostel Secretary"],
      role: "Team Captain & Lead Presenter",
      status: "1st Place Winner 2025 / VTU State Competitor",
      architectureHighlights: [
        "Captained CMRIT Volleyball squad across inter-collegiate VTU state tournaments.",
        "Directed rapid prototyping sprint during 36-hour SIH hackathon to claim 1st position.",
        "Elected Hostel Secretary representing 300+ residents, resolving logistical challenges.",
        "Active member of CMRIT Peer Learning Team, mentoring junior students in algorithms."
      ],
      metrics: [
        { label: "SIH Hackathon", value: "1st Place" },
        { label: "Hostel Governance", value: "300+ Students" },
        { label: "State Tournaments", value: "VTU Level" }
      ],
      visualType: "leadership",
      githubUrl: "https://github.com/Kushith01",
      liveUrl: "https://github.com/Kushith01"
    }
  ] as Project[],

  skills: [
    {
      title: "Languages & Core",
      icon: "Code2",
      description: "Fundamental languages used for algorithmic rigor and production logic.",
      skills: [
        { name: "Python", level: "Advanced", note: "Streamlit, Pandas, NumPy, Pytest" },
        { name: "SQL (MySQL)", level: "Advanced", note: "Window functions, CTEs, Indexing" },
        { name: "JavaScript / TypeScript", level: "Proficient", note: "ES6+, Async, Type Safety" },
        { name: "C / C++", level: "Intermediate", note: "Memory management, Data structures" }
      ]
    },
    {
      title: "Web & Frontend",
      icon: "Layout",
      description: "Modern component-driven web frameworks with responsive craft.",
      skills: [
        { name: "React", level: "Proficient", note: "Hooks, Context, State patterns" },
        { name: "Next.js (App Router)", level: "Proficient", note: "SSR, Server Components, Routing" },
        { name: "Tailwind CSS", level: "Advanced", note: "Utility-first, Custom Themes" },
        { name: "HTML5 & Modern CSS", level: "Advanced", note: "Semantic structure, Flexbox, Grid" }
      ]
    },
    {
      title: "Data & Systems",
      icon: "Database",
      description: "Tools for schema architecture, data wrangling, and metric visualization.",
      skills: [
        { name: "MySQL Workbench", level: "Advanced", note: "Schema modeling, Query optimization" },
        { name: "Pandas & NumPy", level: "Proficient", note: "Vectorized transforms, EDA" },
        { name: "Plotly & Streamlit", level: "Proficient", note: "Interactive analytical portals" },
        { name: "SQLite", level: "Proficient", note: "Embedded application databases" }
      ]
    },
    {
      title: "Engineering Fundamentals",
      icon: "Cpu",
      description: "Core theoretical pillars backed by academic excellence (CGPA: 9.13).",
      skills: [
        { name: "Data Structures & Algorithms", level: "Coursera Certified", note: "Algorithmic Toolbox" },
        { name: "Theory of Computation", level: "NPTEL Certified", note: "Automata & Grammar logic" },
        { name: "Database Management (DBMS)", level: "Academic Grade: S", note: "ACID, Normalization" },
        { name: "Operating Systems", level: "Proficient", note: "Processes, Concurrency, Paging" }
      ]
    }
  ] as SkillCategory[],

  education: [
    {
      institution: "CMR Institute of Technology (CMRIT), Bengaluru",
      credential: "B.E. in Computer Science & Engineering (Data Science)",
      period: "2023 – 2027 (Expected)",
      grade: "CGPA: 9.13 / 10.0",
      details: [
        "Consistently ranked in the top academic tier of the department.",
        "Active member of the Peer Learning Team mentoring junior students.",
        "Elected Hostel Secretary (2025–26) and Hostel Sports Secretary (2024–25).",
        "Captain, CMRIT Women's Volleyball Team."
      ]
    },
    {
      institution: "Devika PU College",
      credential: "Class XII — Pre-University Course (PCMB)",
      period: "2021 – 2023",
      grade: "Score: 90.0%",
      details: [
        "Strong foundation in Mathematics, Physics, and logical problem solving.",
        "State and regional athletic participant."
      ]
    },
    {
      institution: "Nittur Central School",
      credential: "Class X — Central Board of Secondary Education (CBSE)",
      period: "Completed 2021",
      grade: "Score: 90.0%",
      details: [
        "Graduated with distinction across Sciences and Mathematics.",
        "School sports prefect and debate team lead."
      ]
    }
  ],

  testimonials: [
    {
      id: "mentor-1",
      quote: "Kushi demonstrates an exceptional blend of intellectual curiosity and software pragmatism. Her 9.13 CGPA is not just textbook memorization—it is reflected in the solid, test-backed code she wrote for CloudFinOps.",
      author: "Faculty Mentor",
      role: "Department of CSE (Data Science)",
      organization: "CMR Institute of Technology, Bengaluru",
      relationship: "Academic Project Supervisor"
    },
    {
      id: "peer-1",
      quote: "During our 36-hour sprint for the SIH Hackathon, Kushi kept the entire team calm, organized, and focused on working deliverables. She took full ownership of the pipeline architecture and helped us clinch 1st place.",
      author: "Hackathon Teammate",
      role: "CSE Colleague",
      organization: "Internal SIH Hackathon 2025",
      relationship: "Hackathon Peer"
    },
    {
      id: "sports-1",
      quote: "As our Volleyball Captain, Kushi reads the court with razor-sharp anticipation. When the score is tight, she communicates with unwavering clarity. That exact decisive calmness translates right into her engineering discipline.",
      author: "Sports Council Member",
      role: "CMRIT Athletics Lead",
      organization: "VTU Inter-Collegiate Sports",
      relationship: "Volleyball Teammate"
    }
  ] as Testimonial[],

  faq: [
    {
      id: "faq-1",
      tag: "Recruitment",
      question: "What specific roles and opportunities is Kushi actively seeking?",
      answer: "I am actively seeking Software Engineering Internships, Full-Stack Developer Roles, and Data Analyst / Engineering positions for 2025 and 2026. I am available for summer co-ops, part-time student developer positions, and full-time internships."
    },
    {
      id: "faq-2",
      tag: "Technical Stack",
      question: "Which technologies is Kushi most confident delivering production code in?",
      answer: "My strongest day-to-day stack spans Python (Pandas, Streamlit, Pytest), SQL (MySQL schema design, CTEs, window functions), TypeScript/React for responsive web frontends, and core algorithmic problem solving in C++."
    },
    {
      id: "faq-3",
      tag: "Leadership",
      question: "How does your athletic background influence your work as a software engineer?",
      answer: "Being Captain of the CMRIT Volleyball Team taught me that individual brilliance never wins a match without clear communication, accountability, and fast recovery from setbacks. In code, this translates to writing maintainable documentation, listening to team feedback, and diagnosing edge cases methodically."
    },
    {
      id: "faq-4",
      tag: "Location & Relocation",
      question: "Is Kushi open to relocation or remote positions?",
      answer: "Yes. I am based in Bengaluru, India—the heart of the tech ecosystem—and am fully open to on-site, hybrid, or remote positions across India and global remote teams."
    }
  ] as FaqItem[]
};
