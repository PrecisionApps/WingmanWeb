import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { WhatWeRefuse } from "@/components/WhatWeRefuse";
import { TrustSafety } from "@/components/TrustSafety";
import { ProductProof } from "@/components/ProductProof";
import { ClosingCTA } from "@/components/ClosingCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <WhatWeRefuse />
        <TrustSafety />
        <ProductProof />
        <ClosingCTA />
      </main>
      <Footer />
    </div>
  );
}
