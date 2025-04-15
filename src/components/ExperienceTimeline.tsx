
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Briefcase, Coffee, Rocket, Crown, ArrowRight } from 'lucide-react';

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  icon: React.ReactNode;
  transition?: string;
}

const experiences: Experience[] = [
  {
    title: "SDE Intern",
    company: "Samsung",
    period: "Jul 2021 - Mar 2022",
    description: "I applied React and Spring Boot to design and implement an interactive user interface for the VOC Dashboard at Samsung R&D.",
    icon: <Coffee className="text-theme-neon" size={24} />,
    transition: "Gained core skills and moved on to another amazing role"
  },
  {
    title: "Engineer 1 R&D",
    company: "CommScope",
    period: "Jun 2022 - Dec 2023",
    description: "Developed an intuitive user interface for the gNB-Utils tool, which has been utilized by over 1,000+ users at CommScope.",
    icon: <Briefcase className="text-theme-neon" size={24} />,
    transition: "Sought bigger challenges in full-stack development"
  },
  {
    title: "Software Engineer 1",
    company: "TuringIQ",
    period: "Dec 2023 - Apr 2024",
    description: "I played a vital role in compliance efforts related to PCI DSS 3.2.1 and 4.0, serving as an internal auditor to ensure security standards were met effectively. ",
    icon: <Rocket className="text-theme-neon" size={24} />,
    transition: "Promoted to Software Engineer 2"
  },
  {
    title: "Software Engineer 2",
    company: "TuringIQ",
    period: "Apr 2024 - Present",
    description: "Developed a comprehensive fraud mitigation system using AI and ML, significantly reducing fraudulent activities and enhancing system security at an RuPay Credit and Debit card company. Worked with the most recent tools like FLINK, KUBEFLOW, MLFLOW and FASTAPI.",
    icon: <Crown className="text-theme-neon" size={24} />
  }
];

export function ExperienceTimeline() {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = Number(entry.target.getAttribute('data-index'));
          if (entry.isIntersecting && !visibleItems.includes(id)) {
            setVisibleItems(prev => [...prev, id]);
          }
        });
      },
      { threshold: 0.2 }
    );
    
    document.querySelectorAll('.timeline-item').forEach(item => {
      observer.observe(item);
    });
    
    return () => observer.disconnect();
  }, [visibleItems]);

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-heading font-bold text-center mb-12">
          Experience Timeline
        </h2>
        
        {/* Mobile Timeline (Vertical) */}
        <div className="md:hidden relative">
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-theme-neon/30"></div>
          
          {experiences.map((exp, index) => (
            <div 
              key={index}
              data-index={index}
              className={cn(
                "timeline-item ml-12 mb-10 relative",
                visibleItems.includes(index) ? "animate-fade-in" : "opacity-0"
              )}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="absolute -left-12 w-8 h-8 rounded-full glass-card flex items-center justify-center">
                {exp.icon}
              </div>
              
              <div className="glass-card p-5">
                <h3 className="text-xl font-semibold">{exp.title}</h3>
                <p className="text-theme-neon font-medium">{exp.company}</p>
                <p className="text-sm text-muted-foreground">{exp.period}</p>
                <p className="mt-2">{exp.description}</p>
                
                {exp.transition && (
                  <div className="mt-4 pt-4 border-t border-border flex items-center text-sm text-muted-foreground">
                    <ArrowRight className="mr-2 h-4 w-4" />
                    {exp.transition}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        
        {/* Desktop Timeline (Horizontal) */}
        <div className="hidden md:block relative">
          <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-theme-neon/30"></div>
          
          <div className="grid grid-cols-4">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                data-index={index}
                className={cn(
                  "timeline-item px-4 relative",
                  visibleItems.includes(index) ? "animate-scale-up" : "opacity-0"
                )}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className={cn(
                  "glass-card p-5 mb-8",
                  index % 2 === 0 ? "" : "mt-16"
                )}>
                  <h3 className="text-xl font-semibold">{exp.title}</h3>
                  <p className="text-theme-neon font-medium">{exp.company}</p>
                  <p className="text-sm text-muted-foreground">{exp.period}</p>
                  <p className="mt-2">{exp.description}</p>
                  
                  {exp.transition && (
                    <div className="mt-4 pt-4 border-t border-border flex items-center text-sm text-muted-foreground">
                      <ArrowRight className="mr-2 h-4 w-4" />
                      {exp.transition}
                    </div>
                  )}
                </div>
                
                <div className={cn(
                  "absolute left-1/2 transform -translate-x-1/2",
                  index % 2 === 0 ? "top-[calc(100%-8px)]" : "bottom-[calc(100%-8px)]"
                )}>
                  <div className="w-8 h-8 rounded-full glass-card flex items-center justify-center">
                    {exp.icon}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
