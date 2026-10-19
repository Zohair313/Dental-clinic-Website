import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, ChevronLeft, ChevronRight, Quote, CheckCircle, ExternalLink } from 'lucide-react'
import { REVIEWS, RATING_DATA } from '../data/reviews'

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const touchStartX = useRef(null)

  // Autoplay timer (5 seconds)
  useEffect(() => {
    if (isPaused) return
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % REVIEWS.length)
    }, 5500)
    return () => clearInterval(timer)
  }, [isPaused])

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % REVIEWS.length)
  }

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + REVIEWS.length) % REVIEWS.length)
  }

  // Touch Swipe Handlers for mobile
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX
  }

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return
    const touchEndX = e.changedTouches[0].clientX
    const diff = touchStartX.current - touchEndX
    if (diff > 45) {
      handleNext()
    } else if (diff < -45) {
      handlePrev()
    }
    touchStartX.current = null
  }

  const activeReview = REVIEWS[currentIndex]

  return (
    <section id="reviews" className="section-padding reviews-section" aria-labelledby="reviews-heading">
      <div className="container">
        {/* Section Header */}
        <div className="section-header text-center">
          <div className="section-kicker">Patient Experiences</div>
          <h2 id="reviews-heading" className="section-title">
            Trusted by 1,158+ Verified Patients
          </h2>
          <p className="section-subtitle">
            Authentic Google reviews from residents of D.H.A. Phase 8, Clifton, and across Karachi.
          </p>
        </div>

        <div className="reviews-layout">
          {/* Left Column: Google Rating Scorecard & Animated Bars */}
          <motion.div
            className="rating-scorecard"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.6 }}
          >
            <div className="scorecard-header">
              <div className="google-official-badge">
                <svg viewBox="0 0 24 24" width="22" height="22" className="google-icon" aria-hidden="true">
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
                <span>Google Reviews</span>
              </div>

              <div className="big-rating-score">
                <span className="score-num">{RATING_DATA.average}</span>
                <span className="score-denom">/ 5.0</span>
              </div>

              <div className="scorecard-stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={22} fill="#f59e0b" color="#f59e0b" />
                ))}
              </div>

              <p className="scorecard-count">
                Based on <strong>{RATING_DATA.totalReviews.toLocaleString()}</strong> verified patient ratings
              </p>
            </div>

            {/* Rating Breakdown Bars */}
            <div className="rating-bars-container">
              {RATING_DATA.bars.map((bar) => (
                <div key={bar.stars} className="rating-bar-row">
                  <span className="bar-star-num">
                    {bar.stars} <Star size={12} fill="currentColor" color="currentColor" />
                  </span>
                  <div className="bar-track">
                    <motion.div
                      className="bar-fill"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${bar.pct}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.9, delay: 0.2 + (5 - bar.stars) * 0.1 }}
                    />
                  </div>
                  <span className="bar-percentage">{bar.pct}%</span>
                </div>
              ))}
            </div>

            {/* Google Profile Link */}
            <a
              href={RATING_DATA.googleProfileUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="google-profile-btn"
            >
              <span>View all reviews on Google Maps</span>
              <ExternalLink size={15} />
            </a>
          </motion.div>

          {/* Right Column: Carousel */}
          <div
            className="reviews-carousel-col"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div className="carousel-card-wrapper">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeReview.id}
                  className="carousel-testimonial-card"
                  initial={{ opacity: 0, x: 25 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -25 }}
                  transition={{ duration: 0.4 }}
                >
                  <div className="card-quote-icon">
                    <Quote size={36} aria-hidden="true" />
                  </div>

                  {/* Stars & Treatment */}
                  <div className="card-top-meta">
                    <div className="stars-row">
                      {[...Array(activeReview.rating)].map((_, i) => (
                        <Star key={i} size={18} fill="#f59e0b" color="#f59e0b" />
                      ))}
                    </div>
                    {activeReview.treatment && (
                      <span className="treatment-badge">{activeReview.treatment}</span>
                    )}
                  </div>

                  {/* Quote Body */}
                  <blockquote className="testimonial-text">
                    “{activeReview.text}”
                  </blockquote>

                  {/* Author Meta */}
                  <div className="testimonial-author">
                    <div className="author-avatar-circle">
                      {activeReview.author.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <div className="author-name-row">
                        <strong className="author-name">{activeReview.author}</strong>
                        {activeReview.verified && (
                          <span className="verified-pill" title="Verified Google Review">
                            <CheckCircle size={13} /> Verified
                          </span>
                        )}
                      </div>
                      <span className="author-tagline">{activeReview.tagline}</span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Carousel Controls */}
            <div className="carousel-controls-row">
              {/* Pagination Dots */}
              <div className="carousel-dots" role="tablist" aria-label="Review Carousel Pagination">
                {REVIEWS.map((r, idx) => (
                  <button
                    key={r.id}
                    type="button"
                    role="tab"
                    aria-selected={currentIndex === idx}
                    aria-label={`Go to review ${idx + 1} by ${r.author}`}
                    className={`carousel-dot ${currentIndex === idx ? 'is-active' : ''}`}
                    onClick={() => setCurrentIndex(idx)}
                  />
                ))}
              </div>

              {/* Prev / Next Buttons */}
              <div className="carousel-arrows">
                <button
                  type="button"
                  className="carousel-arrow-btn"
                  onClick={handlePrev}
                  aria-label="Previous patient review"
                >
                  <ChevronLeft size={20} />
                </button>
                <button
                  type="button"
                  className="carousel-arrow-btn"
                  onClick={handleNext}
                  aria-label="Next patient review"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
