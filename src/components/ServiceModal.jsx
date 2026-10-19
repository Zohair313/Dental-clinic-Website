import React, { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Check, Clock, Calendar, ArrowRight } from 'lucide-react'

export default function ServiceModal({ service, isOpen, onClose, onBookService }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose()
      }
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
  }, [isOpen, onClose])

  if (!service) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="modal-root" role="dialog" aria-modal="true" aria-labelledby="service-modal-title">
          {/* Backdrop */}
          <motion.div
            className="modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal Container */}
          <div className="modal-dialog-wrapper">
            <motion.div
              className="modal-dialog"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 320 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="modal-header">
                <div className="modal-badge-row">
                  <span className="modal-service-badge">{service.badge}</span>
                  <span className="modal-service-timings">
                    <Clock size={14} className="text-accent" />
                    <span>{service.timings}</span>
                  </span>
                </div>
                <button
                  type="button"
                  className="modal-close-btn"
                  onClick={onClose}
                  aria-label="Close modal"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Title & Description */}
              <div className="modal-body">
                <h3 id="service-modal-title" className="modal-title">
                  {service.title}
                </h3>
                <p className="modal-description">{service.fullDesc}</p>

                {/* Features List */}
                <div className="modal-features-section">
                  <h4 className="modal-features-heading">Clinical Scope & What is Included:</h4>
                  <ul className="modal-features-list">
                    {service.features.map((feat, index) => (
                      <li key={index} className="modal-feature-item">
                        <span className="modal-check-icon">
                          <Check size={16} />
                        </span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Footer Actions */}
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-outline"
                  onClick={onClose}
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => {
                    onClose()
                    if (onBookService) onBookService(service)
                  }}
                >
                  <Calendar size={18} />
                  <span>Book This Service</span>
                  <ArrowRight size={16} />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  )
}
