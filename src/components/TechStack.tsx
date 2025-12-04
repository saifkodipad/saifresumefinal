const technologies = [
  { name: 'HTML', icon: '🌐' },
  { name: 'CSS', icon: '🎨' },
  { name: 'JavaScript', icon: '⚡' },
  { name: 'React', icon: '⚛️' },
  { name: 'Node.js', icon: '🟢' },
  { name: 'Python', icon: '🐍' },
  { name: 'SQL', icon: '🗃️' },
  { name: 'MERN', icon: '📦' },
  { name: 'TailwindCSS', icon: '💨' },
  { name: 'Bootstrap', icon: '🅱️' },
  { name: 'GitHub', icon: '🐙' },
  { name: 'AWS', icon: '☁️' },
];

const TechStack = () => {
  return (
    <section id="tech" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Tech Stack</h2>
          <p className="text-muted-foreground text-lg">
            Technologies I work with to bring ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
          {technologies.map((tech, idx) => (
            <div
              key={tech.name}
              className="sakura-card p-6 flex flex-col items-center gap-3 hover:scale-110 hover:sakura-glow transition-all duration-300 cursor-default animate-fadeIn"
              style={{ animationDelay: `${idx * 0.05}s` }}
            >
              <span className="text-3xl">{tech.icon}</span>
              <span className="text-sm font-medium text-center">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
