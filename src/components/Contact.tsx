import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Copy } from 'lucide-react';
import { toast } from 'sonner';

const Contact = () => {
  const copyEmail = () => {
    navigator.clipboard.writeText('rahamansaif029@gmail.com');
    toast.success('Email copied to clipboard!');
  };

  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Get in Touch</h2>
          <p className="text-muted-foreground text-lg">
            Let's connect and create something amazing.
          </p>
        </div>

        <div className="max-w-xl mx-auto">
          <div className="sakura-card p-8">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-sakura-light">
                  <Mail size={24} className="text-sakura-dark" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-medium">rahamansaif029@gmail.com</p>
                </div>
                <button
                  onClick={copyEmail}
                  className="p-2 rounded-full hover:bg-sakura-light transition-colors"
                  aria-label="Copy email"
                >
                  <Copy size={20} className="text-muted-foreground" />
                </button>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-sakura-light">
                  <Phone size={24} className="text-sakura-dark" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="font-medium">+91 9515719530</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-sakura-light">
                  <MapPin size={24} className="text-sakura-dark" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-medium">Hyderabad, Telangana</p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground text-center mb-4">Connect with me</p>
              <div className="flex justify-center gap-4">
                <a
                  href="https://github.com/skodipad-hue"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-sakura-light hover:bg-sakura-medium transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={24} className="text-foreground" />
                </a>
                <a
                  href="https://linkedin.com/in/saifur-rahaman"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-sakura-light hover:bg-sakura-medium transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={24} className="text-foreground" />
                </a>
                <a
                  href="https://twitter.com/saifur"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-sakura-light hover:bg-sakura-medium transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter size={24} className="text-foreground" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
