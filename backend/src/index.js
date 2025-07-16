import express from 'express';
import cors from 'cors';
import tripRoutes from './routes/tripRoutes.js';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/trips', tripRoutes);

const PORT = process.env.PORT || 3000;
console.log("GEMINI_API_KEY:", process.env.GEMINI_API_KEY ? "✅ Exists" : "❌ Missing");
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);

}); 