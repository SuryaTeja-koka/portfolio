import { useState } from 'react';
import emailjs from 'emailjs-com'; // <-- Add this import
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { Calendar, Mail } from 'lucide-react';

const EMAILJS_SERVICE_ID = 'service_84vo58j';      // <-- Replace with your EmailJS Service ID
const EMAILJS_TEMPLATE_ID = 'template_m14r4qo';    // <-- Replace with your EmailJS Template ID
const EMAILJS_USER_ID = 'hQf56vItycTWabbF7';       // <-- Replace with your EmailJS User ID (public key)

export function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Prepare template params for EmailJS
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      // You can add more fields if your template expects them
    };

    emailjs.send(
      EMAILJS_SERVICE_ID,
      EMAILJS_TEMPLATE_ID,
      templateParams,
      EMAILJS_USER_ID
    )
    .then(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for reaching out, I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', message: '' });
    })
    .catch((error) => {
      toast({
        title: "Error",
        description: "Sorry, there was a problem sending your message. Please try again later.",
        variant: "destructive",
      });
      console.error('EmailJS error:', error);
    })
    .finally(() => {
      setIsSubmitting(false);
    });
  };

  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-heading font-bold text-center mb-12">
          Let's Connect!
        </h2>
        
        <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2 flex flex-col justify-center">
            <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
            
            <p className="text-muted-foreground mb-6">
              Whether you have a question or just want to say hi, I'll do my best to get back to you!
            </p>
            
            <div className="space-y-4">
              <a 
                href="mailto:tejasurya274@gmail.com" 
                className="flex items-center text-sm hover:text-theme-neon transition-colors"
              >
                <Mail className="mr-3 h-5 w-5" />
                tejasurya274@gmail.com
              </a>
              
              <a 
                href="https://cal.com/surya-teja-k" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-sm hover:text-theme-neon transition-colors"
              >
                <Calendar className="mr-3 h-5 w-5" />
                Schedule a meeting
              </a>
            </div>
            
            <div className="mt-8">
              <Button className="glass-card hover-lift" asChild>
                <a 
                  href="https://cal.com/surya-teja-k" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Book a Chat
                </a>
              </Button>
            </div>
          </div>
          
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="glass-card p-6">
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="text-sm font-medium mb-1 block">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="XXXXXXXXXX"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="glass"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="text-sm font-medium mb-1 block">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="XXXXX@XXXXX.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="glass"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="text-sm font-medium mb-1 block">
                    Your Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="I'd like to discuss a project..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="glass min-h-32"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full glass-card hover-lift neon-border"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
