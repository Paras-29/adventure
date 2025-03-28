import express from 'express';
import { generateTripSuggestion } from '../controllers/tripController.js';

const router = express.Router();

router.post('/generate-suggestion', generateTripSuggestion);

export default router;