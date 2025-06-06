import { ThemeSwitcher } from './ThemeSwitcher';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header className="w-full sticky top-0 z-50">
      <div className="glass-card dark:glass-dark light:glass-light read:glass-read">
        <div className="container flex items-center justify-between py-4">
          <div className="flex items-center space-x-2">
            <Link to="/" className="text-xl font-semibold">SuryaTejaK</Link>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            <a href="#about" className="text-sm font-medium hover:text-theme-neon transition-colors">About</a>
            <a href="#skills" className="text-sm font-medium hover:text-theme-neon transition-colors">Skills</a>
            <a href="#experience" className="text-sm font-medium hover:text-theme-neon transition-colors">Experience</a>
            <a href="#projects" className="text-sm font-medium hover:text-theme-neon transition-colors">Projects</a>
            <a href="#certifications" className="text-sm font-medium hover:text-theme-neon transition-colors">Certifications</a>
            <a href="#recommendations" className="text-sm font-medium hover:text-theme-neon transition-colors">Recommendations</a>
            <a href="#contact" className="text-sm font-medium hover:text-theme-neon transition-colors">Contact</a>
          </nav>

          <div className="flex items-center space-x-4">
            <ThemeSwitcher />
          </div>
        </div>
      </div>
    </header>
  );
}
