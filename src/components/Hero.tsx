import profileImage from '@/assets/profile.jpeg';
import { ArrowDown, FileDown, Github, Linkedin, Twitter } from 'lucide-react';

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 sakura-gradient"
    >
      <div className="container mx-auto px-6 py-16">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">

          {/* Profile Image */}
          <div className="mb-8 animate-fadeIn">
            <div className="relative">
              <div className="w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden sakura-glow float-animation">
                <img
                  src={profileImage}
                  alt="Saif Kodipad - Full Stack Developer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 rounded-full border-2 border-sakura-medium/30 animate-pulse"></div>
            </div>
          </div>

          {/* Main Heading */}
          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-4 animate-fadeIn"
            style={{ animationDelay: '0.1s' }}
          >
            Saif Kodipad | Full Stack Developer | MERN | Hyderabad
          </h1>

          {/* Tagline */}
          <p
            className="text-lg md:text-xl text-sakura-dark font-medium mb-8 animate-fadeIn"
            style={{ animationDelay: '0.2s' }}
          >
            Code. Play. Repeat.
          </p>

          {/* About */}
          <div
            className="text-muted-foreground text-base md:text-lg leading-relaxed mb-10 space-y-4 animate-fadeIn"
            style={{ animationDelay: '0.3s' }}
          >
            <p>
              Hi there! I'm Saif, a passionate Full Stack Web Developer who believes
              in the power of clean code and thoughtful design. While I'm still
              early in my professional journey, I've poured countless hours into
              learning, building, and refining my craft.
            </p>
          </div>

          {/* Buttons */}
          <div
            className="flex flex-wrap justify-center gap-4 mb-10 animate-fadeIn"
            style={{ animationDelay: '0.4s' }}
          >
            {/* ✅ FINAL RESUME LINK */}
            <a
              href="/Saif_Technical_Resume.pdf"
              download="Saif_Kodipad_Resume.pdf"
              className="sakura-btn flex items-center gap-2 text-foreground"
            >
              <FileDown size={20} />
              View Resume
            </a>

            <a
              href="#projects"
              className="px-6 py-3 rounded-full font-medium border-2 border-sakura-medium text-foreground hover:bg-sakura-light transition-all duration-300"
            >
              View Projects
            </a>
          </div>

          {/* Social Links */}
          <div
            className="flex items-center gap-6 animate-fadeIn"
            style={{ animationDelay: '0.5s' }}
          >
            <a
              href="https://github.com/saifkodipad"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card border border-border hover:border-sakura-medium hover:bg-sakura-light transition-all duration-300"
              aria-label="GitHub"
            >
              <Github size={24} className="text-foreground" />
            </a>

            <a
              href="https://www.linkedin.com/in/kodipad-saifur-rahaman-b1611927a"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card border border-border hover:border-sakura-medium hover:bg-sakura-light transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} className="text-foreground" />
            </a>

            <a
              href="https://x.com/saifbinkodipad"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card border border-border hover:border-sakura-medium hover:bg-sakura-light transition-all duration-300"
              aria-label="Twitter"
            >
              <Twitter size={24} className="text-foreground" />
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="mt-16 animate-bounce">
            <ArrowDown size={28} className="text-muted-foreground" />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
