import { cn } from '@/lib/utils';
import { ThemeSwitcher } from './ThemeSwitcher';
import { User , Linkedin, Instagram, Twitter, Calendar, Github } from 'lucide-react';

export function Footer() {
  const socialLinks = [
    { icon: <LinkedIn />, href: "https://www.linkedin.com/in/suryateja-koka/", label: "LinkedIn" },
    { icon: <Github />, href: "https://github.com/SuryaTeja-koka", label: "GitHub" },
    { icon: <Twitter />, href: "https://twitter.com/KokaTeja", label: "Twitter" },
    { icon: <Calendar />, href: "https://cal.com/surya-teja-k", label: "Calendly" },
    { icon: <User />, href: "#about", label: "Calendly" },
  ];

  return (
    <footer className="py-12 bg-secondary/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <h2 className="font-heading font-bold text-2xl mb-2">Surya Teja K</h2>
            <p className="text-muted-foreground">Software Engineer</p>
          </div>
          
          <div className="flex space-x-3">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover-lift"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
        
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Surya Teja K. All rights reserved.
          </p>
          
          <div className="flex items-center space-x-6">
            <ThemeSwitcher />
          </div>
          
        </div>
      </div>
    </footer>
  );
}

function LinkedIn(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}
