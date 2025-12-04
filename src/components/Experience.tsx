const experiences = [
  {
    title: 'Outreach Manager',
    company: 'Li2 Edu',
    dates: 'Apr 2025 – Oct 2025',
    description: 'Managed teams and outreach operations, maintaining active communication with customers and partners.',
  },
  {
    title: 'Associate Web Developer',
    company: 'Hexart.in',
    dates: 'Sep 2024 – Feb 2025',
    description: 'Worked on web development projects and conducted on-site seminars.',
  },
  {
    title: 'Teaching Assistant / Trainee',
    company: 'NxtWave',
    dates: 'Jul 2024 – Sep 2024',
    description: 'Solved doubts for learners and strengthened technical fundamentals.',
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Work Experience</h2>
          <p className="text-muted-foreground text-lg">
            My professional journey so far.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-sakura-medium/30 transform md:-translate-x-1/2"></div>

            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className={`relative flex items-start gap-8 mb-12 animate-fadeIn ${
                  idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                style={{ animationDelay: `${idx * 0.2}s` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 rounded-full bg-sakura-medium border-4 border-background transform md:-translate-x-1/2 z-10"></div>

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${idx % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <div className="sakura-card p-6 hover:scale-[1.02] transition-transform duration-300">
                    <span className="text-sm text-sakura-dark font-medium">{exp.dates}</span>
                    <h3 className="text-xl font-display font-bold mt-1">{exp.title}</h3>
                    <p className="text-muted-foreground font-medium">{exp.company}</p>
                    <p className="text-muted-foreground text-sm mt-3">{exp.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
