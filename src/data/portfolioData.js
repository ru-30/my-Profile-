// ---------------------------------------------------------------
// All editable portfolio content lives here. Update names, links,
// and copy in this file — the components read from it directly.
// ---------------------------------------------------------------

export const profile = {
  name: "Mugisha Espoir",
  initials: "ME",
  title: "UI/UX Designer | Full-Stack Web Developer | AI Enthusiast",
  location: "Kigali, Rwanda",
  tagline:
    "Building modern digital solutions through software engineering, artificial intelligence, and innovative web technologies.",
  email: "mespoir393@gmail.com", // TODO: replace with your real email
  github: "https://github.com/ru-30/my-Profile-", // TODO: replace with your GitHub profile
  linkedin: "https://linkedin.com/in/yourusername", // TODO: replace with your LinkedIn profile
  about: `I'm a final-year Information Management / IT student and technology professional based in Kigali, with a
  focus on full-stack web development, applied AI, and database systems. I like taking a problem apart, choosing
  the right tools, and shipping something that actually works — from a banking system's transaction logic to a
  document classifier that saves someone hours of manual sorting. Right now I'm sharpening my engineering
  fundamentals while preparing for my first role as a Developer.`,
};

export const skillGroups = [
  {
    id: "frontend",
    title: "Frontend Development",
    blurb: "Interfaces that are fast, accessible, and easy to extend.",
    skills: ["HTML5", "CSS3", "React", "Tailwind CSS", "Responsive Design"],
  },
  {
    id: "backend",
    title: "Backend Development",
    blurb: "Server logic and APIs that hold up under real use.",
    skills: ["Java", "Node.js", "REST APIs", "Server-side Development"],
  },
  {
    id: "engineering",
    title: "Programming & Developer Practices",
    blurb: "Core languages and practices behind maintainable software.",
    skills: ["JavaScript", "Python", "C", "Java", "Git & GitHub",],
  },
  {
    id: "databases",
    title: "Databases",
    blurb: "Modeling and querying data so it's fast to retrieve and trust.",
    skills: ["MySQL", "Oracle Database", "SQL"],
  },
  {
    id: "ai",
    title: "AI & Data",
    blurb: "Applying machine learning to real document and data problems.",
    skills: [
      "Artificial Intelligence",
      "Machine Learning Fundamentals",
      "Big Data",
      "Data Analysis",
      "Intelligent Document Processing",
    ],
  },
  {
    id: "tools",
    title: "Tools & Technologies",
    blurb: "The everyday stack that keeps projects organized and reproducible.",
    skills: ["VS Code", "Git", "GitHub", "XAMPP", "Docker", "Hadoop", "Vite"],
  },
];

export const projects = [
  {
    id: "doc-ai",
    title: "AI-Based Intelligent Document Classification & Retrieval System",
    description:
      "An intelligent system that automatically classifies, organizes, and retrieves documents, cutting down manual sorting and making information easier to find.",
    tech: ["AI", "Python", "Machine Learning", "Database", "Web"],
    github: "https://github.com/yourusername/intelligent-document-system", // TODO: replace
    demo: "https://your-demo-link.example.com/document-ai", // TODO: replace
  },
  {
    id: "securebank",
    title: "SecureBank",
    description:
      "A web-based banking management system demonstrating secure account handling, transactions, and user management.",
    tech: ["HTML", "CSS", "PHP", "MySQL"],
    github: "https://github.com/yourusername/securebank", // TODO: replace
    demo: "https://your-demo-link.example.com/securebank", // TODO: replace
  },
  {
    id: "novabank",
    title: "NovaBank Database System",
    description:
      "A database-driven banking system managing users, accounts, and transactions — built to demonstrate solid database design and SQL development.",
    tech: ["Oracle Database", "SQL", "PL/SQL"],
    github: "https://github.com/yourusername/novabank-database", // TODO: replace
    demo: "https://your-demo-link.example.com/novabank", // TODO: replace
  },
  {
    id: "react-dashboard",
    title: "React Dashboard",
    description:
      "A responsive dashboard application showing component-based architecture, state management, and modern frontend patterns.",
    tech: ["React", "JavaScript", "Tailwind CSS", "Vite"],
    github: "https://github.com/yourusername/react-dashboard", // TODO: replace
    demo: "https://your-demo-link.example.com/react-dashboard", // TODO: replace
  },
];

export const services = [
  {
    title: "Web Development",
    description: "Building fast, well-structured websites from a clean codebase up.",
  },
  {
    title: "Full-Stack Development",
    description: "Connecting a solid frontend to a reliable backend and database.",
  },
  {
    title: "UI/UX Implementation",
    description: "Turning designs into interfaces that feel considered and accessible.",
  },
  {
    title: "Database Development",
    description: "Designing schemas and queries that stay fast as data grows.",
  },
  {
    title: "AI Solutions",
    description: "Applying machine learning to automate real, repetitive tasks.",
  },
  {
    title: "Software Development",
    description: "Writing maintainable code, grounded in sound engineering practice.",
  },
  {
    title: "Technical Consulting",
    description: "Helping teams choose the right tools and architecture for a project.",
  },
];

export const education = [
  {
    degree: "Bachelor's Degree — Software Engineering / Information Technology",
    institution: "American University of Central Africa (AUCA)",
    status: "Final Year",
    period: "Expected graduation soon",
  },
  // Add further certifications here, e.g.:
  // { degree: "AWS Cloud Practitioner", institution: "Amazon Web Services", status: "Certified", period: "2026" },
];

export const journey = [
  {
    phase: "Learning & Development",
    detail:
      "Started with core programming fundamentals and computer science principles, building a habit of learning by building.",
  },
  {
    phase: "Software Engineering",
    detail:
      "Studied software design, version control, and engineering practices that scale from a single script to a full system.",
  },
  {
    phase: "Web Development",
    detail:
      "Moved into full-stack web development — from static HTML/CSS pages to dynamic PHP and React applications.",
  },
  {
    phase: "AI & Data",
    detail:
      "Explored machine learning, data analysis, and intelligent document processing to automate real-world tasks.",
  },
  {
    phase: "Projects & Practical Experience",
    detail:
      "Applied it all to hands-on projects — banking systems, dashboards, and an AI document classifier — to build a working portfolio.",
  },
];

export const nav = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];
