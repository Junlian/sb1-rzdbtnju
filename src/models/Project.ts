import mongoose, { Schema } from 'mongoose';

const ProjectSchema = new Schema({
  name: { type: String, required: true },
  files: [{
    name: String,
    content: String,
    language: String,
    aiSuggestions: [{
      type: String,
      content: String,
      explanation: String,
      confidence: Number,
      createdAt: { type: Date, default: Date.now }
    }]
  }],
  createdAt: { type: Date, default: Date.now }
});

export const Project = mongoose.model('Project', ProjectSchema);