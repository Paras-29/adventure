import React from 'react';

const plans = [
  { title: "Basic", price: "$99", features: ["3-Day Trip", "Local Guide", "Basic Equipment"] },
  { title: "Standard", price: "$199", features: ["5-Day Trip", "Professional Guide", "All Equipment"] },
  { title: "Premium", price: "$399", features: ["7-Day Trip", "Luxury Stay", "Exclusive Destinations"] },
];

const Pricing = () => {
  return (
    <div className="py-12 bg-gray-50 bg-gradient-to-br from-gray-900 to-black">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-100 mb-4">Pricing Plans</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Choose the perfect plan for your adventure needs</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 ${
                index === 1 ? "border-2 border-blue-500 relative" : ""
              }`}
            >
              {index === 1 && (
                <div className="bg-blue-500 text-white text-xs font-bold uppercase py-1 px-4 absolute top-0 right-0">
                  Popular
                </div>
              )}
              <div className="p-6 border-b">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{plan.title}</h3>
                <div className="flex items-baseline">
                  <span className="text-4xl font-extrabold text-gray-900">{plan.price}</span>
                  <span className="ml-2 text-gray-500">/person</span>
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-6">
                <button 
                  className={`w-full py-3 px-4 rounded-lg font-medium text-center transition-colors duration-300 ${
                    index === 1 
                      ? "bg-blue-500 text-white hover:bg-blue-600" 
                      : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                  }`}
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;