"use client";

import { motion } from "framer-motion";
import { Download, Eye, Search, Trash2 } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import FileUpload from "@/components/FileUpload";
import type { UploadedFile } from "@/lib/fileService";
import { fileService } from "@/lib/fileService";

export default function AdminFilesPage() {
  const [files, setFiles] = useState<UploadedFile[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFile, setSelectedFile] = useState<UploadedFile | null>(null);

  useEffect(() => {
    const loadFiles = async () => {
      try {
        setLoading(true);
        const response = await fileService.listFiles(100);
        setFiles(response.files);
        setError(null);
      } catch {
        setError("Failed to load files");
      } finally {
        setLoading(false);
      }
    };

    loadFiles();
  }, []);

  const filteredFiles = useMemo(
    () =>
      files.filter((file) =>
        file.original_name.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    [files, searchTerm]
  );

  const totalSizeMB = (files.reduce((sum, file) => sum + file.file_size, 0) / (1024 * 1024)).toFixed(2);

  const handleDeleteFile = async (fileId: number) => {
    if (!confirm("Are you sure you want to delete this file?")) {
      return;
    }

    try {
      await fileService.deleteFile(fileId);
      setFiles((current) => current.filter((file) => file.id !== fileId));
    } catch {
      setError("Failed to delete file");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <h1 className="text-4xl font-light text-gray-900 mb-2">File Management</h1>
          <p className="text-gray-600 font-light">Manage your uploaded files and storage</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8"
        >
          <div className="bg-white p-6 rounded-sm border border-gray-200">
            <p className="text-sm text-gray-600 font-light mb-2">Total Files</p>
            <p className="text-3xl font-light text-amber-800">{files.length}</p>
          </div>
          <div className="bg-white p-6 rounded-sm border border-gray-200">
            <p className="text-sm text-gray-600 font-light mb-2">Total Storage</p>
            <p className="text-3xl font-light text-amber-800">{totalSizeMB} MB</p>
          </div>
          <div className="bg-white p-6 rounded-sm border border-gray-200">
            <p className="text-sm text-gray-600 font-light mb-2">Storage Limit</p>
            <p className="text-3xl font-light text-amber-800">50 GB</p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="bg-white p-6 rounded-sm border border-gray-200 mb-8"
        >
          <h2 className="text-xl font-light text-gray-900 mb-4">Upload New File</h2>
          <FileUpload onUploadComplete={(file) => setFiles((current) => [file, ...current])} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mb-6"
        >
          <div className="relative max-w-md">
            <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search files..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-sm focus:outline-none focus:border-amber-800 font-light"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-white rounded-sm border border-gray-200 overflow-hidden"
        >
          {loading ? (
            <div className="p-8 text-center text-gray-600 font-light">Loading files...</div>
          ) : error ? (
            <div className="p-8 text-center text-red-600 font-light">{error}</div>
          ) : filteredFiles.length === 0 ? (
            <div className="p-8 text-center text-gray-600 font-light">No files found</div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-3 text-left text-sm font-light text-gray-900">Filename</th>
                    <th className="px-6 py-3 text-left text-sm font-light text-gray-900">Type</th>
                    <th className="px-6 py-3 text-left text-sm font-light text-gray-900">Size</th>
                    <th className="px-6 py-3 text-left text-sm font-light text-gray-900">Uploaded</th>
                    <th className="px-6 py-3 text-right text-sm font-light text-gray-900">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredFiles.map((file, index) => (
                    <motion.tr
                      key={file.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="border-b border-gray-200 hover:bg-gray-50 transition-colors"
                    >
                      <td className="px-6 py-4 text-sm font-light text-gray-900">{file.original_name}</td>
                      <td className="px-6 py-4 text-sm font-light text-gray-600">{file.file_type}</td>
                      <td className="px-6 py-4 text-sm font-light text-gray-600">{(file.file_size / 1024).toFixed(2)} KB</td>
                      <td className="px-6 py-4 text-sm font-light text-gray-600">
                        {new Date(file.created_at).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="flex justify-end gap-2">
                          <button
                            onClick={() => setSelectedFile(file)}
                            className="p-2 text-gray-600 hover:text-amber-800 transition-colors"
                            title="Preview"
                          >
                            <Eye className="w-4 h-4" />
                          </button>
                          <a
                            href={file.s3_url}
                            download
                            className="p-2 text-gray-600 hover:text-amber-800 transition-colors"
                            title="Download"
                          >
                            <Download className="w-4 h-4" />
                          </a>
                          <button
                            onClick={() => handleDeleteFile(file.id)}
                            className="p-2 text-gray-600 hover:text-red-600 transition-colors"
                            title="Delete"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </motion.div>

        {selectedFile && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={() => setSelectedFile(null)}
            className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-sm max-w-2xl w-full max-h-[80vh] overflow-auto"
            >
              <div className="p-4 border-b border-gray-200 flex justify-between items-center">
                <h3 className="text-lg font-light text-gray-900">{selectedFile.original_name}</h3>
                <button onClick={() => setSelectedFile(null)} className="text-gray-600 hover:text-gray-900">✕</button>
              </div>
              <div className="p-6">
                {selectedFile.file_type.startsWith("image/") ? (
                  <img src={selectedFile.s3_url} alt={selectedFile.original_name} className="w-full h-auto" />
                ) : (
                  <div className="text-center py-12 text-gray-600 font-light">
                    <p>Preview not available for {selectedFile.file_type} files</p>
                    <a
                      href={selectedFile.s3_url}
                      download
                      className="mt-4 inline-block px-4 py-2 bg-amber-800 text-white rounded-sm hover:bg-amber-900 transition-colors"
                    >
                      Download File
                    </a>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
