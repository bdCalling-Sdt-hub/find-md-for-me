import CustomTier from "@/components/websiteComponent/Pricing/CustomTier";
import OversightPricing from "@/components/websiteComponent/Pricing/OversightPricing";
import PricingTabs from "@/components/websiteComponent/Pricing/PricingTabs";

const PricingPage = () => {
  return (
    <div className="container">
      <OversightPricing />
      <PricingTabs />
      <CustomTier />
    </div>
  );
};

export default PricingPage;
