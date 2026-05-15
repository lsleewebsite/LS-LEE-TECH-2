{/* HERO */}
      <section id="home" className="hero">
        <div className="hero-bg">
          <div className="hero-image"></div>
        </div>
        <div className="hero-content">
          <div className="wrap">
            <motion.div
              style={{ textAlign: 'center', maxWidth: '1000px', margin: '0 auto' }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="hero-tag mono" style={{ justifyContent: 'center' }}>
                <span className="dot"></span>
                <span>EST. 1989 — SINGAPORE</span>
              </div>
              
              <motion.h1
                style={{ margin: '0 auto 32px' }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                20+ Years Delivering Safety-Critical Mechanical Solutions to Singapore's Gas and Process Industries
              </motion.h1>
              
              <motion.p 
                className="hero-sub"
                style={{ margin: '0 auto 48px', maxWidth: '700px' }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                From semiconductor gas plants to hydrogen trailer servicing — LS Lee Engineering
                delivers safety-critical mechanical solutions backed by decades of frontline
                experience across South-East Asia.
              </motion.p>
              
              <motion.div 
                className="hero-ctas"
                style={{ justifyContent: 'center' }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <a href="#industries" className="btn btn-primary">
                  Explore Our Industries <I.Arrow className="arrow" />
                </a>
                <a href="#projects" className="btn btn-outline">View Projects</a>
              </motion.div>
            </motion.div>

            {/* Stats Cards - Bottom Floating */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: '20px',
                marginTop: '80px',
                maxWidth: '1100px',
                margin: '80px auto 0'
              }}
            >
              {[
                { value: '20+', label: 'Years Operating' },
                { value: '450+', label: 'Projects Delivered' },
                { value: '3,200+', label: 'Trailers Certified' },
                { value: '2.4M', label: 'Safe Manhours' }
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.2 + (i * 0.1) }}
                  style={{
                    padding: '28px 20px',
                    background: 'rgba(255,255,255,0.08)',
                    border: '2px solid rgba(255,255,255,0.2)',
                    textAlign: 'center',
                    transition: 'all 0.3s'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.12)'
                    e.currentTarget.style.borderColor = '#DC2626'
                    e.currentTarget.style.transform = 'translateY(-4px)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.08)'
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'
                    e.currentTarget.style.transform = 'translateY(0)'
                  }}
                >
                  <div style={{
                    fontFamily: 'Archivo, sans-serif',
                    fontSize: '42px',
                    fontWeight: 900,
                    color: '#DC2626',
                    lineHeight: 1,
                    marginBottom: '10px'
                  }}>
                    {stat.value}
                  </div>
                  <div style={{
                    fontFamily: 'IBM Plex Mono, monospace',
                    fontSize: '11px',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'rgba(255,255,255,0.65)',
                    fontWeight: 600
                  }}>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
