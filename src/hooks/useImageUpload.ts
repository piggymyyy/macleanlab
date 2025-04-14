import { useState } from 'react';

export function useImageUpload() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string>('');

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const handleImageUpload = (imageUrl: string) => {
    setSelectedImage(imageUrl);
  };

  return {
    isModalOpen,
    selectedImage,
    openModal,
    closeModal,
    handleImageUpload,
  };
}