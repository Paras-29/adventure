import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  // Animation variants
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };
  
  const staggerChildren = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section className="relative bg-black text-white overflow-hidden min-h-screen">
      {/* Dynamic background with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/90 z-10"></div>
        <video 
          autoPlay 
          muted 
          loop 
          className="absolute w-full h-full object-cover"
        >
          <source src="advideo2.mp4" type="video/mp4" className='brightness-30'/>
          {/* Fallback image if video isn't available */}
          <img 
            src="ballon.jpg" 
            alt="Adventure Background"
            className="absolute w-full h-full object-cover"
          />
        </video>
      </div>

      {/* Hero Section */}
      <motion.div 
        initial="initial"
        animate="animate"
        className="relative z-10 pt-24 px-6 max-w-7xl mx-auto"
      >
        <motion.div 
          variants={fadeIn}
          className="flex flex-col md:flex-row items-center gap-12"
        >
          {/* Left Content */}
          <div className="md:w-1/2 text-center md:text-left">
            <motion.div variants={fadeIn} className="inline-block mb-4 py-1 px-3 bg-red-600/20 rounded-full">
              <span className="text-red-500 font-medium tracking-wider text-sm">DISCOVER THE EXTRAORDINARY</span>
            </motion.div>
            
            <motion.h1 
              variants={fadeIn}
              className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
            >
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">AdventureX</span>
            </motion.h1>
            
            <motion.div variants={fadeIn} className="w-20 h-1 bg-gradient-to-r from-red-500 to-red-700 mb-6 md:mx-0 mx-auto"></motion.div>
            
            <motion.p 
              variants={fadeIn}
              className="text-lg text-gray-300 leading-relaxed mb-8"
            >
              Welcome to <span className="text-red-500 font-semibold">AdventureX</span>, your gateway to thrilling experiences. 
              We specialize in creating immersive adventures that challenge your limits and expand your horizons.
              Our expertly crafted experiences blend excitement with safety, ensuring memories that last a lifetime.
            </motion.p>
            
            <motion.button 
              variants={fadeIn}
              className="px-8 py-3 rounded-full bg-gradient-to-r from-red-500 to-red-700 text-white font-semibold hover:shadow-lg hover:shadow-red-500/20 transition-all duration-300 transform hover:-translate-y-1"
            >
              Discover More
            </motion.button>
          </div>
          
          {/* Right Content - Featured Image */}
          <motion.div 
            variants={fadeIn}
            className="md:w-1/2 relative"
          >
            <div className="relative rounded-2xl overflow-hidden group h-96">
              <img
                src="ballon.jpg"
                alt="Adventure Experiences"
                className="w-full h-full object-cover rounded-2xl transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
              
              <div className="absolute bottom-6 left-6 right-6">
                <span className="inline-block px-3 py-1 bg-red-600 text-white text-sm font-medium rounded-full mb-2">Featured</span>
                <h3 className="text-xl font-bold">Mountain Exploration</h3>
                <p className="text-gray-300 text-sm">Conquer peaks with expert guides</p>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-red-500 to-red-700 rounded-full blur-3xl opacity-30"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full blur-3xl opacity-20"></div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Why Choose Us Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="relative z-10 max-w-7xl mx-auto mt-32 px-6"
      >
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="px-4 py-1 bg-red-600/10 rounded-full text-red-500 text-sm font-medium"
          >
            WHY CHOOSE US
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl font-bold mt-4 mb-6"
          >
            Elevate Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">Adventure</span> Experience
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "80px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="h-1 bg-gradient-to-r from-red-500 to-red-700 mx-auto"
          ></motion.div>
        </div>
        
        <motion.div 
          variants={staggerChildren}
          initial="initial"
          animate="animate"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {[
            {
              icon: "🧭",
              title: "Expert Guides",
              description: "Certified adventure experts ensuring safety and extraordinary experiences."
            },
            {
              icon: "🏔️",
              title: "Unique Destinations",
              description: "Exclusive access to breathtaking locations off the beaten path."
            },
            {
              icon: "🌱",
              title: "Eco-Conscious",
              description: "Sustainable adventures that preserve natural environments."
            },
            {
              icon: "⚙️",
              title: "Tailored Journeys",
              description: "Customized packages designed around your preferences."
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              className="bg-white/5 backdrop-blur-lg rounded-xl p-6 hover:bg-white/10 transition-all duration-300 border border-white/10 group hover:border-red-500/30"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-red-500/20 to-red-700/20 rounded-lg flex items-center justify-center mb-4 group-hover:from-red-500/30 group-hover:to-red-700/30 transition-all duration-300">
                <span className="text-2xl">{feature.icon}</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Call To Action */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="relative z-10 text-center mt-32 mb-24 px-6"
      >
        <div className="max-w-3xl mx-auto py-16 px-8 rounded-2xl bg-gradient-to-b from-white/5 to-white/[0.02] backdrop-blur-lg border border-white/10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">Embark</span> on a Journey?</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">Join thousands of adventurers who have transformed their lives through our extraordinary experiences.</p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 rounded-full bg-gradient-to-r from-red-500 to-red-700 text-white font-semibold hover:shadow-lg hover:shadow-red-500/20 transition-all duration-300 transform hover:-translate-y-1">
              Explore Packages
            </button>
            <button className="px-8 py-3 rounded-full bg-white/10 border border-white/20 backdrop-blur-lg hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1">
              Contact Us
            </button>
          </div>
        </div>
        
        {/* Decorative element */}
        <div className="absolute -bottom-40 left-1/2 transform -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-br from-red-500/5 to-red-700/5 rounded-full blur-3xl opacity-30 z-0"></div>
      </motion.div>
    </section>
  );
};

export default About;