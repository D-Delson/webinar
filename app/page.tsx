import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhoWeAre from "@/components/WhoWeAre";
import BusinessOwners from "@/components/BusinessOwners";
import RealProblems from "@/components/RealProblems";
import Testimonials from "@/components/Testimonials";
import Statistics from "@/components/Statistics";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <WhoWeAre />
      <BusinessOwners />
      <RealProblems />
      <Testimonials />
      <Statistics />
      <CTA />
      <Footer />
    </main>
  );
}
