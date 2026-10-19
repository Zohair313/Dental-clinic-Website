import React from 'react'
import { ShieldCheck } from 'lucide-react'
import { INSURANCE_PARTNERS } from '../data/insurance'

export default function InsuranceStrip() {
  // Duplicate array to create a seamless infinite marquee effect
  const marqueeItems = [...INSURANCE_PARTNERS, ...INSURANCE_PARTNERS]

  return (
    <section className="insurance-strip-section" aria-label="Insurance and Panel Partners">
      <div className="container insurance-heading-container">
        <div className="insurance-badge-title">
          <ShieldCheck size={18} className="text-accent" />
          <span>ACCEPTED CORPORATE PANELS &amp; HEALTH INSURANCE PROVIDERS</span>
        </div>
      </div>

      <div className="marquee-wrapper" aria-hidden="true">
        <div className="marquee-track">
          {marqueeItems.map((partner, index) => (
            <div key={index} className="marquee-item">
              <div className="partner-logo-box">
                <span className="partner-code">{partner.code}</span>
                <span className="partner-name">{partner.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="container text-center insurance-subnote">
        <p>Cashless direct billing &amp; instant itemized reimbursement claims processed on site.</p>
      </div>
    </section>
  )
}
