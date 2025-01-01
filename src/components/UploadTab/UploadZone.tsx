import React, { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import { ALLOWED_EXTENSIONS } from '../../utils/fileUtils';
import { getMimeTypes } from '../../utils/mimeTypes';

interface UploadZoneProps {
  onFileSelect: (file: File) => void;
}

export function UploadZone({ onFileSelect }: UploadZoneProps) {
  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      onFileSelect(acceptedFiles[0]);
    }
  }, [onFileSelect]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: getMimeTypes(),
    maxSize: 5 * 1024 * 1024, // 5MB
    multiple: false
  });

  return (
    <div
      {...getRootProps()}
      className="upload-zone border-2 border-dashed border-gray-300 rounded-lg p-8 text-center cursor-pointer hover:border-primary-500"
    >
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the file here...</p>
      ) : (
        <div>
          <p>Drag & drop a file here, or click to select</p>
          <p className="text-sm text-gray-500 mt-2">
            Supported: {ALLOWED_EXTENSIONS.join(', ')}
          </p>
        </div>
      )}
    </div>
  );
}