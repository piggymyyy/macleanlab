import React from 'react';
import { ImageUploadModal } from '../common/ImageUploadModal';
import { useImageUpload } from '../../hooks/useImageUpload';

interface ContentEditorProps {
  content: any;
  onSave: (content: any) => void;
  type: 'team' | 'alumni' | 'research' | 'social';
}

export function ContentEditor({ content, onSave, type }: ContentEditorProps) {
  const {
    isModalOpen,
    selectedImage,
    openModal,
    closeModal,
    handleImageUpload,
  } = useImageUpload();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const updatedContent = {
      ...content,
      image: selectedImage || content.image,
    };

    // Add form fields to content based on type
    switch (type) {
      case 'team':
        updatedContent.name = formData.get('name');
        updatedContent.title = formData.get('title');
        updatedContent.bio = formData.get('bio');
        updatedContent.email = formData.get('email');
        updatedContent.linkedinUrl = formData.get('linkedinUrl');
        break;
      case 'research':
        updatedContent.title = formData.get('title');
        updatedContent.description = formData.get('description');
        break;
      // Add other cases as needed
    }

    onSave(updatedContent);
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Image
            </label>
            <div className="mt-1 flex items-center space-x-4">
              {(selectedImage || content.image) && (
                <img
                  src={selectedImage || content.image}
                  alt="Preview"
                  className="h-32 w-32 object-cover rounded-lg"
                />
              )}
              <button
                type="button"
                onClick={openModal}
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200"
              >
                {selectedImage || content.image ? 'Change Image' : 'Add Image'}
              </button>
            </div>
          </div>

          {/* Dynamic form fields based on content type */}
          {type === 'team' && (
            <>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  defaultValue={content.name}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                />
              </div>
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  defaultValue={content.title}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                />
              </div>
              {/* Add other team-specific fields */}
            </>
          )}
          {/* Add other content type forms */}
        </div>

        <div className="flex justify-end space-x-4">
          <button
            type="submit"
            className="px-4 py-2 bg-primary text-white rounded-md hover:bg-[#6BB4CD]"
          >
            Save Changes
          </button>
        </div>
      </form>

      <ImageUploadModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onUpload={handleImageUpload}
      />
    </div>
  );
}