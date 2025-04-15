
import { useEffect } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { TopTechnologies } from '@/components/TopTechnologies';
import { ExperienceTimeline } from '@/components/ExperienceTimeline';
import { Certifications } from '@/components/Certifications';
import { Recommendations } from '@/components/Recommendations';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';
import { ScrollProgress } from '@/components/ScrollProgress';

const Index = () => {
  useEffect(() => {
    // Set theme from localStorage if available
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      document.body.classList.add(savedTheme);
    }
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href') || '');
        if (target) {
          window.scrollTo({
            top: target.offsetTop - 100,
            behavior: 'smooth'
          });
        }
      });
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <ScrollProgress />
      <Header />
      
      <main className="flex-grow">
        <Hero />
        <TopTechnologies />
        <ExperienceTimeline />
        <Certifications />
        <Recommendations />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
