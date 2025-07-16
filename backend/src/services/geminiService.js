import dotenv from "dotenv"; 
dotenv.config();
import { GoogleGenerativeAI } from "@google/generative-ai";

class GeminiService {
  constructor() {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
     console.error("❌ API Key is missing!");
}
this.genAI = new GoogleGenerativeAI(apiKey);
  }

  async generateTripSuggestion(tripDetails) {
    const model = this.genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    // ... existing code ...
    const prompt = `You are an AI Trip Planner. Please provide the trip plan in the following Markdown format with clear section headings:

# Destination Overview
- Brief introduction to the destination and why it suits the traveler type.

# Accommodation Options
- Recommend a range of accommodations matching the budget and traveler type.

# Activities and Experiences
- Curate a diverse itinerary with activities for all group members, including both paid and free experiences.

# Budget Breakdown
- Provide a detailed breakdown of estimated total trip costs and money-saving tips.

# Travel Logistics
- Transportation recommendations, best travel routes, visa requirements, local customs, and packing suggestions.

# Safety and Preparedness
- Health and safety recommendations, weather precautions, emergency contacts, and local healthcare resources.

Traveler Profile and Trip Parameters:
- Number of Travelers: ${tripDetails.totalPersons}
- Traveler Type: ${tripDetails.travelerType}
- Budget Range: ${tripDetails.budget}
- Desired Destination: ${tripDetails.location}
- Weather Preference: ${tripDetails.weather}
- Preferred Travel Mode: ${tripDetails.travelMode}
- Travel Dates: ${tripDetails.startDate} to ${tripDetails.endDate}

Please ensure each section is clearly separated with a heading and the content is concise, actionable, and easy to read.`;
// ... existing code ...

    try {
        const result = await model.generateContent([prompt]);
        const response = result.response;  // ✅ Extract response object
        const text = await response.text();  // ✅ Extract text properly
        return text;
    } catch (error) {
        console.error("Gemini API Error:", error);
        throw new Error("Failed to generate trip suggestion");
    }
}}

export default new GeminiService();