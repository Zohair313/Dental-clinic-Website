import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Stethoscope,
  Ambulance,
  Baby,
  HeartHandshake,
  FlaskConical,
  Syringe,
  Scissors,
  Home,
  Video,
  ArrowRight,
  Sparkles,
} from 'lucide-react'
import { SERVICES, SERVICE_CATEGORIES } from '../data/services'
import ServiceModal from './ServiceModal'

const ICON_MAP = {
  Stethoscope,
  Ambulance,
  Baby,
  HeartHandshake,
  FlaskConical,
  Syringe,
  Scissors,
  Home,
  Video,
}

export default function Services({ onSelectServiceForBooking }) {
  const [activeModalService, setActiveModalService] = useState(null)
  const [selectedCategory, setSelectedCategory] = useState('all')

  const handleOpenModal = (service) => {
    setActiveModalService(service)
  }

  const handleCloseModal = () => {
    setActiveModalService(null)
  }

  const handleBookService = (service) => {
    if (onSelectServiceForBooking) {
      onSelectServiceForBooking(service.title)
    }
    const formEl = document.getElementById('appointment')
    if (formEl) {
      formEl.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const filteredServices = selectedCategory === 'all'
    ? SERVICES
    : SERVICES.filter((s) => s.category === selectedCategory)

  return (
    <section id="services" className="section-padding services-section" aria-labelledby="services-heading">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center">
          <div className="section-kicker">Clinical Specialties</div>
          <h2 id="services-heading" className="section-title">
            Comprehensive Healthcare Under One Roof
          </h2>
          <p className="section-subtitle">
            From round-the-clock emergency interventions to specialized consultations, digital
            diagnostics, and home care throughout Karachi.
          </p>

          {/* Interactive Category Filter Tabs */}
          <div className="service-category-tabs" role="tablist" aria-label="Service Categories">
            {SERVICE_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                type="button"
                role="tab"
                aria-selected={selectedCategory === cat.id}
                className={`category-tab-btn ${selectedCategory === cat.id ? 'is-active' : ''}`}
                onClick={() => setSelectedCategory(cat.id)}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid (8-9 cards) */}
        <motion.div layout className="services-grid">
          <AnimatePresence>
            {filteredServices.map((service, index) => {
              const IconComponent = ICON_MAP[service.iconName] || Stethoscope
              return (
                <motion.div
                  layout
                  key={service.id}
                  className="service-card"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.35, delay: index * 0.04 }}
                  onClick={() => handleOpenModal(service)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault()
                      handleOpenModal(service)
                    }
                  }}
                  aria-label={`View details for ${service.title}`}
                >
                  {/* Top Badge & Icon */}
                  <div className="service-card-top">
                    <div className="service-icon-box">
                      <IconComponent size={26} className="service-icon" aria-hidden="true" />
                    </div>
                    <span className="service-badge">{service.badge}</span>
                  </div>

                  {/* Content */}
                  <div className="service-card-content">
                    <h3 className="service-title">{service.title}</h3>
                    <p className="service-desc">{service.shortDesc}</p>
                  </div>

                  {/* Card Action Hint */}
                  <div className="service-card-action">
                    <span className="action-text">View details &amp; schedule</span>
                    <span className="action-arrow">
                      <ArrowRight size={16} />
                    </span>
                  </div>
                </motion.div>
              )
            })}
          </AnimatePresence>
        </motion.div>

        {/* Banner callout below services */}
        <div className="services-banner-callout">
          <div className="banner-callout-content">
            <div className="callout-icon-wrap">
              <Sparkles size={24} className="text-accent" />
            </div>
            <div>
              <h4 className="callout-title">Need a specialized service not listed here?</h4>
              <p className="callout-desc">
                Our medical team coordinates with specialist panels across Karachi. Call our 24/7 reception to inquire.
              </p>
            </div>
          </div>
          <a href="tel:+922135249039" className="btn btn-outline btn-sm">
            Call +92 21 35249039
          </a>
        </div>
      </div>

      {/* Service Modal Drawer */}
      <ServiceModal
        service={activeModalService}
        isOpen={Boolean(activeModalService)}
        onClose={handleCloseModal}
        onBookService={handleBookService}
      />
    </section>
  )
}
