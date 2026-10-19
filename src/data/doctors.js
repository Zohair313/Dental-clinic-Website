/**
 * DOCTORS ARRAY
 * -------------------------------------------------------------
 * Note to Clinic Admin:
 * The names and credentials below are clearly-marked PLACEHOLDERS.
 * To update with your real doctors:
 * 1. Replace the placeholder names (e.g., "Dr. [First Last]") with real names.
 * 2. Put real photos into /public/doctors/ (doctor-1.jpg, doctor-2.jpg, etc.)
 *    or update the `image` field with any URL.
 * 3. Update qualifications and consultation timings.
 * -------------------------------------------------------------
 */

export const DOCTORS = [
  {
    id: 'dr-lead-physician',
    name: 'Dr. [Placeholder: Senior Physician]',
    role: 'Consultant General Physician',
    qualifications: 'MBBS, FCPS (Internal Medicine) · [Placeholder]',
    experience: '14+ Years Clinical Experience',
    availability: 'Mon – Sat · 9:00 AM – 3:00 PM',
    badge: 'Available Today',
    image: '/doctors/doctor-1.jpg',
    initials: 'SP',
    gender: 'female',
    bio: 'Senior primary care consultant with extensive experience managing metabolic disorders, chronic hypertension, respiratory conditions, and preventative executive health checks in DHA Karachi.',
    languages: ['English', 'Urdu'],
    specialties: ['Primary Care', 'Diabetes & Hypertension', 'Preventive Health'],
  },
  {
    id: 'dr-er-head',
    name: 'Dr. [Placeholder: ER Specialist]',
    role: 'Chief Emergency Medical Officer',
    qualifications: 'MBBS, MCPS (Emergency Medicine) · [Placeholder]',
    experience: '11+ Years Clinical Experience',
    availability: '24/7 Emergency Triage Rotation',
    badge: '24/7 On Duty',
    image: '/doctors/doctor-2.jpg',
    initials: 'ER',
    gender: 'male',
    bio: 'Lead trauma and acute resuscitation specialist directing our round-the-clock emergency team. Expert in rapid medical assessment, vital stabilization, and immediate critical response.',
    languages: ['English', 'Urdu'],
    specialties: ['Emergency Trauma', 'Resuscitation', 'Acute Pain Management'],
  },
  {
    id: 'dr-pediatrician',
    name: 'Dr. [Placeholder: Pediatrician]',
    role: 'Consultant Pediatrician & Neonatologist',
    qualifications: 'MBBS, DCH, MRCPCH · [Placeholder]',
    experience: '13+ Years Clinical Experience',
    availability: 'Mon, Wed, Fri · 4:00 PM – 8:00 PM',
    badge: 'Child Specialist',
    image: '/doctors/doctor-3.jpg',
    initials: 'PD',
    gender: 'female',
    bio: 'Dedicated to pediatric wellness from infancy through adolescence. Specializes in developmental tracking, gentle childhood immunizations, and urgent treatment of pediatric infections.',
    languages: ['English', 'Urdu', 'Sindhi'],
    specialties: ['Infant Care', 'Vaccinations', 'Pediatric Infections'],
  },
  {
    id: 'dr-trauma-surgeon',
    name: 'Dr. [Placeholder: Trauma Surgeon]',
    role: 'Specialist in Minor Surgery & Wound Care',
    qualifications: 'MBBS, FRCS (General Surgery) · [Placeholder]',
    experience: '16+ Years Clinical Experience',
    availability: 'Daily · On-Call & Scheduled Procedures',
    badge: 'Procedure Specialist',
    image: '/doctors/doctor-4.jpg',
    initials: 'TS',
    gender: 'male',
    bio: 'Specialist in outpatient sterile procedures including precise cosmetic laceration stitching, foreign body extraction, aseptic abscess care, and complex burn dressings.',
    languages: ['English', 'Urdu'],
    specialties: ['Cosmetic Suturing', 'Wound Management', 'Minor Procedures'],
  },
  {
    id: 'dr-dental-lead',
    name: 'Dr. [Placeholder: Dental Surgeon]',
    role: 'Dental Surgeon & Oral Health Specialist',
    qualifications: 'BDS, RDS (Oral Surgery) · [Placeholder]',
    experience: '10+ Years Clinical Experience',
    availability: 'Tue, Thu, Sat · 11:00 AM – 7:00 PM',
    badge: 'Dental Suite',
    image: '/doctors/doctor-5.jpg',
    initials: 'DS',
    gender: 'female',
    bio: 'Focused on gentle, pain-free dental care. Provides full oral hygiene examinations, restorative fillings, root canal therapy, teeth whitening, and emergency dental pain relief.',
    languages: ['English', 'Urdu'],
    specialties: ['Restorative Dentistry', 'Root Canals', 'Teeth Whitening'],
  },
  {
    id: 'dr-gynaecologist',
    name: 'Dr. [Placeholder: Consultant Gynecologist]',
    role: 'Consultant Obstetrician & Gynecologist',
    qualifications: 'MBBS, FCPS (Obs & Gynae) · [Placeholder]',
    experience: '15+ Years Clinical Experience',
    availability: 'Mon – Fri · 10:00 AM – 2:00 PM',
    badge: 'Women’s Health Lead',
    image: '/doctors/doctor-6.jpg',
    initials: 'GY',
    gender: 'female',
    bio: 'Compassionate lead for our women’s clinic. Guides patients through antenatal care, hormonal balancing, PCOS therapies, well-woman screenings, and confidential reproductive wellness.',
    languages: ['English', 'Urdu'],
    specialties: ['Antenatal Care', 'PCOS Management', 'Well-Woman Health'],
  },
]
