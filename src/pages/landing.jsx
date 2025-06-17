import Header from "@/components/landing/header";
import Hero from "@/components/landing/hero";
import Features from "@/components/landing/features";
import Benefits from "@/components/landing/benefits";
import SocialProof from "@/components/landing/social-proof";
import Footer from "@/components/landing/footer";

export default function Landing() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <Benefits />
      <SocialProof />
      <Footer />
    </div>
  );
}