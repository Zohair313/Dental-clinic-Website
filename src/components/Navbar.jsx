import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, Calendar, Moon, Sun, Menu, X, ShieldAlert } from 'lucide-react'
import { CLINIC_INFO, NAV_LINKS } from '../data/clinicInfo'

const DESKTOP_NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Doctors', href: '#doctors' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Visit', href: '#visit' },
]

export default function Navbar({ theme, onToggleTheme, onOpenAppointment }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      // Active section spy
      const sections = NAV_LINKS.map(link => link.href.substring(1))
      const scrollPos = window.scrollY + 140

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i])
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i])
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  const closeMenu = () => setMobileMenuOpen(false)

  return (
    <header className={`navbar-header ${scrolled ? 'is-scrolled' : ''}`}>
      <nav className="nav-container" aria-label="Main Navigation">
        {/* Brand / Logo */}
        <a href="#top" className="brand-logo" onClick={closeMenu}>
          <div className="brand-icon-wrap" aria-hidden="true">
            <svg viewBox="0 0 40 40" className="brand-svg">
              <rect width="40" height="40" rx="10" fill="currentColor" opacity="0.12" />
              <path
                d="M20 9V31M9 20H31"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
              />
              <circle cx="20" cy="20" r="14" stroke="currentColor" strokeWidth="2.5" fill="none" opacity="0.5" />
            </svg>
          </div>
          <div className="brand-text">
            <span className="brand-title">The Western Clinic</span>
            <span className="brand-subtitle">D.H.A. Phase 8 · Karachi</span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <div className="nav-desktop-links" role="menubar">
          {DESKTOP_NAV_LINKS.map(({ label, href }) => {
            const sectionId = href.substring(1)
            const isActive = activeSection === sectionId
            return (
              <a
                key={href}
                href={href}
                role="menuitem"
                className={`nav-link ${isActive ? 'is-active' : ''}`}
                aria-current={isActive ? 'page' : undefined}
              >
                {label}
                {isActive && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className="active-nav-indicator"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            )
          })}
        </div>

        {/* Action Controls & Emergency Pill */}
        <div className="nav-actions">
          {/* Emergency Pill */}
          <a
            href={`tel:${CLINIC_INFO.phoneTel}`}
            className="emergency-pill"
            title="Emergency 24/7 Hotline"
            aria-label="Emergency 24/7 Hotline call"
          >
            <span className="emergency-dot" aria-hidden="true" />
            <span className="emergency-text">
              <span className="emergency-label">ER 24/7</span>
              <span className="emergency-tel">{CLINIC_INFO.phoneDisplay}</span>
            </span>
          </a>

          {/* Book Appointment CTA */}
          <button
            type="button"
            className="btn btn-primary btn-sm nav-book-btn"
            onClick={() => {
              if (onOpenAppointment) onOpenAppointment()
              const formEl = document.getElementById('appointment')
              if (formEl) formEl.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            <Calendar size={16} aria-hidden="true" />
            <span>Book Visit</span>
          </button>

          {/* Theme Toggle Button */}
          <button
            type="button"
            className="theme-toggle-btn"
            onClick={onToggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            title={theme === 'dark' ? 'Light mode' : 'Dark mode'}
          >
            {theme === 'dark' ? (
              <Sun size={18} className="theme-icon sun" />
            ) : (
              <Moon size={18} className="theme-icon moon" />
            )}
          </button>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            className="mobile-menu-trigger"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Animated Slide-in Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              className="mobile-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
              aria-hidden="true"
            />
            <motion.div
              className="mobile-drawer"
              role="dialog"
              aria-label="Mobile Navigation Menu"
              aria-modal="true"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 300 }}
            >
              <div className="drawer-header">
                <div className="brand-text">
                  <span className="brand-title">The Western Clinic</span>
                  <span className="brand-subtitle">Open 24/7 · D.H.A. Phase 8</span>
                </div>
                <button
                  type="button"
                  className="drawer-close-btn"
                  onClick={closeMenu}
                  aria-label="Close menu"
                >
                  <X size={22} />
                </button>
              </div>

              {/* Mobile Emergency Banner */}
              <div className="drawer-emergency-banner">
                <a href={`tel:${CLINIC_INFO.phoneTel}`} className="drawer-emergency-call" onClick={closeMenu}>
                  <ShieldAlert size={20} className="pulse-icon" />
                  <div>
                    <strong>Emergency Helpline 24/7</strong>
                    <span>{CLINIC_INFO.phoneDisplay}</span>
                  </div>
                </a>
              </div>

              {/* Mobile Nav Links */}
              <div className="drawer-links">
                {NAV_LINKS.map(({ label, href }) => {
                  const sectionId = href.substring(1)
                  const isActive = activeSection === sectionId
                  return (
                    <a
                      key={href}
                      href={href}
                      className={`drawer-link ${isActive ? 'is-active' : ''}`}
                      onClick={closeMenu}
                    >
                      {label}
                    </a>
                  )
                })}
              </div>

              {/* Drawer Footer Actions */}
              <div className="drawer-footer">
                <button
                  type="button"
                  className="btn btn-primary btn-block"
                  onClick={() => {
                    closeMenu()
                    if (onOpenAppointment) onOpenAppointment()
                    const formEl = document.getElementById('appointment')
                    if (formEl) formEl.scrollIntoView({ behavior: 'smooth' })
                  }}
                >
                  <Calendar size={18} />
                  <span>Book Appointment</span>
                </button>

                <div className="drawer-bottom-info">
                  <p>29-C Al-Murtaza Commercial Ln 3</p>
                  <p>D.H.A. Phase 8, Karachi 75500</p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}
