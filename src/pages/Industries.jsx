import React from 'react'

const Icon = {
  Chip: (p) => (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="2" {...p}>
      <rect x="7" y="7" width="14" height="14" />
      <rect x="10" y="10" width="8" height="8" />
      <line x1="4" y1="10" x2="7" y2="10" /><line x1="4" y1="14" x2="7" y2="14" /><line x1="4" y1="18" x2="7" y2="18" />
      <line x1="21" y1="10" x2="24" y2="10" /><line x1="21" y1="14" x2="24" y2="14" /><line x1="21" y1="18" x2="24" y2="18" />
      <line x1="10" y1="4" x2="10" y2="7" /><line x1="14" y1="4" x2="14" y2="7" /><line x1="18" y1="4" x2="18" y2="7" />
      <line x1="10" y1="21" x2="10" y2="24" /><line x1="14" y1="21" x2="14" y2="24" /><line x1="18" y1="21" x2="18" y2="24" />
    </svg>
  ),
  Server: (p) => (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="2" {...p}>
      <rect x="4" y="5" width="20" height="6" /><rect x="4" y="13" width="20" height="6" /><rect x="4" y="21" width="20" height="2" />
      <circle cx="8" cy="8" r="0.8" fill="currentColor" /><circle cx="11" cy="8" r="0.8" fill="currentColor" />
      <circle cx="8" cy="16" r="0.8" fill="currentColor" /><circle cx="11" cy="16" r="0.8" fill="currentColor" />
      <line x1="17" y1="8" x2="21" y2="8" /><line x1="17" y1="16" x2="21" y2="16" />
    </svg>
  ),
  Plant: (p) => (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="2" {...p}>
      <path d="M3 24 V12 L8 14 V9 L13 12 V7 L18 11 V14 H25 V24 Z" />
      <line x1="6" y1="20" x2="6" y2="22" /><line x1="11" y1="18" x2="11" y2="22" /><line x1="16" y1="18" x2="16" y2="22" /><line x1="21" y1="18" x2="21" y2="22" />
      <line x1="2" y1="24" x2="26" y2="24" />
    </svg>
  ),
  H2: (p) => (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="2" {...p}>
      <circle cx="14" cy="14" r="10" />
      <text x="14" y="18" fontSize="11" fontWeight="700" fontFamily="Archivo" textAnchor="middle" fill="currentColor" stroke="none">H₂</text>
    </svg>
  ),
  Arrow: (p) => (
    <svg width="14" height="10" viewBox="0 0 14 10" fill="none" stroke="currentColor" strokeWidth="2" {...p}>
      <line x1="0" y1="5" x2="13" y2="5" /><polyline points="9,1 13,5 9,9" />
    </svg>
  )
}

export default function Industries() {
  const items = [
    { 
      num: "01", 
      icon: <Icon.Chip />, 
      title: "Semiconductor", 
      desc: "Gas plant construction, integration, and maintenance for wafer fabrication facilities and tool hook-ups.", 
      tags: ["UHP GAS", "FAB BUILD", "HOOK-UP"] 
    },
    { 
      num: "02", 
      icon: <Icon.Server />, 
      title: "Data Center", 
      desc: "Hydrogen pipeline infrastructure for next-generation power systems and resilient backup architectures.", 
      tags: ["H₂ PIPING", "BACKUP PWR"] 
    },
    { 
      num: "03", 
      icon: <Icon.Plant />, 
      title: "Industrial Gas & Process Plants", 
      desc: "Turnkey project engineering and long-term plant maintenance across air separation, specialty gas and chemical sites.", 
      tags: ["TURNKEY", "ASU", "MAINTENANCE"] 
    },
    { 
      num: "04", 
      icon: <Icon.H2 />, 
      title: "New Energy / Hydrogen", 
      desc: "Hydrogen infrastructure engineering, tube trailer testing and certification for the regional clean-energy transition.", 
      tags: ["H₂", "CERTIFICATION", "TUBE TRAILER"] 
    },
  ]

  return (
    <section style={{ padding: '120px 32px 80px', background: '#F8F9FA', minHeight: '100vh' }}>
      <div style={{ maxWidth: '1360px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ marginBottom: '60px' }}>
          <div style={{
            fontSize: '11px',
            letterSpacing: '0.15em',
            marginBottom: '16px',
            color: '#64748B',
            fontFamily: 'monospace',
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            <span style={{ width: '24px', height: '1px', background: '#DC2626' }}></span>
            SECTION / 02 — VERTICALS
          </div>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', gap: '40px', flexWrap: 'wrap' }}>
            <h2 style={{ fontSize: 'clamp(36px, 4vw, 52px)', fontWeight: 800, margin: 0 }}>
              Industries <span style={{ color: '#DC2626' }}>We Serve</span>
            </h2>
            <p style={{ 
              fontSize: '16px', 
              color: '#64748B', 
              maxWidth: '500px', 
              lineHeight: 1.6,
              margin: 0
            }}>
              Four high-stakes verticals where uptime, purity, and pressure integrity are non-negotiable. 
              We engineer for the operators that keep them running.
            </p>
          </div>
        </div>

        {/* Industry Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '24px'
        }}>
          {items.map((it) => (
            <div key={it.num} style={{
              padding: '32px',
              background: '#FFF',
              border: '2px solid #0F172A',
              transition: 'all 0.3s'
            }}>
              {/* Top: Icon + Number */}
              <div style={{ 
                display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'start',
                marginBottom: '24px'
              }}>
                <div style={{
                  width: '56px',
                  height: '56px',
                  border: '2px solid #0F172A',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#0F172A'
                }}>
                  {it.icon}
                </div>
                <div style={{
                  fontSize: '12px',
                  color: '#64748B',
                  fontFamily: 'monospace',
                  letterSpacing: '0.05em'
                }}>
                  [ {it.num} / 04 ]
                </div>
              </div>

              {/* Title */}
              <h3 style={{
                fontSize: '22px',
                fontWeight: 700,
                marginBottom: '12px',
                color: '#0F172A'
              }}>
                {it.title}
              </h3>

              {/* Description */}
              <p style={{
                fontSize: '14px',
                color: '#64748B',
                lineHeight: 1.6,
                marginBottom: '20px'
              }}>
                {it.desc}
              </p>

              {/* Tags */}
              <div style={{ 
                display: 'flex', 
                gap: '8px', 
                flexWrap: 'wrap',
                marginBottom: '20px'
              }}>
                {it.tags.map(tag => (
                  <span key={tag} style={{
                    fontSize: '10px',
                    padding: '4px 8px',
                    background: '#F8F9FA',
                    border: '1px solid #E5E7EB',
                    fontFamily: 'monospace',
                    letterSpacing: '0.05em',
                    fontWeight: 600
                  }}>
                    {tag}
                  </span>
                ))}
              </div>

              {/* Learn More Link */}
              <div style={{
                fontSize: '13px',
                fontWeight: 700,
                color: '#2563EB',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                cursor: 'pointer'
              }}>
                Learn More <Icon.Arrow style={{ stroke: '#2563EB' }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
