{/* Hero Section - Centered & Minimal */}
      <section style={{
        padding: '120px 32px 80px',
        background: '#0F172A',
        color: '#FFF',
        textAlign: 'center',
        borderBottom: '1px solid rgba(255,255,255,0.1)'
      }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              display: 'inline-block',
              padding: '8px 16px',
              background: 'transparent',
              border: '1px solid rgba(220, 38, 38, 0.5)',
              marginBottom: '32px',
              fontSize: '11px',
              fontWeight: 600,
              letterSpacing: '0.15em',
              color: '#DC2626',
              textTransform: 'uppercase'
            }}
          >
            Est. 2003 • Singapore
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={{
              fontSize: 'clamp(36px, 6vw, 64px)',
              fontWeight: 800,
              marginBottom: '24px',
              lineHeight: 1.1,
              maxWidth: '800px',
              margin: '0 auto 24px'
            }}
          >
            Trusted Mechanical Engineering for{' '}
            <span style={{ color: '#DC2626' }}>Singapore's Gas</span>{' '}
            & Process Industries
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            style={{
              fontSize: '18px',
              color: 'rgba(255,255,255,0.7)',
              marginBottom: '40px',
              lineHeight: 1.65,
              maxWidth: '620px',
              margin: '0 auto 40px'
            }}
          >
            From semiconductor gas plants to hydrogen trailer servicing — 
            LS Lee Engineering delivers safety-critical mechanical solutions 
            backed by 20+ years of experience.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            style={{ 
              display: 'flex', 
              gap: '16px', 
              justifyContent: 'center',
              flexWrap: 'wrap',
              marginBottom: '80px'
            }}
          >
            <button style={{
              padding: '16px 32px',
              background: '#DC2626',
              color: '#FFF',
              border: '2px solid #DC2626',
              fontWeight: 700,
              fontSize: '14px',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              transition: 'all 0.3s'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = '#B91C1C'
              e.target.style.borderColor = '#B91C1C'
            }}
            onMouseLeave={(e) => {
              e.target.style.background = '#DC2626'
              e.target.style.borderColor = '#DC2626'
            }}>
              Explore Our Industries →
            </button>
            <button style={{
              padding: '16px 32px',
              background: 'transparent',
              color: '#FFF',
              border: '2px solid rgba(255,255,255,0.3)',
              fontWeight: 700,
              fontSize: '14px',
              letterSpacing: '0.05em',
              textTransform: 'uppercase',
              transition: 'all 0.3s'
            }}
            onMouseEnter={(e) => {
              e.target.style.borderColor = '#FFF'
              e.target.style.background = 'rgba(255,255,255,0.1)'
            }}
            onMouseLeave={(e) => {
              e.target.style.borderColor = 'rgba(255,255,255,0.3)'
              e.target.style.background = 'transparent'
            }}>
              View Projects
            </button>
          </motion.div>

          {/* Stats Row - Inline */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: '60px',
              flexWrap: 'wrap',
              paddingTop: '40px',
              borderTop: '1px solid rgba(255,255,255,0.1)'
            }}
          >
            {[
              { value: '20+', label: 'Years Operating' },
              { value: '450+', label: 'Projects Delivered' },
              { value: '3,200+', label: 'Trailers Certified' },
              { value: '2.4M', label: 'Safe Manhours' }
            ].map((stat, i) => (
              <div key={i}>
                <div style={{
                  fontSize: '36px',
                  fontWeight: 900,
                  color: '#DC2626',
                  marginBottom: '6px',
                  lineHeight: 1
                }}>
                  {stat.value}
                </div>
                <div style={{
                  fontSize: '12px',
                  color: 'rgba(255,255,255,0.5)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  fontWeight: 600
                }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
