import express from 'express';
import cors from 'cors';
import { WebSocketServer } from 'ws';
import { createServer } from 'http';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { aiRouter } from './routes/ai';
import { projectRouter } from './routes/projects';
import { uploadRouter } from './routes/upload';
import { handleWebSocketConnection } from './services/websocketService';

dotenv.config();

const app = express();
const server = createServer(app);
const wss = new WebSocketServer({ server });

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/ai', aiRouter);
app.use('/api/projects', projectRouter);
app.use('/api/files', uploadRouter);

// WebSocket
wss.on('connection', handleWebSocketConnection);

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI!)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});