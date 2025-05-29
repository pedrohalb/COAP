import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ImageGalleryCarousel = ({ imagens }) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handlePrev = () => {
    if (selectedIndex > 0) setSelectedIndex(selectedIndex - 1);
  };

  const handleNext = () => {
    if (selectedIndex < imagens.length - 1) setSelectedIndex(selectedIndex + 1);
  };

  return (
    <div className="image-gallery gallery-container">
      <div className="w-full max-w-3xl mx-auto flex items-center justify-between gap-4">
        {/* Botão Esquerda */}
        <button
          onClick={handlePrev}
          className="carousel-arrow p-2 disabled:opacity-30"
          disabled={selectedIndex === 0}
        >
          <ChevronLeft size={32} />
        </button>

        {/* Imagem */}
        <div className="flex-1 relative">
          <AnimatePresence mode="wait">
            <motion.img
              key={imagens[selectedIndex]}
              src={imagens[selectedIndex]}
              alt={`Imagem ${selectedIndex + 1}`}
              className="image-main w-full max-h-[400px] object-contain rounded-md shadow"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.4 }}
            />
          </AnimatePresence>
        </div>

        {/* Botão Direita */}
        <button
          onClick={handleNext}
          className="carousel-arrow p-2 disabled:opacity-30"
          disabled={selectedIndex === imagens.length - 1}
        >
          <ChevronRight size={32} />
        </button>
      </div>

      {/* Miniaturas */}
      {imagens.length > 1 && (
        <div className="thumbnail-list mt-4 flex justify-center gap-4">
          {imagens.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Miniatura ${index + 1}`}
              className={`thumbnail cursor-pointer w-20 h-14 object-cover rounded border ${
                selectedIndex === index
                  ? "border-blue-600"
                  : "border-transparent"
              }`}
              onClick={() => setSelectedIndex(index)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageGalleryCarousel;
