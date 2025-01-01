import { AISuggestion } from '../types';

interface SuggestionItemProps {
  suggestion: AISuggestion;
  onApply: (suggestion: AISuggestion) => void;
}

export function SuggestionItem({ suggestion, onApply }: SuggestionItemProps) {
  return (
    <div className="suggestion-item">
      <div className="suggestion-header">
        <span className="suggestion-type">{suggestion.type}</span>
        <span className="confidence">{suggestion.confidence}% confidence</span>
      </div>
      <pre className="suggestion-content">{suggestion.content}</pre>
      <p className="suggestion-explanation">{suggestion.explanation}</p>
      <button onClick={() => onApply(suggestion)}>
        Apply Suggestion
      </button>
    </div>
  );
}