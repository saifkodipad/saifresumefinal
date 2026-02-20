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
      alt: "Sakura Feeds",
      showLiveDemo: true
    },
    {
      id: 2,
      title: "Cyber Threads",
      description: "A lightweight full-stack social feed application where users can authenticate, create posts, view a live feed, and manage their content. Built to strengthen backend logic, authentication flow, and real-world CRUD operations with a clean, minimal UI.",
      image: cyberThreads,
      liveUrl: "https://cyber-thread-1.onrender.com/",
      githubUrl: "https://github.com/saifkodipad/cyber-thread.git",
      alt: "Cyber Threads",
      showLiveDemo: false
    },
    {
      id: 3,
      title: "Stay Finder",
      description: "People can book their stays through this platform and also host their properties here.",
      image: stayFinder,
      liveUrl: "https://stayfinder-axni.onrender.com/",
      githubUrl: "https://github.com/saifkodipad/StayFinder",
      alt: "Stay Finder",
      showLiveDemo: true
    }
  ];

  const displayedProjects = showAll ? projects : projects.slice(0, 3);

  // Sakura Feeds HTML
  const sakuraFeedsHTML = (
    <div className="sakura-card overflow-hidden hover:scale-[1.02] transition-transform duration-300 h-full flex flex-col rounded-xl border border-sakura-light/20">
      <div className="h-36 overflow-hidden bg-gray-100">
        <img
          src={sakuraFeeds}
          alt="Sakura Feeds"
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-5 flex-1 flex flex-col">
        <h3 className="text-xl font-display font-bold mb-2">Sakura Feeds</h3>
        <p className="text-muted-foreground text-sm mb-4 flex-1 leading-relaxed">
          A Sakura-themed content-sharing web platform with a clean UI and smooth user flow. Built with modern web technologies for an elegant user experience.
        </p>
        <div className="flex flex-wrap gap-3 mt-auto">
          <a
            href="https://sakura-feed.onrender.com/posts"
            target="_blank"
            rel="noopener noreferrer"
            className="sakura-btn flex items-center gap-2 text-foreground text-sm px-4 py-2 rounded-full"
          >
            <ExternalLink size={16} />
            Live Demo
          </a>
          <a
            href="https://github.com/saifkodipad/sakura-feed.git"
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
  );

  // Cyber Threads HTML (without Live Demo)
  const cyberThreadsHTML = (
    <div className="sakura-card overflow-hidden hover:scale-[1.02] transition-transform duration-300 h-full flex flex-col rounded-xl border border-sakura-light/20">
      <div className="h-36 overflow-hidden bg-gray-100">
        <img
          src={cyberThreads}
          alt="Cyber Threads"
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-5 flex-1 flex flex-col">
        <h3 className="text-xl font-display font-bold mb-2">Cyber Threads</h3>
        <p className="text-muted-foreground text-sm mb-4 flex-1 leading-relaxed">
          A lightweight full-stack social feed application where users can authenticate, create posts, view a live feed, and manage their content. Built to strengthen backend logic, authentication flow, and real-world CRUD operations with a clean, minimal UI.
        </p>
        <div className="flex flex-wrap gap-3 mt-auto">
          <a
            href="https://github.com/saifkodipad/cyber-thread.git"
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
  );

  // Stay Finder HTML
  const stayFinderHTML = (
    <div className="sakura-card overflow-hidden hover:scale-[1.02] transition-transform duration-300 h-full flex flex-col rounded-xl border border-sakura-light/20">
      <div className="h-36 overflow-hidden bg-gray-100">
        <img
          src={stayFinder}
          alt="Stay Finder"
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-5 flex-1 flex flex-col">
        <h3 className="text-xl font-display font-bold mb-2">Stay Finder</h3>
        <p className="text-muted-foreground text-sm mb-4 flex-1 leading-relaxed">
        A full-stack double-sided marketplace where travelers can book unique stays and hosts can list their properties. Features secure authentication, host dashboards, admin controls, and real-time property management
        </p>
        <div className="flex flex-wrap gap-3 mt-auto">
          <a
            href="https://stayfinder-axni.onrender.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="sakura-btn flex items-center gap-2 text-foreground text-sm px-4 py-2 rounded-full"
          >
            <ExternalLink size={16} />
            Live Demo
          </a>
          <a
            href="https://github.com/saifkodipad/StayFinder"
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
  );

  return (
    <section id="projects" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-3">Projects</h2>
          <p className="text-muted-foreground text-base max-w-2xl mx-auto">
            Featured work that showcases my skills.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Sakura Feeds */}
          {sakuraFeedsHTML}

          {/* Cyber Threads */}
          {cyberThreadsHTML}

          {/* Stay Finder */}
          {stayFinderHTML}
        </div>

        {projects.length > 3 && (
          <div className="text-center mt-12">
            <button
              onClick={() => setShowAll(!showAll)}
              className="px-8 py-3 rounded-full font-medium border-2 border-sakura-medium text-foreground hover:bg-sakura-light transition-all duration-300 inline-flex items-center gap-2"
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