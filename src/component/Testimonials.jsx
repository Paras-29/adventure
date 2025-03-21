import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  { 
    name: "Rohit Singh Jatav", 
    text: "Highly recommended for peaceful adventure! The guides were incredibly knowledgeable and the views were absolutely breathtaking. Can't wait for my next trip!",
    role: "Hiking Enthusiast",
    avatar: "/images/avatars/avatar-1.jpg",
    rating: 5
  },
  { 
    name: "Rahul Chauhan", 
    text: "Best adventure experience ever! Everything from the planning to execution was flawless. The team went above and beyond to ensure we had an unforgettable experience.",
    role: "Photography Traveler",
    avatar: "/images/avatars/avatar-2.jpg",
    rating: 5
  },
  { 
    name: "Parul Kumari", 
    text: "Loved the trip, will join again! The camping equipment was top-notch and the locations were secluded yet accessible. Perfect balance of adventure and comfort.",
    role: "Weekend Explorer",
    avatar: "/images/avatars/avatar-3.jpg",
    rating: 4
  },
  { 
    name: "Chandni", 
    text: "Highly recommended for adventure lovers! The wildlife safari exceeded all my expectations. We spotted rare species and the guides were exceptional at tracking animals.",
    role: "Nature Photographer",
    avatar: "/images/avatars/avatar-4.jpg",
    rating: 5
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } }
  };

  // Render stars based on rating
  const renderStars = (rating) => {
    return Array(5).fill(0).map((_, i) => (
      <svg 
        key={i} 
        className={`w-4 h-4 ${i < rating ? "text-red-500" : "text-gray-400"}`} 
        fill="currentColor" 
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.462a1 1 0 00.95-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background with subtle texture and gradient */}
      <div className="absolute inset-0 bg-black z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black opacity-90"></div>
        <div className="absolute inset-0 bg-[url('/images/texture.png')] bg-repeat opacity-5"></div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-600/5 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-500/5 rounded-full blur-[100px]"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 bg-red-500/10 text-red-400 text-sm font-medium rounded-full mb-3">
            TESTIMONIALS
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            What Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">Clients</span> Say
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-red-400 to-red-600 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-300 text-lg">
            Don't just take our word for it. Hear from adventurers who have experienced 
            our journeys and created memories that will last a lifetime.
          </p>
        </motion.div>

        {/* Desktop View: Grid Layout */}
        <motion.div 
          className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative h-full bg-gradient-to-b from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-xl overflow-hidden border border-white/5 hover:border-red-500/30 transition-all duration-500 p-6 flex flex-col"
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              {/* Quote icon */}
              <div className="absolute top-4 right-4 opacity-10 text-red-500 group-hover:opacity-20 transition-opacity">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M11.93,21.48c-5.46,0-9.91-4.45-9.91-9.91c0-5.46,4.45-9.91,9.91-9.91s9.91,4.45,9.91,9.91 C21.84,17.03,17.39,21.48,11.93,21.48z M6.55,15.34c0,0.53,0.43,0.96,0.96,0.96h1.04c0.53,0,0.96-0.43,0.96-0.96v-1.71 c0-0.53-0.43-0.96-0.96-0.96H7.5v-0.96c0-0.53,0.43-0.96,0.96-0.96h0.08c0.53,0,0.96-0.43,0.96-0.96V9.3 c0-0.53-0.43-0.96-0.96-0.96h-1.5c-0.53,0-0.96,0.43-0.96,0.96v2.67H6.55V15.34z M13.42,15.34c0,0.53,0.43,0.96,0.96,0.96h1.04 c0.53,0,0.96-0.43,0.96-0.96v-1.71c0-0.53-0.43-0.96-0.96-0.96h-1.04v-0.96c0-0.53,0.43-0.96,0.96-0.96h0.08 c0.53,0,0.96-0.43,0.96-0.96V9.3c0-0.53-0.43-0.96-0.96-0.96h-1.5c-0.53,0-0.96,0.43-0.96,0.96v2.67h-0.5V15.34z"></path>
                </svg>
              </div>
              
              {/* Rating */}
              <div className="flex mb-4">
                {renderStars(testimonial.rating)}
              </div>
              
              {/* Testimonial text */}
              <p className="text-gray-200 flex-grow mb-6 leading-relaxed">"{testimonial.text}"</p>
              
              {/* Avatar and name */}
              <div className="flex items-center mt-auto pt-4 border-t border-white/10">
                <div className="w-10 h-10 rounded-full overflow-hidden mr-3 bg-gray-700">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.src = `https://ui-avatars.com/api/?name=${testimonial.name.replace(" ", "+")}&background=777777&color=ffffff`;
                    }}
                  />
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-white">{testimonial.name}</h3>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Mobile View: Carousel */}
        <div className="md:hidden relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out" 
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="bg-gradient-to-b from-gray-800/50 to-gray-900/50 p-6 rounded-xl border border-white/5">
                    <div className="flex mb-4">
                      {renderStars(testimonial.rating)}
                    </div>
                    <p className="text-gray-200 mb-6">"{testimonial.text}"</p>
                    <div className="flex items-center pt-4 border-t border-white/10">
                      <div className="w-10 h-10 rounded-full overflow-hidden mr-3 bg-gray-700">
                        <img 
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.target.src = `https://ui-avatars.com/api/?name=${testimonial.name.replace(" ", "+")}&background=777777&color=ffffff`;
                          }}
                        />
                      </div>
                      <div>
                        <h3 className="font-semibold text-white">{testimonial.name}</h3>
                        <p className="text-sm text-gray-400">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === activeIndex ? "bg-red-500 w-6" : "bg-gray-500"
                }`}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
        </div>
        
        {/* Call to Action */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <a href="#" className="inline-flex items-center px-6 py-3 rounded-full border border-red-500 text-red-400 hover:bg-red-500 hover:text-white transition-all duration-300">
            <span>Read More Reviews</span>
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;