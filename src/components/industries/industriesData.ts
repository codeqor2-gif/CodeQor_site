import type { ElementType } from "react";
import {
  FaIndustry, FaTruck, FaHeartbeat, FaLandmark, FaShoppingBag,
  FaGraduationCap, FaNetworkWired, FaBolt, FaCity,
} from "react-icons/fa";

export type Industry = {
  icon: ElementType;
  title: string;
  description: string;
  image: string;
};

export const industries: Industry[] = [
  {
    icon: FaIndustry,
    title: "Industry & Manufacturing",
    description: "Innovative solutions to optimize production and operations.",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=1200&auto=format&fit=crop",
  },
  {
    icon: FaTruck,
    title: "Transportation & Logistics",
    description: "Efficient logistics and transport solutions for your business.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop",
  },
  {
    icon: FaHeartbeat,
    title: "Healthcare",
    description: "Advanced healthcare technology to improve patient care.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=1200&auto=format&fit=crop",
  },
  {
    icon: FaLandmark,
    title: "Banks & Insurance",
    description: "Secure and reliable banking and insurance services.",
    image: "/images/BankingandFinance.jpg",
  },
  {
    icon: FaShoppingBag,
    title: "Retail & E-commerce",
    description: "Transforming retail experiences with innovative tech.",
    image: "/images/Retail%20&%20E-commerce.jpg",
  },
  {
    icon: FaGraduationCap,
    title: "Education & eLearning",
    description: "Empowering learning through modern digital solutions.",
    image: "/images/Education%20&%20eLearning.jpg",
  },
  {
    icon: FaNetworkWired,
    title: "Telecom & IT Services",
    description: "Connecting people and businesses through IT excellence.",
    image: "/images/Telecom%20&%20IT%20Services.jpg",
  },
  {
    icon: FaBolt,
    title: "Energy & Utilities",
    description: "Smart grid monitoring, renewable energy management, and IoT-based solutions.",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=1200&auto=format&fit=crop",
  },
  {
    icon: FaCity,
    title: "Government & Public Sector",
    description: "Citizen-facing platforms, digital services modernization, and compliance systems.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop",
  },
];
