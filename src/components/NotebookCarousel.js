import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NotebookCard from "./NotebookCard";
import { notebooks } from "../data/notebooks";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ITEMS_PER_PAGE = 3;

function NotebookCarousel() {
  const [page, setPage] = useState(0);
  const totalPages = Math.ceil(notebooks.length / ITEMS_PER_PAGE);

  const handleNext = () => {
    if (page < totalPages - 1) setPage(page + 1);
  };

  const handlePrev = () => {
    if (page > 0) setPage(page - 1);
  };

  const currentItems = notebooks.slice(
    page * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE + ITEMS_PER_PAGE
  );

  return (
    <div className="relative w-full section">
      <h2 className="text-3xl font-bold mb-6 text-center">
        Notebooks seminovos disponíveis
      </h2>

      <div className="flex items-center justify-center gap-4 mb-6">
        <button
          onClick={handlePrev}
          className="carousel-arrow"
          disabled={page === 0}
        >
          <ChevronLeft className="w-6 h-6 text-gray-600" />
        </button>

        <div className="flex gap-6 w-full max-w-6xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={page}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full"
            >
              {currentItems.map((notebook) => (
                <NotebookCard key={notebook.id} notebook={notebook} />
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <button
          onClick={handleNext}
          className="carousel-arrow"
          disabled={page === totalPages - 1}
        >
          <ChevronRight className="w-6 h-6 text-gray-600" />
        </button>
      </div>

      {/* Indicadores em forma de bolinha */}
      <div className="carousel-indicators">
        {Array.from({ length: totalPages }).map((_, index) => (
          <button
            key={index}
            aria-label={`Ir para página ${index + 1}`}
            onClick={() => setPage(index)}
            className={`carousel-indicator ${index === page ? "active" : ""}`}
          />
        ))}
      </div>
    </div>
  );
}

export default NotebookCarousel;
