
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Link2, Award } from 'lucide-react';

interface Certification {
  name: string;
  provider: string;
  date: string;
  description: string;
  url:string;
}

const certifications: Certification[] = [
  {
    name: "AWS Certified Developer – Associate",
    provider: "Amazon Web Services",
    date: "2022",
    description: "Comprehensive understanding of AWS application life-cycle & management",
    url: "https://www.credly.com/badges/bd6fd3ae-be3f-4207-9cef-256664108c7e/public_url"
  },
  {
    name: "Database systems Specialization",
    provider: "National Autonomous University of Mexico",
    date: "2020",
    description: "Business intelligence, Data Mining, Data Science, Databases , Databases in memory or big data and building scalable data intensive systems.",
    url: "https://www.coursera.org/account/accomplishments/specialization/certificate/BA3B897PTDFV"
  },
  {
    name: "IBM Applied AI Specilization",
    provider: "IBM",
    date: "2020",
    description: "TensorFlow, Neural Networks, Python for Data Science, AI & Development",
    url: "https://www.coursera.org/account/accomplishments/specialization/certificate/J5XAZML484AD"
  },
  {
    name: "Agile Development Specilization",
    provider: "UVA Darden School of Business",
    date: "2020",
    description: "Agile project management and team leadership",
    url: "Agile development process, from design-first charters to purposeful analytics to creating a culture of experimentation."
  }
];

export function Certifications() {
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
    
    document.querySelectorAll('.cert-item').forEach(item => {
      observer.observe(item);
    });
    
    return () => observer.disconnect();
  }, [visibleItems]);

  return (
    <section id="certifications" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-heading font-bold text-center mb-12">
          Certifications
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <div 
              key={index}
              data-index={index}
              className={cn(
                "cert-item glass-card p-6 hover-lift group",
                visibleItems.includes(index) ? "animate-fade-in" : "opacity-0"
              )}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="mb-4 text-theme-neon group-hover:animate-pulse">
                <Award size={36} />
              </div>
              
              <h3 className="text-xl font-semibold mb-2">{cert.name}</h3>
              <p className="text-sm text-theme-neon mb-1">{cert.provider}</p>
              <p className="text-xs text-muted-foreground mb-3">{cert.date}</p>
              <p className="text-sm text-muted-foreground italic">
                {cert.description}
              </p>
              <p className="text-sm text-muted-foreground italic">
              <div className="mb-4 text-theme-neon group-hover:animate-pulse">
              <a href={cert.url} target="_blank" rel="noopener noreferrer">
                <Link2 className="w-6 h-6 hover:text-gray-700" size={36} />
              </a>
              </div>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
