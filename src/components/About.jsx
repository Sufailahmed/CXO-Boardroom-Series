import React from 'react';

const About = () => {
  return (
    <section id="about" className="portfolio-section">
      <div className="container">
        <h2 className="section-title">This initiative sits within our Executive Events Portfolio</h2>
        <div className="event-logos">
          <div className="event-logo">
            <div className="logo-placeholder">
              <img src="assets/logoEnterprice.png" alt="Banking AI Summit" />
              <span>Banking AI Summit</span>
            </div>
          </div>
          <div className="event-logo">
            <div className="logo-placeholder">
              <img src="assets/MEBAI COLOR.png" alt="Enterprise AI Summit" />
              <span>Enterprise AI Summit</span>
            </div>
          </div>
        </div>
        <div className="video-section">
          <div className="video-background">
            <video autoPlay muted controls width="100%" style={{ width: '100%', height: 'auto', position: 'relative', zIndex: 1 }}>
              <source src="assets/Social_breakout_Session_Video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
        <div className="regions-section">
          <h3>Focused Regions</h3>
          <div className="regions-grid">
            <div className="region-item"><img src="https://flagcdn.com/w40/ae.png" alt="UAE Flag" className="flag-icon" />UAE</div>
            <div className="region-item"><img src="https://flagcdn.com/w40/sa.png" alt="KSA Flag" className="flag-icon" />KSA</div>
            <div className="region-item"><img src="https://flagcdn.com/w40/qa.png" alt="Qatar Flag" className="flag-icon" />Qatar</div>
            <div className="region-item"><img src="https://flagcdn.com/w40/kw.png" alt="Kuwait Flag" className="flag-icon" />Kuwait</div>
            <div className="region-item"><img src="https://flagcdn.com/w40/om.png" alt="Oman Flag" className="flag-icon" />Oman</div>
            <div className="region-item"><img src="https://flagcdn.com/w40/bh.png" alt="Bahrain Flag" className="flag-icon" />Bahrain</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
