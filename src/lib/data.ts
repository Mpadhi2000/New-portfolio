import {
  PersonalInfo,
  Project,
  SkillGroup,
  ExperienceItem,
  BuildProcessStep,
  AILabItem,
  CaseStudy,
  AchievementItem,
} from "@/types/portfolio";

export const personalInfo: PersonalInfo = {
  name: "Mayank Padhi",
  tagline: "Software Engineer · Full-Stack · GenAI · SaaS",
  headline: "Software Engineer building Full-Stack & AI-powered products.",
  positioning:
    "I build production-ready SaaS applications across React, Next.js, Node.js, Python, PostgreSQL, and modern AI/LLM technologies — from frontend architecture and APIs to cloud deployment.",
  email: "mayankpadhi91@gmail.com",
  phone: "+91 8104487457",
  location: "Mumbai, Maharashtra, India",
  resumeUrl: "#resume",
  githubUrl: "https://github.com/mpadhi2000",
  linkedinUrl: "https://linkedin.com/in/mayank-padhi",
  stats: {
    experienceYears: "4+",
    productionWebsites: "150+",
    securityFirewalls: "15+",
    speedOptimization: "20%+",
  },
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Engineering", href: "#how-i-build" },
  { label: "AI Lab", href: "#ai-lab" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Resume", href: "#resume" },
  { label: "Contact", href: "#contact" },
];

export const heroSignatureNodes = [
  {
    id: "code",
    label: "Code",
    sub: "TypeScript / React",
    color: "from-blue-500 to-indigo-600",
  },
  {
    id: "api",
    label: "Data / API",
    sub: "FastAPI / Node / REST",
    color: "from-indigo-600 to-sky-500",
  },
  {
    id: "system",
    label: "System",
    sub: "PostgreSQL / Redis / Docker",
    color: "from-sky-500 to-cyan-400",
  },
  {
    id: "ai",
    label: "AI / Agents",
    sub: "LLMs / RAG / Gateway",
    color: "from-cyan-400 to-teal-400",
  },
  {
    id: "product",
    label: "Product",
    sub: "Production Cloud SaaS",
    color: "from-teal-400 to-emerald-400",
  },
];

export const aboutContent = {
  title: "Engineering Mindset & Progression",
  eyebrow: "About Me",
  evolutionSteps: [
    {
      id: "web-engineering",
      stepNumber: "01",
      title: "Web Engineering",
      tagline: "High-Performance Interfaces & Frontend Foundations",
      narrative:
        "My engineering journey began with mastering core browser mechanics, semantic HTML, modern JavaScript, and DOM optimization. Over early production roles, I delivered and optimized 150+ client web systems, focusing on sub-second load times, responsive fluid layouts, and strict Core Web Vitals (LCP, CLS, INP).",
      focusAreas: [
        "Core Web Vitals & Sub-Second Page Load Optimization",
        "Responsive, Accessible Component Systems",
        "Security Hardening & DDoS Mitigation across 15+ Domains",
        "Semantic HTML5, Modern CSS/SCSS & Tailwind Frameworks",
      ],
      technologies: [
        "JavaScript (ES6+)",
        "HTML5 / CSS3",
        "Tailwind CSS",
        "Core Web Vitals",
        "Security Best Practices",
      ],
    },
    {
      id: "full-stack",
      stepNumber: "02",
      title: "Full-Stack Development",
      tagline: "API Design, Authentication & Relational Data",
      narrative:
        "Transitioned into full-stack engineering by building decoupled REST APIs, stateless JWT-based authentication pipelines, and relational database schemas. Focused on resilient client-server data synchronization, error boundaries, and predictable server execution across Node.js and PostgreSQL.",
      focusAreas: [
        "Stateless JWT Authentication & Granular RBAC Permissions",
        "Relational Schema Design & Query Optimization (PostgreSQL, MySQL)",
        "Contract-Driven REST API Engineering & Payload Validation",
        "State Management & Optimistic UI Updates in React & Next.js",
      ],
      technologies: [
        "React.js",
        "Next.js",
        "TypeScript",
        "Node.js",
        "Express.js",
        "PostgreSQL",
        "JWT / Auth",
      ],
    },
    {
      id: "software-systems",
      stepNumber: "03",
      title: "Software Systems",
      tagline: "Microservices, Docker Containerization & Cloud Deploy",
      narrative:
        "Expanded into systems engineering and infrastructure automation. Packaged services in multi-stage Docker containers, configured hardened Linux (Ubuntu) hosts with Nginx reverse proxies, automated SSL certificates, and managed continuous delivery pipelines for production reliability.",
      focusAreas: [
        "Multi-Stage Docker Container Builds & Docker Compose Topologies",
        "Linux Server Administration (UFW, fail2ban, SSH hardening)",
        "Nginx Reverse Proxying with HTTP/2, Compression & Rate Limiting",
        "CI/CD Automated Testing, Linting & Zero-Downtime Deployment",
      ],
      technologies: [
        "Docker",
        "Linux (Ubuntu)",
        "Nginx Reverse Proxy",
        "CI/CD",
        "SSL / TLS",
        "Cloudflare WAF",
      ],
    },
    {
      id: "saas-ai",
      stepNumber: "04",
      title: "SaaS + AI / GenAI",
      tagline: "Multi-Agent Systems, RAG Pipelines & Production SaaS",
      narrative:
        "Currently engineering production SaaS platforms and autonomous AI pipelines at EnFuse. Designing intelligent multi-agent orchestration graphs, low-latency AI Gateways with semantic prompt caching, hybrid RAG retrieval systems, and deterministic LLM tool calling (MCP protocol) wrapped in polished Next.js interfaces.",
      focusAreas: [
        "Multi-Agent Orchestration & Deterministic Tool-Calling Workflows",
        "Enterprise AI Gateways with Prompt Caching & Rate Limiting",
        "Hybrid RAG with Dense Vector Embeddings & pgvector",
        "High-Concurrency SaaS Frontend Architecture (Proctifai, AlphaPilot)",
      ],
      technologies: [
        "Python / FastAPI",
        "LangGraph / AI Agents",
        "pgvector",
        "Redis Cache",
        "Next.js 14 App Router",
        "MCP Protocol",
      ],
    },
  ],
};

export const projectsData: Project[] = [
  {
    id: "alphapilot",
    title: "AlphaPilot",
    subtitle: "AI-Powered Market Intelligence & Multi-Agent Analytics Platform",
    category: "AI & GenAI",
    featured: true,
    role: "Full-Stack & AI Systems Engineer",
    description:
      "A sophisticated multi-agent market intelligence platform that aggregates real-time market data, orchestrates specialized LLM analysis agents via an AI Gateway, and surfaces actionable financial insights on an interactive Next.js dashboard.",
    problem:
      "Financial analysts and traders face cognitive overload synthesizing scattered market feeds, macro indicators, and corporate disclosures into coherent investment theses in real time.",
    solution:
      "Engineered an end-to-end platform featuring an AI Gateway that routes user queries across specialized agents (Macro Research, Fundamental Analysis, Momentum Screener), queries OpenBB market data, and caches vectorized context in Redis and PostgreSQL.",
    architecture: [
      "User Client (Next.js 14, TypeScript, Tailwind)",
      "API Layer (FastAPI, Async Python, Pydantic)",
      "AI Gateway & Router (Prompt sanitization, rate-limiting)",
      "Multi-Agent Orchestrator (Research, Market Data, Synthesizer)",
      "Data Feeds (OpenBB SDK & Realtime WebSockets)",
      "Storage & Cache (PostgreSQL + pgvector, Redis Cluster)",
      "Container Infrastructure (Docker Compose, Linux)",
    ],
    techStack: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Python",
      "FastAPI",
      "PostgreSQL",
      "Redis",
      "OpenBB",
      "Multi-Agent AI",
      "AI Gateway",
      "RAG",
      "Docker",
    ],
    highlights: [
      "Designed asynchronous FastAPI routing with sub-50ms API overhead for real-time market feeds",
      "Implemented multi-agent coordination pipeline synthesizing earnings transcripts and quantitative metrics",
      "Built resilient caching layer with Redis to throttle high-frequency financial API calls",
      "Engineered responsive interactive charting and financial telemetry dashboards with zero layout shifts",
    ],
    githubUrl: "https://github.com/mpadhi2000",
    liveUrl: "https://alphapilot.example.com",
  },
  {
    id: "proctifai",
    title: "Proctifai",
    subtitle: "AI-Powered Online Examination & Remote-Proctoring SaaS",
    category: "Full-Stack SaaS",
    featured: true,
    role: "Software Engineer — Frontend Architecture & Full-Stack Development",
    description:
      "A high-security, real-time remote proctoring platform delivering seamless examination experiences, automated candidate identity verification, live telemetry streams, and examiner administration consoles.",
    problem:
      "Online certification providers require robust, low-latency candidate monitoring with absolute platform reliability, zero client crashes during examinations, and strict data privacy compliance.",
    solution:
      "Architected the complete frontend component system, resilient REST API client wrappers with exponential backoff, real-time WebSocket state management, and production cloud deployment pipelines.",
    architecture: [
      "Examiner & Candidate Frontend (React, Next.js, SCSS / Tailwind)",
      "Client State & Stream Handling (WebSockets, WebRTC, Redux Toolkit)",
      "Backend API Services (Node.js, Express, REST APIs)",
      "Database & Event Store (PostgreSQL, Redis for session cache)",
      "Deployment (Nginx reverse proxy, Linux server hardening, SSL)",
    ],
    techStack: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Express.js",
      "REST APIs",
      "WebSockets",
      "PostgreSQL",
      "Nginx",
      "Linux",
      "SCSS",
    ],
    highlights: [
      "Architected modular component hierarchy separating candidate testing view, proctor surveillance, and reporting",
      "Constructed fail-safe network retry mechanisms ensuring zero data loss during intermittent disconnects",
      "Configured production Nginx reverse proxy, SSL termination, and security headers on Ubuntu servers",
      "Optimized client-side bundle size, achieving instant load times across varying network bandwidths",
    ],
    liveUrl: "https://proctifai.com",
  },
  {
    id: "vapes-vault",
    title: "Vapes Vault",
    subtitle: "High-Throughput E-Commerce Platform",
    category: "Web & Platform",
    featured: true,
    role: "Lead Full-Stack Web Developer",
    deliveryTime: "Delivered within 15 Days",
    description:
      "An optimized e-commerce web platform engineered end-to-end under strict turnaround constraints, featuring custom inventory workflows, age-verification gateways, frictionless checkout, and caching infrastructure.",
    problem:
      "The client needed a fully customized, regulation-compliant e-commerce portal deployed to production within two weeks without compromising transactional security or load speed.",
    solution:
      "Executed rapid architecture planning, streamlined component development, integrated secure payment gateways with automated validation, and deployed high-performance CDN caching.",
    architecture: [
      "Storefront UI (Modern Component Architecture, Responsive Grid)",
      "API & Checkout Flow (Secure Payment Gateway, Age Verification)",
      "Data & Inventory Management (Relational Database, Caching)",
      "Cloud Hosting & CDN (Cloudflare Edge Caching, SSL Hardening)",
    ],
    techStack: [
      "JavaScript",
      "PHP / Node.js",
      "MySQL",
      "REST APIs",
      "Payment Gateways",
      "Cloudflare CDN",
      "Caching Strategies",
    ],
    highlights: [
      "Delivered full commercial platform from initial specification to production go-live in exactly 15 days",
      "Configured robust age verification and compliance gateways safeguarding platform operations",
      "Implemented edge caching and asset minification, achieving sub-second page rendering on mobile",
      "Integrated automated inventory tracking and transactional email notification services",
    ],
    liveUrl: "https://vapesvault.example.com",
  },
  {
    id: "team-dashboard",
    title: "Team Dashboard — Full-Stack Task Manager",
    subtitle: "Collaborative Project & Sprint Management Portal",
    category: "Full-Stack SaaS",
    featured: false,
    role: "Full-Stack Developer",
    description:
      "A modular sprint and task orchestration application with real-time kanban boards, role-based access controls, and audit trails.",
    problem:
      "Distributed teams needed a unified, lightweight interface to track sprint milestones, assign tickets, and generate team throughput metrics.",
    solution:
      "Built a decoupled frontend in React and Next.js connecting to structured RESTful microservices with JWT authentication and granular permissions.",
    architecture: [
      "Frontend Single-Page App (React, Next.js, Tailwind)",
      "Auth & Service Layer (Node.js, Express, JWT, REST)",
      "Data Store (PostgreSQL / MySQL)",
    ],
    techStack: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "REST APIs",
      "JWT",
      "MySQL",
    ],
    highlights: [
      "Implemented drag-and-drop kanban task cards with optimistic UI updates",
      "Integrated secure role-based access control (Admin, Manager, Contributor)",
      "Constructed RESTful API endpoints for sprint velocity tracking and data exports",
    ],
    githubUrl: "https://github.com/mpadhi2000",
  },
];

export const skillGroups: SkillGroup[] = [
  {
    id: "frontend",
    title: "Frontend Engineering",
    description:
      "Component architecture, state management, and modern web vitals optimization.",
    skills: [
      "React.js",
      "Next.js (App Router)",
      "TypeScript",
      "JavaScript (ES6+)",
      "Tailwind CSS",
      "HTML5 / Semantic UI",
      "CSS3 / SCSS",
      "Core Web Vitals",
      "Responsive Design",
    ],
  },
  {
    id: "backend",
    title: "Backend & APIs",
    description:
      "Server-side logic, high-throughput REST APIs, and secure authentication pipelines.",
    skills: [
      "Node.js",
      "Express.js",
      "Python",
      "FastAPI",
      "RESTful APIs",
      "JWT Authentication",
      "Role-Based Access Control (RBAC)",
      "API Rate Limiting",
      "WebSockets",
    ],
  },
  {
    id: "databases",
    title: "Databases & Storage",
    description:
      "Relational data modeling, vector stores, and in-memory caching solutions.",
    skills: [
      "PostgreSQL",
      "pgvector",
      "Redis",
      "MongoDB",
      "MySQL",
      "Database Optimization",
      "Schema Migrations",
    ],
  },
  {
    id: "ai-genai",
    title: "AI / GenAI Engineering",
    description:
      "Intelligent agent systems, retrieval augmented generation, and model gateways.",
    skills: [
      "Generative AI",
      "LLM Integration",
      "AI Agents",
      "Multi-Agent Orchestration",
      "RAG Pipelines",
      "Vector Databases",
      "Prompt Engineering",
      "MCP (Model Context Protocol)",
      "Tool Calling & Function Execution",
      "AI Gateway Architecture",
    ],
  },
  {
    id: "cloud-devops",
    title: "Cloud, DevOps & Infrastructure",
    description:
      "Containerization, server administration, reverse proxies, and deployment pipelines.",
    skills: [
      "AWS",
      "Docker & Docker Compose",
      "Linux (Ubuntu/Debian)",
      "Nginx Reverse Proxy",
      "SSL / TLS Hardening",
      "DNS & Domain Management",
      "CDN / Caching",
      "CI/CD Pipelines",
      "Production Troubleshooting",
    ],
  },
  {
    id: "engineering-practices",
    title: "Engineering Practices & Tools",
    description:
      "System design patterns, performance profiling, and collaborative development standards.",
    skills: [
      "Git & GitHub Workflows",
      "System Architecture",
      "API Integration",
      "Performance Profiling",
      "Security Hardening",
      "Debugging & Chrome DevTools",
      "Code Review & Standards",
      "Figma Design Translation",
    ],
  },
  {
    id: "secondary",
    title: "Secondary & CMS Technologies",
    description:
      "Enterprise content architectures and e-commerce integrations.",
    isSecondary: true,
    skills: [
      "PHP",
      "WordPress Custom Engineering",
      "WooCommerce",
      "Shopify",
      "Headless CMS",
      "Theme & Plugin Development",
    ],
  },
];

export const experienceData: ExperienceItem[] = [
  {
    id: "enfuse",
    role: "Software Engineer — Full-Stack & AI Systems",
    company: "EnFuse",
    location: "Mumbai, India",
    period: "2025 – Present",
    isCurrent: true,
    responsibilities: [
      "Architect and deliver full-stack SaaS solutions and autonomous AI workflows across Next.js, Python, Node.js, and PostgreSQL.",
      "Design intelligent agent pipelines utilizing AI Gateways, RAG context retrieval, and structured tool-calling protocols.",
      "Manage end-to-end deployment lifecycle using Docker containers, Linux server configurations, and CI/CD pipelines.",
      "Optimize frontend performance, Core Web Vitals, and backend API throughput for production software applications.",
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Python",
      "FastAPI",
      "Node.js",
      "PostgreSQL",
      "Docker",
      "AI Agents",
      "RAG",
    ],
  },
  {
    id: "savit",
    role: "Senior Web Developer",
    company: "Savit Interactive",
    location: "Malad, Mumbai, India",
    period: "Aug 2025 – Present",
    isCurrent: false,
    responsibilities: [
      "Engineered backend logic and RESTful API endpoints for scalable web systems using modern JavaScript and server frameworks.",
      "Implemented robust JWT-based authentication, access control mechanisms, and data validation layers.",
      "Spearheaded production support, high-severity bug troubleshooting, and backend query optimization for high-traffic platforms.",
      "Conducted rigorous code reviews ensuring adherence to DRY principles, modular structure, and security standards.",
    ],
    technologies: [
      "JavaScript",
      "REST APIs",
      "Node.js",
      "JWT",
      "PostgreSQL",
      "Performance Tuning",
    ],
  },
  {
    id: "nexsales",
    role: "Sr. Web & Platform Developer",
    company: "Nexsales",
    location: "Wadala, Mumbai, India",
    period: "Oct 2024 – July 2025",
    responsibilities: [
      "Developed custom API endpoints and backend services supporting multifaceted corporate web platforms.",
      "Managed and optimized relational database schemas for sustained performance, indexing, and backup integrity.",
      "Implemented cybersecurity defense best practices, protecting web properties against brute force and injection vulnerabilities.",
      "Collaborated within cross-functional Agile sprints to accelerate feature rollouts and stabilize legacy services.",
    ],
    technologies: [
      "PHP",
      "Databases",
      "Custom REST APIs",
      "Security Hardening",
      "Agile Sprints",
    ],
  },
  {
    id: "codeworkss",
    role: "Web Developer",
    company: "Codeworkss",
    location: "Dombivli, India",
    period: "Jan 2021 – Sep 2024",
    responsibilities: [
      "Created structured REST API endpoints secured with token authentication and role-based access control.",
      "Optimized legacy asset pipelines and database queries, achieving a verified 20%+ reduction in initial page load times.",
      "Mitigated DDoS attacks across 15+ domains through practical firewall rules and Cloudflare edge tuning.",
      "Maintained modular, maintainable client-side codebases for over 50+ high-converting landing pages and portals.",
    ],
    technologies: [
      "JavaScript",
      "REST APIs",
      "Authentication",
      "RBAC",
      "Performance Optimization",
      "Security",
    ],
  },
];

export const buildProcessSteps: BuildProcessStep[] = [
  {
    step: "01",
    title: "Requirement & Scope",
    subtitle: "Deconstructing Product Goals",
    description:
      "Analyzing user stories, technical constraints, data contracts, and defining measurable engineering objectives.",
    details: [
      "Analyze stakeholder requirements and functional specifications",
      "Define non-functional criteria: latency, security, scalability, accessibility",
      "Establish boundary conditions and data payload structures",
    ],
    artifacts: ["System Scope Spec", "User Flow Diagrams", "API Contracts"],
  },
  {
    step: "02",
    title: "Architecture & Data Modeling",
    subtitle: "Designing Resilient Systems",
    description:
      "Designing database schemas, component hierarchies, caching topologies, and service boundaries before writing code.",
    details: [
      "Schema design in PostgreSQL / MongoDB with relational integrity",
      "Component tree planning for optimal Server/Client component splits",
      "API route modeling (REST / WebSockets) and state machines",
    ],
    artifacts: ["ER Diagrams", "Component Tree Spec", "State Flow Matrix"],
  },
  {
    step: "03",
    title: "Frontend Architecture",
    subtitle: "Crafting High-Performance UI",
    description:
      "Building responsive, accessible interfaces in Next.js & React with strict TypeScript typing and atomic design tokens.",
    details: [
      "Strict TypeScript interfaces for all UI props and state payloads",
      "Zero-layout-shift UI layouts optimized for Core Web Vitals (LCP, CLS, INP)",
      "Keyboard-accessible interactions and screen-reader semantics",
    ],
    artifacts: [
      "Component Primitives",
      "Design Token Sheet",
      "Responsive Shell",
    ],
  },
  {
    step: "04",
    title: "Backend & API Engineering",
    subtitle: "Deterministic Server Execution",
    description:
      "Developing async APIs with FastAPI or Express, implementing JWT auth, validation schemas, and rate limiting.",
    details: [
      "Schema validation via Zod / Pydantic on all request/response boundaries",
      "Stateless JWT auth with secure HTTP-only cookies and token rotation",
      "Resilient error handling and exponential backoff strategies",
    ],
    artifacts: [
      "OpenAPI / Swagger Specs",
      "Auth Middleware",
      "Service Handlers",
    ],
  },
  {
    step: "05",
    title: "AI Integration & Workflows",
    subtitle: "Injecting Intelligent Automation",
    description:
      "Orchestrating LLMs, vector retrieval (RAG), AI Gateways, and autonomous tool calling into application flows.",
    details: [
      "Vector embeddings and semantic search via pgvector / vector DBs",
      "Multi-agent task delegation with structured JSON outputs",
      "Prompt caching, token cost optimization, and safety guardrails",
    ],
    artifacts: ["Agent Prompts", "RAG Pipeline", "AI Gateway Config"],
  },
  {
    step: "06",
    title: "Dockerization & Cloud Deploy",
    subtitle: "Reproducible Infrastructure",
    description:
      "Packaging services in multi-stage Docker builds, provisioning Nginx reverse proxies, SSL certificates, and CI/CD.",
    details: [
      "Lightweight Alpine-based multi-stage Docker container builds",
      "Nginx reverse proxy with gzip/brotli compression, rate limiting, and SSL",
      "Automated GitHub Actions CI/CD for build, lint, test, and release",
    ],
    artifacts: [
      "Dockerfile",
      "docker-compose.yml",
      "Nginx Config",
      "CI/CD Pipeline",
    ],
  },
  {
    step: "07",
    title: "Monitoring & Reliability",
    subtitle: "Operational Excellence",
    description:
      "Continuous performance profiling, error logging, uptime monitoring, and proactive system hardening.",
    details: [
      "Real-time server log tracking and automated error alerting",
      "Continuous Core Web Vitals monitoring across desktop and mobile",
      "Security audit, dependency patch reviews, and backup verification",
    ],
    artifacts: ["Health Check Routes", "Log Aggregator", "Performance Metrics"],
  },
];

export const aiLabProjects: AILabItem[] = [
  {
    id: "ai-gateway",
    title: "Enterprise AI Gateway & Smart Router",
    badge: "Architecture Experiment",
    description:
      "A unified intermediary proxy designed to govern LLM traffic across multiple model providers (OpenAI, Anthropic, local Ollama). It handles intelligent load balancing, automatic failover, semantic prompt caching, and per-user token rate limiting.",
    architecture: [
      "Incoming Client Request",
      "Token & Identity Validator",
      "Semantic Prompt Cache (Redis Vector)",
      "Model Router (Latency / Cost / Availability heuristics)",
      "Provider Fallback Pipeline (Primary -> Fallback)",
      "Structured JSON Response Sanitizer",
    ],
    keyCapabilities: [
      "Sub-10ms routing overhead with async connection pooling",
      "Semantic cache hits reduce token costs by up to 40% on recurring prompts",
      "Strict schema enforcement via Pydantic output validators",
    ],
    technologies: [
      "Python",
      "FastAPI",
      "Redis Vector Cache",
      "OpenAI / Claude APIs",
      "Pydantic",
      "Docker",
    ],
  },
  {
    id: "multi-agent-system",
    title: "Autonomous Multi-Agent Financial Research System",
    badge: "Production",
    description:
      "A coordinated network of specialized LLM agents working collectively to analyze securities. Includes a Macro Economist Agent, a Fundamentals Analyst Agent, a Sentiment Scraper Agent, and a Synthesis Commander.",
    architecture: [
      "User Investment Query",
      "Supervisor / Agent Orchestrator",
      "Parallel Execution: [Macro Agent, Financials Agent, News Agent]",
      "Tool Calls to OpenBB API & SEC Edgar Filings",
      "Debate & Consensus Synthesis Engine",
      "Formatted Report Delivery to Frontend",
    ],
    keyCapabilities: [
      "Deterministic tool calling via strict JSON function schemas",
      "Multi-perspective debate reduces hallucination rate significantly",
      "Real-time market data streaming over WebSocket connections",
    ],
    technologies: [
      "LangGraph / Agent Orchestration",
      "FastAPI",
      "OpenBB SDK",
      "PostgreSQL",
      "Next.js",
    ],
  },
  {
    id: "rag-pipeline",
    title: "Hybrid RAG & Context Retrieval Engine",
    badge: "R&D Prototype",
    description:
      "An advanced Retrieval Augmented Generation system combining dense vector embeddings with sparse BM25 keyword search, reciprocal rank fusion (RRF), and cross-encoder re-ranking for ultra-precise technical documentation queries.",
    architecture: [
      "Document Ingestion & Semantic Chunking",
      "Hybrid Indexing: [Dense Embeddings + BM25 Sparse Index]",
      "User Query Embeddings",
      "Reciprocal Rank Fusion (RRF) Retrieval",
      "Cross-Encoder Re-Ranking Stage",
      "LLM Context Synthesis & Citation Verification",
    ],
    keyCapabilities: [
      "Eliminates lost-in-the-middle context issues with dynamic chunk budgeting",
      "Explicit citation attribution pointing to source paragraph indices",
      "Runs fully containerized with pgvector in local or cloud environments",
    ],
    technologies: [
      "pgvector",
      "PostgreSQL",
      "Sentence-Transformers",
      "FastAPI",
      "Python",
      "Docker",
    ],
  },
  {
    id: "mcp-tools",
    title: "Model Context Protocol (MCP) Tool Integration Suite",
    badge: "Architecture Experiment",
    description:
      "A standard-compliant MCP server exposing database inspectors, file systems, and external API gateways to autonomous LLM developer environments with granular capability isolation.",
    architecture: [
      "MCP Host / Client Context",
      "JSON-RPC 2.0 Transport Protocol",
      "MCP Server Middleware (Capability checks)",
      "Registered Tool Executors (SQL query runner, API fetcher)",
      "Strict Output Format Boundary",
    ],
    keyCapabilities: [
      "Standardized protocol enabling AI models to interact with local development toolchains safely",
      "Sandboxed SQL execution with read-only query enforcement",
      "High performance low-latency local socket communication",
    ],
    technologies: [
      "TypeScript",
      "Node.js",
      "MCP SDK",
      "JSON-RPC",
      "PostgreSQL",
    ],
  },
];

export const caseStudies: CaseStudy[] = [
  {
    id: "saas-frontend-architecture",
    number: "01",
    title: "Scalable Frontend Architecture for High-Concurrency SaaS",
    tagline: "Zero-crash UI architecture & resilient proctoring telemetry.",
    context: "Proctifai Examination Platform",
    problem:
      "Online certification exams require crash-free UI stability, low-latency multi-stream video, and instant network recovery during intermittent candidate disconnects.",
    solution:
      "Architected a modular Next.js/React component hierarchy, decoupling WebSocket telemetry streams via dedicated web workers and offline request queuing.",
    architectureBreakdown: [
      "Modular separation of candidate testing view, proctor surveillance, and reporting",
      "Resilient WebSocket client with automatic heartbeat detection and request queueing",
      "Memoized state layers maintaining steady 60 FPS during multi-stream video rendering",
    ],
    engineeringDecisions: [
      "Partitioned candidate state and video feeds to eliminate global re-renders",
      "Enforced strict TypeScript discriminated unions on all network payloads",
      "Implemented accessible keyboard flows and high-contrast styling standards",
    ],
    resultsAndLearnings: [
      "100% UI stability during high-volume sessions with zero client crashes",
      "Reduced candidate frontend bundle payload by 38% via code-splitting",
      "Standardized component conventions adopted across all modules",
    ],
    tags: [
      "React.js",
      "Next.js",
      "Frontend Architecture",
      "WebSockets",
      "State Management",
      "Performance",
    ],
  },
  {
    id: "ai-market-intelligence",
    number: "02",
    title: "Multi-Agent AI System for Market Intelligence",
    tagline:
      "Orchestrating autonomous LLM specialists, OpenBB APIs, and vector caching.",
    context: "AlphaPilot Market Analytics Platform",
    problem:
      "Synthesizing market feeds, SEC filings, and macro trends into real-time theses creates cognitive overload and excessive LLM API latency.",
    solution:
      "Architected an AI Gateway orchestrating specialized agents (Macro, Fundamentals, Technicals, Synthesis) with Redis prompt caching and async FastAPI routing.",
    architectureBreakdown: [
      "Multi-agent supervisor graph delegating tasks across specialized analytical agents",
      "AI Gateway proxying LLM requests with automated rate limiting and model fallbacks",
      "Semantic prompt cache in Redis serving instant responses for recurring market queries",
    ],
    engineeringDecisions: [
      "Native async FastAPI runtime for non-blocking concurrent queries across data providers",
      "Strict Pydantic schema validation on all agent outputs, eliminating runtime UI errors",
      "Multi-container topology packaged via Docker Compose for turnkey reproduction",
    ],
    resultsAndLearnings: [
      "Reduced analysis generation latency from 14s to under 3.5s via agent parallelization",
      "Lowered external LLM token expenditure by 35% through semantic cache hits",
      "Multi-agent debate significantly suppressed hallucination rates vs single prompts",
    ],
    tags: [
      "FastAPI",
      "Python",
      "Multi-Agent AI",
      "AI Gateway",
      "Redis",
      "PostgreSQL",
      "Docker",
      "Next.js",
    ],
  },
  {
    id: "production-infrastructure",
    number: "03",
    title: "Production Infrastructure & High-Reliability Deployment",
    tagline: "Hardened Linux hosting, Nginx reverse proxying, SSL, and CI/CD.",
    context: "Enterprise Web Systems & Cloud Hosting",
    problem:
      "Managing 150+ client web applications requires automated deployment pipelines, zero-downtime releases, and robust DDoS protection.",
    solution:
      "Standardized Linux infrastructure framework with Nginx reverse proxying, Cloudflare edge caching, multi-stage Docker builds, and automated GitHub Actions CI/CD.",
    architectureBreakdown: [
      "Hardened Linux host servers with strict UFW firewall, SSH keys, and fail2ban",
      "Nginx reverse proxies with HTTP/2, brotli compression, and security headers (CSP, HSTS)",
      "Automated GitHub Actions running linting, tests, Docker builds, and zero-downtime deploys",
    ],
    engineeringDecisions: [
      "Multi-stage Docker builds reducing production container images to under 120MB",
      "Edge CDN caching reducing origin server CPU and memory utilization by over 60%",
      "Automated encrypted database backups with automated health ping monitoring",
    ],
    resultsAndLearnings: [
      "Maintained 99.9%+ operational uptime across 150+ production web systems",
      "Reduced average page load times by 20%+ through CDN tuning and asset caching",
      "Achieved zero-downtime deployments for continuous production application updates",
    ],
    tags: [
      "Linux",
      "Nginx",
      "Docker",
      "Cloudflare",
      "CI/CD",
      "Security Hardening",
      "DevOps",
    ],
  },
];

export const achievementsData: AchievementItem[] = [
  {
    id: "experience",
    metric: "4+ Years",
    label: "Professional Engineering Experience",
    description:
      "Delivering production web, SaaS, and AI systems across full-stack JavaScript, Python, and cloud infrastructure.",
    verified: true,
  },
  {
    id: "websites-managed",
    metric: "150+",
    label: "Websites Managed & Optimized",
    description:
      "Successfully built, secured, optimized, and supported production platforms for diverse global clients.",
    verified: true,
  },
  {
    id: "ecommerce-speed",
    metric: "15 Days",
    label: "Full E-Commerce Platform Delivered",
    description:
      "Engineered and deployed the complete Vapes Vault platform from technical specification to production in 15 days.",
    verified: true,
  },
  {
    id: "security-ddos",
    metric: "15+ Domains",
    label: "DDoS Mitigation & Security Hardening",
    description:
      "Constructed proactive WAF firewall rules and origin protection across 15+ high-traffic business domains.",
    verified: true,
  },
];
