export const personalInfo = {
  name: 'Anchal Pandey',
  role: 'Full Stack Engineer | AI / LLM Engineer | Backend Developer',
  roles: ['Full Stack Engineer', 'AI Engineer', 'Backend Developer'],
  location: 'India',
  experience: '2+ Years',
  openToWork: true,
  profilePhoto: '/profile/anchal-pandey.jpg',
  profilePhotoFallback: '/profile/anchal-pandey.svg',
  tagline:
    'Building intelligent products at the intersection of full-stack engineering and applied AI.',
  heroDescription:
    '2+ years shipping AI-powered products, RAG pipelines, and scalable full-stack systems for education technology.',
  summary:
    'Full Stack + AI Engineer with experience building AI-powered educational products, RAG pipelines, LangChain applications, OpenAI/Gemini integrations, voice-first AI systems, LMS platforms, and scalable backend services.',
  email: 'anchal.pandey.dev@gmail.com',
  mailto: 'mailto:anchal.pandey.dev@gmail.com?subject=Hello%20Anchal',
  linkedin: 'https://www.linkedin.com/in/anchalpandey',
  github: 'https://github.com/anchalpandey1',
  resumeUrl: '/resume/Anchal_Pandey_SE_Resume.pdf',
  resumeDownloadName: 'Anchal_Pandey_SE_Resume.pdf',
}

export const education = {
  degree: 'B.Tech Computer Science & Engineering',
  cgpa: '8.31',
}

export const about = {
  journey:
    'Over the past two years, I have shipped production systems spanning AI pipelines, backend services, and polished product interfaces — primarily in the education technology space.',
  focus:
    'My work sits at the intersection of full-stack development and applied AI: designing RAG architectures, integrating LLMs into real user workflows, and building backends that scale with product demand.',
  philosophy:
    'I believe great engineering is invisible — reliable systems, thoughtful UX, and measurable impact. I optimize for clarity in architecture, speed in iteration, and quality in delivery.',
}

export interface SkillItem {
  name: string
  icon?: string
}

export interface SkillCategory {
  id: string
  label: string
  icon: string
  skills: SkillItem[]
}

export const skillCategories: SkillCategory[] = [
  {
    id: 'frontend',
    label: 'Frontend',
    icon: 'Monitor',
    skills: [
      { name: 'React.js', icon: 'LayoutTemplate' },
      { name: 'Vite', icon: 'Zap' },
      { name: 'TailwindCSS', icon: 'Palette' },
      { name: 'TypeScript', icon: 'FileCode' },
    ],
  },
  {
    id: 'backend',
    label: 'Backend',
    icon: 'Server',
    skills: [
      { name: 'Node.js', icon: 'Server' },
      { name: 'Express.js', icon: 'Workflow' },
      { name: 'REST APIs', icon: 'Plug' },
      { name: 'Microservices', icon: 'Layers' },
    ],
  },
  {
    id: 'databases',
    label: 'Databases',
    icon: 'Database',
    skills: [
      { name: 'MongoDB', icon: 'Database' },
      { name: 'MySQL', icon: 'Database' },
      { name: 'Schema Design', icon: 'Layers' },
      { name: 'Query Optimization', icon: 'Search' },
    ],
  },
  {
    id: 'ai',
    label: 'AI / GenAI',
    icon: 'Brain',
    skills: [
      { name: 'OpenAI', icon: 'Sparkles' },
      { name: 'Gemini', icon: 'Sparkles' },
      { name: 'LangChain', icon: 'Link2' },
      { name: 'RAG', icon: 'Search' },
      { name: 'FAISS', icon: 'Layers' },
    ],
  },
  {
    id: 'cloud',
    label: 'Cloud & DevOps',
    icon: 'Cloud',
    skills: [
      { name: 'AWS EC2', icon: 'Cpu' },
      { name: 'AWS S3', icon: 'Cloud' },
      { name: 'CloudFront', icon: 'Globe' },
      { name: 'Deployment', icon: 'Workflow' },
    ],
  },
  {
    id: 'tools',
    label: 'Tools',
    icon: 'Wrench',
    skills: [
      { name: 'Git', icon: 'GitBranch' },
      { name: 'Docker', icon: 'Box' },
      { name: 'Postman', icon: 'Send' },
      { name: 'CI/CD', icon: 'Workflow' },
    ],
  },
]

export interface EmploymentExperience {
  id: string
  company: string
  initials: string
  role: string
  period: string
  employmentType: 'Full-time' | 'Internship'
  location: string
  summary: string
  highlights?: string[]
  keyProducts?: string[]
  techStack?: string[]
}

export const employmentHistory: EmploymentExperience[] = [
  {
    id: 'mashmari',
    company: 'Mashmari Consultants Pvt Ltd',
    initials: 'MC',
    role: 'Full Stack & AI Engineer',
    period: 'Jul 2025 – Present',
    employmentType: 'Full-time',
    location: 'India',
    summary:
      'Building AI-powered education platforms, RAG systems, adaptive assessments, voice-first tutoring products, backend services, and full-stack applications.',
    keyProducts: [
      'Educational Intelligence Repository (EIR)',
      'Lesson Plan Generator (LPG)',
      'A3 Assessment Platform',
      'Mashy',
      'Tracker',
      'Doot',
      'Netrakshak',
    ],
    techStack: [
      'React.js',
      'Node.js',
      'Express.js',
      'Python',
      'MongoDB',
      'OpenAI',
      'AWS',
    ],
  },
  {
    id: 'innobles',
    company: 'Innobles Smart Technologies',
    initials: 'IS',
    role: 'Software Developer Intern',
    period: 'Jul 2024 – Jan 2025',
    employmentType: 'Internship',
    location: 'India',
    summary:
      'Developed secure backend services and authentication systems for production web applications.',
    highlights: [
      'Built secure backend APIs',
      'JWT Authentication',
      'Role Based Access Control',
      'MongoDB Aggregation',
      'Performance Optimization',
    ],
  },
  {
    id: 'ricoz',
    company: 'Ricoz Pvt Ltd',
    initials: 'RP',
    role: 'Software Developer Intern',
    period: 'Dec 2023 – Jun 2024',
    employmentType: 'Internship',
    location: 'India',
    summary:
      'Contributed to MERN stack development with focus on authentication, APIs, and user interface improvements.',
    highlights: [
      'MERN Stack Development',
      'Authentication Systems',
      'API Development',
      'UI/UX Improvements',
    ],
  },
  {
    id: 'crazyweb',
    company: 'CrazyWeb Technology',
    initials: 'CW',
    role: 'Frontend Developer Intern',
    period: 'Aug 2023 – Nov 2023',
    employmentType: 'Internship',
    location: 'India',
    summary:
      'Built responsive, client-facing web interfaces using modern frontend fundamentals.',
    highlights: ['HTML', 'CSS', 'Bootstrap', 'Responsive Web Design'],
  },
]

export interface Project {
  id: string
  name: string
  fullName: string
  category: string
  icon: string
  tagline: string
  problem: string
  solution: string
  techStack: string[]
  impact: string
  architecture: string[]
}

export const projects: Project[] = [
  {
    id: 'eir',
    name: 'EIR',
    fullName: 'Educational Intelligence Repository',
    category: 'AI / RAG Systems',
    icon: 'BookOpen',
    tagline: 'RAG-powered knowledge platform for educational content',
    problem:
      'Educational institutions needed a way to ingest large volumes of textbook content and make it searchable and retrievable through natural language queries.',
    solution:
      'Built an end-to-end ingestion pipeline with chapter detection, embedding generation, FAISS vector indexing, and RAG-based retrieval for accurate, context-aware answers.',
    techStack: ['Python', 'FAISS', 'LangChain', 'OpenAI', 'Node.js', 'MongoDB'],
    impact:
      'Enabled semantic search across structured educational content, reducing manual lookup time and powering downstream AI applications.',
    architecture: [
      'Multi-stage book ingestion pipeline',
      'Automated chapter boundary detection',
      'Embedding generation & FAISS indexing',
      'RAG retrieval with context ranking',
    ],
  },
  {
    id: 'lpg',
    name: 'LPG',
    fullName: 'Lesson Plan Generator',
    category: 'AI Product Engineering',
    icon: 'GraduationCap',
    tagline: 'Curriculum-aware AI lesson planning',
    problem:
      'Teachers spent hours creating lesson plans aligned to curriculum standards, with inconsistent quality and limited personalization.',
    solution:
      'Developed an AI-powered generator that produces structured lesson plans based on curriculum inputs, with dual-model support via OpenAI and Gemini, and PDF export.',
    techStack: ['React', 'Node.js', 'OpenAI', 'Gemini', 'PDF Generation', 'MongoDB'],
    impact:
      'Reduced lesson planning time significantly while maintaining curriculum alignment and educator control over outputs.',
    architecture: [
      'Curriculum schema mapping layer',
      'Multi-model LLM orchestration',
      'Structured output validation',
      'PDF export pipeline',
    ],
  },
  {
    id: 'a3',
    name: 'A3 Assessment Platform',
    fullName: 'Adaptive AI Assessment Platform',
    category: 'AI / EdTech',
    icon: 'ClipboardCheck',
    tagline: 'Intelligent assessments with learner profiling',
    problem:
      'Traditional assessments failed to adapt to individual learner competency levels, limiting insight into knowledge gaps.',
    solution:
      'Built an adaptive assessment engine with LLM-powered question generation, dynamic difficulty adjustment, and comprehensive learner competency profiling.',
    techStack: ['React', 'Express.js', 'OpenAI', 'MongoDB', 'Analytics'],
    impact:
      'Delivered personalized assessment experiences that improved learner engagement and provided actionable competency insights.',
    architecture: [
      'Adaptive difficulty engine',
      'LLM question generation pipeline',
      'Competency profiling model',
      'Real-time analytics dashboard',
    ],
  },
  {
    id: 'mashy',
    name: 'Mashy',
    fullName: 'Voice-First AI Tutor',
    category: 'Voice AI',
    icon: 'Mic',
    tagline: 'Conversational tutoring for Hindi learners',
    problem:
      'Hindi-speaking learners lacked accessible, voice-native AI tutoring experiences that felt natural and culturally relevant.',
    solution:
      'Created a voice-first AI tutor leveraging speech APIs, agentic conversation flows, and contextual tutoring logic tailored for Hindi learners.',
    techStack: ['React', 'Node.js', 'Speech APIs', 'OpenAI', 'WebSockets'],
    impact:
      'Enabled hands-free, conversational learning experiences that increased accessibility for non-English-primary learners.',
    architecture: [
      'Voice input/output pipeline',
      'Agentic tutoring state machine',
      'Session context management',
      'Multi-turn conversation handling',
    ],
  },
  {
    id: 'tracker',
    name: 'Tracker',
    fullName: 'Workflow Management Platform',
    category: 'Full Stack Product',
    icon: 'LayoutDashboard',
    tagline: 'Analytics-driven workflow orchestration',
    problem:
      'Teams struggled to track workflow progress and derive actionable insights from operational data spread across tools.',
    solution:
      'Built a unified workflow management system with task tracking, status pipelines, and an analytics dashboard for operational visibility.',
    techStack: ['React', 'Node.js', 'MongoDB', 'Chart.js', 'REST APIs'],
    impact:
      'Improved team visibility into workflow bottlenecks and enabled data-driven process optimization.',
    architecture: [
      'Configurable workflow pipelines',
      'Real-time status tracking',
      'Analytics aggregation layer',
      'Role-based task assignment',
    ],
  },
  {
    id: 'netrakshak',
    name: 'Netrakshak',
    fullName: 'Device Monitoring & Parental Control',
    category: 'Backend / IoT',
    icon: 'Shield',
    tagline: 'Policy-driven device management system',
    problem:
      'Families and organizations needed centralized device monitoring with configurable policies and parental controls.',
    solution:
      'Engineered a monitoring platform with real-time device tracking, policy management, and granular parental control configurations.',
    techStack: ['React', 'Node.js', 'Express.js', 'MySQL', 'WebSockets'],
    impact:
      'Provided reliable device oversight and policy enforcement for end users with an intuitive management interface.',
    architecture: [
      'Real-time device telemetry',
      'Policy engine with rule evaluation',
      'Role-based admin dashboard',
      'Event-driven alert system',
    ],
  },
]

export interface ProfessionalHighlight {
  id: string
  metric: string
  title: string
  description: string
  icon: string
}

export const professionalHighlights: ProfessionalHighlight[] = [
  {
    id: 'products',
    metric: '6+',
    title: 'Production Products Delivered',
    description:
      'Contributed to and shipped multiple production-grade education and AI platforms used across learning and assessment workflows.',
    icon: 'Rocket',
  },
  {
    id: 'ai-systems',
    metric: 'AI',
    title: 'Educational Systems Built',
    description:
      'Designed and implemented AI-powered platforms including lesson planning, assessment generation, educational intelligence repositories, and learner profiling systems.',
    icon: 'Brain',
  },
  {
    id: 'rag',
    metric: 'RAG',
    title: 'Platform Architected',
    description:
      'Built end-to-end retrieval pipelines with document ingestion, embeddings, vector search, semantic retrieval, and curriculum-aware knowledge systems.',
    icon: 'Network',
  },
  {
    id: 'voice-ai',
    metric: 'Voice',
    title: 'AI Learning Platform Developed',
    description:
      'Worked on voice-first learning experiences integrating speech technologies, conversational AI workflows, and multilingual tutoring systems.',
    icon: 'Mic',
  },
]

export interface SnapshotStat {
  id: string
  value: string
  label: string
  description: string
  icon: string
}

export const engineeringSnapshot: SnapshotStat[] = [
  {
    id: 'experience',
    value: '2+',
    label: 'Years Experience',
    description:
      'Full Stack and AI product development experience across production systems.',
    icon: 'Briefcase',
  },
  {
    id: 'systems',
    value: '6+',
    label: 'Production Systems',
    description:
      'Built and shipped AI, education, assessment, and backend platforms.',
    icon: 'Rocket',
  },
  {
    id: 'focus',
    value: 'AI + Full Stack',
    label: 'Engineering Focus',
    description:
      'Backend architecture, AI workflows, RAG systems, and scalable web applications.',
    icon: 'Brain',
  },
  {
    id: 'location',
    value: 'India',
    label: 'Location',
    description:
      'Available for remote, hybrid, and on-site engineering opportunities.',
    icon: 'MapPin',
  },
]

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]
