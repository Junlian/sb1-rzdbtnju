import { ALLOWED_EXTENSIONS } from './fileUtils';

// MIME type mapping for file upload
export const MIME_TYPES: Record<string, string[]> = {
  'text/x-java': ['.java'],
  'text/x-go': ['.go'],
  'text/x-c++': ['.cpp'],
  'text/x-python': ['.py'],
  'text/x-swift': ['.swift']
} as const;

export function getMimeTypes(): Record<string, string[]> {
  return MIME_TYPES;
}