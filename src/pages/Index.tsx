import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Clients from "@/components/Clients";
import Services from "@/components/Services";
import About from "@/components/About";
import CaseStudies from "@/components/CaseStudies";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";

const Index = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Artbox Social",
    "url": "https://www.artboxsocial.com",
    "logo": "https://www.artboxsocial.com/artbox-logo.png",
    "description": "Jaipur-based social media agency helping brands scale with creative content, data-driven strategies, and impactful digital campaigns.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Jaipur",
      "addressRegion": "Rajasthan",
      "addressCountry": "IN"
    },
    "sameAs": [
      "https://www.instagram.com/artboxsocial",
      "https://www.facebook.com/artboxsocial",
      "https://www.linkedin.com/company/artboxsocial"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": "hello@artboxsocial.com"
    },
    "areaServed": "IN",
    "serviceType": [
      "Social Media Marketing",
      "Content Creation",
      "Digital Advertising",
      "Influencer Marketing",
      "Website Development",
      "SEO Optimization"
    ]
  };

  return (
    <div className="min-h-screen">
      <SEO 
        canonicalUrl="https://www.artboxsocial.com"
        structuredData={organizationSchema}
      />
      <Navbar />
      <Hero />
      <Clients />
      <div id="services">
        <Services />
      </div>
      <div id="about">
        <About />
      </div>
      <CaseStudies />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
