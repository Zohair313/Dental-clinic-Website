import React, { useEffect, useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Phone, Calendar, Star, ShieldCheck, Clock, Award, ArrowRight, HeartPulse, CheckCircle2 } from 'lucide-react'
import { CLINIC_INFO, STATS } from '../data/clinicInfo'
import { getAssetUrl } from '../utils/assets'

function AnimatedCounter({ value, suffix = '' }) {
  const [displayValue, setDisplayValue] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-50px' })

  // Clean numerical value (e.g. "1,158" -> 1158, "4.8" -> 4.8)
  const isDecimal = value.includes('.')
  const numericValue = parseFloat(value.replace(/,/g, ''))

  useEffect(() => {
    if (!isInView || isNaN(numericValue)) return

    let start = 0
    const duration = 1600
    const startTime = performance.now()

    const step = (currentTime) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      // Ease out cubic
      const easeOut = 1 - Math.pow(1 - progress, 3)
      const current = start + (numericValue - start) * easeOut

      setDisplayValue(current)

      if (progress < 1) {
        requestAnimationFrame(step)
      } else {
        setDisplayValue(numericValue)
      }
    }

    requestAnimationFrame(step)
  }, [isInView, numericValue])

  if (isNaN(numericValue)) {
    return <span ref={ref}>{value}{suffix}</span>
  }

  const formatted = isDecimal
    ? displayValue.toFixed(1)
    : Math.round(displayValue).toLocaleString()

  return (
    <span ref={ref}>
      {formatted}
      {suffix}
    </span>
  )
}

export default function Hero({ onOpenAppointment }) {
  return (
    <section id="top" className="hero-section">
      {/* Dynamic Ambient Blobs in Background */}
      <div className="hero-ambient-bg" aria-hidden="true">
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="blob blob-3" />
        <div className="hero-grid-pattern" />
      </div>

      <div className="container hero-container">
        {/* Left Column: Hero Copy & Actions */}
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >

          {/* Main Headline */}
          <motion.h1
            className="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            World-class medical care,{' '}
            <span className="text-serif text-accent">around the clock</span> in D.H.A. Phase 8.
          </motion.h1>

          {/* Leaded Subtitle */}
          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            Immediate 24/7 emergency response, licensed on-site pharmacy, same-day diagnostic lab
            tests, dental surgery, and experienced specialist physicians — serving Karachi with
            uncompromising dedication.
          </motion.p>

          {/* Social Proof Google Review Badge */}
          <motion.div
            className="hero-social-proof"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <div className="google-badge-pill">
              <span className="google-icon" aria-hidden="true">
                <svg viewBox="0 0 24 24" width="18" height="18">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                  />
                </svg>
              </span>
              <div className="google-stars" aria-label="4.8 out of 5 stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={15} fill="#f59e0b" color="#f59e0b" />
                ))}
              </div>
              <span className="google-rating-text">
                <strong>4.8 ★</strong> from <strong>1,158 Google Reviews</strong>
              </span>
            </div>
          </motion.div>

          {/* Primary Action Buttons */}
          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            {/* Call Now Button - Pulse & High Prominence */}
            <a
              href={`tel:${CLINIC_INFO.phoneTel}`}
              className="btn btn-emergency btn-lg hero-cta-call"
              aria-label="Call clinic immediately at +92 21 35249039"
            >
              <Phone size={20} className="cta-icon pulse-soft" aria-hidden="true" />
              <span>
                <strong>Call Now</strong>
                <small>{CLINIC_INFO.phoneDisplay}</small>
              </span>
            </a>

            {/* Book Appointment CTA */}
            <button
              type="button"
              className="btn btn-primary btn-lg hero-cta-book"
              onClick={() => {
                if (onOpenAppointment) onOpenAppointment()
                const formEl = document.getElementById('appointment')
                if (formEl) formEl.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              <Calendar size={20} aria-hidden="true" />
              <span>Book Appointment</span>
            </button>
          </motion.div>

          {/* Live Key Assurances */}
          <motion.div
            className="hero-assurances"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <span className="assurance-item">
              <ShieldCheck size={16} className="text-accent" aria-hidden="true" />
              <span>Zero Waiting Triage</span>
            </span>
            <span className="assurance-divider" aria-hidden="true">·</span>
            <span className="assurance-item">
              <Clock size={16} className="text-accent" aria-hidden="true" />
              <span>On-Site 24h Pharmacy</span>
            </span>
            <span className="assurance-divider" aria-hidden="true">·</span>
            <span className="assurance-item">
              <Award size={16} className="text-accent" aria-hidden="true" />
              <span>Same-Day Lab Reports</span>
            </span>
          </motion.div>
        </motion.div>

        {/* Right Column: Hero Visual with Interactive Floating Cards */}
        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="hero-image-frame">
            <img
              src={getAssetUrl('hero-clinic.jpg')}
              alt="The Western Clinic high-end reception and medical suites in DHA Phase 8, Karachi"
              className="hero-main-img"
              width="640"
              height="480"
              loading="eager"
            />
            <div className="hero-image-overlay" />

            {/* Floating Info Card 1: 24/7 Status */}
            <motion.div
              className="floating-card floating-card-top"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <div className="floating-card-icon open-icon">
                <span className="pulse-ring" />
                <Clock size={20} />
              </div>
              <div className="floating-card-text">
                <span className="floating-title">Open Right Now</span>
                <span className="floating-sub">24/7 Doctors & Pharmacy Active</span>
              </div>
            </motion.div>

            {/* Floating Info Card 2: ER Ready */}
            <motion.div
              className="floating-card floating-card-middle"
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.75, duration: 0.6 }}
            >
              <div className="floating-card-icon er-icon">
                <HeartPulse size={20} />
              </div>
              <div className="floating-card-text">
                <span className="floating-title">ER Triage Ready</span>
                <span className="floating-sub">Trauma, IV & Oxygen Prepared</span>
              </div>
            </motion.div>

            {/* Floating Info Card 3: Location */}
            <motion.div
              className="floating-card floating-card-bottom"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.6 }}
            >
              <div className="floating-card-icon location-icon">
                <Award size={20} />
              </div>
              <div className="floating-card-text">
                <span className="floating-title">D.H.A. Phase 8</span>
                <span className="floating-sub">Al-Murtaza Commercial Ln 3</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Hero Stats Row with Animated Numbers */}
      <div className="container hero-stats-container">
        <motion.div
          className="hero-stats-grid"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65 }}
        >
          {STATS.map((stat, idx) => (
            <div key={idx} className="stat-card">
              <div className="stat-number">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <div className="stat-label">{stat.label}</div>
              <div className="stat-sub">{stat.sub}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
