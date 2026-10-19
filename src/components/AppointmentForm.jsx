import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Calendar,
  Clock,
  User,
  Phone,
  Stethoscope,
  Send,
  CheckCircle2,
  AlertCircle,
  MessageSquare,
  Sparkles,
  ExternalLink,
} from 'lucide-react'
import { CLINIC_INFO } from '../data/clinicInfo'
import { SERVICES } from '../data/services'
import { DOCTORS } from '../data/doctors'

export default function AppointmentForm({ initialService = '', initialDoctor = '' }) {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    service: '',
    doctor: '',
    date: '',
    timeSlot: 'Morning (9:00 AM – 1:00 PM)',
    message: '',
  })

  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [submittedData, setSubmittedData] = useState(null)

  // Sync external prefilled service / doctor
  useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, service: initialService }))
    }
  }, [initialService])

  useEffect(() => {
    if (initialDoctor) {
      setFormData((prev) => ({ ...prev, doctor: initialDoctor }))
    }
  }, [initialDoctor])

  // Get today's date formatted as YYYY-MM-DD for min date
  const todayStr = new Date().toISOString().split('T')[0]

  const validate = () => {
    const newErrors = {}
    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Please enter your full name.'
    }

    // Phone validation (relaxed for Pakistani phone formats e.g. 03xx-xxxxxxx, +923xx..., 021-3524...)
    const phoneClean = formData.phone.replace(/[\s\-()]/g, '')
    if (!phoneClean) {
      newErrors.phone = 'Phone number is required.'
    } else if (phoneClean.length < 9) {
      newErrors.phone = 'Please enter a valid phone number (e.g. 0300 1234567).'
    }

    if (!formData.service) {
      newErrors.service = 'Please select a service.'
    }

    if (!formData.date) {
      newErrors.date = 'Please select a preferred date.'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validate()) return

    setIsSubmitting(true)

    /**
     * -------------------------------------------------------------
     * TODO: Connect real backend API endpoint here.
     * Example:
     * const res = await fetch('/api/appointments', {
     *   method: 'POST',
     *   headers: { 'Content-Type': 'application/json' },
     *   body: JSON.stringify(formData),
     * });
     * -------------------------------------------------------------
     */

    // Simulate swift client processing and prep prefilled messaging link
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setSubmittedData({ ...formData })

      // Generate pre-filled WhatsApp message
      const text = `*New Appointment Request - The Western Clinic (DHA Phase 8)*\n\n` +
        `👤 *Patient:* ${formData.fullName}\n` +
        `📞 *Phone:* ${formData.phone}\n` +
        `🩺 *Service:* ${formData.service}\n` +
        `👨‍⚕️ *Doctor:* ${formData.doctor || 'Any Available Specialist'}\n` +
        `📅 *Date:* ${formData.date}\n` +
        `⏰ *Slot:* ${formData.timeSlot}\n` +
        (formData.message ? `💬 *Notes:* ${formData.message}\n` : '') +
        `\n_Sent via thewesternclinic.com landing page._`

      const encodedText = encodeURIComponent(text)
      const whatsappUrl = `https://wa.me/${CLINIC_INFO.whatsappNumber}?text=${encodedText}`

      // Open WhatsApp in new tab for immediate client confirmation
      try {
        window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
      } catch (err) {
        console.warn('Could not automatically open WhatsApp window:', err)
      }
    }, 500)
  }

  const handleReset = () => {
    setIsSubmitted(false)
    setSubmittedData(null)
    setFormData({
      fullName: '',
      phone: '',
      service: '',
      doctor: '',
      date: '',
      timeSlot: 'Morning (9:00 AM – 1:00 PM)',
      message: '',
    })
    setErrors({})
  }

  return (
    <section id="appointment" className="section-padding appointment-section" aria-labelledby="appointment-heading">
      <div className="container">
        <div className="appointment-wrapper">
          {/* Left Info Panel */}
          <div className="appointment-info-col">
            <div className="section-kicker">Schedule Your Care</div>
            <h2 id="appointment-heading" className="appointment-title">
              Book a Consultation or Medical Visit
            </h2>
            <p className="appointment-lead">
              Fill out the form to reserve a slot with our physicians or diagnostic teams.
              Walk-ins and acute emergencies are received immediately 24/7 without booking.
            </p>

            <div className="appointment-perks-list">
              <div className="perk-item">
                <CheckCircle2 size={18} className="text-accent" />
                <span>Instant confirmation via WhatsApp or phone call</span>
              </div>
              <div className="perk-item">
                <CheckCircle2 size={18} className="text-accent" />
                <span>Zero pre-payment required — pay after your consult</span>
              </div>
              <div className="perk-item">
                <CheckCircle2 size={18} className="text-accent" />
                <span>Option to request female physician or pediatric specialist</span>
              </div>
            </div>

            <div className="appointment-call-direct-card">
              <div className="direct-card-icon">
                <Phone size={22} />
              </div>
              <div>
                <strong>Prefer speaking to our receptionist?</strong>
                <p>Call anytime day or night for immediate slot assignment:</p>
                <a href={`tel:${CLINIC_INFO.phoneTel}`} className="direct-phone-link">
                  {CLINIC_INFO.phoneDisplay}
                </a>
              </div>
            </div>
          </div>

          {/* Right Form Container */}
          <div className="appointment-form-col">
            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="booking-form"
                  className="appointment-form-card"
                  onSubmit={handleSubmit}
                  noValidate
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.4 }}
                >
                  <h3 className="form-card-title">Appointment Details</h3>
                  <p className="form-card-sub">All details remain strictly confidential.</p>

                  {/* 1-Tap Quick Booking Reason Chips */}
                  <div className="quick-chips-wrapper">
                    <span className="quick-chips-label">Quick Select Reason:</span>
                    <div className="quick-chips-list">
                      {[
                        { label: '🚨 Urgent Care', service: 'Emergency Care', note: 'Urgent evaluation & first aid' },
                        { label: '🩸 Lab & Blood Work', service: 'Lab & Diagnostics', note: 'Diagnostic tests & same-day results' },
                        { label: '👶 Pediatric Visit', service: 'Pediatrics & Child Health', note: 'Child checkup & immunizations' },
                        { label: '👩‍⚕️ Women’s Health', service: 'Gynecology & Women’s Health', note: 'Consultation & checkup' },
                        { label: '🩺 General Physician', service: 'General Medicine', note: 'Primary consultation' },
                      ].map((chip) => (
                        <button
                          key={chip.label}
                          type="button"
                          className={`quick-chip-btn ${formData.service === chip.service ? 'is-selected' : ''}`}
                          onClick={() => {
                            setFormData((prev) => ({
                              ...prev,
                              service: chip.service,
                              date: prev.date || todayStr,
                              message: prev.message || chip.note,
                            }))
                            if (errors.service) setErrors((prev) => ({ ...prev, service: undefined }))
                            if (errors.date) setErrors((prev) => ({ ...prev, date: undefined }))
                          }}
                        >
                          {chip.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="form-grid">
                    {/* Full Name */}
                    <div className="form-group">
                      <label htmlFor="fullName" className="form-label">
                        Full Name <span className="req">*</span>
                      </label>
                      <div className="input-wrap">
                        <User size={18} className="input-icon" />
                        <input
                          type="text"
                          id="fullName"
                          name="fullName"
                          className={`form-input ${errors.fullName ? 'has-error' : ''}`}
                          placeholder="e.g. Ayesha Khan"
                          value={formData.fullName}
                          onChange={handleChange}
                          autoComplete="name"
                          required
                        />
                      </div>
                      {errors.fullName && (
                        <p className="field-error" role="alert">
                          <AlertCircle size={14} /> {errors.fullName}
                        </p>
                      )}
                    </div>

                    {/* Phone Number */}
                    <div className="form-group">
                      <label htmlFor="phone" className="form-label">
                        Phone / WhatsApp Number <span className="req">*</span>
                      </label>
                      <div className="input-wrap">
                        <Phone size={18} className="input-icon" />
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          className={`form-input ${errors.phone ? 'has-error' : ''}`}
                          placeholder="e.g. 0300 1234567"
                          value={formData.phone}
                          onChange={handleChange}
                          autoComplete="tel"
                          required
                        />
                      </div>
                      {errors.phone && (
                        <p className="field-error" role="alert">
                          <AlertCircle size={14} /> {errors.phone}
                        </p>
                      )}
                    </div>

                    {/* Service Selection */}
                    <div className="form-group">
                      <label htmlFor="service" className="form-label">
                        Select Service <span className="req">*</span>
                      </label>
                      <div className="input-wrap">
                        <Stethoscope size={18} className="input-icon" />
                        <select
                          id="service"
                          name="service"
                          className={`form-select ${errors.service ? 'has-error' : ''}`}
                          value={formData.service}
                          onChange={handleChange}
                          required
                        >
                          <option value="">-- Choose a Clinical Service --</option>
                          {SERVICES.map((s) => (
                            <option key={s.id} value={s.title}>
                              {s.title}
                            </option>
                          ))}
                        </select>
                      </div>
                      {errors.service && (
                        <p className="field-error" role="alert">
                          <AlertCircle size={14} /> {errors.service}
                        </p>
                      )}
                    </div>

                    {/* Doctor Selection (Optional) */}
                    <div className="form-group">
                      <label htmlFor="doctor" className="form-label">
                        Preferred Doctor <span className="opt">(Optional)</span>
                      </label>
                      <div className="input-wrap">
                        <User size={18} className="input-icon" />
                        <select
                          id="doctor"
                          name="doctor"
                          className="form-select"
                          value={formData.doctor}
                          onChange={handleChange}
                        >
                          <option value="">Any Available Specialist / Next on Duty</option>
                          {DOCTORS.map((d) => (
                            <option key={d.id} value={d.name}>
                              {d.name} ({d.role})
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Preferred Date */}
                    <div className="form-group">
                      <label htmlFor="date" className="form-label">
                        Preferred Date <span className="req">*</span>
                      </label>
                      <div className="input-wrap">
                        <Calendar size={18} className="input-icon" />
                        <input
                          type="date"
                          id="date"
                          name="date"
                          min={todayStr}
                          className={`form-input ${errors.date ? 'has-error' : ''}`}
                          value={formData.date}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      {errors.date && (
                        <p className="field-error" role="alert">
                          <AlertCircle size={14} /> {errors.date}
                        </p>
                      )}
                    </div>

                    {/* Preferred Time Slot */}
                    <div className="form-group">
                      <label htmlFor="timeSlot" className="form-label">
                        Preferred Time Window
                      </label>
                      <div className="input-wrap">
                        <Clock size={18} className="input-icon" />
                        <select
                          id="timeSlot"
                          name="timeSlot"
                          className="form-select"
                          value={formData.timeSlot}
                          onChange={handleChange}
                        >
                          <option value="Morning (9:00 AM – 1:00 PM)">Morning (9:00 AM – 1:00 PM)</option>
                          <option value="Afternoon (1:00 PM – 5:00 PM)">Afternoon (1:00 PM – 5:00 PM)</option>
                          <option value="Evening (5:00 PM – 9:00 PM)">Evening (5:00 PM – 9:00 PM)</option>
                          <option value="Night (9:00 PM – 12:00 AM)">Night (9:00 PM – 12:00 AM)</option>
                          <option value="24/7 Urgent Walk-In">Urgent / Immediate Walk-in</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Notes / Symptoms */}
                  <div className="form-group full-width">
                    <label htmlFor="message" className="form-label">
                      Brief Symptoms or Notes <span className="opt">(Optional)</span>
                    </label>
                    <div className="input-wrap">
                      <MessageSquare size={18} className="input-icon textarea-icon" />
                      <textarea
                        id="message"
                        name="message"
                        rows="3"
                        className="form-textarea"
                        placeholder="e.g. Fever since 2 days, need routine blood checkup or stitch check..."
                        value={formData.message}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="form-submit-row">
                    <button
                      type="submit"
                      className="btn btn-primary btn-lg btn-block"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span>Processing Request...</span>
                      ) : (
                        <>
                          <Send size={18} />
                          <span>Request Appointment via WhatsApp</span>
                        </>
                      )}
                    </button>
                    <p className="form-privacy-note">
                      Submitting initiates an instant prefilled chat with our clinic reception.
                    </p>
                  </div>
                </motion.form>
              ) : (
                /* Animated Success State */
                <motion.div
                  key="success-card"
                  className="appointment-success-card"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="success-icon-wrap">
                    <CheckCircle2 size={54} className="text-accent" />
                  </div>
                  <h3 className="success-title">Appointment Request Created!</h3>
                  <p className="success-desc">
                    Thank you, <strong>{submittedData.fullName}</strong>. We have prepared your request
                    and opened our reception WhatsApp channel.
                  </p>

                  <div className="success-summary-box">
                    <div className="summary-row">
                      <span>Service:</span>
                      <strong>{submittedData.service}</strong>
                    </div>
                    {submittedData.doctor && (
                      <div className="summary-row">
                        <span>Physician:</span>
                        <strong>{submittedData.doctor}</strong>
                      </div>
                    )}
                    <div className="summary-row">
                      <span>Preferred Date:</span>
                      <strong>{submittedData.date}</strong>
                    </div>
                    <div className="summary-row">
                      <span>Slot:</span>
                      <strong>{submittedData.timeSlot}</strong>
                    </div>
                    <div className="summary-row">
                      <span>Phone:</span>
                      <strong>{submittedData.phone}</strong>
                    </div>
                  </div>

                  <div className="success-actions">
                    <a
                      href={`https://wa.me/${CLINIC_INFO.whatsappNumber}?text=${encodeURIComponent(
                        `Hi Western Clinic, I submitted an appointment request for ${submittedData.fullName} on ${submittedData.date} for ${submittedData.service}. Please confirm my slot.`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary btn-block"
                    >
                      <span>Open WhatsApp Chat Directly</span>
                      <ExternalLink size={16} />
                    </a>
                    <button
                      type="button"
                      className="btn btn-outline btn-block"
                      onClick={handleReset}
                    >
                      Book Another Visit
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}
