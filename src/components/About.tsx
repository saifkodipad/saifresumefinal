import { Code, Gamepad2, Coffee, Moon, Flame, Clock, Layers, Music } from 'lucide-react';

const aboutParagraphs = [
  "Hi there! I'm Saif, a passionate Full Stack Web Developer who believes in the power of clean code and thoughtful design. While I'm still early in my professional journey, I've poured countless hours into learning, building, and refining my craft.",
  "I consider myself a fast learner with a creative mind and an eye for detail. My journey into coding didn't start in a classroom—it began with pure curiosity. Late nights spent experimenting with web technologies, breaking things, fixing them, and that magical moment when something finally clicks. That's what pulled me deeper into development.",
  "What excites me is the balance between frontend and backend—creating smooth, intuitive user interfaces while also architecting solid, reliable logic behind the scenes. Building experiences that not only look good but also work efficiently is what motivates me to grow as a developer every day.",
  "When I'm not coding, you'll probably find me with a cup of coffee, exploring new concepts or trying out different technologies. I thrive during those quiet late-night sessions when the world is asleep and the code flows freely."
];

const whatIDo = [
  { icon: Code, label: 'Coding' },
  { icon: Gamepad2, label: 'Gaming' },
  { icon: Music, label: 'Basketball' },
  { icon: Coffee, label: 'Coffee' },
];

const achievements = [
  { icon: Flame, label: '500+ day coding streak' },
  { icon: Clock, label: '500+ hours coding' },
  { icon: Layers, label: 'Strong full-stack foundation' },
  { icon: Moon, label: 'Late-night deep work lover' },
];

const personalDetails = {
  age: '20',
  location: 'Hyderabad, Telangana',
  email: 'rahamansaif029@gmail.com',
  phone: '+91 9515719530',
};

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* About Text */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="space-y-6 text-muted-foreground text-base md:text-lg leading-relaxed">
            {aboutParagraphs.map((para, idx) => (
              <p key={idx} className="animate-fadeIn" style={{ animationDelay: `${idx * 0.1}s` }}>
                {para}
              </p>
            ))}
          </div>
        </div>

        {/* What I Do Cards */}
        <div className="mb-16">
          <h3 className="text-2xl font-display font-bold text-center mb-8">What I Do</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
            {whatIDo.map((item, idx) => (
              <div
                key={item.label}
                className="sakura-card p-6 flex flex-col items-center gap-3 hover:scale-105 transition-transform duration-300 animate-fadeIn"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <item.icon size={32} className="text-sakura-dark" />
                <span className="font-medium text-sm">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Personal Details */}
        <div className="mb-16">
          <div className="sakura-card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-display font-bold text-center mb-6">Personal Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <span className="text-muted-foreground">Age:</span>
                <span className="font-medium">{personalDetails.age}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-muted-foreground">Location:</span>
                <span className="font-medium">{personalDetails.location}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-muted-foreground">Email:</span>
                <span className="font-medium text-sm">{personalDetails.email}</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-muted-foreground">Phone:</span>
                <span className="font-medium">{personalDetails.phone}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div>
          <h3 className="text-2xl font-display font-bold text-center mb-8">Achievements</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {achievements.map((item, idx) => (
              <div
                key={item.label}
                className="sakura-card p-4 flex flex-col items-center gap-2 text-center hover:scale-105 transition-transform duration-300"
              >
                <item.icon size={28} className="text-sakura-dark" />
                <span className="text-sm font-medium">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
