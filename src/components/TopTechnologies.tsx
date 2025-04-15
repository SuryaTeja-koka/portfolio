
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Star, StarHalf } from 'lucide-react';

interface Skill {
  name: string;
  level: number; // 1-5
  description: string;
}

const skills: Skill[] = [
  { name: "Python", level: 5, description: "Data analysis, automation & web backends" },
  { name: "Django", level: 5, description: "Taught 6000+ students on how to build webapplications using Django" },
  { name: "AWS", level: 5, description: "Certified AWS Developer associate with 3+ years of experience in cloud native applications" },
  { name: "Data Security", level: 4.5, description: "Internal Auditor PCI DSS (3.2.1 and 4.0) for ConcertoCard Company" },
  { name: "Data Science", level: 4.5, description: "Whether it’s writing SQL queries, building fraud models, or optimizing Python pipelines, I do it with precision and clarity." },
  { name: "Product Development", level: 4.5, description: "I build fast, reliable, and responsive applications using Python and AWS. Whether it’s a web backend, a secure API, or an automation pipeline, I make sure it’s production-ready, scalable, and efficient." }
];

export function TopTechnologies() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
      }
    }, { threshold: 0.1 });
    
    const section = document.getElementById('skills');
    if (section) observer.observe(section);
    
    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  const renderStars = (level: number) => {
    const stars = [];
    const fullStars = Math.floor(level);
    const hasHalfStar = level % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={`full-${i}`} className="fill-theme-neon text-theme-neon" />);
    }
    
    if (hasHalfStar) {
      stars.push(<StarHalf key="half" className="fill-theme-neon text-theme-neon" />);
    }
    
    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Star key={`empty-${i}`} className="text-muted" />);
    }
    
    return stars;
  };

  return (
    <section id="skills" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-heading font-bold text-center mb-12">
          Top Technologies
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <div 
              key={skill.name}
              className={cn(
                "glass-card p-6 hover-lift",
                isVisible ? "animate-scale-up" : "opacity-0",
                isVisible && `animation-delay-${index * 100}`
              )}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <h3 className="text-xl font-semibold mb-3">{skill.name}</h3>
              
              <div className="flex mb-3">
                {renderStars(skill.level)}
              </div>
              
              <p className="text-sm text-muted-foreground">
                {skill.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
