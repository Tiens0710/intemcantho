/**
 * File Upload Component
 * Handles file uploads to S3 storage
 */

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Upload, X, CheckCircle } from 'lucide-react';

interface FileUploadProps {
  onUploadComplete?: (file: any) => void;
  accept?: string;
  maxSize?: number; // in MB
}

export default function FileUpload({ onUploadComplete, accept = 'image/*', maxSize = 50 }: FileUploadProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [progress, setProgress] = useState(0);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const validateFile = (file: File): boolean => {
    if (maxSize && file.size > maxSize * 1024 * 1024) {
      setError(`File size exceeds ${maxSize}MB limit`);
      return false;
    }
    return true;
  };

  const uploadFile = async (file: File) => {
    if (!validateFile(file)) {
      return;
    }

    setError(null);
    setIsUploading(true);
    setProgress(0);

    try {
      const formData = new FormData();
      formData.append('file', file);

      const xhr = new XMLHttpRequest();

      // Track upload progress
      xhr.upload.addEventListener('progress', (e) => {
        if (e.lengthComputable) {
          const percentComplete = (e.loaded / e.total) * 100;
          setProgress(percentComplete);
        }
      });

      xhr.addEventListener('load', () => {
        if (xhr.status === 200) {
          const response = JSON.parse(xhr.responseText);
          setUploadedFile(response.file);
          setProgress(100);
          onUploadComplete?.(response.file);
        } else {
          setError('Upload failed');
        }
        setIsUploading(false);
      });

      xhr.addEventListener('error', () => {
        setError('Upload error');
        setIsUploading(false);
      });

      xhr.open('POST', '/api/files/upload');
      xhr.send(formData);
    } catch (err) {
      setError('Upload failed');
      setIsUploading(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);

    const files = e.dataTransfer.files;
    if (files.length > 0) {
      uploadFile(files[0]);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.currentTarget.files;
    if (files && files.length > 0) {
      uploadFile(files[0]);
    }
  };

  const handleReset = () => {
    setUploadedFile(null);
    setError(null);
    setProgress(0);
  };

  return (
    <div className="w-full">
      {uploadedFile ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="border border-green-200 bg-green-50 rounded-sm p-4"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <div>
                <p className="text-sm font-light text-green-900">{uploadedFile.original_name}</p>
                <p className="text-xs text-green-700">
                  {(uploadedFile.file_size / 1024).toFixed(2)} KB
                </p>
              </div>
            </div>
            <button
              onClick={handleReset}
              className="text-green-600 hover:text-green-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </motion.div>
      ) : (
        <motion.div
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className={`border-2 border-dashed rounded-sm p-8 text-center transition-colors ${
            isDragging
              ? 'border-amber-800 bg-amber-50'
              : 'border-gray-300 bg-gray-50 hover:border-amber-800'
          }`}
        >
          {isUploading ? (
            <div className="space-y-4">
              <Upload className="w-8 h-8 text-amber-800 mx-auto animate-pulse" />
              <div>
                <p className="text-sm font-light text-gray-900 mb-2">Uploading...</p>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <motion.div
                    className="bg-amber-800 h-2 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <p className="text-xs text-gray-600 mt-2">{Math.round(progress)}%</p>
              </div>
            </div>
          ) : (
            <label className="cursor-pointer">
              <Upload className="w-8 h-8 text-amber-800 mx-auto mb-3" />
              <p className="text-sm font-light text-gray-900 mb-1">
                Drag and drop your file here
              </p>
              <p className="text-xs text-gray-600 mb-4">or click to select</p>
              <input
                type="file"
                accept={accept}
                onChange={handleFileSelect}
                className="hidden"
              />
            </label>
          )}
        </motion.div>
      )}

      {error && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-3 p-3 bg-red-50 border border-red-200 rounded-sm"
        >
          <p className="text-sm text-red-700 font-light">{error}</p>
        </motion.div>
      )}
    </div>
  );
}
