export const profile = {
  name: "Kishan Kumar",
  role: "Full Stack · AI/ML Engineer",
  company: "Guruvai Sciences",
  tagline:
    "I ship end-to-end systems — React & Python backends, agentic AI pipelines, cloud deployments, and production platforms used by hundreds of real users.",
  email: "kishankr2613@gmail.com",
  phone: "9386758186",
  location: "New Delhi, India",
  github: "https://github.com/kishan2613",
  linkedin: "https://www.linkedin.com/in/kishan-kumar-00822428b",
  leetcode: "https://leetcode.com/u/kishan2613/",
};

export const highlights = [
  { value: "200+", label: "Live users on Dronaa" },
  { value: "Top 3", label: "of 1,000+ Ideathon teams" },
  { value: "1597", label: "LeetCode rating" },
  { value: "25+", label: "Hackathons shipped" },
];

export const about = {
  education: {
    degree: "B.Tech. in Information Technology",
    school: "GGSIPU · ADGIPS",
    years: "2023–2027",
    cgpa: "8.56",
  },
  paragraphs: [
    "Full stack engineer who owns the whole path — pixel-sharp React UIs, Node/Python APIs, databases, AWS deployments, and AI-agent workflows that survive production pressure.",
    "From a mock-test platform for 200+ students with real-time integrity checks, to offline-first desktop apps with Stripe, to WebGIS for DRDO researchers — I build systems that hold up when people actually use them.",
  ],
};

export const achievements = [
  {
    id: "ideathon",
    badge: "Theme Winner",
    title: "Smart Delhi Ideathon 2025",
    detail:
      "Ranked 3rd among 1,000+ teams for an AI traffic-management solution. Felicitated by the Delhi Lieutenant Governor.",
  },
  {
    id: "lead",
    badge: "Team Lead",
    title: "Creative Lead · GDSC ADGIPS",
    detail:
      "Led branding and accessibility design across 5+ campus tech events — owning creative direction, stakeholder sync, and end-to-end delivery.",
  },
  {
    id: "codeveda",
    badge: "Winner",
    title: "CodeVeda Hackathon",
    detail:
      "Took first place shipping a competitive hackathon build under tight constraints — fast ideation to working demo.",
  },
  {
    id: "industrial",
    badge: "Finalist",
    title: "Industrial Ideathon",
    detail:
      "National-stage finalist — pressure-tested product thinking, teamwork, and systems that scale under real constraints.",
  },
  {
    id: "cp",
    badge: "25+ Hackathons",
    title: "LeetCode 1597 · Codeforces Pupil",
    detail:
      "200+ problems solved with a 5★ HackerRank rating — competitive programming that backs every architecture call.",
  },
];

export const experience = [
  {
    id: "guruvai",
    role: "AI/ML Engineering Intern",
    company: "Guruvai Sciences",
    period: "May 2026 – present",
    location: "Remote",
    points: [
      "Built and maintained AI-agent workflows for Avaloka — prompt optimization, reliability fixes, and production hardening",
      "Owned end-to-end and unit testing for agentic AI pipelines before release",
      "Shipped frontend + integration work for new product releases with engineering teams",
    ],
  },
  {
    id: "sortwind",
    role: "Software Development Intern",
    company: "SortWind Private Limited",
    period: "Oct 2025 – Dec 2025",
    location: "Remote · Windows Application Team",
    points: [
      "Owned end-to-end design and deployment of two globally scalable desktop apps — delivered ~20% ahead of schedule",
      "Engineered offline-first SQLite ↔ PostgreSQL sync with conflict resolution — ~30% faster sync performance",
      "Integrated Stripe payments: webhooks, transaction lifecycle, and order reconciliation",
    ],
  },
  {
    id: "drdo",
    role: "Research Intern",
    company: "DRDO — WebGIS Team",
    period: "Jan 2025 – Feb 2025",
    location: "New Delhi, India",
    points: [
      "Built an interactive WebGIS platform in JavaScript + OpenLayers for 15+ DRDO researchers",
      "Automated polygon rendering and dynamic layer management across 3 spatial data types",
      "Integrated Leaflet + GeoJSON pipelines — ~40% faster researcher analytical workflows",
    ],
  },
];

export const projects = [
  {
    id: "dronaa",
    name: "Dronaa",
    type: "Full Stack · EdTech",
    summary:
      "Production mock-test platform for 200+ active users — MERN stack, OTP auth, anti-cheat integrity, and CI/CD across Vercel, Render, and AWS EC2.",
    details: [
      "Full stack React + Node.js + Express + MongoDB with automated CI/CD",
      "OTP auth via SMTP; restored 100% uptime in under 2 hours by migrating email to AWS EC2",
      "Real-time integrity: fullscreen lock, tab-switch detection, violation tracking, auto-submit",
      "Performance: lazy loading, code splitting, NGINX reverse proxy under concurrent load",
    ],
    stack: ["React", "Node.js", "MongoDB", "AWS EC2", "NGINX"],
  },
  {
    id: "samadhan",
    name: "Samadhan",
    type: "AI · Full Stack",
    url: "https://github.com/kishan2613/Samadhan",
    summary:
      "AI-powered legal mediation platform with a multilingual voice chatbot — built for 500+ users in low-literacy contexts.",
    details: [
      "React frontend + Web Speech API for accessible, multilingual interaction",
      "Full-stack architecture for real-time mediator matching and cross-language chat",
      "WCAG-minded UI that cut estimated dispute wait time by ~60%",
    ],
    stack: ["React", "AI / Speech", "Node.js", "Full Stack"],
  },
  {
    id: "cliptray",
    name: "ClipTray",
    type: "Systems · Desktop",
    summary:
      "Cross-platform clipboard manager in Rust + Tauri — history, real-time search, and sync with predictable immutable state.",
    details: [
      "Rust + Tauri v2 desktop app; immutability patterns cut state bugs by ~40%",
      "Clipboard history, real-time search, and cross-device sync",
      "React-style state patterns mapped into Tauri/Rust for predictable UI updates",
    ],
    stack: ["Rust", "Tauri v2", "Systems"],
  },
];

export const skills = [
  {
    title: "Full Stack",
    items: ["React.js", "Node.js", "Express", "REST APIs", "Tailwind CSS", "React Native"],
  },
  {
    title: "Backend & Python",
    items: ["Python", "FastAPI", "Java", "SQL", "PostgreSQL", "MongoDB", "SQLite"],
  },
  {
    title: "AI / ML",
    items: ["Agentic AI", "Prompt Engineering", "LLM Apps", "RAG", "Workflow Automation", "AI Evaluation"],
  },
  {
    title: "Cloud & Systems",
    items: ["AWS EC2", "Vercel", "Render", "NGINX", "Git / GitHub", "Linux", "Rust / Tauri"],
  },
];

export const stackMarquee = [
  "React",
  "Python",
  "Node.js",
  "FastAPI",
  "PostgreSQL",
  "MongoDB",
  "Agentic AI",
  "AWS EC2",
  "Rust",
  "Tauri",
  "Express",
  "RAG",
  "NGINX",
  "JavaScript",
];
