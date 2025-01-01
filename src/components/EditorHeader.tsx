interface EditorHeaderProps {
  fileName: string;
  language: string;
}

export function EditorHeader({ fileName, language }: EditorHeaderProps) {
  return (
    <div className="editor-header">
      <span className="file-name">{fileName}</span>
      <span className="language">{language}</span>
    </div>
  );
}