import { ServiceCard } from "../../components/ui/card";

export default function MarketingCards() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-primary-dark">
            <ServiceCard
                title="Pay-per-click advertising"
                subtitle="campaigns and management"
                iconPath="/ppc_ad.svg"
                variant="lime"
            />
            <ServiceCard
                title="Social Media Marketing"
                subtitle="strategy and engagement"
                iconPath="/sm_marketing.svg"
                variant="dark"
            />
            <ServiceCard
                title="Email Marketing"
                subtitle="automation and campaigns"
                iconPath="/email_marketing.svg"
                variant="light"
            />
            <ServiceCard
                title="Content Creation"
                subtitle="and brand storytelling"
                iconPath="/content_creation.svg"
                variant="gradient"
            />
            <ServiceCard
                title="Analytics and Tracking"
                subtitle="performance insights"
                iconPath="/analytics_tracking.svg"
                variant="dark"
            />
            <ServiceCard
                title="Search Engine"
                subtitle="Optimization (SEO)"
                iconPath="/seo.svg"
                variant="light"
            />
        </div>
    );
}
