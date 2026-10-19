import React from 'react'
import { motion } from 'framer-motion'
import { Clock, DoorOpen, Award, Activity } from 'lucide-react'
import { TRUST_BAR_ITEMS } from '../data/clinicInfo'

const ICON_MAP = {
  Clock: Clock,
  DoorOpen: DoorOpen,
  Award: Award,
  Activity: Activity,
}

export default function TrustBar() {
  return (
    <section className="trust-bar-section" aria-label="Trust and Reliability Highlights">
      <div className="container">
        <div className="trust-bar-grid">
          {TRUST_BAR_ITEMS.map((item, index) => {
            const IconComponent = ICON_MAP[item.icon] || Award
            return (
              <motion.div
                key={index}
                className="trust-bar-item"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="trust-icon-box">
                  <IconComponent size={24} className="trust-icon" aria-hidden="true" />
                </div>
                <div className="trust-content">
                  <h3 className="trust-title">{item.title}</h3>
                  <p className="trust-text">{item.text}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
