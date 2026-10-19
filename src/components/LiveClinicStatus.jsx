import React, { useState, useEffect } from 'react'
import { Clock, Activity, ShieldCheck, UserCheck } from 'lucide-react'

export default function LiveClinicStatus() {
  const [karachiTime, setKarachiTime] = useState('')

  useEffect(() => {
    const updateTime = () => {
      const formatter = new Intl.DateTimeFormat('en-US', {
        timeZone: 'Asia/Karachi',
        hour: 'numeric',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      })
      setKarachiTime(formatter.format(new Date()))
    }
    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="live-status-ticker" role="status" aria-label="Live Clinic Operational Status">
      <div className="status-item live-pulse-item">
        <span className="live-status-beacon" aria-hidden="true" />
        <span className="status-text">
          <strong>Clinic Status:</strong> <span className="status-highlight">Open Now (24/7)</span>
        </span>
      </div>

      <div className="status-divider" aria-hidden="true">|</div>

      <div className="status-item">
        <Clock size={14} className="text-accent" aria-hidden="true" />
        <span className="status-text">
          <strong>Karachi Time:</strong> <span>{karachiTime || 'PKT (GMT+5)'}</span>
        </span>
      </div>

      <div className="status-divider" aria-hidden="true">|</div>

      <div className="status-item">
        <Activity size={14} className="text-accent" aria-hidden="true" />
        <span className="status-text">
          <strong>ER Triage:</strong> <span>Zero Wait Time</span>
        </span>
      </div>

      <div className="status-divider" aria-hidden="true">|</div>

      <div className="status-item">
        <UserCheck size={14} className="text-accent" aria-hidden="true" />
        <span className="status-text">
          <strong>On Duty:</strong> <span>ER Physician &amp; Licensed Pharmacist</span>
        </span>
      </div>
    </div>
  )
}
