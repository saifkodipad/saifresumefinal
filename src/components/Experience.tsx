import hexartLogo from '@/assets/hexart-logo.png';
import li2Logo from '@/assets/li2-logo.png';
import nxtwaveLogo from '@/assets/nxtwave-logo.svg';

const experiences = [
  {
    title: 'Outreach Manager-Internship',
    company: 'Li2 Edu',
    logo: li2Logo,
    dates: 'Apr 2025 – Oct 2025',
    description: 'Established and managed partnerships with colleges, acting as the primary bridge between academic institutions and the company.',
  },
  {
    title: 'Web Developer-Internship',
    company: 'Hexart.in',
    logo: hexartLogo,
    dates: 'Sep 2024 – Feb 2025',
    description: 'Worked on web development projects while learning and applying the MERN stack.',
  },
  {
    title: 'Teaching Assistant / Trainee',
    company: 'NxtWave',
    logo: nxtwaveLogo,
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
                    {/* Company Logo */}
                    <div className={`mb-4 flex ${idx % 2 === 0 ? 'md:justify-end' : 'md:justify-start'} justify-center`}>
                      <div className="w-20 h-16 flex items-center justify-center rounded-lg bg-background p-2" style={{ boxShadow: '0 4px 20px hsl(350 100% 88% / 0.4)' }}>
                        <img
                          src={exp.logo}
                          alt={`${exp.company} logo`}
                          className="max-w-full max-h-full object-contain"
                        />
                      </div>
                    </div>
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
