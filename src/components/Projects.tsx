import cyberThreads from '@/assets/cyber-threads.png';
import sakuraFeeds from '@/assets/sakura-feeds.png';
import stayFinder from '@/assets/stay-finder.png';
import { ExternalLink, Github } from 'lucide-react';
import { useState } from 'react';

const Projects = () => {
  const [showAll, setShowAll] = useState(false);

  const projects = [
    {
      id: 1,
      title: "Sakura Feeds",
      description: "A Sakura-themed content-sharing web platform with a clean UI and smooth user flow. Built with modern web technologies for an elegant user experience.",
      image: sakuraFeeds,
      liveUrl: "https://sakura-feed.onrender.com/posts",
      githubUrl: "https://github.com/saifkodipad/sakura-feed.git",
      alt: "Sakura Feeds"
    },
    {
      id: 2,
      title: "Cyber Threads",
      description: "A lightweight full-stack social feed application where users can authenticate, create posts, view a live feed, and manage their content. Built to strengthen backend logic, authentication flow, and real-world CRUD operations with a clean, minimal UI.",
      image: cyberThreads,
      liveUrl: "https://cyber-thread-1.onrender.com/",
      githubUrl: "https://github.com/saifkodipad/cyber-thread.git",
      alt: "Cyber Threads"
    },
    {
      id: 3,
      title: "Stay Finder",
      description: "People can book their stays through this platform and also host their properties here.",
      image: stayFinder,
      liveUrl: "https://stayfinder-axni.onrender.com/",
      githubUrl: "https://github.com/saifkodipad/StayFinder",
      alt: "Stay Finder"
    }
  ];

  const displayedProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section id="projects" className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-3">Projects</h2>
          <p className="text-muted-foreground text-base">
            Featured work that showcases my skills.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-7xl mx-auto">
          {displayedProjects.map((project) => (
            <div 
              key={project.id} 
              className="sakura-card overflow-hidden hover:scale-[1.02] transition-transform duration-300 h-full flex flex-col rounded-lg"
            >
              <div className="aspect-video overflow-hidden bg-gray-100">
                <img
                  src={project.image}
                  alt={project.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4 flex-1 flex flex-col">
                <h3 className="text-xl font-display font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 flex-1 line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-3 mt-auto">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="sakura-btn flex items-center gap-2 text-foreground text-sm px-4 py-2"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-full font-medium border-2 border-sakura-medium text-foreground hover:bg-sakura-light transition-all duration-300 flex items-center gap-2 text-sm"
                  >
                    <Github size={16} />
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {projects.length > 3 && (
          <div className="text-center mt-8">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-6 py-2.5 rounded-full font-medium border-2 border-sakura-medium text-foreground hover:bg-sakura-light transition-all duration-300 inline-flex items-center gap-2 text-sm"
            >
              {showAll ? 'Show Less' : 'More Projects'}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;