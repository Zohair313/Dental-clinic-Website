import React from 'react'
import { Phone, MessageCircle, Calendar } from 'lucide-react'
import { CLINIC_INFO } from '../data/clinicInfo'

export default function FloatingMobileBar({ onOpenAppointment }) {
  const handleBookClick = () => {
    if (onOpenAppointment) onOpenAppointment()
    const formEl = document.getElementById('appointment')
    if (formEl) formEl.scrollIntoView({ behavior: 'smooth' })
  }

  const whatsappMessage = encodeURIComponent(
    'Hi Western Clinic, I would like to inquire about medical care at your DHA Phase 8 clinic.'
  )

  return (
    <aside className="mobile-floating-bar" aria-label="Quick Mobile Actions">
      <div className="mobile-bar-actions">
        {/* Call Now */}
        <a
          href={`tel:${CLINIC_INFO.phoneTel}`}
          className="mobile-action-btn mobile-call-btn"
          aria-label="Call clinic directly"
        >
          <Phone size={18} />
          <span>Call Now</span>
        </a>

        {/* WhatsApp */}
        <a
          href={`https://wa.me/${CLINIC_INFO.whatsappNumber}?text=${whatsappMessage}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mobile-action-btn mobile-whatsapp-btn"
          aria-label="Message clinic on WhatsApp"
        >
          <MessageCircle size={18} />
          <span>WhatsApp</span>
        </a>

        {/* Book Appointment */}
        <button
          type="button"
          onClick={handleBookClick}
          className="mobile-action-btn mobile-book-btn"
          aria-label="Book appointment"
        >
          <Calendar size={18} />
          <span>Book Visit</span>
        </button>
      </div>
    </aside>
  )
}
