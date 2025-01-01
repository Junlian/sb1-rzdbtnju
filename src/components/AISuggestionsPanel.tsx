import { AISuggestion } from '../types';
import { SuggestionItem } from './SuggestionItem';

interface AISuggestionsPanelProps {
  suggestions: AISuggestion[];
  onApplySuggestion: (suggestion: AISuggestion) => void;
}

export function AISuggestionsPanel({ suggestions, onApplySuggestion }: AISuggestionsPanelProps) {
  return (
    <div className="ai-suggestions-panel">
      <h2>AI Suggestions</h2>
      <div className="suggestions-list">
        {suggestions.map((suggestion) => (
          <SuggestionItem
            key={suggestion.id}
            suggestion={suggestion}
            onApply={onApplySuggestion}
          />
        ))}
      </div>
    </div>
  );
}