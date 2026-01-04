import About from '@/components/About';
import Contact from '@/components/Contact';
import Experience from '@/components/Experience';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Journey from '@/components/Journey';
import Navbar from '@/components/Navbar';
import Projects from '@/components/Projects';
import Stats from "@/components/Stats";
import TechStack from '@/components/TechStack';
import { useEffect, useState } from 'react';


const Index = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background sakura-gradient">
        <div className="text-center animate-pulse">
          <div className="w-16 h-16 rounded-full bg-sakura-medium mx-auto mb-4 sakura-glow"></div>
          <p className="text-lg text-muted-foreground font-medium">Saif's data loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <TechStack />
      <Projects />
      <Experience />
      <Journey />
      <Stats/>
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
