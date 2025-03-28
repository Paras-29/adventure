import { Link } from "react-router-dom";

const Hero = () => {
    return (
      <header className="relative w-full h-screen ">
        {/* Background Video */}
        <div className="absolute top-0 h-screen w-full overflow-hidden">
          <video className="w-full h-full object-cover brightness-70" autoPlay loop muted playsInline>
            <source src="advideo.mp4" type="video/mp4" 
            loop
            autoPlay/>
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Hero Content */}
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <h1 className="text-2xl font-medium">Our Clients Are Our First Priority</h1>
          <h2 className="text-5xl font-bold mt-2">WELCOME TO Dream <span className="text-red-500">Adventure</span></h2>
          <p className="max-w-lg text-gray-300 leading-7 mt-4">
            Give us chance to make your trip memorable and enjoyable. We are here to help you.
            Discover the world's most thrilling destinations with our expert guides and premium adventure packages.
          </p>
          <div className="flex gap-4 mt-6">
            <Link to="/dashboard" className="bg-red-500 text-white px-6 py-2 rounded-xl text-lg font-semibold">Plan Trip</Link>
            <Link to="/contact" className="border border-white px-6 py-2 rounded-xl text-lg font-semibold">Contact Us</Link>
          </div>
        </div>
      </header>
    );
};

export default Hero;
