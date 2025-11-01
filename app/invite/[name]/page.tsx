import { Metadata } from 'next';
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

type Props = {
  params: { name: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const name = params.name.toUpperCase();
  
  return {
    title: `${name} - Join Taelor.ai`,
    description: `${name}, discover your perfect style with AI-curated clothing rentals.`,
    openGraph: {
      title: `${name} - Join Taelor.ai`,
      description: `${name}, discover your perfect style with AI-curated clothing rentals.`,
      images: [
        {
          url: `/api/og?name=${encodeURIComponent(name)}`,
          width: 1200,
          height: 630,
          alt: `${name} - Taelor.ai Invitation`,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${name} - Join Taelor.ai`,
      description: `${name}, discover your perfect style with AI-curated clothing rentals.`,
      images: [`/api/og?name=${encodeURIComponent(name)}`],
    },
  };
}

export default function InvitePage({ params }: Props) {
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

