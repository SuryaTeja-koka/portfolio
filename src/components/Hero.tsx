
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import { profile } from ''

export function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section id="about" className="min-h-[80vh] flex items-center justify-center relative overflow-hidden py-20">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-theme-accent/20 to-background" />
      
      <div className={cn(
        "container relative z-10 mx-auto px-4 flex flex-col items-center text-center",
        isLoaded ? "animate-fade-in" : "opacity-0"
      )}>
        <img
          src="/portfolio/profile.png"
          alt="Surya Teja Koka"
          style={{ width: "180px", height: "180px" }}
          className="rounded-full mb-6 border-4 border-theme-neon shadow-lg transition-transform hover:scale-105 object-cover"
        />

        <h1 className="font-heading font-bold text-4xl md:text-6xl lg:text-7xl mb-6 tracking-tight">
          <span className="block">Surya Teja Koka</span>
          <span className="text-theme-neon">Software Engineer</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-10">
          Crafting Code, Creating Magic
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <Button size="lg" className="glass-card hover-lift neon-border" asChild>
            <a href="#contact">Get In Touch</a>
          </Button>
          
          <Button size="lg" variant="outline" className="hover-lift group" asChild>
            <a href="/portfolio/SuryaTejaKoka_Resume.pdf" download>
              <Download className="mr-2 h-5 w-5 group-hover:text-theme-neon" />
              Download Resume
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
