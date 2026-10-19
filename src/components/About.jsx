import React from 'react'
import { motion } from 'framer-motion'
import { Shield, Sparkles, HeartHandshake, Clock, CheckCircle2 } from 'lucide-react'
import { CLINIC_INFO } from '../data/clinicInfo'

export default function About() {
  const VALUES = [
    {
      icon: Clock,
      title: 'Uninterrupted 24/7 Readiness',
      desc: 'Our doors never lock. Day or night, qualified physicians, emergency triage nurses, and certified pharmacists are alert and on duty.',
    },
    {
      icon: HeartHandshake,
      title: 'Women-Led Empathy & Dignity',
      desc: 'Proudly women-led, creating a safe, calm, and respectful healthcare haven for mothers, children, and families throughout Karachi.',
    },
    {
      icon: Shield,
      title: 'Gold-Standard Diagnostics',
      desc: 'High-precision automated blood analyzers and digital X-ray imaging ensure accurate assessments and same-day electronic reports.',
    },
    {
      icon: Sparkles,
      title: 'Patient-First Transparency',
      desc: 'Zero hidden fees, honest clinical guidance, direct doctor communication, and continuous post-consultation support via WhatsApp.',
    },
  ]

  return (
    <section id="about" className="section-padding about-section" aria-labelledby="about-heading">
      <div className="container">
        <div className="about-grid">
          {/* Left Column: Visual Showcase */}
          <motion.div
            className="about-visual"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="about-image-wrapper">
              <img
                src="/gallery/reception.jpg"
                alt="Inside The Western Clinic in DHA Phase 8, Karachi"
                className="about-image"
                loading="lazy"
                width="560"
                height="420"
              />
              <div className="about-badge-card">
                <div className="badge-highlight-number">4.8★</div>
                <div className="badge-highlight-text">
                  <strong>1,158 Reviews</strong>
                  <span>Top Rated in DHA Phase 8</span>
                </div>
              </div>

              <div className="about-card-stat">
                <span className="about-dot" />
                <span>100% Women-Led Healthcare Facility</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Story & Mission */}
          <motion.div
            className="about-content"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="section-kicker">About The Clinic</div>
            <h2 id="about-heading" className="section-title">
              Professional, calm healthcare designed for Karachi families.
            </h2>
            <p className="lead-paragraph">
              Nestled in the tranquil Zulfiqar &amp; Al-Murtaza Commercial corridor of D.H.A. Phase 8,
              <strong> The Western Clinic</strong> was established with a singular vision: to liberate
              patients from chaotic hospital waiting rooms and deliver personalized, world-class medical
              care 24 hours a day.
            </p>
            <p className="body-paragraph">
              From sudden midnight fevers and emergency stitch work to routine pediatric checkups,
              digital lab panels, and gentle dental procedures, our multidisciplinary team coordinates
              every aspect of your wellness under one serene roof.
            </p>

            {/* Core Values Grid */}
            <div className="about-values-grid">
              {VALUES.map((val, idx) => {
                const Icon = val.icon
                return (
                  <div key={idx} className="about-value-item">
                    <div className="value-icon-box">
                      <Icon size={20} className="value-icon" />
                    </div>
                    <div>
                      <h3 className="value-title">{val.title}</h3>
                      <p className="value-desc">{val.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Quick Facts List */}
            <div className="about-checklist">
              <div className="checklist-item">
                <CheckCircle2 size={18} className="text-accent" />
                <span>Fully licensed by healthcare authorities</span>
              </div>
              <div className="checklist-item">
                <CheckCircle2 size={18} className="text-accent" />
                <span>Emergency triage & minor procedures suite</span>
              </div>
              <div className="checklist-item">
                <CheckCircle2 size={18} className="text-accent" />
                <span>Immediate WhatsApp dispatch for digital lab reports</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
