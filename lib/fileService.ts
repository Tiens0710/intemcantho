export interface UploadedFile {
  id: number;
  filename: string;
  original_name: string;
  file_type: string;
  file_size: number;
  s3_url: string;
  created_at: string;
}

export interface FileListResponse {
  files: UploadedFile[];
  total: number;
}

class FileService {
  private baseUrl = "/api";

  async uploadFile(file: File, onProgress?: (progress: number) => void): Promise<UploadedFile> {
    return new Promise((resolve, reject) => {
      const formData = new FormData();
      formData.append("file", file);

      const xhr = new XMLHttpRequest();

      if (onProgress) {
        xhr.upload.addEventListener("progress", (e) => {
          if (e.lengthComputable) {
            onProgress((e.loaded / e.total) * 100);
          }
        });
      }

      xhr.addEventListener("load", () => {
        if (xhr.status === 200 || xhr.status === 201) {
          try {
            const response = JSON.parse(xhr.responseText);
            resolve(response.file);
          } catch {
            reject(new Error("Invalid response"));
          }
        } else {
          reject(new Error(`Upload failed: ${xhr.status}`));
        }
      });

      xhr.addEventListener("error", () => reject(new Error("Upload error")));
      xhr.addEventListener("abort", () => reject(new Error("Upload aborted")));

      xhr.open("POST", `${this.baseUrl}/files/upload`);
      xhr.send(formData);
    });
  }

  async getFile(fileId: number): Promise<UploadedFile> {
    const response = await fetch(`${this.baseUrl}/files/${fileId}`);
    if (!response.ok) {
      throw new Error(`Failed to get file: ${response.status}`);
    }
    return response.json();
  }

  async listFiles(limit: number = 20, offset: number = 0): Promise<FileListResponse> {
    const params = new URLSearchParams({
      limit: limit.toString(),
      offset: offset.toString(),
    });

    const response = await fetch(`${this.baseUrl}/files?${params}`);
    if (!response.ok) {
      throw new Error(`Failed to list files: ${response.status}`);
    }
    return response.json();
  }

  async deleteFile(fileId: number): Promise<void> {
    const response = await fetch(`${this.baseUrl}/files/${fileId}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error(`Failed to delete file: ${response.status}`);
    }
  }

  getDownloadUrl(fileId: number): string {
    return `${this.baseUrl}/files/${fileId}/download`;
  }

  getPreviewUrl(file: UploadedFile): string {
    return file.s3_url || `/manus-storage/${file.filename}`;
  }
}

export const fileService = new FileService();
