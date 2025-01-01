import OpenAI from 'openai';

export class OpenAIService {
  private openai: OpenAI;

  constructor() {
    this.openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY
    });
  }

  async generateCompletion(code: string, language: string) {
    const completion = await this.openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: `You are an expert ${language} developer. Provide code completion suggestions.`
        },
        {
          role: "user",
          content: code
        }
      ]
    });

    return completion.choices[0].message;
  }

  async analyzeCode(code: string, language: string) {
    const analysis = await this.openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: "Analyze the code for potential issues and improvements."
        },
        {
          role: "user",
          content: `Language: ${language}\nCode: ${code}`
        }
      ]
    });

    return analysis.choices[0].message;
  }

  async suggestImprovements(code: string, language: string) {
    const suggestions = await this.openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: "Suggest code improvements and best practices."
        },
        {
          role: "user",
          content: `Language: ${language}\nCode: ${code}`
        }
      ]
    });

    return suggestions.choices[0].message;
  }
}