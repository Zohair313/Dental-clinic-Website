import React from 'react'
import { motion } from 'framer-motion'
import { PhoneCall, MapPin, HeartPulse, Check, ArrowRight } from 'lucide-react'
import { HOW_IT_WORKS_STEPS } from '../data/howItWorks'

const ICON_MAP = {
  PhoneCall,
  MapPin,
  HeartPulse,
}

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="section-padding how-it-works-section" aria-labelledby="how-it-works-heading">
      <div className="container">
        {/* Header */}
        <div className="section-header text-center">
          <div className="section-kicker">Effortless Patient Journey</div>
          <h2 id="how-it-works-heading" className="section-title">
            Getting Care in Three Simple Steps
          </h2>
          <p className="section-subtitle">
            We designed our clinic flow to eliminate paperwork friction and maximize physician consultation time.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="timeline-wrapper">
          {/* Connecting Line */}
          <div className="timeline-connector-line" aria-hidden="true" />

          {/* Steps */}
          <div className="timeline-grid">
            {HOW_IT_WORKS_STEPS.map((stepItem, index) => {
              const IconComponent = ICON_MAP[stepItem.icon] || HeartPulse
              return (
                <motion.div
                  key={stepItem.step}
                  className="timeline-card"
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.6, delay: index * 0.18 }}
                >
                  <div className="timeline-card-header">
                    <div className="timeline-step-badge">
                      <span>{stepItem.step}</span>
                    </div>
                    <div className="timeline-icon-box">
                      <IconComponent size={24} className="timeline-icon" aria-hidden="true" />
                    </div>
                  </div>

                  <span className="timeline-badge-pill">{stepItem.badge}</span>
                  <h3 className="timeline-title">{stepItem.title}</h3>
                  <p className="timeline-subtitle">{stepItem.subtitle}</p>
                  <p className="timeline-desc">{stepItem.desc}</p>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* Bottom Fast Action Prompt */}
        <div className="timeline-cta-row">
          <p className="timeline-cta-text">
            Need urgent attention right now? Walk straight into our Phase 8 clinic or call ahead.
          </p>
          <a href="tel:+922135249039" className="btn btn-emergency btn-sm">
            <PhoneCall size={16} />
            <span>Call +92 21 35249039</span>
          </a>
        </div>
      </div>
    </section>
  )
}
