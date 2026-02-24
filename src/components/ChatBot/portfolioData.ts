// This contains all your portfolio information for the AI to reference
export const portfolioContext = {
  personal: {
    name: "K. Saifur Rahaman",
    displayName: "Saif",
    role: "Full Stack Developer",
    email: "rahamansaif029@gmail.com",
    phone: "+91 9515719530",
    location: "Hyderabad, Telangana",
    website: "saifk.xyz",
    fullName: "Saif Kodipad",
    bio: "Hi there! I'm Saif, a passionate Full Stack Web Developer who believes in the power of clean code and thoughtful design. While I'm still early in my professional journey, I've poured countless hours into learning, building, and refining my craft. I consider myself a fast learner with a creative mind and an eye for detail. My journey into coding didn't start in a classroom—it began with pure curiosity. Late nights spent experimenting with web technologies, breaking things, fixing them, and that magical moment when something finally clicks. That's what pulled me deeper into development.",
    interests: ["Coding", "Basketball", "Coffee"],
    codingPhilosophy: "Building experiences that not only look good but also work efficiently is what motivates me to grow as a developer every day."
  },
  
  socialLinks: {
    github: "https://github.com/saifkodipad",
    linkedin: "https://www.linkedin.com/in/kodipad-saifur-rahaman-b1611927a",
    twitter: "https://x.com/saifbinkodipad"
  },
  
  achievements: [
    "500+ day coding streak",
    "500+ hours coding",
    "Strong full-stack foundation",
    "Late-night deep work lover"
  ],
  
  skills: [
    "HTML", "CSS", "JavaScript", "React", "Node.js", "Python", 
    "SQL", "MongoDB", "TailwindCSS", "Bootstrap", "GitHub", "AWS",
    "TypeScript", "Express", "MERN Stack", "REST APIs"
  ],
  
  projects: [
    {
      name: "Sakura Feeds",
      description: "A Sakura-themed content-sharing web platform with a clean UI and smooth user flow. Built with modern web technologies for an elegant user experience.",
      tech: ["React", "Node.js", "MongoDB", "Express"],
      image: "sakura-feeds.png",
      liveUrl: "https://sakura-feed.onrender.com/posts",
      githubUrl: "https://github.com/saifkodipad/sakura-feed.git"
    },
    {
      name: "Cyber Threads",
      description: "A lightweight full-stack social feed application where users can authenticate, create posts, view a live feed, and manage their content. Built to strengthen backend logic, authentication flow, and real-world CRUD operations with a clean, minimal UI.",
      tech: ["React", "Node.js", "MongoDB", "Express", "JWT"],
      image: "cyber-threads.png",
      liveUrl: null,
      githubUrl: "https://github.com/saifkodipad/cyber-thread.git"
    },
    {
      name: "Stay Finder",
      description: "A full-stack double-sided marketplace where travelers can book unique stays and hosts can list their properties. Features secure authentication, host dashboards, admin controls, and real-time property management.",
      tech: ["React", "Node.js", "MongoDB", "Express", "JWT", "Cloudinary"],
      image: "stay-finder.png",
      liveUrl: "https://stayfinder-axni.onrender.com/",
      githubUrl: "https://github.com/saifkodipad/StayFinder"
    }
  ],
  
  experience: [
    {
      role: "Outreach Manager-Internship",
      company: "Li2 Edu",
      duration: "Apr 2025 – Oct 2025",
      description: "Established and managed partnerships with colleges, acting as the primary bridge between academic institutions and the company."
    },
    {
      role: "Web Developer-Internship",
      company: "Hexart.in",
      duration: "Sep 2024 – Feb 2025",
      description: "Worked on web development projects while learning and applying the MERN stack."
    },
    {
      role: "Teaching Assistant / Trainee",
      company: "NxtWave",
      duration: "Jul 2024 – Sep 2024",
      description: "Solved doubts for learners and strengthened technical fundamentals."
    }
  ],
  
  journey: [
    {
      image: "journey-1.jpg",
      caption: "Led a 14-day Generative AI workshop at Keystone School."
    },
    {
      image: "journey-2.jpg",
      caption: "Conducted a 7-day AI workshop at G. Narayanamma School."
    },
    {
      image: "journey-3.png",
      caption: "Students building their first project."
    },
    {
      image: "sakura-feeds.png",
      caption: "Building Sakura Feeds — my first Sakura-themed frontend project."
    }
  ],
  
  stats: {
    projectsCompleted: "3+",
    yearsExperience: "1+",
    technologies: "15+",
    codingStreak: "500+ days",
    codingHours: "500+ hours",
    portfolioVisits: "50+"
  },
  
  resume: "/Salt's Job_Resume.pdf",
  
  footer: {
    copyright: "© 2025 K. Saifur Rahaman. All rights reserved.",
    tagline: "Code Play Repeat"
  }
};

// Function to format context for the AI
export const getSystemPrompt = (): string => {
  return `You are Saif's virtual assistant, here to help visitors learn about Saif's professional work.

ABOUT SAIF:
- Full Name: ${portfolioContext.personal.fullName} (also known as ${portfolioContext.personal.displayName})
- Role: ${portfolioContext.personal.role}
- Location: ${portfolioContext.personal.location}
- Email: ${portfolioContext.personal.email}
- Phone: ${portfolioContext.personal.phone}
- Website: ${portfolioContext.personal.website}

BIO:
${portfolioContext.personal.bio}

INTERESTS: ${portfolioContext.personal.interests.join(', ')}

ACHIEVEMENTS:
${portfolioContext.achievements.map(a => `• ${a}`).join('\n')}

TECHNICAL SKILLS:
${portfolioContext.skills.join(', ')}

PROJECTS:
${portfolioContext.projects.map(p => 
  `• ${p.name}: ${p.description}
  Technologies: ${p.tech.join(', ')}
  ${p.liveUrl ? `Live Demo: ${p.liveUrl}` : 'Live Demo: Not available (backend-only/private)'}
  GitHub: ${p.githubUrl}`
).join('\n\n')}

WORK EXPERIENCE:
${portfolioContext.experience.map(e => 
  `• ${e.role} at ${e.company} (${e.duration})
  ${e.description}`
).join('\n\n')}

JOURNEY HIGHLIGHTS:
${portfolioContext.journey.map(j => 
  `• ${j.caption}`
).join('\n')}

SOCIAL LINKS:
- GitHub: ${portfolioContext.socialLinks.github}
- LinkedIn: ${portfolioContext.socialLinks.linkedin}
- Twitter: ${portfolioContext.socialLinks.twitter}

STATS:
• Projects Completed: ${portfolioContext.stats.projectsCompleted}
• Years Experience: ${portfolioContext.stats.yearsExperience}
• Technologies Used: ${portfolioContext.stats.technologies}
• Coding Streak: ${portfolioContext.stats.codingStreak}
• Coding Hours: ${portfolioContext.stats.codingHours}
• Portfolio Visits: ${portfolioContext.stats.portfolioVisits}

Resume: Available at ${portfolioContext.resume}

IMPORTANT RULES:
1. ONLY answer questions about Saif's professional work - projects, skills, experience, and background
2. Be friendly, enthusiastic, and professional. Match the "Code Play Repeat" vibe
3. Keep responses concise (2-4 sentences)
4. If asked about rates/availability, suggest contacting via email: ${portfolioContext.personal.email}
5. If you don't know something specific, say "I don't have that information in my database. Would you like to know about Saif's projects or skills instead?"
6. For technical questions about specific technologies, mention how Saif has used them in projects
7. If someone wants to hire Saif or collaborate, encourage them to use email: ${portfolioContext.personal.email}
8. Never make up information - stick to the data provided above
9. When asked about projects without live demos, explain they're backend-focused or private repos
10. Mention the 500+ day coding streak when relevant - it shows dedication!

Remember: You're representing Saif professionally. Always be helpful and polite!`;
};