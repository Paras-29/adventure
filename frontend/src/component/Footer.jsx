import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-zinc-800 to-zinc-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Adventure Website</h3>
            <p className="text-zinc-400 mb-4">Discover the world's most thrilling destinations with our expert guides and premium adventure packages.</p>
            <div className="flex space-x-4 mt-4">
              <a href="https://www.instagram.com/parasgulvanshi/" target='_blank' className="text-pink-500 hover:text-pink-700 transition-colors" aria-label="Instagram">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a href="https://wa.me/917737977406" target='_blank' className="text-green-500 hover:text-green-600 transition-colors" aria-label="WhatsApp">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.52 3.48A12.07 12.07 0 0012 0C5.37 0 0 5.37 0 12a11.93 11.93 0 001.67 6.13L0 24l6.37-1.67A12.07 12.07 0 0012 24c6.63 0 12-5.37 12-12 0-3.21-1.25-6.23-3.48-8.52zM12 22a9.93 9.93 0 01-5.2-1.44l-.37-.22-3.78 1 1-3.67-.24-.38A9.93 9.93 0 012 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.2-7.8c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.41-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.34.42-.51.14-.17.18-.29.28-.48.09-.18.05-.36-.02-.5-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.61-.47-.16-.01-.35-.01-.54-.01-.19 0-.5.07-.76.34-.26.27-1 1-1 2.43s1.02 2.82 1.16 3.02c.14.2 2.01 3.07 4.88 4.19.68.29 1.21.46 1.62.59.68.22 1.3.19 1.79.12.55-.08 1.65-.67 1.88-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.18-.53-.32z" />
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-zinc-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#" className="text-zinc-400 hover:text-white transition-colors">Adventures</a></li>
              <li><a href="#" className="text-zinc-400 hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="text-zinc-400 hover:text-white transition-colors">About Us</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Popular Destinations</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-zinc-400 hover:text-white transition-colors">Mount Everest</a></li>
              <li><a href="#" className="text-zinc-400 hover:text-white transition-colors">Grand Canyon</a></li>
              <li><a href="#" className="text-zinc-400 hover:text-white transition-colors">Amazon Rainforest</a></li>
              <li><a href="#" className="text-zinc-400 hover:text-white transition-colors">Swiss Alps</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="flex flex-col space-y-2 text-zinc-300">
              <span className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-blue-400" fill="currentColor" viewBox="0 0 24 24"><path d="M21 8V7l-3 2.29V8a7 7 0 10-7 7h1.29L7 21h1l2.29-3H12a7 7 0 007-7v-.29L21 8z"/></svg>
                <span>info@adventuretravel.com</span>
              </span>
              <span className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-green-400" fill="currentColor" viewBox="0 0 24 24"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
                <span>+1 (555) 123-4567</span>
              </span>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-zinc-700 flex flex-col md:flex-row justify-between items-center">
          <p className="text-zinc-400 text-sm">© 2025 Adventure Website. All rights reserved.</p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6 text-sm">
              <li><a href="#" className="text-zinc-400 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-zinc-400 hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-zinc-400 hover:text-white transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;