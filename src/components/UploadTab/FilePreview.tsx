import React from 'react';
import { getLanguageFromExtension } from '../../utils/fileUtils';

interface FilePreviewProps {
  file: File;
  onClear: () => void;
}

export function FilePreview({ file, onClear }: FilePreviewProps) {
  const language = getLanguageFromExtension(file.name);

  return (
    <div className="file-preview bg-surface p-4 rounded-lg mt-4">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="font-medium">{file.name}</h3>
          <p className="text-sm text-gray-400">
            {language} • {(file.size / 1024).toFixed(1)} KB
          </p>
        </div>
        <button
          onClick={onClear}
          className="text-gray-400 hover:text-gray-200"
        >
          Clear
        </button>
      </div>
    </div>
  );
}