import type { LucideIcon } from "lucide-react"
import {
  Code2,
  BrainCircuit,
  Wrench,
  Sparkles,
  GraduationCap,
  Award,
  Trophy,
  Github,
  Linkedin,
  Mail,
  Phone,
  BookOpenText,
} from "lucide-react"

export const personal = {
  name: "Deepak Narayan Moger",
  shortName: "Deepak Moger",
  initials: "DM",
  role: "AI / ML Engineer",
  roles: [
    "AI / ML Engineer",
    "Cloud Builder",
    "Python Developer",
    "Problem Solver",
  ],
  tagline:
    "Building end-to-end machine learning systems and scalable AI solutions for real-world problems.",
  about: `I'm a BE undergraduate at A.M.C. Engineering College, Bangalore, with strong foundations in Machine Learning, AI, and Cloud Computing. I love designing end-to-end ML applications — from OCR-based data extraction pipelines to drift-detection systems on the cloud. I'm passionate about applying AI to real-world problems and continuously exploring the edges of cloud security and data science.`,
  location: "Bangalore, India",
  email: "deepakmoger028@gmail.com",
  phone: "+91 94988 38381",
  resumeUrl: "/Deepak-Narayan-Moger-Resume.pdf",
  links: {
    github: "https://github.com/Deepak-Moger",
    linkedin: "https://www.linkedin.com/in/deepak-moger",
    medium: "https://medium.com/@mogerdeepu112",
    email: "mailto:deepakmoger028@gmail.com",
  },
}

export const stats: { label: string; value: string }[] = [
  { label: "Projects shipped", value: "5+" },
  { label: "Certifications", value: "7" },
  { label: "Cloud platforms", value: "GCP" },
  { label: "Years coding", value: "3+" },
]

export const education: {
  school: string
  degree: string
  period: string
  detail?: string
}[] = [
  {
    school: "A.M.C. Engineering College, Bangalore",
    degree: "Bachelor of Engineering (BE)",
    period: "Aug 2022 — Jun 2026",
    detail: "Focus on AI/ML, Cloud Computing, and Database Systems.",
  },
  {
    school: "Siddartha PU College",
    degree: "Pre-University (12th)",
    period: "Completed 2022",
  },
  {
    school: "Vidyanjali Public School",
    degree: "Secondary School (10th)",
    period: "Completed 2020",
  },
]

export type SkillCategory = {
  title: string
  icon: LucideIcon
  items: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming & Development",
    icon: Code2,
    items: ["Python", "HTML5", "CSS3", "JavaScript", "MongoDB", "SQL"],
  },
  {
    title: "AI & Machine Learning",
    icon: BrainCircuit,
    items: [
      "TensorFlow",
      "Keras",
      "Deep Learning",
      "OCR / EasyOCR",
      "Model Drift Detection",
      "Computer Vision",
    ],
  },
  {
    title: "Tools & Platforms",
    icon: Wrench,
    items: [
      "Google Cloud Platform",
      "Flask",
      "Git & GitHub",
      "VS Code",
      "Jupyter",
      "Linux",
    ],
  },
  {
    title: "Other Strengths",
    icon: Sparkles,
    items: [
      "Problem Solving",
      "Database Management",
      "Cloud Security",
      "Technical Writing",
    ],
  },
]

export const marqueeSkills = [
  "Python",
  "TensorFlow",
  "Deep Learning",
  "OCR",
  "Google Cloud",
  "Flask",
  "MongoDB",
  "Model Drift",
  "Computer Vision",
  "Cloud Security",
  "Keras",
  "Git",
]

export type Project = {
  title: string
  period: string
  tagline: string
  description: string
  tags: string[]
  image: string
  link?: string
  github?: string
  highlights: string[]
}

export const projects: Project[] = [
  {
    title: "Drift Detection in Cloud Applications",
    period: "May 2025 — Present",
    tagline: "Real-time AI-powered monitoring for production ML systems.",
    description:
      "An AI-powered platform that detects data and model drift in cloud-deployed applications. Designed a scalable architecture for continuous monitoring and built ML models that identify performance degradation in real time, enabling teams to react before users do.",
    tags: ["Python", "Google Cloud", "Machine Learning", "Monitoring"],
    image: "/project-drift.jpg",
    github: "https://github.com/Deepak-Moger",
    highlights: [
      "Scalable cloud-native architecture",
      "Real-time anomaly detection",
      "Continuous model evaluation",
    ],
  },
  {
    title: "Food Expiry Prediction with ML",
    period: "May 2025",
    tagline: "Computer vision and OCR to reduce food waste at home.",
    description:
      "A web application that predicts food expiry and alerts users before spoilage. Combines image classification to detect freshness with OCR (EasyOCR + OCR Space API) to extract expiry dates from package labels — all served through a clean Flask interface.",
    tags: ["Python", "TensorFlow", "EasyOCR", "Flask"],
    image: "/project-food.jpg",
    github: "https://github.com/Deepak-Moger",
    highlights: [
      "CNN-based freshness classifier",
      "Dual-engine OCR pipeline",
      "Flask web interface",
    ],
  },
]

export type Achievement = {
  title: string
  org: string
  date: string
  description: string
  icon: LucideIcon
}

export const certifications: Achievement[] = [
  {
    title: "AI/ML Virtual Internship",
    org: "AICTE",
    date: "May 2025",
    description:
      "Hands-on internship covering Artificial Intelligence and Machine Learning fundamentals.",
    icon: BrainCircuit,
  },
  {
    title: "Generative AI Virtual Internship",
    org: "AICTE",
    date: "Jul 2025",
    description:
      "Practical applications of generative models, prompting, and fine-tuning workflows.",
    icon: Sparkles,
  },
  {
    title: "Zero Trust Cloud Security",
    org: "AICTE",
    date: "Jul 2025",
    description:
      "Zero Trust architecture and cloud security principles for modern distributed systems.",
    icon: Award,
  },
  {
    title: "Palo Alto Cybersecurity",
    org: "AICTE",
    date: "Sep 2025",
    description:
      "Cybersecurity fundamentals with Palo Alto Networks — threats, controls, and response.",
    icon: Award,
  },
  {
    title: "Android Developer Internship",
    org: "AICTE",
    date: "May 2025",
    description:
      "Android development fundamentals and end-to-end mobile application creation.",
    icon: Code2,
  },
  {
    title: "Business Analyst Internship",
    org: "AICTE",
    date: "May 2025",
    description:
      "Business analysis methodologies, stakeholder mapping, and requirements engineering.",
    icon: BookOpenText,
  },
  {
    title: "UiPath Automation Developer",
    org: "UiPath Academy",
    date: "2024",
    description:
      "Robotic Process Automation (RPA) development using the UiPath platform.",
    icon: Wrench,
  },
]

export const awards: Achievement[] = [
  {
    title: "Best Innovation Award",
    org: "Tech Summit 2024",
    date: "2024",
    description:
      "Recognized for an AI-powered solution that improved process efficiency by 40%.",
    icon: Trophy,
  },
]

export const navItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#work", label: "Work" },
  { href: "#achievements", label: "Achievements" },
  { href: "#contact", label: "Contact" },
]

export const socialIcons = {
  Github,
  Linkedin,
  Mail,
  Phone,
  Medium: BookOpenText,
  GraduationCap,
}
