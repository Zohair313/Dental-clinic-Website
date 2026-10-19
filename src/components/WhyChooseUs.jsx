import React from 'react'
import { motion } from 'framer-motion'
import {
  Clock4,
  FileCheck,
  HeartHandshake,
  Flame,
  Pill,
  MapPin,
  CheckCircle,
} from 'lucide-react'
import { WHY_CHOOSE_US } from '../data/whyChooseUs'

const ICON_MAP = {
  Clock4,
  FileCheck,
  HeartHandshake,
  Flame,
  Pill,
  MapPin,
}

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="section-padding why-us-section" aria-labelledby="why-us-heading">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center">
          <div className="section-kicker">The Western Difference</div>
          <h2 id="why-us-heading" className="section-title">
            Why Karachi Families Rely on Us
          </h2>
          <p className="section-subtitle">
            Engineered to deliver rapid, dignified healthcare without the delays, crowded corridors,
            or confusion of traditional hospital conglomerates.
          </p>
        </div>

        {/* Feature Blocks Grid */}
        <div className="why-us-grid">
          {WHY_CHOOSE_US.map((item, index) => {
            const IconComponent = ICON_MAP[item.icon] || CheckCircle
            return (
              <motion.div
                key={index}
                className="why-us-card"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <div className="why-card-header">
                  <div className="why-icon-box">
                    <IconComponent size={26} className="why-icon" aria-hidden="true" />
                  </div>
                  <span className="why-tag">{item.tag}</span>
                </div>

                <h3 className="why-title">{item.title}</h3>
                <p className="why-description">{item.description}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
