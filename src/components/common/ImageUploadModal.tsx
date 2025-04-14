import React, { useState } from 'react';
import { X } from 'lucide-react';
import { ImageUpload } from './ImageUpload';

interface ImageUploadModalProps {
  isOpen: boolean;
  onClose: () => void;
  onUpload: (imageUrl: string) => void;
  title?: string;
}

export function ImageUploadModal({ isOpen, onClose, onUpload, title = 'Upload Image' }: ImageUploadModalProps) {
  const [tempImage, setTempImage] = useState<string>('');

  if (!isOpen) return null;

  const handleConfirm = () => {
    onUpload(tempImage);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-gray-900">{title}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X size={24} />
          </button>
        </div>

        <ImageUpload
          onImageUpload={setTempImage}
          className="mb-4"
        />

        <div className="flex justify-end space-x-4">
          <button
            onClick={onClose}
            className="px-4 py-2 text-gray-600 hover:text-gray-800"
          >
            Cancel
          </button>
          <button
            onClick={handleConfirm}
            disabled={!tempImage}
            className="px-4 py-2 bg-primary text-white rounded-md hover:bg-[#6BB4CD] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Upload
          </button>
        </div>
      </div>
    </div>
  );
}