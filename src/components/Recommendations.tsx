
import { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Linkedin } from 'lucide-react';

interface Recommendation {
  name: string;
  title: string;
  company: string;
  text: string;
  linkedin?: string;
  image?: string;
}

const recommendations: Recommendation[] = [
  // {
  //   name: "Kotesh Mukkamala",
  //   title: "Founder",
  //   company: "TuringIQ",
  //   text: "Surya's technical expertise and communication skills made him invaluable to our team. He translates complex concepts into simple solutions.",
  //   linkedin: "https://www.linkedin.com/in/koteshmukkamala/"
  // },
  // {
  //   name: "Reddy Bhupathi",
  //   title: "Vice President, Solutions Engineering",
  //   company: "ByteBridge",
  //   text: "Surya's proactive nature in handling DevSecOps and cloud infrastructure made our environment at ConcertoCard much more secure and efficient",
  //   linkedin: "https://www.linkedin.com/in/reddybhupathi/"
  // },
  {
    name: "Sreedhar V",
    title: "Senior Software Manager",
    company: "Nokia (EX-Samsung)",
    text: "Surya is an exceptional developer with a keen eye for detail. His ability to solve complex problems and deliver high-quality code is remarkable.",
    linkedin: "https://www.linkedin.com/in/sreedhar-reddy-vundela/"
  },
  {
    name: "Prahlada Herle",
    title: "Senior Principal Member of Technical Staff",
    company: "Altiostar, A Rakuten Symphony Company (EX-CommScope)",
    text: "Surya consistently delivers production-ready code with clean architecture and best practices. His understanding of Python, backend frameworks and Django is great.",
    linkedin: "https://www.linkedin.com/in/prahlada-herle/"
  },
  {
    name: "Rajesh Seemakurthi",
    title: "Data Scientist",
    company: "InspyreTek Solutions",
    text: "Surya is a rare mix of deep technical knowledge and the ability to explain it clearly. A true asset for any engineering team.",
    linkedin: "https://www.linkedin.com/in/rajeshdata/"
  }
];

export function Recommendations() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );
    
    if (carouselRef.current) {
      observer.observe(carouselRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % recommendations.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + recommendations.length) % recommendations.length);
  };

  function getInitials(name: string) {
    return name
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase();
  }

  return (
    <section id="recommendations" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-heading font-bold text-center mb-12">
          Recommendations
        </h2>
        
        <div 
          ref={carouselRef}
          className={cn(
            "max-w-3xl mx-auto relative",
            isVisible ? "animate-fade-in" : "opacity-0"
          )}
        >
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out" 
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {recommendations.map((rec, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <Card className="glass-card">
                    <CardContent className="pt-6">
                      <div className="flex items-center mb-4">
                        {rec.image ? (
                          <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                            <img 
                              src={rec.image} 
                              alt={rec.name} 
                              className="w-full h-full object-cover"
                            />
                          </div>
                        ) : (
                          <div className="w-12 h-12 rounded-full bg-theme-neon/20 text-theme-neon flex items-center justify-center mr-4">
                            {getInitials(rec.name)}
                          </div>
                        )}
                        
                        <div>
                          <div className="flex items-center">
                            <h3 className="font-semibold">{rec.name}</h3>
                            {rec.linkedin && (
                              <a 
                                href={rec.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="ml-2 text-muted-foreground hover:text-theme-neon transition-colors"
                              >
                                <Linkedin size={16} />
                              </a>
                            )}
                          </div>
                          <p className="text-sm text-muted-foreground">{rec.title}, {rec.company}</p>
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground italic">&ldquo;{rec.text}&rdquo;</p>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center mt-6 space-x-2">
            {recommendations.map((_, index) => (
              <button
                key={index}
                className={cn(
                  "w-2 h-2 rounded-full transition-colors",
                  index === currentIndex ? "bg-theme-neon" : "bg-muted"
                )}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          
          <Button 
            variant="outline" 
            size="icon" 
            className="absolute top-1/2 -left-4 transform -translate-y-1/2 rounded-full glass-card hover:glass-card hover:neon-border"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          
          <Button 
            variant="outline" 
            size="icon" 
            className="absolute top-1/2 -right-4 transform -translate-y-1/2 rounded-full glass-card hover:glass-card hover:neon-border"
            onClick={nextSlide}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
