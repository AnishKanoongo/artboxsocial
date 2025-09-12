import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Clients from "@/components/Clients";
import Services from "@/components/Services";
import About from "@/components/About";
import CaseStudies from "@/components/CaseStudies";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
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
