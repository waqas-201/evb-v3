import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ChevronRight, Heart, Users, Trophy, Star } from 'lucide-react';
import { pageVariants } from '../lib/utils';

// const teamMembers = [
//   {
//     name: 'Fatima Khan',
//     role: 'Founder & Creative Director',
//     image: 'https://images.pexels.com/photos/7620808/pexels-photo-7620808.jpeg?auto=compress&cs=tinysrgb&w=400', // Pakistani woman in traditional shalwar kameez
//     bio: 'With over 15 years of experience in event planning, Fatima brings creativity and vision to every project.',
//   },
//   {
//     name: 'Ahmed Raza',
//     role: 'Senior Event Coordinator',
//     image: 'https://images.pexels.com/photos/7562313/pexels-photo-7562313.jpeg?auto=compress&cs=tinysrgb&w=400', // Pakistani man in formal attire
//     bio: 'Ahmed specializes in corporate events and has managed numerous high-profile conferences.',
//   },
//   {
//     name: 'Ayesha Malik',
//     role: 'Wedding Specialist',
//     image: 'https://images.pexels.com/photos/8531516/pexels-photo-8531516.jpeg?auto=compress&cs=tinysrgb&w=400', // Pakistani bride in traditional wedding attire
//     bio: 'Ayesha’s attention to detail and romantic vision has helped create countless dream weddings.',
//   },
//   {
//     name: 'Bilal Hassan',
//     role: 'Logistics Manager',
//     image: 'https://images.pexels.com/photos/7753581/pexels-photo-7753581.jpeg?auto=compress&cs=tinysrgb&w=400', // Pakistani man in professional setting
//     bio: 'Bilal ensures every event runs smoothly by managing vendors, timing, and resources efficiently.',
//   },
// ];
const stats = [
  { icon: Trophy, label: 'Years Experience', value: '15+' },
  { icon: Star, label: 'Events Completed', value: '1000+' },
  { icon: Heart, label: 'Happy Clients', value: '950+' },
  { icon: Users, label: 'Team Members', value: '25+' },
];

const AboutPage = () => {
  return (  
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
    >
      <Helmet>
        <title>*About Us – RS Media Solutions*
        </title>
        <meta name="description" content="At *RS Media Solutions*, we specialize in turning your ideas into exceptional realities through expert event planning and media services. Whether it’s a corporate conference, seminar, wedding, product launch, or private gathering, we are your one-stop solution for flawless execution and unforgettable experiences — both indoors and outdoors" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/50 z-10"></div>
          <img
            src="https://eo99bignn7.ufs.sh/f/YHwkBrGDMhpybQAjt7BPSqtXB8EIawYKxM72mkTzF0A9JhgC"
            alt="Team working together"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative">
          {/* Content */}
          <div className="container mx-auto px-6 sm:px-4 relative z-10 text-center py-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="px-4"
            >
              <h1 className="text-2xl md:text-5xl font-serif font-bold text-white mb-4">
                About <span className="text-primary">RS Media Solutions</span>
              </h1>
              <p className="text-sm md:text-xl text-white max-w-xs sm:max-w-sm md:max-w-2xl mx-auto leading-relaxed">
                At RS Media Solutions, we specialize in turning your ideas into exceptional realities through expert event planning and media services.
                {/* Whether it’s a corporate conference, seminar, wedding, product launch, or private gathering, we are your one-stop solution for flawless execution and unforgettable experiences — both indoors and outdoors. */}
              </p>
            </motion.div>
          </div>
        </div>

      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                Our <span className="gradient-text">Mission</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-lg mb-8">
                At RS Media Solutions, we believe that every occasion deserves to be extraordinary.
                Our mission is to transform your vision into reality, creating seamless and
                memorable experiences that exceed expectations.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="mb-4 flex justify-center">
                  <stat.icon size={40} className="text-primary" />
                </div>
                <h3 className="text-3xl font-bold mb-2">{stat.value}</h3>
                <p className="text-gray-600 dark:text-gray-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      {/* <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Meet Our <span className="gradient-text">Team</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
              Our experienced team of event professionals is dedicated to making your
              special moments truly unforgettable.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-serif font-bold mb-2">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                    {member.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-20 bg-white dark:bg-gray-950">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Ready to Create Something <span className="gradient-text">Special?</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              Let's work together to bring your event vision to life. Our team is ready
              to help you create an unforgettable experience.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-md text-lg font-medium transition-colors"
              >
                Get Started
                <ChevronRight size={20} />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default AboutPage;