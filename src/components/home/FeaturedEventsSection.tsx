import { useState, useRef, useCallback, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const events = [
  {
    id: 1,
    title: 'CEO Summit Asia 2022',
    description: 'Spectacular opening ceremony of Pakistan Super League at National Stadium Karachi',
    image: 'https://eo99bignn7.ufs.sh/f/YHwkBrGDMhpyBkGjIFE8OQ4V570p6EXahRmwylvNzYkUrcLn',
    category: 'corporate',
  },
  {
    id: 2,
    title: 'Dawlance Product Showcase',
    description: 'Dawlance Product Launch Product showcase and promotional activation for Dawlance appliances at a public expo',
    image: 'https://eo99bignn7.ufs.sh/f/YHwkBrGDMhpyJHMyyQuBaU9zbedcwR2EV6ps1lu0vCyIi5hQ',
    category: 'corporate',
  },
  {
    id: 3,
    title: 'Accu-Chek Tech Summit',
    description: 'Tech Summit Islamabad Annual technology conference by Accu- Chek bringing together healthcare and tech professionals.',
    image: 'https://eo99bignn7.ufs.sh/f/YHwkBrGDMhpyrsWUW59HbkXOnKMNDzgyiFfAU8Ew4dou5qI6',
    category: 'festival',
  },
  {
    id: 4,
    title: 'Pakistan Day Parade',
    description: 'Grand celebration of Pakistan Day with military parade',
    image: 'https://eo99bignn7.ufs.sh/f/YHwkBrGDMhpyysQKE6oB3z1WIT2JrNVES9pam5ejLR7PlCF4',
    category: 'national',
  },
  {
    id: 5,
    title: 'Corporate Gala Night',
    description: "Elegant corporate event with premium networking opportunities",
    image: "https://eo99bignn7.ufs.sh/f/YHwkBrGDMhpyybL8kqoB3z1WIT2JrNVES9pam5ejLR7PlCF4",
    category: 'corporate'
  }
];

const FeaturedEventsSection = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);
  const containerRef = useRef(null);
  const emblaRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.2 });

  const updateScrollButtons = useCallback(() => {
    setCanScrollPrev(selectedIndex > 0);
    setCanScrollNext(selectedIndex < events.length - 1);
  }, [selectedIndex]);

  useEffect(() => {
    updateScrollButtons();
  }, [selectedIndex, updateScrollButtons]);

  const scrollPrev = useCallback(() => {
    if (canScrollPrev) {
      setSelectedIndex(prev => prev - 1);
    }
  }, [canScrollPrev]);

  const scrollNext = useCallback(() => {
    if (canScrollNext) {
      setSelectedIndex(prev => prev + 1);
    }
  }, [canScrollNext]);

  const scrollTo = useCallback((index: number) => {
    setSelectedIndex(index);
  }, []);

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900" ref={containerRef}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            <span className="gradient-text">Featured</span> Events
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Explore our portfolio of stunning events we've had the pleasure of bringing to life.
            Each event is carefully crafted to exceed expectations.
          </p>
        </motion.div>

        <div className="relative">
          {/* Embla Viewport */}
          <div className="overflow-hidden" ref={emblaRef}>
            {/* Embla Container */}
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translate3d(-${selectedIndex * 100}%, 0, 0)`,
                backfaceVisibility: 'hidden'
              }}
            >
              {events.map((event, index) => (
                <div
                  key={event.id}
                  className="flex-none w-full px-4"
                  style={{ minWidth: 0 }}
                >
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={selectedIndex === index ? { opacity: 1, scale: 1 } : { opacity: 0.8, scale: 0.95 }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="rounded-lg overflow-hidden shadow-lg">
                        <img
                          src={event.image}
                          alt={event.title}
                          className="w-full h-[300px] md:h-[400px] object-cover hover:scale-105
                           transition-transform duration-500"
                          loading={Math.abs(index - selectedIndex) <= 1 ? "eager" : "lazy"}
                        />
                      </div>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: 50 }}
                      animate={selectedIndex === index ? { opacity: 1, x: 0 } : { opacity: 0.8, x: 20 }}
                      transition={{ duration: 0.5, delay: 0.1 }}
                      className="flex flex-col justify-center"
                    >
                      <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4 w-fit">
                        {event.category.charAt(0).toUpperCase() + event.category.slice(1)}
                      </span>
                      <h3 className="text-2xl md:text-3xl font-serif font-bold mb-3">
                        {event.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-6">
                        {event.description}
                      </p>
                      <Link
                        to="/portfolio"
                        className="inline-flex items-center text-primary hover:text-primary/80 font-medium transition-colors w-fit"
                      >
                        View Case Study
                        <ChevronRight size={18} className="ml-1" />
                      </Link>
                    </motion.div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <motion.button
            whileHover={{ scale: canScrollPrev ? 1.1 : 1 }}
            whileTap={{ scale: canScrollPrev ? 0.9 : 1 }}
            onClick={scrollPrev}
            disabled={!canScrollPrev}
            className={`absolute top-1/2 left-4 -translate-y-1/2 z-10 p-3 rounded-full shadow-md transition-all duration-200 ${canScrollPrev
              ? 'bg-white/90 dark:bg-gray-800/90 text-gray-700 dark:text-gray-200 hover:bg-white dark:hover:bg-gray-800 cursor-pointer'
              : 'bg-gray-200/50 dark:bg-gray-700/50 text-gray-400 dark:text-gray-600 cursor-not-allowed'
              }`}
          >
            <ChevronLeft size={20} />
          </motion.button>

          <motion.button
            whileHover={{ scale: canScrollNext ? 1.1 : 1 }}
            whileTap={{ scale: canScrollNext ? 0.9 : 1 }}
            onClick={scrollNext}
            disabled={!canScrollNext}
            className={`absolute top-1/2 right-4 -translate-y-1/2 z-10 p-3 rounded-full shadow-md transition-all duration-200 ${canScrollNext
              ? 'bg-white/90 dark:bg-gray-800/90 text-gray-700 dark:text-gray-200 hover:bg-white dark:hover:bg-gray-800 cursor-pointer'
              : 'bg-gray-200/50 dark:bg-gray-700/50 text-gray-400 dark:text-gray-600 cursor-not-allowed'
              }`}
          >
            <ChevronRight size={20} />
          </motion.button>

          {/* Dot Indicators */}
          <div className="flex justify-center mt-8 gap-2">
            {events.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 hover:scale-110 ${selectedIndex === index
                  ? 'bg-primary shadow-md'
                  : 'bg-gray-300 dark:bg-gray-700 hover:bg-gray-400 dark:hover:bg-gray-600'
                  }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Progress Indicator */}
          <div className="mt-4 flex justify-center">
            <div className="w-32 h-1 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
              <div
                className="h-full bg-primary transition-all duration-500 ease-out"
                style={{ width: `${((selectedIndex + 1) / events.length) * 100}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedEventsSection;