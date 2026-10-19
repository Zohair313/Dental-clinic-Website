import React from 'react'
import {
  MapPin,
  Phone,
  Clock,
  Globe,
  ArrowUp,
  Heart,
  ShieldCheck,
} from 'lucide-react'
import { CLINIC_INFO, NAV_LINKS } from '../data/clinicInfo'
import { SERVICES } from '../data/services'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="footer-root" role="contentinfo" aria-label="Site Footer">
      {/* Top Banner Accent */}
      <div className="footer-top-accent" />

      <div className="container footer-main-container">
        <div className="footer-grid">
          {/* Column 1: Brand & Identity */}
          <div className="footer-col brand-col">
            <div className="footer-brand-header">
              <div className="footer-brand-icon" aria-hidden="true">
                <svg viewBox="0 0 40 40" className="brand-svg">
                  <rect width="40" height="40" rx="10" fill="currentColor" opacity="0.16" />
                  <path
                    d="M20 9V31M9 20H31"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                  <circle cx="20" cy="20" r="14" stroke="currentColor" strokeWidth="2.5" fill="none" opacity="0.5" />
                </svg>
              </div>
              <div>
                <span className="footer-brand-title">{CLINIC_INFO.name}</span>
                <span className="footer-brand-subtitle">D.H.A. Phase 8 · Karachi</span>
              </div>
            </div>

            <p className="footer-about-text">
              Karachi’s premier private medical clinic providing 24/7 emergency triage, certified
              laboratory testing, in-house pharmacy, dental procedures, and patient-first specialist care.
            </p>

            <div className="footer-status-tag">
              <span className="footer-live-dot" />
              <span>Open 24 Hours Every Day · Women-Led</span>
            </div>

            <div className="footer-social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
            </div>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="footer-col">
            <h4 className="footer-heading">Quick Navigation</h4>
            <ul className="footer-links-list">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <a href={href}>{label}</a>
                </li>
              ))}
              <li>
                <a href="#appointment">Book Appointment</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Clinical Services */}
          <div className="footer-col">
            <h4 className="footer-heading">Core Clinical Services</h4>
            <ul className="footer-links-list">
              {SERVICES.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <a href="#services">{service.title}</a>
                </li>
              ))}
              <li>
                <a href="#services" className="text-accent font-semibold">
                  + View all 9 specialties →
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Emergency */}
          <div className="footer-col contact-col">
            <h4 className="footer-heading">Emergency &amp; Contact</h4>
            <div className="footer-contact-items">
              <div className="footer-contact-row">
                <Phone size={17} className="text-accent" />
                <div>
                  <span className="row-label">24/7 Hotline:</span>
                  <a href={`tel:${CLINIC_INFO.phoneTel}`} className="hotline-link">
                    {CLINIC_INFO.phoneDisplay}
                  </a>
                </div>
              </div>

              <div className="footer-contact-row">
                <MapPin size={17} className="text-accent" />
                <div>
                  <span className="row-label">Address:</span>
                  <address className="footer-address">
                    29-C Al-Murtaza Commercial Ln 3,<br />
                    D.H.A. Phase 8, Karachi 75500
                  </address>
                </div>
              </div>

              <div className="footer-contact-row">
                <Clock size={17} className="text-accent" />
                <div>
                  <span className="row-label">Hours:</span>
                  <span>Open 24/7 · All Holidays &amp; Weekends</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom-bar">
          <div className="footer-copy">
            © {new Date().getFullYear()} The Western Clinic. All rights reserved. Registered medical clinic in Karachi, Pakistan.
          </div>

          <div className="footer-actions">
            <button
              type="button"
              className="back-to-top-btn"
              onClick={scrollToTop}
              aria-label="Back to top of page"
            >
              <span>Back to top</span>
              <ArrowUp size={16} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
