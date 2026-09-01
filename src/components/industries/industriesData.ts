import type { ElementType } from "react";
import {
  FaIndustry, FaTruck, FaHeartbeat, FaLandmark, FaShoppingBag,
  FaGraduationCap, FaNetworkWired,
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
    image: "https://images.unsplash.com/photo-1559526324-593bc073d938?q=80&w=1200&auto=format&fit=crop",
  },
  {
    icon: FaShoppingBag,
    title: "Retail & E-commerce",
    description: "Transforming retail experiences with innovative tech.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=1200&auto=format&fit=crop",
  },
  {
    icon: FaGraduationCap,
    title: "Education & eLearning",
    description: "Empowering learning through modern digital solutions.",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1200&auto=format&fit=crop",
  },
  {
    icon: FaNetworkWired,
    title: "Telecom & IT Services",
    description: "Connecting people and businesses through IT excellence.",
    image: "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?q=80&w=1200&auto=format&fit=crop",
  },
];
