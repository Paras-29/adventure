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

    const prompt = `Comprehensive AI Trip Planner Prompt
Traveler Profile and Trip Parameters

Number of Travelers: ${tripDetails.totalPersons}
Traveler Type: ${tripDetails.travelerType}
Budget Range: ${tripDetails.budget}
Desired Destination: ${tripDetails.location}
Weather Preference: ${tripDetails.weather}
Preferred Travel Mode: ${tripDetails.travelMode}
Travel Dates: ${tripDetails.startDate} to ${tripDetails.endDate}

\`\`\`
Detailed Recommendation Guidelines:
1. Destination Overview

Provide a captivating introduction to the destination
Highlight unique cultural, geographical, and experiential aspects
Explain why this location is perfect for the specific traveler type
\`\`\`
\`\`\`
2. Tailored Accommodation Options

Recommend a range of accommodations matching the budget
Include options for different traveler types (family-friendly, couple's retreat, solo traveler hostels)
Provide insights on location, amenities, and approximate costs
Suggest best areas to stay based on traveler's interests
\`\`\`
\`\`\`
3. Curated Activity and Experience Suggestions

Create a diverse itinerary with activities for all group members
Balance between relaxation, adventure, cultural experiences, and local interactions
Consider the traveler type and group dynamics
Provide time estimates and difficulty levels for activities
Include both paid and free experiences
\`\`\`
\`\`\`
4. Budget-Conscious Travel Strategies

Detailed breakdown of estimated total trip costs
Money-saving tips specific to the destination
Recommendations for affordable dining, transportation, and activities
Suggestions for maximizing value within the specified budget range
\`\`\`
\`\`\`
5. Practical Travel Logistics

Transportation recommendations (local transit, car rentals, guided tours)
Best travel routes and connections
Visa and entry requirements
Local customs and etiquette tips
Essential packing suggestions based on destination and travel dates
\`\`\`
\`\`\`
6. Safety and Preparedness

Health and safety recommendations
Weather-related precautions
Emergency contact information
Local healthcare and support resources
\`\`\`
\`\`\`
Additional Considerations:

Ensure recommendations are personalized and specific
Provide actionable, realistic, and exciting suggestions
Maintain a balance between structured planning and spontaneous exploration
Adapt recommendations to the specific weather and travel mode preferences
\`\`\`
\`\`\`
Final Tone and Style:

Enthusiastic and inspiring
Conversational yet informative
Encouraging of unique, memorable travel experiences`;

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