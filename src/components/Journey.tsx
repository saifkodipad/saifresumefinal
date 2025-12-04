import journey1 from '@/assets/journey-1.jpg';
import journey2 from '@/assets/journey-2.jpg';
import journey3 from '@/assets/journey-3.png';
import sakuraFeeds from '@/assets/sakura-feeds.png';

const journeyItems = [
  {
    image: journey1,
    caption: 'Led a 14-day Generative AI workshop at Keystone School.',
  },
  {
    image: journey2,
    caption: 'Conducted a 7-day AI workshop at G. Narayanamma School.',
  },
  {
    image: journey3,
    caption: 'Students building their first project.',
  },
  {
    image: sakuraFeeds,
    caption: 'Building Sakura Feeds — my first Sakura-themed full-stack project.',
  },
];

const Journey = () => {
  return (
    <section id="journey" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">My Journey in Pictures</h2>
          <p className="text-muted-foreground text-lg">
            Moments that shaped my path.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {journeyItems.map((item, idx) => (
            <div
              key={idx}
              className="sakura-card overflow-hidden hover:scale-[1.03] transition-transform duration-300 animate-fadeIn"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={item.image}
                  alt={item.caption}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <p className="text-sm text-muted-foreground">{item.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journey;
