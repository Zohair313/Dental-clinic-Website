# The Western Clinic — High-End Frontend Redesign

Modern, trustworthy, responsive landing page for **The Western Clinic** (D.H.A. Phase 8, Karachi). Built with **React 19**, **Vite**, **Framer Motion**, and **Lucide React**.

## 📍 Clinic Facts & Canonical Details

| Field | Detail |
|---|---|
| **Rating** | 4.8 ★ · 1,158 verified Google reviews |
| **Hours** | Open 24 hours every day (all holidays, weekends & Eid) |
| **Address** | 29-C Al-Murtaza Commercial Ln 3, D.H.A. Phase 8, Karachi 75500 |
| **Phone** | [+92 21 35249039](tel:+922135249039) |
| **Website** | [thewesternclinic.com](https://thewesternclinic.com) |
| **Google Plus Code**| Q3RG+J5 |
| **Identity** | 100% Women-Led Healthcare Facility |

---

## 🎨 Design System

- **Palette**: Defined as CSS variables in `src/styles.css`
  - Primary: Deep luxury teal/navy (`--primary: #0a3d42`, `--primary-light: #11575e`, `--primary-dark: #06262a`)
  - Accent: Medical teal & soft mint (`--accent: #0d9488`, `--accent-mint: #2dd4bf`, `--accent-light: #e6f7f5`)
  - Background: Warm off-white surfaces (`--bg: #f8fafc`, `--card-bg: #ffffff`)
  - Emergency Red: Strictly reserved for 24/7 urgent CTAs (`--emergency-red: #dc2626`)
- **Typography**: Google Fonts loaded in `index.html`
  - Headings: `Playfair Display` (refined display serif)
  - Body & UI: `Plus Jakarta Sans` (clean, contemporary sans-serif)
- **Dark Mode**: Automatically respects `prefers-color-scheme` with manual sun/moon toggle switch preserved in `localStorage`.
- **Accessibility & Motion**: Respects `prefers-reduced-motion`, WCAG AA contrast standards, keyboard accessible modals and accordions.

---

## 🏗️ Architecture & Folder Structure

```
western-clinic-react/
├── index.html                   # HTML shell with Google Fonts, SEO meta, OpenGraph, JSON-LD Schema
├── public/
│   ├── hero-clinic.jpg          # Luxury clinic interior hero visual
│   ├── doctors/                 # Doctor placeholder portraits (swap with real photos)
│   │   ├── doctor-1.jpg
│   │   ├── doctor-2.jpg
│   │   ├── doctor-3.jpg
│   │   ├── doctor-4.jpg
│   │   ├── doctor-5.jpg
│   │   └── doctor-6.jpg
│   └── gallery/                 # Clinic interior and department photos
│       ├── reception.jpg
│       ├── pharmacy.jpg
│       ├── er-suite.jpg
│       ├── lab.jpg
│       └── dental.jpg
├── src/
│   ├── data/                    # Clean content data arrays
│   │   ├── clinicInfo.js        # Contact details, nav links, stats, trust bar items
│   │   ├── services.js          # 9 clinical specialties with details and feature checklists
│   │   ├── doctors.js           # DOCTORS array (names, roles, qualifications, timings)
│   │   ├── whyChooseUs.js       # 6 feature differentiators
│   │   ├── howItWorks.js        # 3-step timeline
│   │   ├── reviews.js           # Google rating score, distribution bars, verified quotes
│   │   ├── gallery.js           # Gallery photo metadata and lightbox descriptions
│   │   ├── insurance.js         # Panel partner data for marquee
│   │   └── faq.js               # 8 accordion Q&As
│   ├── components/              # Modular, reusable React components
│   │   ├── ScrollProgressBar.jsx # Reading progress bar at top
│   │   ├── Navbar.jsx           # Sticky nav, blur on scroll, emergency pill, theme toggle, mobile drawer
│   │   ├── Hero.jsx             # Hero headline, CTAs, animated count-up numbers, floating info cards
│   │   ├── TrustBar.jsx         # 4 trust pillars with icons
│   │   ├── About.jsx            # Clinic story, mission, women-led identity, values
│   │   ├── Services.jsx         # 9 cards with hover lift + click-to-modal
│   │   ├── ServiceModal.jsx     # Full service detail drawer & booking CTA
│   │   ├── Doctors.jsx          # Doctor cards grid, bio hover, fallback avatars, booking prefill
│   │   ├── FallbackAvatar.jsx   # SVG physician monogram avatar if photo fails to load
│   │   ├── WhyChooseUs.jsx      # 6 feature blocks with icons
│   │   ├── HowItWorks.jsx       # 3-step animated timeline
│   │   ├── EmergencyBand.jsx    # Pulsing 24/7 emergency click-to-call banner
│   │   ├── AppointmentForm.jsx  # Client-validated booking form, WhatsApp prefill, API TODO
│   │   ├── Reviews.jsx          # Testimonial carousel, pause on hover, mobile swipe, rating bars
│   │   ├── Gallery.jsx          # Masonry image grid with hover zoom
│   │   ├── LightboxModal.jsx    # Fullscreen lightbox with keyboard ESC and arrow keys
│   │   ├── InsuranceStrip.jsx   # Infinite marquee ticker of corporate & insurance panels
│   │   ├── Faq.jsx              # Animated smooth accordion with ARIA support
│   │   ├── Visit.jsx            # Interactive Google Map + floating status card
│   │   ├── Footer.jsx           # Comprehensive clinic footer & back-to-top button
│   │   └── FloatingMobileBar.jsx# Sticky mobile bottom bar (Call | WhatsApp | Book)
│   ├── App.jsx                  # Main coordinator with theme & prefill states
│   ├── main.jsx                 # React root
│   └── styles.css               # Design system tokens, dark theme, responsive breakpoints
└── package.json
```

---

## 🛠️ How to Edit Content & Replace Placeholders

### 1. Doctor Information & Photos
All doctor information is centralized in [`src/data/doctors.js`](src/data/doctors.js):
- **Names & Qualifications**: Replace `"Dr. [Placeholder: Senior Physician]"` with your doctor's real name and credentials.
- **Photos**: Drop real photos into `/public/doctors/` named `doctor-1.jpg`, `doctor-2.jpg`, etc., or update the `image` field in `src/data/doctors.js` with any relative path or image URL.
- **Graceful Avatar**: If an image fails or is missing, the component automatically falls back to an elegant physician monogram avatar (`FallbackAvatar`).

### 2. Clinical Services
Modify or add services in [`src/data/services.js`](src/data/services.js).
- Update `title`, `shortDesc`, `fullDesc`, `features`, `badge`, and `timings`.
- The modal drawer and appointment booking automatically read from this file.

### 3. Patient Reviews
Manage Google testimonials in [`src/data/reviews.js`](src/data/reviews.js):
- The first 3 reviews are verbatim verified Google reviews.
- Subsequent items are clearly marked placeholders ready to be replaced with real reviews as they are received.
- You can also adjust rating distribution percentages in `RATING_DATA.bars`.

### 4. Clinic Photos / Gallery
Place new high-resolution clinic photos in `/public/gallery/` and update metadata in [`src/data/gallery.js`](src/data/gallery.js).

### 5. Appointment Backend Integration
The appointment form in [`src/components/AppointmentForm.jsx`](src/components/AppointmentForm.jsx) performs client-side validation and opens an instant, pre-filled WhatsApp link with the appointment details.
To connect to your own backend REST or GraphQL API, search for `// TODO: Connect real backend API endpoint here.` in `AppointmentForm.jsx` and replace the placeholder with your `fetch()` or `axios` call.

---

## 🚀 Running Locally

```bash
# Install dependencies
npm install

# Start Vite dev server (defaults to http://localhost:5173)
npm run dev

# Build production bundle
npm run build

# Preview production build
npm run preview
```
