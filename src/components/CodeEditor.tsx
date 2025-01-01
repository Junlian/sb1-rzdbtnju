import { useState } from 'react';
import { CodeFile } from '../types';
import { EditorHeader } from './EditorHeader';

interface CodeEditorProps {
  file: CodeFile;
  onCodeChange: (content: string) => void;
}

export function CodeEditor({ file, onCodeChange }: CodeEditorProps) {
  const [content, setContent] = useState(file.content);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newContent = e.target.value;
    setContent(newContent);
    onCodeChange(newContent);
  };

  return (
    <div className="code-editor">
      <EditorHeader fileName={file.name} language={file.language} />
      <textarea
        value={content}
        onChange={handleChange}
        className="editor-textarea"
        spellCheck={false}
      />
    </div>
  );
}