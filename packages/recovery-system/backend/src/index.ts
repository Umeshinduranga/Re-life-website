import dotenv from 'dotenv';
import express, { Request, Response } from 'express';
import cors from 'cors';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Basic route
app.get('/api/health', (req: Request, res: Response) => {
  res.json({ status: 'healthy', message: 'Re-Life Recovery System API' });
});

// TODO: Add your RAG endpoints here
// Example:
// app.post('/api/chat', async (req: Request, res: Response) => {
//   // RAG logic here
// });

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
