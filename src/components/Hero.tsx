import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Download, ArrowRight, ArrowLeft, ArrowDownRight, ArrowUpLeft } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';

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

        <h1 className="font-heading font-bold text-4xl md:text-6xl lg:text-7xl mb-4 tracking-tight">
          Surya Teja Koka
        </h1>

        {/* Animated Roles */}
        <div className="h-20 flex flex-col items-center justify-center">
          <TypeAnimation
            sequence={[
              'Software Engineer',
              2000,
              'Data Governance & Security Specialist',
              2000,
              'Python Developer',
              2000,
              'Instructor',
              2000,
              'Technical Consultant',
              2000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-2xl md:text-3xl text-theme-neon font-semibold"
          />
        </div>
        
        {/* Tagline loop */}
        {/* <div className="mt-4 mb-8 text-muted-foreground text-sm grid grid-cols-3 grid-rows-3 gap-x-2 gap-y-1 items-center justify-items-center w-full max-w-xs mx-auto">
          <span className="col-start-1 col-end-2 justify-self-end">Code</span>
          <ArrowRight className="w-4 h-4 animate-pulse col-start-2 col-end-3" />
          <span className="col-start-3 col-end-4 justify-self-start">Secure</span>
          <ArrowUpLeft className="w-4 h-4 animate-pulse col-start-1 col-end-2 justify-self-end" />
          <ArrowDownRight className="w-4 h-4 animate-pulse col-start-3 col-end-4 justify-self-start" />
          <span className="col-start-1 col-end-2 justify-self-end">Repeat</span>
          <ArrowLeft className="w-4 h-4 animate-pulse col-start-2 col-end-3" />
          <span className="col-start-3 col-end-4 justify-self-start">Educate</span>
        </div> */}

        <p className="text-lg md:text-l text-muted-foreground mb-8 max-w-2xl">
          Building secure, scalable solutions through clean code and innovative thinking
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
