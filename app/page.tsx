import { SiteHeader } from "@/components/site-header";
import { HeroSection } from "@/components/hero-section";
import { LifestyleTabs } from "@/components/lifestyle-tabs";
import { SplitBanner } from "@/components/split-banner";
import { FeaturedProducts } from "@/components/featured-products";
import { PromoBanner } from "@/components/promo-banner";
import { EditorialSection } from "@/components/editorial-section";
import { EmailCapture } from "@/components/email-capture";
import { SiteFooter } from "@/components/site-footer";
import { PromoModal } from "@/components/promo-modal";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <main>
        <HeroSection />
        <LifestyleTabs />
        <SplitBanner />
        <FeaturedProducts />
        <PromoBanner />
        <EditorialSection />
        <EmailCapture />
      </main>
      <SiteFooter />
      <PromoModal />
    </div>
  );
}
