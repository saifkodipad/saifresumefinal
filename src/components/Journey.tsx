import journey1 from '@/assets/journey-1.jpg';
import journey2 from '@/assets/journey-2.jpg';
import journey3 from '@/assets/journey-3.png';
import sakuraFeeds from '@/assets/sakura-feeds.png';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useCallback, useEffect, useState } from 'react';

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
    caption: 'Building Sakura Feeds — my first Sakura-themed frontend project.',
  },
];

const Journey = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: 'center',
    skipSnaps: false,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback((index: number) => {
    if (emblaApi) emblaApi.scrollTo(index);
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section id="journey" className="py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">My Journey in Pictures</h2>
          <p className="text-muted-foreground text-lg">
            Moments that shaped my path.
          </p>
        </div>

        {/* Carousel */}
        <div className="relative max-w-5xl mx-auto">
          {/* Navigation Arrows */}
          <button
            onClick={scrollPrev}
            className="absolute left-0 md:-left-12 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-card border border-border hover:bg-sakura-light hover:border-sakura-medium transition-all duration-300 sakura-glow"
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} className="text-foreground" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-0 md:-right-12 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-card border border-border hover:bg-sakura-light hover:border-sakura-medium transition-all duration-300 sakura-glow"
            aria-label="Next slide"
          >
            <ChevronRight size={24} className="text-foreground" />
          </button>

          {/* Embla Viewport */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {journeyItems.map((item, idx) => (
                <div
                  key={idx}
                  className="flex-[0_0_85%] md:flex-[0_0_70%] min-w-0 px-4"
                >
                  <div 
                    className={`sakura-card overflow-hidden transition-all duration-500 ${
                      selectedIndex === idx 
                        ? 'scale-100 opacity-100' 
                        : 'scale-90 opacity-60'
                    }`}
                    style={{
                      boxShadow: selectedIndex === idx 
                        ? '0 0 40px hsl(350 100% 88% / 0.5)' 
                        : undefined
                    }}
                  >
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.caption}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                    <div className="p-4 text-center">
                      <p className="text-sm text-muted-foreground">{item.caption}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center gap-2 mt-8">
            {journeyItems.map((_, idx) => (
              <button
                key={idx}
                onClick={() => scrollTo(idx)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  selectedIndex === idx 
                    ? 'bg-sakura-dark w-8' 
                    : 'bg-sakura-medium/40 hover:bg-sakura-medium'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
