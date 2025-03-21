import React from 'react';
import { motion } from 'framer-motion';

const services = [
  { title: "Trips", desc: "Experience the best hiking trails with expert guides through breathtaking landscapes and scenic viewpoints.", images: "/images/trip.jpg", icon: "🥾" },
  { title: "Camping", desc: "Enjoy nature with premium camping experiences featuring comfortable setups and stunning locations.", images: "/images/camping.jpg", icon: "🏕️" },
  { title: "City Tours", desc: "Explore famous cities with knowledgeable local guides revealing hidden gems and cultural hotspots.", images: "/images/city.jpg", icon: "🏙️" },
  { title: "Wildlife Safari", desc: "Discover wildlife in their natural habitat with ethical encounters led by conservation experts.", images: "/images/wildlife.jpg", icon: "🦁" },
];

const Services = () => {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <section className="py-24 text-white relative overflow-hidden">
      {/* Background with subtle moving gradient */}
      <div className="absolute inset-0 bg-black z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-80"></div>
        <div className="absolute inset-0 bg-[url('/images/pattern-bg.png')] bg-repeat opacity-5"></div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-red-500/10 rounded-full blur-[100px]"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-red-600/10 rounded-full blur-[100px]"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 bg-red-500/10 text-red-400 text-sm font-medium rounded-full mb-3">
            OUR OFFERINGS
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">Adventure</span> Services
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-red-400 to-red-600 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-300 text-lg">
            Discover our carefully crafted experiences designed to create unforgettable moments
            and lifelong memories with safety and sustainability at their core.
          </p>
        </motion.div>
        
        {/* Services Grid */}
        <motion.div 
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={item}
              className="group relative h-[400px] bg-gradient-to-b from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden border border-white/5 hover:border-red-500/20 transition-all duration-500"
            >
              {/* Service Image with Overlay */}
              <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent z-10 group-hover:opacity-80 transition-opacity duration-500"></div>
                <img 
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  src={service.images} 
                  alt={service.title} 
                />
              </div>
              
              {/* Content */}
              <div className="relative z-10 h-full flex flex-col p-6 justify-end">
                <div className="mb-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                  <span className="flex items-center justify-center w-12 h-12 mb-4 bg-red-500/20 text-red-400 rounded-lg text-xl backdrop-blur-sm">
                    {service.icon}
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold mb-2 text-white group-hover:text-red-400 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 mb-4 transform opacity-80 group-hover:opacity-100 transition-all duration-300">
                  {service.desc}
                </p>
                
                <div className="transform translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <button className="inline-flex items-center text-red-400 hover:text-red-300 transition-colors duration-300">
                    <span>Explore More</span>
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Call to Action */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <button className="px-8 py-3 rounded-full bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold hover:shadow-lg hover:shadow-red-500/20 transition-all duration-300 transform hover:-translate-y-1">
            View All Services
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;