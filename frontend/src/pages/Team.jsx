import React, { useState } from "react";

const teamMembers = [
  {
    name: "RSJ",
    role: "Lead Explorer",
    bio: "Specializes in charting unexplored territories with over 10 years of expedition experience.",
    image: "RSJ.jpg",
  },
  {
    name: "Paras Gulvanshi",
    role: "Adventure Guide",
    bio: "Expert in wilderness navigation and creating unique journey experiences for all skill levels.",
    image: "Rahul.jpg",
  },
  {
    name: "Parul Kumari",
    role: "Survival Expert",
    bio: "Trained in extreme environment survival techniques and emergency response protocols.",
    image: "Parul.jpg",
  },
  {
    name: "Chandni Upadhyay",
    role: "Wildlife Specialist",
    bio: "Passionate about animal conservation with extensive knowledge of global ecosystems.",
    image: "Chandani.jpg",
  },
];

const Team = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="bg-gradient-to-b from-gray-900 to-gray-800 text-white py-24 px-6 overflow-hidden relative">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-red-500 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-red-700 blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <h2 className="inline-block text-sm font-bold tracking-wider uppercase text-red-400 mb-2">
          The Experts
        </h2>
        <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-red-400 via-red-500 to-red-600">
          Meet Our Team
        </h1>
        <p className="text-gray-300 max-w-2xl mx-auto text-lg mb-16">
          Our dedicated adventurers are passionate about exploring the unknown and guiding you to thrilling experiences.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-6 max-w-6xl mx-auto">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="group relative"
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
          >
            <div
              className={`bg-gray-800 rounded-xl overflow-hidden shadow-xl transition-all duration-500 ease-out
                ${
                  activeIndex === index
                    ? "scale-105 shadow-red-200/20"
                    : "hover:shadow-red-200/10"
                }`}
            >
              <div className="h-64 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60 z-10"></div>
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 p-6 z-20">
                  <h3 className="text-2xl text-red-400 font-bold ">{member.name}</h3>
                  <div className="flex items-center mt-1">
                    <span className="h-px w-10 bg-red-400 mr-3"></span>
                    <p className="text-blue-700 font-medium">{member.role}</p>
                  </div>
                </div>
              </div>

              <div
                className={`p-6 transition-all duration-500 ease-out h-auto opacity-100 ${
                  activeIndex === index
                    ? "max-h-40"
                    : "max-h-0 opacity-0 md:opacity-100 md:max-h-40"
                }`}
              >
                <p className="text-gray-300 text-sm leading-relaxed">{member.bio}</p>
                <button className="mt-4 inline-flex items-center text-blue-700 text-lg font-medium group">
                  Connect
                  <svg
                    className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;
