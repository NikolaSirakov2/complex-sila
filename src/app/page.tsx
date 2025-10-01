import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Video from "@/components/Video";
import Footer from "@/components/Footer";
import { BeamsBackground } from "@/components/ui/beams-background";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <BeamsBackground />
      <About />
      <Testimonials />
      <Video />
      <Footer />
    </div>
  );
};

export default Index;
