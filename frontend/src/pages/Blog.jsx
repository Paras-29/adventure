import React, { useState } from 'react';

const Blog = () => {
  // Sample blog posts data
  const blogPosts = [
    {
      id: 1,
      title: "Top 10 Hiking Trails You Must Experience",
      excerpt: "Discover the most breathtaking hiking trails around the world that offer unforgettable adventures and stunning views.",
      image: "friends.jpg",
      category: "Hiking",
      date: "March 15, 2025",
      author: "Emma Walker",
      authorImage: "/images/authors/emma.jpg",
      readTime: "6 min read",
      featured: true
    },
    {
      id: 2,
      title: "Essential Camping Gear for Your Next Outdoor Adventure",
      excerpt: "From tents to cooking equipment, we break down all the essential gear you need for a successful camping trip.",
      image: "mountain.jpg",
      category: "Camping",
      date: "March 10, 2025",
      author: "Jason Reynolds",
      authorImage: "/images/authors/jason.jpg",
      readTime: "5 min read",
      featured: false
    },
    {
      id: 3,
      title: "Safari Photography Tips: Capturing Wildlife in Their Natural Habitat",
      excerpt: "Professional photographers share their secrets to capturing stunning wildlife photos during your safari adventure.",
      image: "adventure.jpg",
      category: "Wildlife",
      date: "March 5, 2025",
      author: "Sophia Chen",
      authorImage: "/images/authors/sophia.jpg",
      readTime: "8 min read",
      featured: false
    },
    {
      id: 4,
      title: "The Ultimate Guide to Beach Camping",
      excerpt: "Everything you need to know about camping on beaches - from permits to tide tables and safety considerations.",
      image: "camping.jpg",
      category: "Camping",
      date: "February 28, 2025",
      author: "Marcus Johnson",
      authorImage: "/images/authors/marcus.jpg",
      readTime: "7 min read",
      featured: false
    },
    {
      id: 5,
      title: "Winter Survival Skills Every Adventure Enthusiast Should Know",
      excerpt: "Learn the essential skills for staying safe and comfortable during winter outdoor adventures.",
      image: "sky.jpg",
      category: "Survival",
      date: "February 20, 2025",
      author: "Alex Winters",
      authorImage: "/images/authors/alex.jpg",
      readTime: "9 min read",
      featured: false
    },
    {
      id: 6,
      title: "How to Plan Your First Solo Adventure Trip",
      excerpt: "A comprehensive guide for planning, preparing, and enjoying your first solo adventure safely.",
      image: "/images/trip.jpg",
      category: "Travel Tips",
      date: "February 15, 2025",
      author: "Maya Patel",
      authorImage: "/images/authors/maya.jpg",
      readTime: "6 min read",
      featured: false
    }
  ];

  // All available categories from the blog posts
  const allCategories = ["All", ...new Set(blogPosts.map(post => post.category))];
  
  // State for active category filter
  const [activeCategory, setActiveCategory] = useState("All");
  
  // Filter posts based on active category
  const filteredPosts = activeCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  // Featured post is the first one marked as featured
  const featuredPost = blogPosts.find(post => post.featured);

  return (
    <section className="py-20 relative bg-gradient-to-b from-gray-50 to-white">
      
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Page Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 to-blue-600">
            Adventure Blog
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Stories, tips, and insights from experienced adventurers around the world.
          </p>
        </div>

        {/* Featured Post */}
        {featuredPost && (
          <div className="mb-16">
            <div className="relative overflow-hidden rounded-xl shadow-lg group h-96">
              <div className="absolute inset-0 bg-black/50 z-10"></div>
              <img 
                src={featuredPost.image} 
                alt={featuredPost.title}
                className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 z-20 flex flex-col justify-end p-8">
                <span className="inline-block px-4 py-1 bg-emerald-500 text-white text-sm font-semibold rounded-full mb-4">
                  {featuredPost.category}
                </span>
                <h2 className="text-3xl font-bold text-white mb-4">{featuredPost.title}</h2>
                <p className="text-gray-200 mb-6 max-w-xl">{featuredPost.excerpt}</p>
                <div className="flex items-center">
                  <img 
                    src={featuredPost.authorImage} 
                    alt={featuredPost.author} 
                    className="w-10 h-10 rounded-full object-cover border-2 border-white mr-4"
                  />
                  <div>
                    <p className="text-white font-medium">{featuredPost.author}</p>
                    <p className="text-gray-300 text-sm">{featuredPost.date} · {featuredPost.readTime}</p>
                  </div>
                  <button className="ml-auto bg-white/20 hover:bg-white/30 text-white px-5 py-2 rounded-lg backdrop-blur-sm transition-all duration-300 border border-white/30">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* Category Filter */}
        <div className="mb-10 flex flex-wrap justify-center gap-2">
          {allCategories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 bg-white">
          {filteredPosts.map(post => (
            <article key={post.id} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
              <div className="relative overflow-hidden h-48">
                <img 
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-block px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6 flex-grow flex flex-col">
                <span className="text-gray-500 text-sm">{post.date} · {post.readTime}</span>
                <h3 className="text-xl font-bold text-gray-800 mt-2 mb-3">{post.title}</h3>
                <p className="text-gray-600 mb-4 flex-grow">{post.excerpt}</p>
                
                <div className="flex items-center mt-4">
                  <img 
                    src={post.authorImage}
                    alt={post.author}
                    className="w-8 h-8 rounded-full object-cover mr-3"
                  />
                  <span className="text-gray-700 font-medium text-sm">{post.author}</span>
                  
                  <button className="ml-auto text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center group">
                    Read More
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-4 w-4 ml-1 transform transition-transform duration-300 group-hover:translate-x-1" 
                      fill="none" 
                      viewBox="0 0 24 24" 
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
        
        {/* Newsletter Subscription */}
        <div className="mt-20 bg-gradient-to-r from-blue-600 to-emerald-500 rounded-xl p-8 md:p-12 shadow-lg">
          <div className="md:flex items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Stay Updated on Adventures</h2>
              <p className="text-white/80">Get our latest adventure stories and tips delivered straight to your inbox.</p>
            </div>
            
            <div className="flex flex-col sm:flex-row">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-5 py-3 rounded-lg mb-2 sm:mb-0 sm:mr-2 sm:rounded-r-none sm:rounded-l-lg focus:outline-none focus:ring-2 focus:ring-white/50 flex-grow"
              />
              <button className="bg-white text-blue-600 hover:bg-blue-50 font-medium px-5 py-3 rounded-lg sm:rounded-l-none sm:rounded-r-lg transition-colors duration-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        {/* Pagination */}
        <div className="mt-12 flex justify-center">
          <nav className="inline-flex bg-white rounded-lg shadow">
            <button className="px-4 py-2 text-gray-500 hover:text-blue-600 bg-white rounded-l-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </button>
            <button className="px-4 py-2 text-white bg-blue-600 font-medium">1</button>
            <button className="px-4 py-2 text-gray-700 hover:text-blue-600 bg-white">2</button>
            <button className="px-4 py-2 text-gray-700 hover:text-blue-600 bg-white">3</button>
            <button className="px-4 py-2 text-gray-500 hover:text-blue-600 bg-white rounded-r-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </button>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default Blog;