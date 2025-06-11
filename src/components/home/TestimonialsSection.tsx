import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Ayesha & Bilal',
    role: 'Couple',
    quote: 'From the mehndi glow to our walima, RS Media captured every heartfelt smile and vibrant detail. Our celebrations felt both traditional and stylish!',
    avatar: 'https://ui-avatars.com/api/?name=Ayesha+Bilal&background=ff6b6b&color=fff',
    rating: 5,
  },
  {
    id: 2,
    name: 'Sara & Hamza',
    role: 'Couple',
    quote: 'RS Media transformed our nikah décor into a magical setting. Everything felt so elegant and perfectly aligned with our vision!',
    avatar: 'https://ui-avatars.com/api/?name=Sara+Hamza&background=4ECDC4&color=fff',
    rating: 5,
  },
  {
    id: 3,
    name: 'Zainab & Farhan',
    role: 'Couple',
    quote: 'Even with last-minute changes, RS Media stayed calm and creative. The wedding looked effortlessly beautiful. We’re grateful for their magic!',
    avatar: 'https://ui-avatars.com/api/?name=Zainab+Farhan&background=556270&color=fff',
    rating: 5,
  },
];



const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            What Our <span className="gradient-text">Clients</span> Say
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Don't just take our word for it. Hear from our satisfied clients about their exceptional experiences with Elegant Events.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden">
            <motion.div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="min-w-full px-4"
                >
                  <div className="glass-card dark:glass-card-dark p-8 rounded-lg">
                    <div className="flex justify-center mb-6">
                      <Quote size={48} className="text-primary/30" />
                    </div>
                    <p className="text-lg text-center italic mb-8">
                      "{testimonial.quote}"
                    </p>
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 rounded-full overflow-hidden mb-4">
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h4 className="text-xl font-serif font-semibold">{testimonial.name}</h4>
                      <p className="text-gray-600 dark:text-gray-400 mb-3">{testimonial.role}</p>
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            fill={i < testimonial.rating ? "currentColor" : "none"}
                            className="w-5 h-5 text-yellow-500"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Navigation Arrows */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={prevSlide}
            className="absolute top-1/2 -left-4 md:-left-8  z-10 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 p-3 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          >
            <ChevronLeft size={20} />
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={nextSlide}
            className="absolute top-1/2 -right-4 md:-right-8 z-10 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 p-3 rounded-full shadow-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          >
            <ChevronRight size={20} />
          </motion.button>

          {/* Pagination Dots */}
          <div className="flex justify-center mt-8 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  activeIndex === index
                    ? 'bg-primary'
                    : 'bg-gray-300 dark:bg-gray-700'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;