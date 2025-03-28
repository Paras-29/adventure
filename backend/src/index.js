import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import tripRoutes from './routes/tripRoutes.js';


const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/trips', tripRoutes);

// Connect to MongoDB (optional)
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.error('MongoDB Connection Error:', err));

// Start server
console.log("PORT:", process.env.PORT);
console.log("GEMINI_API_KEY:", process.env.GEMINI_API_KEY ? "✅ Exists" : "❌ Missing");
console.log("MONGODB_URI:", process.env.MONGODB_URI ? "✅ Exists" : "❌ Missing");

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

