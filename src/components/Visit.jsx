import React from 'react'
import { motion } from 'framer-motion'
import {
  MapPin,
  Clock,
  Phone,
  Globe,
  Compass,
  Navigation,
  ExternalLink,
  ShieldCheck,
} from 'lucide-react'
import { CLINIC_INFO } from '../data/clinicInfo'

export default function Visit() {
  return (
    <section id="visit" className="section-padding visit-section" aria-labelledby="visit-heading">
      <div className="container">
        {/* Header */}
        <div className="section-header text-center">
          <div className="section-kicker">Location &amp; Access</div>
          <h2 id="visit-heading" className="section-title">
            Visit Our D.H.A. Phase 8 Clinic
          </h2>
          <p className="section-subtitle">
            Situated in Al-Murtaza Commercial, easily accessible from Phase 5, Phase 6, Phase 8, and
            Clifton with dedicated street-level parking.
          </p>
        </div>

        {/* Visit Layout */}
        <div className="visit-layout-grid">
          {/* Clinic Details Card */}
          <motion.div
            className="clinic-details-card"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6 }}
          >
            <div className="details-header">
              <span className="live-open-pill">
                <span className="live-dot" /> Open Now — 24 Hours Every Day
              </span>
              <h3 className="details-clinic-name">{CLINIC_INFO.name}</h3>
              <p className="details-clinic-tagline">{CLINIC_INFO.ownershipBadge}</p>
            </div>

            <dl className="clinic-facts-list">
              {/* Address */}
              <div className="fact-item">
                <dt className="fact-label">
                  <MapPin size={18} className="text-accent" />
                  <span>Physical Address</span>
                </dt>
                <dd className="fact-value">
                  {CLINIC_INFO.address}
                </dd>
              </div>

              {/* Hours */}
              <div className="fact-item">
                <dt className="fact-label">
                  <Clock size={18} className="text-accent" />
                  <span>Operating Schedule</span>
                </dt>
                <dd className="fact-value">
                  <strong>24 Hours a Day · 7 Days a Week</strong>
                  <span className="fact-sub">Emergency triage, pharmacy, &amp; lab open all night</span>
                </dd>
              </div>

              {/* Phone */}
              <div className="fact-item">
                <dt className="fact-label">
                  <Phone size={18} className="text-accent" />
                  <span>Contact &amp; Emergency Phone</span>
                </dt>
                <dd className="fact-value">
                  <a href={`tel:${CLINIC_INFO.phoneTel}`} className="fact-phone-link">
                    {CLINIC_INFO.phoneDisplay}
                  </a>
                </dd>
              </div>

              {/* Plus Code */}
              <div className="fact-item">
                <dt className="fact-label">
                  <Compass size={18} className="text-accent" />
                  <span>Google Plus Code</span>
                </dt>
                <dd className="fact-value">
                  <code>{CLINIC_INFO.plusCode}</code>
                  <span className="fact-sub">D.H.A. Phase 8, Karachi</span>
                </dd>
              </div>

              {/* Website */}
              <div className="fact-item">
                <dt className="fact-label">
                  <Globe size={18} className="text-accent" />
                  <span>Official Domain</span>
                </dt>
                <dd className="fact-value">
                  <a
                    href={CLINIC_INFO.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="fact-web-link"
                  >
                    thewesternclinic.com
                  </a>
                </dd>
              </div>
            </dl>

            {/* Directions Action */}
            <div className="details-actions">
              <a
                href={CLINIC_INFO.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-block"
              >
                <Navigation size={18} />
                <span>Get Turn-by-Turn Directions</span>
                <ExternalLink size={16} />
              </a>
            </div>
          </motion.div>

          {/* Interactive Map with Floating Overlaid Card */}
          <motion.div
            className="map-wrapper-col"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6 }}
          >
            <div className="map-frame-box">
              <iframe
                title="Google Map location of The Western Clinic in D.H.A. Phase 8, Karachi"
                src={CLINIC_INFO.mapsEmbed}
                className="map-iframe"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Floating Card On Top of the Map */}
              <div className="floating-map-card">
                <div className="floating-map-icon">
                  <MapPin size={22} />
                </div>
                <div className="floating-map-text">
                  <strong>The Western Clinic</strong>
                  <span>29-C Al-Murtaza Commercial Ln 3, DHA 8</span>
                  <div className="floating-map-links">
                    <a
                      href={CLINIC_INFO.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="map-chip-link"
                    >
                      Open in Maps
                    </a>
                    <a href={`tel:${CLINIC_INFO.phoneTel}`} className="map-chip-link highlight">
                      Call Front Desk
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
