// /frontend/app/(public)/page.js (REVISED)

import Categories from "@/components/Categories";
import CTASection from "@/components/Cta";
import FeaturedProducts from "@/components/FeatureProducts";
import Hero from "@/components/Hero";
import HowItWorksSection from "@/components/HowitWork";
import PopularItemsSection from "@/components/PopularItem";
import Reviews from "@/components/Review";
export default function LandingPage() {
  return (
    <div className="w-11/12 mx-auto my-10">
      <Hero />
      <FeaturedProducts></FeaturedProducts>
      <Categories></Categories>
      <PopularItemsSection></PopularItemsSection>
      <HowItWorksSection></HowItWorksSection>
      <Reviews />
      <CTASection></CTASection>
    </div>
  );
}
