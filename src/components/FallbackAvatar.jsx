import React from 'react'

export default function FallbackAvatar({ initials = 'MD', name = 'Doctor', size = 80 }) {
  // Generate a consistent soft tint based on the initials
  const bgColors = [
    'linear-gradient(135deg, #0a3d42 0%, #14b8a6 100%)',
    'linear-gradient(135deg, #0f4c5c 0%, #2dd4bf 100%)',
    'linear-gradient(135deg, #115e59 0%, #5eead4 100%)',
    'linear-gradient(135deg, #0e7490 0%, #38bdf8 100%)',
  ]
  const colorIndex = (initials.charCodeAt(0) + (initials.charCodeAt(1) || 0)) % bgColors.length
  const gradient = bgColors[colorIndex]

  return (
    <div
      className="fallback-avatar"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        background: gradient,
      }}
      aria-label={`Avatar for ${name}`}
      role="img"
    >
      <span className="avatar-initials">{initials}</span>
      <span className="avatar-stethoscope" aria-hidden="true">🩺</span>
    </div>
  )
}
