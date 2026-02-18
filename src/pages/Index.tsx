import EcomNavbar from "@/components/ecommerce/EcomNavbar";
import EcomHero from "@/components/ecommerce/EcomHero";
import ShopByCategorySection from "@/components/ecommerce/ShopByCategorySection";
import CategoryGrid from "@/components/ecommerce/CategoryGrid";
import FeaturedProducts from "@/components/ecommerce/FeaturedProducts";
import DealsSection from "@/components/ecommerce/DealsSection";
import TrustBanner from "@/components/ecommerce/TrustBanner";
import Newsletter from "@/components/ecommerce/Newsletter";
import EcomFooter from "@/components/ecommerce/EcomFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <EcomNavbar />
      <EcomHero />
      <TrustBanner />
      <ShopByCategorySection />
      <CategoryGrid />
      <FeaturedProducts />
      <DealsSection />
      <Newsletter />
      <EcomFooter />
    </div>
  );
};

export default Index;
