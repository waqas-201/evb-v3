import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';

import { pageVariants } from '../lib/utils';

const portfolioItems = [
  {
    id: 1,
    title: 'PRIME Conference on Cardiac Solutions',
    category: 'Corporate awareness event',
    image: 'https://eo99bignn7.ufs.sh/f/YHwkBrGDMhpy6OaLXPwiTEmRHz7cS4lDZvN5sduCx9UrjMPY',
  },
  {
    id: 2,
    title: 'Private Event',
    category: 'Private Event',
    image: 'https://eo99bignn7.ufs.sh/f/YHwkBrGDMhpyROtfqQ4FpmWTJ7CDMZ8nXkqOBdrjywYilAa2',
  },
  {
    id: 3,
    title: 'The Scent Station by Shower Scents',
    category: 'Brand Activations',
    image: 'https://eo99bignn7.ufs.sh/f/YHwkBrGDMhpykfGHhMqVWG0tMax2PdQjH9lqDFmp46RJgw7s',
  },
  {
    id: 4,
    title: 'Beach Party',
    category: 'Experiential Marketing',
    image: 'https://eo99bignn7.ufs.sh/f/YHwkBrGDMhpy4tg6TRvHpeGBTS8LAwacr7nJdRF0viUjWquy',
  },

  {
    id: 5,
    title: 'Student Award Ceremon',
    category: 'Award Ceremony',
    image: 'https://eo99bignn7.ufs.sh/f/YHwkBrGDMhpyefYoeoMj2ZybAWxUqmN4BLMhFIGu9H8cPzEf',
  },
];

const PortfolioPage = () => {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
    >
      <Helmet>
        <title>Portfolio | RS Media Solution</title>
        <meta name="description" content="Explore our portfolio of successfully executed events across Pakistan" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/50 z-10"></div>
          <img
            src="https://eo99bignn7.ufs.sh/f/YHwkBrGDMhpyyDhAkRoB3z1WIT2JrNVES9pam5ejLR7PlCF4"
            alt="Portfolio showcase"
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
              Our <span className="text-secondary">Portfolio</span>
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Showcasing our finest work across Pakistan's most prestigious events
            </p>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {portfolioItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="relative aspect-video">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                    <div>
                      <span className="text-secondary text-sm font-medium mb-2 block">
                        {item.category}
                      </span>
                      <h3 className="text-white text-xl font-bold">{item.title}</h3>
                    </div>
                  </div>
                </div>

              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default PortfolioPage;