import React from 'react'
import { motion } from 'framer-motion'
import { Phone, AlertCircle, Clock, ShieldAlert } from 'lucide-react'
import { CLINIC_INFO } from '../data/clinicInfo'

export default function EmergencyBand() {
  return (
    <section className="emergency-band-section" aria-labelledby="emergency-band-heading">
      <div className="container emergency-band-container">
        {/* Left Side: Urgent Message */}
        <div className="emergency-band-content">
          <div className="emergency-tag">
            <span className="emergency-pulse-dot" aria-hidden="true" />
            <span>24/7 Acute Medical Emergency Response</span>
          </div>
          <h2 id="emergency-band-heading" className="emergency-band-title">
            Need an ER Doctor or Immediate Triage Right Now?
          </h2>
          <p className="emergency-band-desc">
            Medical officers, trauma care nurses, oxygen, and emergency crash carts are active on
            site in D.H.A. Phase 8. Call ahead — our clinical triage bay will be prepared for you.
          </p>

          <div className="emergency-features-strip">
            <span className="emergency-pill-feature">
              <Clock size={14} /> Immediate Bedside Assessment
            </span>
            <span className="emergency-pill-feature">
              <ShieldAlert size={14} /> 24-Hour IV &amp; Oxygen Supply
            </span>
            <span className="emergency-pill-feature">
              <AlertCircle size={14} /> Tetanus &amp; Trauma Suturing
            </span>
          </div>
        </div>

        {/* Right Side: Big Click to Call Button */}
        <div className="emergency-band-action">
          <motion.a
            href={`tel:${CLINIC_INFO.phoneTel}`}
            className="btn emergency-call-big-btn"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            aria-label={`Call emergency hotline now at ${CLINIC_INFO.phoneDisplay}`}
          >
            <div className="emergency-call-icon-wrap">
              <Phone size={28} className="emergency-pulsing-phone" aria-hidden="true" />
            </div>
            <div className="emergency-call-text">
              <span className="emergency-call-label">TAP TO CALL EMERGENCY</span>
              <span className="emergency-call-number">{CLINIC_INFO.phoneDisplay}</span>
            </div>
          </motion.a>
          <span className="emergency-subtext">Open 24 Hours Every Day · Free Call Guidance</span>
        </div>
      </div>
    </section>
  )
}
