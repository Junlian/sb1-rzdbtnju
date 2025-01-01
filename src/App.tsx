import { useState } from 'react'
import { CodeEditor } from './components/CodeEditor'
import { AISuggestionsPanel } from './components/AISuggestionsPanel'
import { UploadTab } from './components/UploadTab'
import { ProfileIcon } from './components/profile/ProfileIcon'
import { AuthPage } from './pages/AuthPage'
import { useAuth } from './hooks/useAuth'
import { CodeFile, AISuggestion } from './types'
import './App.css'

export default function App() {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState<'editor' | 'upload'>('editor');
  const [currentFile, setCurrentFile] = useState<CodeFile>({
    id: '1',
    name: 'example.ts',
    content: '// Start coding here',
    language: 'typescript',
    aiSuggestions: []
  });

  const handleCodeChange = (content: string) => {
    setCurrentFile(prev => ({
      ...prev,
      content
    }));
  };

  const handleApplySuggestion = (suggestion: AISuggestion) => {
    setCurrentFile(prev => ({
      ...prev,
      content: suggestion.content
    }));
  };

  if (!user) {
    return <AuthPage />;
  }

  return (
    <div className="app-container">
      <header className="flex justify-between items-center p-4 border-b border-gray-700">
        <nav className="flex">
          <button
            className={`px-4 py-2 ${activeTab === 'editor' ? 'border-b-2 border-primary-500' : ''}`}
            onClick={() => setActiveTab('editor')}
          >
            Editor
          </button>
          <button
            className={`px-4 py-2 ${activeTab === 'upload' ? 'border-b-2 border-primary-500' : ''}`}
            onClick={() => setActiveTab('upload')}
          >
            Upload
          </button>
        </nav>
        <ProfileIcon />
      </header>

      <main className="workspace">
        {activeTab === 'editor' ? (
          <>
            <CodeEditor 
              file={currentFile}
              onCodeChange={handleCodeChange}
            />
            <AISuggestionsPanel
              suggestions={currentFile.aiSuggestions}
              onApplySuggestion={handleApplySuggestion}
            />
          </>
        ) : (
          <UploadTab />
        )}
      </main>
    </div>
  );
}