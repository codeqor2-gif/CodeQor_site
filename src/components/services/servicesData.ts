import type { ElementType } from "react";
import {
  FaBrain, FaChartLine, FaCloud, FaCode, FaCogs, FaMobileAlt,
  FaRocket, FaUsers,
} from "react-icons/fa";

export type Service = { slug: string; icon: ElementType; title: string; description: string; points: string[]; gradient: string; hex: string };

export const services: Service[] = [
  { slug: "ai-intelligent-automation", icon: FaBrain, title: "AI & Intelligent Automation", description: "Harness the power of AI, machine learning, and intelligent automation to streamline operations and deliver smarter customer experiences.", points: ["Machine Learning", "Intelligent Automation", "Smart Experiences"], gradient: "from-purple-600 to-violet-600", hex: "#7c3aed" },
  { slug: "data-analytics-business-intelligence", icon: FaChartLine, title: "Data Analytics & Business Intelligence", description: "Turn complex data into meaningful insights with advanced analytics, interactive dashboards, and predictive intelligence.", points: ["Predictive Intelligence", "Interactive Dashboards", "Advanced Analytics"], gradient: "from-rose-500 to-pink-600", hex: "#f43f5e" },
  { slug: "cloud-solutions-digital-infrastructure", icon: FaCloud, title: "Cloud Solutions & Digital Infrastructure", description: "Build on a secure, scalable, and high-performance cloud infrastructure designed for modern business growth.", points: ["Secure Cloud", "Scalable Infrastructure", "High Performance"], gradient: "from-sky-500 to-blue-600", hex: "#0ea5e9" },
  { slug: "technology-talent-team-expansion", icon: FaUsers, title: "Technology Talent & Team Expansion", description: "Strengthen your workforce with experienced developers, designers, engineers, and digital professionals available when you need them.", points: ["Skilled Engineers", "Designers & Architects", "On-Demand Talent"], gradient: "from-emerald-500 to-teal-600", hex: "#10b981" },
  { slug: "product-development-mvp-solutions", icon: FaRocket, title: "Product Development & MVP Solutions", description: "Transform innovative ideas into market-ready products through rapid development, agile methodologies, and MVP validation.", points: ["Rapid Development", "Agile Delivery", "MVP Validation"], gradient: "from-amber-500 to-orange-600", hex: "#f59e0b" },
  { slug: "digital-growth-performance-marketing", icon: FaChartLine, title: "Digital Growth & Performance Marketing", description: "Accelerate your brand with data-driven strategies, targeted campaigns, and digital marketing solutions focused on measurable growth.", points: ["Data-Driven Strategy", "Targeted Campaigns", "Measurable Growth"], gradient: "from-cyan-500 to-teal-500", hex: "#06b6d4" },
  { slug: "digital-products-immersive-experiences", icon: FaMobileAlt, title: "Digital Products & Immersive Experiences", description: "Create powerful websites, mobile applications, and engaging digital experiences that connect brands with their audiences.", points: ["Websites", "Mobile Applications", "Engaging Experiences"], gradient: "from-blue-500 to-indigo-600", hex: "#2563eb" },
  { slug: "devops-software-delivery", icon: FaCogs, title: "DevOps & Software Delivery", description: "Optimize development workflows with automated CI/CD pipelines, cloud-native technologies, and reliable deployment solutions.", points: ["Automated CI/CD", "Cloud-Native", "Reliable Deployments"], gradient: "from-slate-600 to-slate-800", hex: "#475569" },
];
