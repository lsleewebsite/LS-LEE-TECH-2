import React from 'react'

const Icon = {
  Wrench: (p) => (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="2" {...p}>
      <path d="M20 4 L24 8 L20 12 L18 10 L14 14 L18 18 L22 14 L24 16 L20 20 L24 24" />
      <path d="M14 14 L4 24" /><circle cx="4.5" cy="23.5" r="1.2" />
    </svg>
  ),
  Gauge: (p) => (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="2" {...p}>
      <path d="M4 18 A10 10 0 0 1 24 18" /><line x1="4" y1="18" x2="24" y2="18" />
      <line x1="14" y1="18" x2="20" y2="11" strokeWidth="2.5" />
      <circle cx="14" cy="18" r="1.5" fill="currentColor" />
      <line x1="7" y1="14" x2="8.5" y2="15" /><line x1="14" y1="9" x2="14" y2="11" /><line x1="21" y1="14" x2="19.5" y2="15" />
    </svg>
  ),
  Trailer: (p) => (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="2" {...p}>
      <rect x="2" y="10" width="18" height="8" rx="0" />
      <circle cx="20" cy="22" r="2.5" /><circle cx="7" cy="22" r="2.5" />
      <line x1="2" y1="20" x2="4.5" y2="20" /><line x1="9.5" y1="20" x2="17.5" y2="20" /><line x1="22.5" y1="20" x2="26" y2="20" />
      <line x1="6" y1="13" x2="6" y2="15" /><line x1="10" y1="13" x2="10" y2="15" /><line x1="14" y1="13" x2="14" y2="15" />
    </svg>
  ),
  Snow: (p) => (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="2" {...p}>
      <line x1="14" y1="3" x2="14" y2="25" /><line x1="3" y1="14" x2="25" y2="14" />
      <line x1="6" y1="6" x2="22" y2="22" /><line x1="22" y1="6" x2="6" y2="22" />
      <circle cx="14" cy="14" r="2" />
    </svg>
  ),
  Arrow: (p) => (
    <svg width="14" height="10" viewBox="0 0 14 10" fill="none" stroke="currentColor" strokeWidth="2" {...p}>
      <line x1="0" y1="5" x2="13" y2="5" /><polyline points="9,1 13,5 9,9" />
    </svg>
  )
}

export default function Services() {
  const items = [
    { 
      num: "01", 
      tag: "PROJECT ENGINEERING", 
      icon: <Icon.Wrench />, 
      title: "Project Engineering Services", 
      bullets: [
        "Detailed design & 3D modelling",
        "Skid & module fabrication",
        "Site installation & hook-up",
        "Commissioning & start-up"
      ]
    },
    { 
      num: "02", 
      tag: "OPERATIONS", 
      icon: <Icon.Gauge />, 
      title: "Plant Maintenance & Servicing", 
      bullets: [
        "Preventive & predictive PM",
        "Shutdown & turnaround support",
        "Rotating equipment overhaul",
        "24/7 on-call response"
      ]
    },
    { 
      num: "03", 
      tag: "CERTIFICATION", 
      icon: <Icon.Trailer />, 
      title: "Hydrogen & Tube Trailer Testing", 
      bullets: [
        "Hydrostatic & pneumatic testing",
        "DOT / ISO recertification",
        "Valve & manifold servicing",
        "Composite cylinder inspection"
      ]
    },
    { 
      num: "04", 
      tag: "FABRICATION", 
      icon: <Icon.Snow />, 
      title: "Cryogenic Hose Fabrication", 
      bullets: [
        "LIN / LOX / LAR / LNG service",
        "Vacuum-insulated assemblies",
        "Custom lengths & end fittings",
        "PED & ASME compliant"
      ]
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
            SECTION / 03 — CAPABILITIES
          </div>
          
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', gap: '40px', flexWrap: 'wrap' }}>
            <h2 style={{ fontSize: 'clamp(36px, 4vw, 52px)', fontWeight: 800, margin: 0 }}>
              Our Engineering <span style={{ color: '#DC2626' }}>Capabilities</span>
            </h2>
            <p style={{ 
              fontSize: '16px', 
              color: '#64748B', 
              maxWidth: '500px', 
              lineHeight: 1.6,
              margin: 0
            }}>
              Four integrated practices, one accountable contractor. End-to-end execution from design office to plant floor.
            </p>
          </div>
        </div>

        {/* Services List */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          {items.map((it) => (
            <div key={it.num} style={{
              display: 'grid',
              gridTemplateColumns: '80px 1fr 1fr auto',
              gap: '32px',
              padding: '32px',
              background: '#FFF',
              border: '2px solid #0F172A',
              alignItems: 'start'
            }}>
              {/* Number */}
              <div style={{
                fontSize: '48px',
                fontWeight: 900,
                color: '#DC2626',
                fontFamily: 'Archivo, sans-serif',
                lineHeight: 1
              }}>
                {it.num}
              </div>

              {/* Title + Icon */}
              <div>
                <div style={{
                  fontSize: '10px',
                  letterSpacing: '0.1em',
                  marginBottom: '8px',
                  color: '#64748B',
                  fontFamily: 'monospace',
                  fontWeight: 600
                }}>
                  {it.tag}
                </div>
                <h3 style={{
                  fontSize: '22px',
                  fontWeight: 700,
                  marginBottom: '12px',
                  color: '#0F172A'
                }}>
                  {it.title}
                </h3>
                <div style={{ color: '#64748B', opacity: 0.7 }}>
                  {it.icon}
                </div>
              </div>

              {/* Bullets */}
              <div>
                <ul style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px'
                }}>
                  {it.bullets.map((bullet, i) => (
                    <li key={i} style={{
                      fontSize: '14px',
                      color: '#64748B',
                      display: 'flex',
                      alignItems: 'start',
                      gap: '8px'
                    }}>
                      <span style={{ color: '#DC2626', marginTop: '2px' }}>▪</span>
                      {bullet}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div>
                <a style={{
                  fontSize: '13px',
                  fontWeight: 700,
                  color: '#2563EB',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  cursor: 'pointer',
                  textDecoration: 'none',
                  whiteSpace: 'nowrap'
                }}>
                  Detail <Icon.Arrow style={{ stroke: '#2563EB' }} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
