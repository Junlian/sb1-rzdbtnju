import { Request, Response } from 'express';
import { OpenAIService } from '../services/openaiService';

export class AIController {
  private openaiService: OpenAIService;

  constructor() {
    this.openaiService = new OpenAIService();
  }

  getCodeCompletion = async (req: Request, res: Response) => {
    try {
      const { code, language } = req.body;
      const completion = await this.openaiService.generateCompletion(code, language);
      res.json(completion);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  analyzeCode = async (req: Request, res: Response) => {
    try {
      const { code, language } = req.body;
      const analysis = await this.openaiService.analyzeCode(code, language);
      res.json(analysis);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  suggestImprovements = async (req: Request, res: Response) => {
    try {
      const { code, language } = req.body;
      const suggestions = await this.openaiService.suggestImprovements(code, language);
      res.json(suggestions);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
}