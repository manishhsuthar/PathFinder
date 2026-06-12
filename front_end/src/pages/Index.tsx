import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import StatsSection from '@/components/StatsSection';
import WhatsSection from '@/components/WhatIsSection';
import FeaturesSection from '@/components/FeaturesSection';
import InfoSection from '@/components/InfoSection'; // Replaced with "How PathFinder Works"
import TestimonialsSection from '@/components/TestimonialsSection';
import FAQSection from '@/components/FAQSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import Stars from '@/components/Stars';

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      {/* Background stars particles - reduced and subtle */}
      <Stars />
      
      {/* Sticky blurred navigation */}
      <Navbar />
      
      {/* Redesigned Hero Section */}
      <HeroSection />
      
      {/* Added Statistics section */}
      <StatsSection />
      
      {/* Redesigned About Section */}
      <section id="about">
        <WhatsSection />
      </section>
      
      {/* Enhanced Feature Cards */}
      <section id="features">
        <FeaturesSection />
      </section>
      
      {/* How PathFinder Works Section */}
      <section id="how-it-works">
        <InfoSection />
      </section>
      
      {/* Added Testimonials Section */}
      <section id="testimonials">
        <TestimonialsSection />
      </section>
      
      {/* Added FAQ Section */}
      <section id="faq">
        <FAQSection />
      </section>
      
      {/* Added Contact Section */}
      <section id="contact">
        <ContactSection />
      </section>
      
      {/* Redesigned Footer Section */}
      <Footer />
    </div>
  );
};

export default Index;
