import React, { useState, useEffect } from 'react'
import ScrollProgressBar from './components/ScrollProgressBar'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustBar from './components/TrustBar'
import About from './components/About'
import Services from './components/Services'
import Doctors from './components/Doctors'
import WhyChooseUs from './components/WhyChooseUs'
import HowItWorks from './components/HowItWorks'
import EmergencyBand from './components/EmergencyBand'
import AppointmentForm from './components/AppointmentForm'
import Reviews from './components/Reviews'
import Gallery from './components/Gallery'
import InsuranceStrip from './components/InsuranceStrip'
import Faq from './components/Faq'
import Visit from './components/Visit'
import Footer from './components/Footer'
import FloatingMobileBar from './components/FloatingMobileBar'

export default function App() {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('twc-theme')
    if (saved) return saved
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light'
  })

  const [bookingService, setBookingService] = useState('')
  const [bookingDoctor, setBookingDoctor] = useState('')

  // Sync theme changes to data-theme attribute and localStorage
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('twc-theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }

  const handleSelectService = (serviceTitle) => {
    setBookingService(serviceTitle)
  }

  const handleSelectDoctor = (doctorName) => {
    setBookingDoctor(doctorName)
  }

  const handleOpenAppointment = () => {
    const el = document.getElementById('appointment')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="app-root">
      {/* 17. Scroll-progress bar at top */}
      <ScrollProgressBar />

      {/* Accessible Skip Link */}
      <a href="#main" className="skip-link">
        Skip to main healthcare content
      </a>

      {/* 1. Sticky Nav */}
      <Navbar
        theme={theme}
        onToggleTheme={toggleTheme}
        onOpenAppointment={handleOpenAppointment}
      />

      {/* 2. Hero Section */}
      <Hero onOpenAppointment={handleOpenAppointment} />

      {/* Main Content Area */}
      <main id="main">
        {/* 3. Trust Bar */}
        <TrustBar />

        {/* 4. About the Clinic */}
        <About />

        {/* 5. Comprehensive Clinical Services (8-9 cards + modal) */}
        <Services onSelectServiceForBooking={handleSelectService} />

        {/* 6. Doctors / Specialist Team (grid + bio hover + fallback avatar) */}
        <Doctors onSelectDoctorForBooking={handleSelectDoctor} />

        {/* 7. Why Choose Us (4-6 feature blocks with animated icons) */}
        <WhyChooseUs />

        {/* 8. How It Works (3-step timeline) */}
        <HowItWorks />

        {/* 9. Emergency Band (pulsing phone, 24/7 call prompt) */}
        <EmergencyBand />

        {/* 10. Appointment Form (client validation, WhatsApp link, API TODO) */}
        <AppointmentForm
          initialService={bookingService}
          initialDoctor={bookingDoctor}
        />

        {/* 11. Patient Reviews (carousel + animated rating bars + Google badge) */}
        <Reviews />

        {/* 12. Clinic Photos Gallery (masonry + lightbox) */}
        <Gallery />

        {/* 13. Insurance / Panel Partners Marquee */}
        <InsuranceStrip />

        {/* 14. FAQ Accordion */}
        <Faq />

        {/* 15. Visit Us (interactive map + floating status card) */}
        <Visit />
      </main>

      {/* 16. Comprehensive Footer */}
      <Footer />

      {/* 17. Floating Mobile Bottom Bar (Call | WhatsApp | Book) */}
      <FloatingMobileBar onOpenAppointment={handleOpenAppointment} />
    </div>
  )
}
