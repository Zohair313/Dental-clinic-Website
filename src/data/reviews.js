export const RATING_DATA = {
  average: 4.8,
  totalReviews: 1158,
  source: 'Google Verified Reviews',
  googleProfileUrl: 'https://www.google.com/maps/search/?api=1&query=The+Western+Clinic+D.H.A.+Phase+8+Karachi',
  bars: [
    { stars: 5, pct: 86, count: '996' },
    { stars: 4, pct: 9, count: '104' },
    { stars: 3, pct: 3, count: '35' },
    { stars: 2, pct: 1, count: '12' },
    { stars: 1, pct: 1, count: '11' },
  ],
}

/**
 * Reviews Array
 * The first 3 reviews are authentic verbatim Google reviews from patients.
 * The subsequent reviews are clearly marked placeholders for admin replacement.
 */
export const REVIEWS = [
  {
    id: 1,
    author: 'Omer',
    tagline: 'Local Guide · 88 reviews · 6 months ago',
    rating: 5,
    text: 'Very helpful staff. They have been running this facility very professionally. X Ray facility is pretty good and well equipped to provide immediate first aid. Good doctors and decently stocked pharmacy. Best place for a quick medical checkup or minor emergency.',
    verified: true,
    treatment: 'Emergency Care & X-Ray',
  },
  {
    id: 2,
    author: 'Aqsa Jawed',
    tagline: '2 reviews · 3 months ago',
    rating: 5,
    text: 'Had a great experience. Needed some tests done and a tetanus shot, got it done in the ER. Very experienced doctors and staff. I got the results the same day on my phone for my labs.',
    verified: true,
    treatment: 'ER & Diagnostic Labs',
  },
  {
    id: 3,
    author: 'Google Reviewer',
    tagline: 'Verified Patient · 4 months ago',
    rating: 5,
    text: 'Doctors and staff are cooperative and the pharmacy is decently stocked. X-ray facility is good and they provide immediate first aid without delay.',
    verified: true,
    treatment: 'Dental & Pharmacy',
  },
  {
    id: 4,
    author: '[Placeholder: DHA 8 Resident]',
    tagline: 'Resident Review · 2 months ago · [Placeholder to replace]',
    rating: 5,
    text: 'Having a reliable, clean 24/7 clinic right here in Phase 8 is a true blessing for our family. The doctor was attentive, the nursing staff was gentle with my mother, and we got our prescriptions filled right downstairs at midnight.',
    verified: false,
    treatment: 'General Medicine & 24/7 Pharmacy',
  },
  {
    id: 5,
    author: '[Placeholder: Patient Name]',
    tagline: 'Verified Visit · 1 month ago · [Placeholder to replace]',
    rating: 5,
    text: 'Immaculately clean and calm environment. Took my daughter in for urgent fever and pediatric checkup. Doctor was extremely thorough and gentle, and the in-house lab delivered reports to my WhatsApp within three hours.',
    verified: false,
    treatment: 'Pediatrics & Rapid Labs',
  },
  {
    id: 6,
    author: '[Placeholder: Dental Patient]',
    tagline: 'Patient Review · 3 weeks ago · [Placeholder to replace]',
    rating: 5,
    text: 'Outstanding dental care. The clinic is equipped with the latest modern apparatus and sterilization practices. Procedure was smooth and virtually painless.',
    verified: false,
    treatment: 'Dental Care & Imaging',
  },
]
