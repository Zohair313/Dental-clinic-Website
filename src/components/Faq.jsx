import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus, HelpCircle, PhoneCall } from 'lucide-react'
import { FAQ_ITEMS } from '../data/faq'
import { CLINIC_INFO } from '../data/clinicInfo'

export default function Faq() {
  const [openIds, setOpenIds] = useState(['faq-1']) // first item open by default

  const toggleFaq = (id) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    )
  }

  return (
    <section id="faq" className="section-padding faq-section" aria-labelledby="faq-heading">
      <div className="container">
        {/* Header */}
        <div className="section-header text-center">
          <div className="section-kicker">Common Inquiries</div>
          <h2 id="faq-heading" className="section-title">
            Frequently Asked Questions
          </h2>
          <p className="section-subtitle">
            Everything you need to know about visiting The Western Clinic in D.H.A. Phase 8.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="faq-accordion-wrapper">
          {FAQ_ITEMS.map((faq, index) => {
            const isOpen = openIds.includes(faq.id)
            return (
              <motion.div
                key={faq.id}
                className={`faq-accordion-item ${isOpen ? 'is-open' : ''}`}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <button
                  type="button"
                  className="faq-question-btn"
                  onClick={() => toggleFaq(faq.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${faq.id}`}
                  id={`faq-btn-${faq.id}`}
                >
                  <span className="faq-question-text">{faq.question}</span>
                  <span className="faq-toggle-icon" aria-hidden="true">
                    {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${faq.id}`}
                      role="region"
                      aria-labelledby={`faq-btn-${faq.id}`}
                      className="faq-answer-collapse"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <div className="faq-answer-content">
                        <p>{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )
          })}
        </div>

        {/* FAQ Support Footer */}
        <div className="faq-support-box">
          <div className="support-icon-wrap">
            <HelpCircle size={28} className="text-accent" />
          </div>
          <div className="support-text">
            <h4>Have another medical inquiry or specific question?</h4>
            <p>Our front desk staff is available on WhatsApp and phone around the clock.</p>
          </div>
          <a href={`tel:${CLINIC_INFO.phoneTel}`} className="btn btn-primary btn-sm">
            <PhoneCall size={16} />
            <span>Call +92 21 35249039</span>
          </a>
        </div>
      </div>
    </section>
  )
}
