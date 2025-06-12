import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Star, Quote } from 'lucide-react';
import { pageVariants } from '../lib/utils';
import LogoBanner, { CompanyCarousel } from '../components/ClientsLogosCrousle';


const testimonials = [
  {
    id: 1,
    name: 'Ahmed Khan',
    quote: 'RS Media Solution delivered an exceptional experience for our annual corporate event. Their attention to detail and professionalism was outstanding.',
    rating: 5,
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: 2,
    name: 'Fatima Ali',
    quote: 'The team\'s creativity and execution for our product launch event exceeded our expectations. They truly understand the Pakistani market.',
    rating: 5,
    image: 'https://images.pexels.com/photos/3796217/pexels-photo-3796217.jpeg?auto=compress&cs=tinysrgb&w=400'
  },
  {
    id: 3,
    name: 'Zain Ahmed',
    quote: 'From concept to execution, RS Media Solution brought our vision to life. Their team\'s dedication to excellence is unmatched.',
    rating: 5,
    image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400'
  }
];





const ClientsPage = () => {


  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
    >
      <Helmet>
        <title>Our Clients | RS Media Solution</title>
        <meta name="description" content="See the prestigious organizations we've worked with across Pakistan" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50 z-10"></div>
          <img
            src="https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Our clients"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our <span className="text-primary">Trusted</span> Partners
            </h1>
            <p className="text-xl text-white max-w-2xl mx-auto">
              Partnering with Pakistan's leading organizations to create exceptional experiences
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-primary/5 dark:bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Happy Clients', value: '100+' },
              { label: 'Events Completed', value: '500+' },
              { label: 'Cities Covered', value: '10+' },
              { label: 'Team Members', value: '50+' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md"
              >
                <h3 className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</h3>
                <p className="text-gray-800 dark:text-gray-200">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos Section */}
      <LogoBanner />

      {/* Client Testimonials */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              What Our <span className="text-primary">Clients</span> Say
            </h2>
            <p className="text-gray-800 dark:text-gray-200 max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied clients
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg"
              >
                <Quote className="text-primary w-12 h-12 mb-6 opacity-20" />
                <p className="text-gray-800 dark:text-gray-200 mb-8 italic">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-14 h-14 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white">{testimonial.name}</h4>

                  </div>
                </div>
                <div className="flex gap-1 mt-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 text-yellow-500"
                      fill="currentColor"
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default ClientsPage;


















