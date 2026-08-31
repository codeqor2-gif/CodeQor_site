import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import ServiceDetail from "@/components/services/ServiceDetail";
import AiIntelligentAutomation from "@/components/services/AiIntelligentAutomation";
import DataAnalyticsBI from "@/components/services/DataAnalyticsBI";
import CloudSolutionsInfrastructure from "@/components/services/CloudSolutionsInfrastructure";
import TechTalentTeamExpansion from "@/components/services/TechTalentTeamExpansion";
import ProductDevelopmentMVP from "@/components/services/ProductDevelopmentMVP";
import DigitalGrowthMarketing from "@/components/services/DigitalGrowthMarketing";
import DigitalProductsExperiences from "@/components/services/DigitalProductsExperiences";
import DevOpsSoftwareDelivery from "@/components/services/DevOpsSoftwareDelivery";
import Footer from "@/components/Footer";
import Copyright from "@/components/Copyright";
import { services } from "@/components/services/servicesData";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  return {
    title: service ? `${service.title} | CodeQor Technologies` : "Services | CodeQor Technologies",
  };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const isAI = slug === "ai-intelligent-automation";
  const isBI = slug === "data-analytics-business-intelligence";
  const isCloud = slug === "cloud-solutions-digital-infrastructure";
  const isTalent = slug === "technology-talent-team-expansion";
  const isProduct = slug === "product-development-mvp-solutions";
  const isGrowth = slug === "digital-growth-performance-marketing";
  const isDigitalProducts = slug === "digital-products-immersive-experiences";
  const isDevOps = slug === "devops-software-delivery";
  return (
    <>
      <Loader />
      <Navbar />
      {isAI ? <AiIntelligentAutomation /> : isBI ? <DataAnalyticsBI /> : isCloud ? <CloudSolutionsInfrastructure /> : isTalent ? <TechTalentTeamExpansion /> : isProduct ? <ProductDevelopmentMVP /> : isGrowth ? <DigitalGrowthMarketing /> : isDigitalProducts ? <DigitalProductsExperiences /> : isDevOps ? <DevOpsSoftwareDelivery /> : <ServiceDetail slug={slug} />}
      <Footer />
      <Copyright />
    </>
  );
}
