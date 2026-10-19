import React, { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react'

export default function LightboxModal({
  items,
  currentIndex,
  isOpen,
  onClose,
  onSelectIndex,
}) {
  const currentItem = items && items[currentIndex]

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') onSelectIndex((currentIndex + 1) % items.length)
      if (e.key === 'ArrowLeft') onSelectIndex((currentIndex - 1 + items.length) % items.length)
    }

    if (isOpen) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, currentIndex, items, onClose, onSelectIndex])

  if (!isOpen || !currentItem) return null

  return (
    <AnimatePresence>
      <div className="lightbox-root" role="dialog" aria-modal="true" aria-label="Image Lightbox">
        {/* Backdrop */}
        <motion.div
          className="lightbox-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        />

        {/* Top Controls Bar */}
        <div className="lightbox-top-bar">
          <div className="lightbox-counter">
            <span>{currentIndex + 1}</span> / <span>{items.length}</span>
          </div>
          <button
            type="button"
            className="lightbox-close-btn"
            onClick={onClose}
            aria-label="Close image lightbox"
          >
            <X size={24} />
          </button>
        </div>

        {/* Image Stage */}
        <div className="lightbox-stage" onClick={onClose}>
          <motion.div
            key={currentItem.id}
            className="lightbox-content-box"
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.94 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={currentItem.image}
              alt={currentItem.title}
              className="lightbox-img"
            />

            <div className="lightbox-caption">
              <span className="lightbox-category">{currentItem.category}</span>
              <h3 className="lightbox-title">{currentItem.title}</h3>
              <p className="lightbox-desc">{currentItem.description}</p>
            </div>
          </motion.div>
        </div>

        {/* Navigation Arrows */}
        <button
          type="button"
          className="lightbox-nav-btn prev"
          onClick={(e) => {
            e.stopPropagation()
            onSelectIndex((currentIndex - 1 + items.length) % items.length)
          }}
          aria-label="Previous gallery image"
        >
          <ChevronLeft size={30} />
        </button>

        <button
          type="button"
          className="lightbox-nav-btn next"
          onClick={(e) => {
            e.stopPropagation()
            onSelectIndex((currentIndex + 1) % items.length)
          }}
          aria-label="Next gallery image"
        >
          <ChevronRight size={30} />
        </button>
      </div>
    </AnimatePresence>
  )
}
