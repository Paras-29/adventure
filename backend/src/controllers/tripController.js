import asyncHandler from 'express-async-handler';
import GeminiService from '../services/geminiService.js';

export const generateTripSuggestion = asyncHandler(async (req, res) => {
  const tripDetails = req.body;

  try {
    const suggestion = await GeminiService.generateTripSuggestion(tripDetails);
    
    res.status(200).json({
      success: true,
      data: suggestion
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
});