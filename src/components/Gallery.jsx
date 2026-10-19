import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { ZoomIn, Camera } from 'lucide-react'
import { GALLERY_ITEMS } from '../data/gallery'
import LightboxModal from './LightboxModal'

export default function Gallery() {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(0)

  const handleOpenLightbox = (index) => {
    setSelectedIndex(index)
    setLightboxOpen(true)
  }

  return (
    <section id="gallery" className="section-padding gallery-section" aria-labelledby="gallery-heading">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center">
          <div className="section-kicker">Clinic Environment</div>
          <h2 id="gallery-heading" className="section-title">
            Inside The Western Clinic
          </h2>
          <p className="section-subtitle">
            Take a visual tour of our modern emergency bays, comfortable patient suites, automated
            diagnostics lab, and 24-hour pharmacy in D.H.A. Phase 8.
          </p>
        </div>

        {/* Masonry / Responsive Grid */}
        <div className="gallery-masonry-grid">
          {GALLERY_ITEMS.map((item, index) => (
            <motion.div
              key={item.id}
              className={`gallery-item ${item.aspect === 'tall' ? 'gallery-item-tall' : ''}`}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              onClick={() => handleOpenLightbox(index)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  handleOpenLightbox(index)
                }
              }}
              aria-label={`Open photo of ${item.title}`}
            >
              <div className="gallery-img-wrapper">
                <img
                  src={item.image}
                  alt={item.title}
                  className="gallery-thumbnail"
                  loading="lazy"
                  width="480"
                  height="340"
                />
                <div className="gallery-hover-overlay">
                  <div className="gallery-zoom-icon">
                    <ZoomIn size={22} />
                  </div>
                  <div className="gallery-overlay-text">
                    <span className="gallery-tag">{item.category}</span>
                    <h3 className="gallery-card-title">{item.title}</h3>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        items={GALLERY_ITEMS}
        currentIndex={selectedIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onSelectIndex={setSelectedIndex}
      />
    </section>
  )
}
