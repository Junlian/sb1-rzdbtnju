// Constants
export const ALLOWED_EXTENSIONS = ['.java', '.go', '.cpp', '.py', '.swift'] as const;

// Types
export type AllowedExtension = typeof ALLOWED_EXTENSIONS[number];
export type ProgrammingLanguage = 'Java' | 'Go' | 'C++' | 'Python' | 'Swift';

// Pure functions
export function getFileExtension(filename: string): string {
  const lastDotIndex = filename.lastIndexOf('.');
  return lastDotIndex === -1 ? '' : filename.slice(lastDotIndex).toLowerCase();
}

export function isAllowedExtension(extension: string): extension is AllowedExtension {
  return ALLOWED_EXTENSIONS.includes(extension as AllowedExtension);
}

export function validateFileExtension(filename: string): boolean {
  const extension = getFileExtension(filename);
  return isAllowedExtension(extension);
}

// Language mapping
const LANGUAGE_MAP: Record<AllowedExtension, ProgrammingLanguage> = {
  '.java': 'Java',
  '.go': 'Go',
  '.cpp': 'C++',
  '.py': 'Python',
  '.swift': 'Swift'
};

export function getLanguageFromExtension(filename: string): ProgrammingLanguage | 'Unknown' {
  const extension = getFileExtension(filename);
  return isAllowedExtension(extension) ? LANGUAGE_MAP[extension] : 'Unknown';
}