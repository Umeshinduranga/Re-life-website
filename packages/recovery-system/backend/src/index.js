require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Basic route
app.get('/api/health', (req, res) => {
  res.json({ status: 'healthy', message: 'Re-Life Recovery System API' });
});

// TODO: Add your RAG endpoints here
// Example:
// app.post('/api/chat', async (req, res) => {
//   // RAG logic here
// });

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
