import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Calendar, Clock, Award, Languages, ChevronRight, Check } from 'lucide-react'
import { DOCTORS } from '../data/doctors'
import FallbackAvatar from './FallbackAvatar'

function DoctorCard({ doctor, onBookDoctor, index }) {
  const [imageError, setImageError] = useState(false)

  return (
    <motion.div
      className="doctor-card"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      {/* Photo Frame with Fallback Handling */}
      <div className="doctor-image-container">
        {!imageError ? (
          <img
            src={doctor.image}
            alt={`${doctor.name} - ${doctor.role}`}
            className="doctor-image"
            onError={() => setImageError(true)}
            loading="lazy"
            width="320"
            height="320"
          />
        ) : (
          <FallbackAvatar initials={doctor.initials} name={doctor.name} size={140} />
        )}

        {/* Availability Badge */}
        <div className="doctor-availability-badge">
          <span className="availability-dot" aria-hidden="true" />
          <span>{doctor.badge}</span>
        </div>

        {/* Hover Bio Overlay */}
        <div className="doctor-bio-overlay">
          <div className="overlay-inner">
            <h4 className="overlay-heading">Clinical Background</h4>
            <p className="overlay-bio">{doctor.bio}</p>
            <div className="overlay-languages">
              <Languages size={15} className="text-accent" />
              <span>Languages: {doctor.languages.join(', ')}</span>
            </div>
            <div className="overlay-specialties">
              {doctor.specialties.map((spec, sIdx) => (
                <span key={sIdx} className="specialty-pill">
                  {spec}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Doctor Information */}
      <div className="doctor-info">
        <h3 className="doctor-name">{doctor.name}</h3>
        <p className="doctor-role">{doctor.role}</p>

        <div className="doctor-qualifications">
          <Award size={14} className="text-accent" />
          <span>{doctor.qualifications}</span>
        </div>

        <div className="doctor-timings">
          <Clock size={14} className="text-muted" />
          <span>{doctor.availability}</span>
        </div>

        {/* Book Button */}
        <button
          type="button"
          className="btn btn-outline btn-sm btn-block doctor-book-btn"
          onClick={() => onBookDoctor(doctor.name)}
          aria-label={`Book an appointment with ${doctor.name}`}
        >
          <Calendar size={15} />
          <span>Book with this Physician</span>
          <ChevronRight size={14} />
        </button>
      </div>
    </motion.div>
  )
}

export default function Doctors({ onSelectDoctorForBooking }) {
  const handleBookDoctor = (doctorName) => {
    if (onSelectDoctorForBooking) {
      onSelectDoctorForBooking(doctorName)
    }
    const formEl = document.getElementById('appointment')
    if (formEl) {
      formEl.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="doctors" className="section-padding doctors-section" aria-labelledby="doctors-heading">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center">
          <div className="section-kicker">Clinical Leadership</div>
          <h2 id="doctors-heading" className="section-title">
            Our Specialist Medical Team
          </h2>
          <p className="section-subtitle">
            Consult with credentialed physicians, pediatricians, surgeons, and gynecologists.
            All consult rooms are private and designed for unhurried clinical attention.
          </p>
        </div>

        {/* Doctor Cards Grid */}
        <div className="doctors-grid">
          {DOCTORS.map((doctor, index) => (
            <DoctorCard
              key={doctor.id}
              doctor={doctor}
              index={index}
              onBookDoctor={handleBookDoctor}
            />
          ))}
        </div>

        {/* Transparency Admin Note / Assurance */}
        <div className="doctors-admin-notice">
          <p>
            <strong>Note for Patients:</strong> Doctor names and photos above serve as sample profiles.
            Senior on-duty consultants and emergency specialists are available on site 24 hours a day.
          </p>
        </div>
      </div>
    </section>
  )
}
