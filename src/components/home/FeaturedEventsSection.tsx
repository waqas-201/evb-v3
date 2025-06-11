import { useState, useRef, useCallback, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { ChevronRight, ChevronLeft, } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleModel } from '../../featuers/casestudy/caseStudySlice';
import { RootState } from '../../../store';
import { addEvent } from '../../featuers/casestudy/eventsDataSlice';

const events = [

  {
    id: 2,
    title: 'Dawlance Product Showcase',
    description: 'Dawlance Product Launch Product showcase and promotional activation for Dawlance appliances at a public expo',
    image: 'https://eo99bignn7.ufs.sh/f/YHwkBrGDMhpyJHMyyQuBaU9zbedcwR2EV6ps1lu0vCyIi5hQ',
    category: 'corporate',
    details: {
      date: 'November 10-12, 2022',
      location: 'Karachi Expo Center',
      attendees: 2500,
      duration: '3 days',
      challenges: [
        'Creating standout visibility among numerous competing brands',
        'Designing interactive displays for diverse appliance categories',
        'Managing high visitor traffic while maintaining quality engagements'
      ],
      solutions: [
        'Developed an eye-catching booth design with bold branding elements',
        'Created dedicated demo zones for each product category with trained staff',
        'Implemented a queuing system with digital engagement tools to manage flow'
      ],
      results: [
        'Generated over 800 qualified leads during the expo',
        'Achieved 85% brand recall in post-event surveys',
        'Successfully showcased 15+ new product models',
        'Increased social media engagement by 300% during event period'
      ]
    }
  },
  {
    id: 3,
    title: 'Accu-Chek Tech Summit',
    description: 'Tech Summit Islamabad Annual technology conference by Accu- Chek bringing together healthcare and tech professionals.',
    image: 'https://eo99bignn7.ufs.sh/f/YHwkBrGDMhpyrsWUW59HbkXOnKMNDzgyiFfAU8Ew4dou5qI6',
    category: 'corporate',
    details: {
      date: 'March 15-16, 2023',
      location: 'Islamabad Serena Hotel',
      attendees: 350,
      duration: '2 days',
      challenges: [
        'Coordinating schedules of high-profile healthcare professionals and speakers',
        'Creating a tech-forward atmosphere for a healthcare product',
        'Managing simultaneous sessions and interactive product demonstrations'
      ],
      solutions: [
        'Developed a detailed timeline with buffer periods for speaker coordination',
        'Designed a modern tech-inspired stage setup with digital displays',
        'Implemented a dedicated team for each session with clear communication channels'
      ],
      results: [
        'Successfully hosted 12 keynote speakers and 5 panel discussions',
        'Achieved 98% positive feedback from attendees on event organization',
        'Generated significant media coverage in healthcare and tech publications',
        'Strengthened Accu-Chek\'s position as an innovator in diabetes care technology'
      ]
    }
  },
  {
    id: 4,
    title: 'Leaders in Islamabad Business Summit 2024',
    description: 'Premier business forum bringing together leaders and innovators to discuss Pakistan’s future.',
    image: 'https://eo99bignn7.ufs.sh/f/YHwkBrGDMhpyysQKE6oB3z1WIT2JrNVES9pam5ejLR7PlCF4',
    category: 'business',
    details: {
      date: '2024',
      location: 'Serena Hotel, Islamabad',
      attendees: 500, // You can adjust this number if exact data is available
      duration: '2 days', // Adjust if known
      challenges: [
        'Coordinating high-profile speakers and VIP guests',
        'Ensuring seamless technical and AV execution',
        'Managing security for a high-stakes event'
      ],
      solutions: [
        'Handled all event production and speaker coordination end-to-end',
        'Provided stage design, branding, and full AV support including live broadcast',
        'Executed meticulous guest management and security logistics'
      ],
      results: [
        'Smooth and professional event delivery recognized by media and attendees',
        'Widespread media coverage across major national channels',
        'Strengthened the summit’s brand as a premier platform for policy and business dialogue in the region'
      ]
    }
  }
  ,
  {
    id: 5,
    title: 'Make-up City Product Launch',
    description: 'High-impact product launch event celebrating Make-up City’s milestone in the cosmetics industry.',
    image: 'https://eo99bignn7.ufs.sh/f/YHwkBrGDMhpyybL8kqoB3z1WIT2JrNVES9pam5ejLR7PlCF4',
    category: 'corporate',
    details: {
      date: '2024',
      location: 'Expo Center, Karachi',
      attendees: 1500, // Estimate; adjust if exact figure is available
      duration: '1 day',
      challenges: [
        'Designing a visually captivating booth setup within tight timelines',
        'Coordinating logistics for influencers, makeup artists, and product displays',
        'Ensuring seamless technical execution for demos and AV coverage'
      ],
      solutions: [
        'Delivered full event production and logistics management',
        'Set up an engaging, on-brand exhibition booth with interactive elements',
        'Handled AV and lighting installation tailored for live demos and social media sharing',
        'Facilitated coordination with influencers and beauty experts to enrich guest experience'
      ],
      results: [
        'Successfully launched Make-up City’s 48th store with a memorable brand experience',
        'Drew significant footfall and social media buzz through influencer participation',
        'Achieved high engagement and brand exposure across digital channels'
      ]
    }
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

  const dispatch = useDispatch()
  const state = useSelector((state: RootState) => state.caseStudyModel)
  console.log(state);

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

                      <button className='text-primary' onClick={() => { dispatch(toggleModel()); dispatch(addEvent(event)) }}>
                        View Case Study
                      </button>



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