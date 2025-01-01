export interface User {
  id: string;
  email: string;
  preferences: UserPreferences;
}

export interface UserPreferences {
  theme: 'light' | 'dark';
  editorFontSize: number;
  programmingLanguages: string[];
}

export interface AISuggestion {
  id: string;
  type: 'completion' | 'bug-fix' | 'refactor';
  content: string;
  explanation: string;
  confidence: number;
}

export interface CodeFile {
  id: string;
  name: string;
  content: string;
  language: string;
  aiSuggestions: AISuggestion[];
}