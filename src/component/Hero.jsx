const Hero = () => {
    return (
      <header className="relative w-full h-screen ">
        {/* Background Video */}

        <div className=" absolute top-0  h-screen w-full overflow-hidden">
        <video
          className=" w-full h-full object-cover brightness-70"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="advideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        </div>
        
  
        {/* Overlay (Dark Layer for Visibility) */}
    
  
        {/* Hero Content */}
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <h1 className="text-2xl font-medium">Our Clients Are Our First Priority</h1>
          <h2 className="text-5xl font-bold mt-2">WELCOME TO Dream <span className="text-red-500">Adventure</span></h2>
          <p className="max-w-lg text-gray-300 leading-7 mt-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit rerum quam dolores obcaecati saepe quas, explicabo nemo quibusdam voluptas sit.
          </p>
          <div className="flex gap-4 mt-6">
            <a href="#" className="bg-red-500 text-white px-6 py-3 rounded-md text-sm font-semibold">GET STARTED NOW</a>
            <a href="#" className="border border-white px-6 py-3 rounded-md text-sm font-semibold">LEARN MORE</a>
          </div>
        </div>
      </header>
    );
  };
  
  export default Hero;
  