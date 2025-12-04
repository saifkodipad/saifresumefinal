import { ExternalLink, Github } from 'lucide-react';
import sakuraFeeds from '@/assets/sakura-feeds.png';

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Projects</h2>
          <p className="text-muted-foreground text-lg">
            Featured work that showcases my skills.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="sakura-card overflow-hidden hover:scale-[1.02] transition-transform duration-300">
            <div className="aspect-video overflow-hidden">
              <img
                src={sakuraFeeds}
                alt="Sakura Feeds"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-display font-bold mb-2">🌸 Sakura Feeds</h3>
              <p className="text-muted-foreground mb-6">
                A Sakura-themed content-sharing web platform with a clean UI and smooth user flow. Built with modern web technologies for an elegant user experience.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://sakura-feed.onrender.com/posts"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="sakura-btn flex items-center gap-2 text-foreground"
                >
                  <ExternalLink size={18} />
                  Live Demo
                </a>
                <a
                  href="https://github.com/skodipad-hue/sakura-feed"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full font-medium border-2 border-sakura-medium text-foreground hover:bg-sakura-light transition-all duration-300 flex items-center gap-2"
                >
                  <Github size={18} />
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
