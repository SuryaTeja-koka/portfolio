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
import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Shield, Bot, GraduationCap, Globe, Code2, Database, Cloud, Lock, Download } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';

const projects = {
  security: [
    {
      title: 'PII-Hunter',
      description: 'Automated PII detection and classification tool',
      link: 'https://github.com/SuryaTeja-koka/PII-HUNTER',
      technologies: ['Python', 'PCI-DSS'],
      icon: <Shield className="w-6 h-6" />, status: 'active'
    },
    // {
    //   title: 'Secure API Framework',
    //   description: 'Production-ready FastAPI security templates',
    //   link: 'https://github.com/SuryaTeja-koka/secure-api-framework',
    //   technologies: ['FastAPI', 'Pydantic', 'OpenTelemetry', 'Docker'],
    //   icon: <Lock className="w-6 h-6" />, status: 'active'
    // },
    // {
    //   title: 'PCI-DSS Compliance Guide',
    //   description: 'Comprehensive guide for PCI-DSS compliance',
    //   link: '#',
    //   technologies: ['Security', 'Compliance', 'Documentation'],
    //   icon: <Shield className="w-6 h-6" />, status: 'coming-soon'
    // }
  ],
  automation: [
    {
      title: 'WhatsApp Automation',
      description: 'Automated WhatsApp messaging system integrated with Google Suite',
      link: 'https://github.com/SuryaTeja-koka/WhatsAppAutomation_GSuite',
      technologies: ['Python', 'Google API', 'WhatsApp API', 'Automation'],
      icon: <Bot className="w-6 h-6" />, status: 'active'
    }
  ],
  education: [
    {
      title: 'Django For Beginners',
      description: 'Learn to build web applications using Django - 4 framework',
      link: 'https://www.udemy.com/course/django-for-beginners-x/',
      technologies: ['Python', 'Security', 'Automation', 'Education'],
      icon: <GraduationCap className="w-6 h-6" />, status: 'active'
    },
    // {
    //   title: 'FastAPI Masterclass',
    //   description: 'Building secure and scalable APIs',
    //   link: 'https://www.udemy.com/course/fastapi-masterclass/',
    //   technologies: ['FastAPI', 'Python', 'API Design', 'Security'],
    //   icon: <Code2 className="w-6 h-6" />, status: 'active'
    // }
  ],
  web: [
    {
      title: 'Columbus Coffee House',
      description: 'Modern e-commerce platform',
      link: 'https://www.columbuscoffeehouse.com/',
      technologies: ['React', 'TypeScript', 'E-commerce', 'UI/UX'],
      icon: <Globe className="w-6 h-6" />, status: 'active'
    },
    {
      title: 'Nalaland',
      description: 'Full-featured e-commerce platform for camping and adventure gear',
      link: 'https://www.nalaland.in/',
      technologies: ['Web Development', 'UI/UX', 'E-commerce'],
      icon: <Globe className="w-6 h-6" />, status: 'active'
    },
    {
      title: 'Lakeshore LLC',
      description: 'Professional corporate website with custom features and responsive design',
      link: 'https://www.lakeshoreitllc.com/',
      technologies: ['Web Development', 'Consulting', 'UI/UX'],
      icon: <Database className="w-6 h-6" />, status: 'active'
    }
  ]
};

const currentEngagements = [
  {
    title: 'TuringIQ',
    role: 'SDE 2 | AI Solutions Architect',
    description: 'Designed and developed a modern, responsive website showcasing AI solutions and services, featuring interactive elements and seamless user experience',
    link: 'https://turingiq.ai/',
    technologies: ['AI/ML', 'LLMs', 'Cloud', 'FastAPI'],
    icon: <Cloud className="w-6 h-6" />
  }
];

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
        <div className="container mx-auto px-4">
          <hr className="my-12 border-t border-border" />
        </div>
        {/* Projects & Engagements Section */}
        <section id="projects" className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h1 className="text-4xl font-bold mb-8 text-center">Projects & Engagements</h1>
              {/* Current Engagements Section */}
              <section className="mb-12">
                <h2 className="text-2xl font-semibold mb-6">Current Engagements</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {currentEngagements.map((engagement, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Card className="h-full hover:shadow-lg transition-shadow">
                        <CardHeader>
                          <div className="flex items-center gap-2">
                            {engagement.icon}
                            <CardTitle>{engagement.title}</CardTitle>
                          </div>
                          <CardDescription>{engagement.role}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <p className="mb-4">{engagement.description}</p>
                          <div className="flex flex-wrap gap-2">
                            {engagement.technologies.map((tech, i) => (
                              <Badge key={i} className="bg-secondary text-secondary-foreground">{tech}</Badge>
                            ))}
                          </div>
                          <a
                            href={engagement.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:text-blue-700 mt-4 inline-block"
                          >
                            Visit Website →
                          </a>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </section>
              {/* Projects Section */}
              <section>
                <h2 className="text-2xl font-semibold mb-6">Featured Projects</h2>
                <Tabs defaultValue="security" className="w-full">
                  <TabsList className="grid w-full grid-cols-4 mb-8">
                    <TabsTrigger value="security">Security</TabsTrigger>
                    <TabsTrigger value="automation">Automation</TabsTrigger>
                    <TabsTrigger value="education">Education</TabsTrigger>
                    <TabsTrigger value="web">Web</TabsTrigger>
                  </TabsList>
                  {Object.entries(projects).map(([category, items]) => (
                    <TabsContent key={category} value={category}>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {items.map((project, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                          >
                            <Card className="h-full hover:shadow-lg transition-shadow">
                              <CardHeader>
                                <div className="flex items-center gap-2">
                                  {project.icon}
                                  <CardTitle>{project.title}</CardTitle>
                                </div>
                                <CardDescription>{project.description}</CardDescription>
                              </CardHeader>
                              <CardContent>
                                <div className="flex flex-wrap gap-2 mb-4">
                                  {project.technologies.map((tech, i) => (
                                    <Badge key={i} className="bg-secondary text-secondary-foreground">{tech}</Badge>
                                  ))}
                                </div>
                                {project.status === 'coming-soon' ? (
                                  <Badge className="text-foreground border">Coming Soon</Badge>
                                ) : (
                                  <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-500 hover:text-blue-700 inline-block"
                                  >
                                    View Project →
                                  </a>
                                )}
                              </CardContent>
                            </Card>
                          </motion.div>
                        ))}
                      </div>
                    </TabsContent>
                  ))}
                </Tabs>
              </section>
            </motion.div>
          </div>
        </section>
        <Certifications />
        <Recommendations />
        <ContactSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
