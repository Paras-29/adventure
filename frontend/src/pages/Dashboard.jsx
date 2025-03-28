import { useState } from "react";
import { Calendar, Map, PlaneLanding, Users, DollarSign, Thermometer, Compass } from "lucide-react";
import axios from 'axios'

const Dashboard = () => {
  const [tripDetails, setTripDetails] = useState({
    totalPersons: "",
    travelerType: "",
    budget: "",
    location: "",
    weather: "",
    travelMode: "",
    startDate: "",
    endDate: "",
  });
  const [suggestion, setSuggestion] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setTripDetails({ ...tripDetails, [e.target.name]: e.target.value });
  };

  const handlePlanTrip = async () => {
    setIsLoading(true);
    
    try {
      const response = await axios.post('https://adventure-1-7gs5.onrender.com', tripDetails);
      setSuggestion(response.data.data);
    } catch (error) {
      console.error('Trip generation error:', error);
      setSuggestion('Failed to generate trip suggestion');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden bg-black">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-80"></div>
        <div className="absolute inset-0 bg-[url('/images/pattern-bg.png')] bg-repeat opacity-5"></div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-red-500/10 rounded-full blur-[100px]"></div>
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-red-600/10 rounded-full blur-[100px]"></div>
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center p-6 w-full">
        <div className="w-full max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-5xl font-bold mb-2 text-white bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">AI Trip Planner</h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Discover your perfect destination with our AI-powered trip recommendations
            </p>
          </div>
          
          {/* Main content */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Form */}
            <div className="lg:col-span-2 bg-gray-900 bg-opacity-80 backdrop-blur-sm rounded-xl shadow-xl overflow-hidden border border-gray-800">
              <div className="p-6">
                <h2 className="text-xl font-semibold text-white mb-4 flex items-center">
                  <Compass className="mr-2 h-5 w-5 text-blue-400" />
                  Trip Preferences
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Total Persons */}
                  <div>
                    <label className="block text-gray-300 font-medium mb-1 text-sm flex items-center">
                      <Users className="mr-2 h-4 w-4 text-blue-400" />
                      Number of Travelers
                    </label>
                    <input
                      type="number"
                      name="totalPersons"
                      value={tripDetails.totalPersons}
                      onChange={handleChange}
                      className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition-all"
                      placeholder="How many travelers?"
                    />
                  </div>
                
                  {/* Traveler Type */}
                  <div>
                    <label className="block text-gray-300 font-medium mb-1 text-sm">Traveler Type</label>
                    <select
                      name="travelerType"
                      value={tripDetails.travelerType}
                      onChange={handleChange}
                      className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition-all"
                    >
                      <option value="">Select type</option>
                      <option value="Friends">Friends</option>
                      <option value="Family">Family</option>
                      <option value="Couple">Couple</option>
                      <option value="Solo">Solo</option>
                    </select>
                  </div>
                
                  {/* Budget */}
                  <div>
                    <label className="block text-gray-300 font-medium mb-1 text-sm flex items-center">
                      <DollarSign className="mr-2 h-4 w-4 text-blue-400" />
                      Budget
                    </label>
                    <input
                      type="text"
                      name="budget"
                      value={tripDetails.budget}
                      onChange={handleChange}
                      className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition-all"
                      placeholder="What's your budget?"
                    />
                  </div>
                
                  {/* Location */}
                  <div>
                    <label className="block text-gray-300 font-medium mb-1 text-sm flex items-center">
                      <Map className="mr-2 h-4 w-4 text-blue-400" />
                      Destination
                    </label>
                    <input
                      type="text"
                      name="location"
                      value={tripDetails.location}
                      onChange={handleChange}
                      className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition-all"
                      placeholder="Where do you want to go?"
                    />
                  </div>
                
                  {/* Date Range */}
                  <div>
                    <label className="block text-gray-300 font-medium mb-1 text-sm flex items-center">
                      <Calendar className="mr-2 h-4 w-4 text-blue-400" />
                      Start Date
                    </label>
                    <input
                      type="date"
                      name="startDate"
                      value={tripDetails.startDate}
                      onChange={handleChange}
                      className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition-all"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-300 font-medium mb-1 text-sm flex items-center">
                      <Calendar className="mr-2 h-4 w-4 text-blue-400" />
                      End Date
                    </label>
                    <input
                      type="date"
                      name="endDate"
                      value={tripDetails.endDate}
                      onChange={handleChange}
                      className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition-all"
                    />
                  </div>
                
                  {/* Weather Preference */}
                  <div>
                    <label className="block text-gray-300 font-medium mb-1 text-sm flex items-center">
                      <Thermometer className="mr-2 h-4 w-4 text-blue-400" />
                      Weather Preference
                    </label>
                    <select
                      name="weather"
                      value={tripDetails.weather}
                      onChange={handleChange}
                      className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition-all"
                    >
                      <option value="">Select preference</option>
                      <option value="Sunny">Sunny</option>
                      <option value="Cold">Cold</option>
                      <option value="Rainy">Rainy</option>
                      <option value="Tropical">Tropical</option>
                      <option value="Mild">Mild</option>
                    </select>
                  </div>
                
                  {/* Travel Mode */}
                  <div>
                    <label className="block text-gray-300 font-medium mb-1 text-sm flex items-center">
                      <PlaneLanding className="mr-2 h-4 w-4 text-blue-400" />
                      Travel Mode
                    </label>
                    <select
                      name="travelMode"
                      value={tripDetails.travelMode}
                      onChange={handleChange}
                      className="w-full p-3 rounded-lg bg-gray-800 border border-gray-700 text-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition-all"
                    >
                      <option value="">Select mode</option>
                      <option value="Flight">Flight</option>
                      <option value="Train">Train</option>
                      <option value="Bus">Bus</option>
                      <option value="Cruise">Cruise</option>
                      <option value="Road Trip">Road Trip</option>
                    </select>
                  </div>
                </div>
                
                {/* Submit Button */}
                <button
                  className="mt-6 w-full bg-gradient-to-r from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 text-white px-6 py-3 rounded-lg text-sm font-semibold transition-all duration-300 flex items-center justify-center"
                  onClick={handlePlanTrip}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Generating Recommendations...
                    </>
                  ) : (
                    "Get AI Trip Suggestions"
                  )}
                </button>
              </div>
            </div>
            
            {/* Results Panel */}
            <div className="bg-gray-900 bg-opacity-80 backdrop-blur-sm rounded-xl shadow-xl border border-gray-800 flex flex-col w-[450px]">
              <div className="p-6 flex-1 overflow-auto max-h-[600px]">
                <h2 className="text-xl font-semibold text-white mb-4">Trip Recommendation</h2>
                
                {suggestion ? (
                  <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                    <h3 className="text-lg font-medium text-red-400 mb-2">Your Perfect Trip</h3>
                    <p className="text-gray-300 leading-relaxed">{suggestion}</p>
                    
                    {/* Image placeholder */}
                    <div className="mt-4 rounded-lg overflow-hidden">
                      <img src="/api/placeholder/400/200" alt="Destination preview" className="w-full h-auto" />
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center h-full text-center p-6">
                    <div className="rounded-full bg-gray-800 p-4 mb-4">
                      <Compass className="h-8 w-8 text-red-400" />
                    </div>
                    <p className="text-gray-400">Fill in your preferences and click the button to get personalized AI trip recommendations.</p>
                  </div>
                )}
              </div>
              
              <div className="bg-gray-800 bg-opacity-50 p-4 mt-auto">
                <p className="text-xs text-gray-400 text-center">Our AI analyzes thousands of destinations to find your perfect match based on your preferences.</p>
              </div>
            </div>
          </div>
          
          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            <div className="bg-gray-900 bg-opacity-70 backdrop-blur-sm p-4 rounded-lg border border-gray-800">
              <div className="rounded-full bg-red-500 bg-opacity-20 p-2 w-10 h-10 flex items-center justify-center mb-3">
                <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
              </div>
              <h3 className="text-white font-medium mb-1">Fast Recommendations</h3>
              <p className="text-gray-400 text-sm">Get AI-powered trip suggestions in seconds based on your preferences.</p>
            </div>
            
            <div className="bg-gray-900 bg-opacity-70 backdrop-blur-sm p-4 rounded-lg border border-gray-800">
              <div className="rounded-full bg-red-500 bg-opacity-20 p-2 w-10 h-10 flex items-center justify-center mb-3">
                <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path></svg>
              </div>
              <h3 className="text-white font-medium mb-1">Personalized Itineraries</h3>
              <p className="text-gray-400 text-sm">Create custom travel plans tailored to your specific needs and interests.</p>
            </div>
            
            <div className="bg-gray-900 bg-opacity-70 backdrop-blur-sm p-4 rounded-lg border border-gray-800">
              <div className="rounded-full bg-red-500 bg-opacity-20 p-2 w-10 h-10 flex items-center justify-center mb-3">
                <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
              </div>
              <h3 className="text-white font-medium mb-1">Budget-Friendly Options</h3>
              <p className="text-gray-400 text-sm">Find the perfect destination that fits your budget without compromising on experience.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
