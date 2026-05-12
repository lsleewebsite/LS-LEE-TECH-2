import React from 'react'
import { Link } from 'react-router-dom'

// Icons from your design
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

export default function Home() {
  return (
    <div>
      {/* Hero - NO TICKER */}
      <section style={{
        position: 'relative',
        minHeight: '90vh',
        background: '#0F172A',
        color: '#FFF',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '100px',
        paddingBottom: '80px'
      }}>
        <div style={{ maxWidth: '1360px', margin: '0 auto', padding: '0 32px', width: '100%' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '80px', alignItems: 'start' }}>
            {/* Left: Content */}
            <div>
              <div style={{
                fontSize: '11px',
                letterSpacing: '0.15em',
                marginBottom: '24px',
                color: 'rgba(255,255,255,0.6)',
                fontFamily: 'monospace',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <span style={{ width: '6px', height: '6px', background: '#DC2626', borderRadius: '50%' }}></span>
                EST. 2003 — SINGAPORE
              </div>
              
              <h1 style={{
                fontSize: 'clamp(42px, 5vw, 64px)',
                fontWeight: 800,
                marginBottom: '28px',
                lineHeight: 1.1
              }}>
                Trusted Mechanical Engineering for{' '}
                <span style={{ borderBottom: '4px solid #2563EB', paddingBottom: '4px' }}>Singapore's Gas</span>{' '}
                & <span style={{ color: '#DC2626' }}>Process Industries</span>.
              </h1>
              
              <p style={{
                fontSize: '17px',
                color: 'rgba(255,255,255,0.75)',
                marginBottom: '40px',
                lineHeight: 1.7,
                maxWidth: '580px'
              }}>
                From semiconductor gas plants to hydrogen trailer servicing — LS Lee Engineering delivers safety-critical mechanical solutions backed by 20+ years of frontline experience.
              </p>
              
              <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <Link to="/Industries">
                  <button style={{
                    padding: '16px 32px',
                    background: '#DC2626',
                    color: '#FFF',
                    border: '2px solid #DC2626',
                    fontWeight: 700,
                    fontSize: '13px',
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}>
                    Explore Our Industries <Icon.Arrow />
                  </button>
                </Link>
                <Link to="/Projects">
                  <button style={{
                    padding: '16px 32px',
                    background: 'transparent',
                    color: '#FFF',
                    border: '2px solid rgba(255,255,255,0.3)',
                    fontWeight: 700,
                    fontSize: '13px',
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase'
                  }}>
                    View Projects
                  </button>
                </Link>
              </div>
            </div>

            {/* Right: Stats */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '24px'
            }}>
              {[
                { value: '20+', label: 'Years Operating' },
                { value: '450+', label: 'Projects Delivered' },
                { value: '3,200+', label: 'Trailers Certified' },
                { value: '2.4M', label: 'Safe Manhours' }
              ].map((stat, i) => (
                <div key={i} style={{
                  padding: '24px',
                  border: '1px solid rgba(255,255,255,0.1)',
                  background: 'rgba(255,255,255,0.03)'
                }}>
                  <div style={{
                    fontSize: '36px',
                    fontWeight: 900,
                    color: '#DC2626',
                    marginBottom: '8px',
                    fontFamily: 'Archivo, sans-serif'
                  }}>
                    {stat.value}
                  </div>
                  <div style={{
                    fontSize: '12px',
                    color: 'rgba(255,255,255,0.6)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                  }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quick Industry Preview */}
      <section style={{ padding: '80px 32px', background: '#F8F9FA' }}>
        <div style={{ maxWidth: '1360px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '36px', fontWeight: 800, marginBottom: '48px' }}>
            Industries <span style={{ color: '#DC2626' }}>We Serve</span>
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '24px',
            marginBottom: '40px'
          }}>
            {[
              { icon: <Icon.Chip />, title: 'Semiconductor' },
              { icon: <Icon.Server />, title: 'Data Center' },
              { icon: <Icon.Plant />, title: 'Industrial Gas' },
              { icon: <Icon.H2 />, title: 'New Energy / H₂' }
            ].map((ind, i) => (
              <div key={i} style={{
                padding: '32px',
                background: '#FFF',
                border: '2px solid #0F172A',
                textAlign: 'center'
              }}>
                <div style={{ color: '#0F172A', marginBottom: '16px', display: 'flex', justifyContent: 'center' }}>
                  {ind.icon}
                </div>
                <h3 style={{ fontSize: '18px', fontWeight: 700 }}>{ind.title}</h3>
              </div>
            ))}
          </div>

          <Link to="/Industries">
            <button style={{
              padding: '14px 28px',
              background: 'transparent',
              color: '#0F172A',
              border: '2px solid #0F172A',
              fontWeight: 700,
              fontSize: '13px',
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}>
              View All Industries →
            </button>
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section style={{
        padding: '80px 32px',
        background: '#DC2626',
        color: '#FFF',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '36px', fontWeight: 800, marginBottom: '16px' }}>
            Ready to Discuss Your Project?
          </h2>
          <p style={{ fontSize: '16px', marginBottom: '32px', opacity: 0.9 }}>
            Talk to a project engineer, not a sales rep.
          </p>
          <Link to="/Contact">
            <button style={{
              padding: '16px 32px',
              background: '#FFF',
              color: '#DC2626',
              border: '2px solid #FFF',
              fontWeight: 700,
              fontSize: '13px',
              textTransform: 'uppercase',
              letterSpacing: '0.05em'
            }}>
              Start Enquiry →
            </button>
          </Link>
        </div>
      </section>
    </div>
  )
}
