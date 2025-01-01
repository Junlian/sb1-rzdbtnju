import React, { useState } from 'react';
import { UploadZone } from './UploadZone';
import { FilePreview } from './FilePreview';
import { UploadProgress } from './UploadProgress';
import { uploadFile } from '../../services/uploadService';

export function UploadTab() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [error, setError] = useState<string | null>(null);

  const handleFileSelect = (file: File) => {
    setSelectedFile(file);
    setError(null);
  };

  const handleUpload = async () => {
    if (!selectedFile) return;

    try {
      setUploadProgress(0);
      await uploadFile(selectedFile, (progress) => {
        setUploadProgress(progress);
      });
      
      // Reset after successful upload
      setSelectedFile(null);
      setUploadProgress(0);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Upload failed');
    }
  };

  return (
    <div className="upload-tab p-6">
      <h2 className="text-xl font-semibold mb-4">Upload Code File</h2>
      
      <UploadZone onFileSelect={handleFileSelect} />
      
      {selectedFile && (
        <>
          <FilePreview
            file={selectedFile}
            onClear={() => setSelectedFile(null)}
          />
          {uploadProgress > 0 && (
            <UploadProgress progress={uploadProgress} />
          )}
          <button
            onClick={handleUpload}
            className="w-full mt-4 bg-primary-500 text-white py-2 rounded-lg hover:bg-primary-600"
          >
            Upload File
          </button>
        </>
      )}
      
      {error && (
        <div className="mt-4 p-3 bg-red-500/10 border border-red-500 rounded-lg text-red-500">
          {error}
        </div>
      )}
    </div>
  );
}