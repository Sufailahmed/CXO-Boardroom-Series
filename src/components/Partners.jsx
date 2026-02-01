import React, { useEffect, useRef } from 'react';

const Partners = () => {
  const marqueeRef = useRef(null);

  useEffect(() => {
    // Clone logic for smooth infinite scrolling if needed, though CSS animation often handles it well enough.
    // The original script.js had logic to clone content for seamless loop.
    // In React, we can just render the children twice in the JSX or use state.
    // However, the original HTML structure simply duplicated the content inside .marquee_loop.
    // Let's stick to the static structure provided in the HTML for now, which had two .marquee_loop divs inside .marquee_wrapper.
    // But wait, the HTML I read only had two .marquee_loop divs inside .marquee_wrapper?
    // Let's check the HTML reading again.
    // Yes, lines 103 and 141 show two .marquee_loop divs.
    // So the cloning was probably an enhancement or backup.
    // I'll replicate the structure with two loops for CSS animation.
  }, []);

  const PartnerLogo = ({ src }) => (
    <div className="partner-logo">
      <div className="logo-placeholder">
        {src && <img src={src} alt="" />}
      </div>
    </div>
  );

  return (
    <section id="partners" className="partners-section">
      <div className="container">
        <h2 className="section-title">Organisations We've Partnered With</h2>
        <div className="marquee_component">
          <div className="marquee_wrapper">
            <div className="marquee_loop">
              <PartnerLogo src="assets/partner1.jpg" />
              <PartnerLogo src="assets/partner9.jpg" />
              <PartnerLogo src="assets/partenr8.jpg" />
              <PartnerLogo src="assets/partner4.png" />
              <PartnerLogo src="assets/partner5.jpg" />
              <PartnerLogo src="assets/partner6.jpg" />
            </div>
            <div className="marquee_loop">
              <PartnerLogo src="assets/partne10.jpg" />
              <PartnerLogo src="assets/partner7.jpg" />
              <PartnerLogo src="assets/partner11.jpg" />
              <PartnerLogo src="assets/partner12.jpg" />
              <PartnerLogo src="assets/partner13.jpg" />
              <PartnerLogo /> {/* Empty placeholder as in original? Line 169 was empty div */}
            </div>
             {/* We might need a third loop or more clones for very wide screens if CSS requires it, 
                 but the original CSS animation uses 50s linear infinite. 
                 Let's add one more loop to be safe for seamlessness if the CSS translation is -100%.
             */}
             <div className="marquee_loop">
              <PartnerLogo src="assets/partner1.jpg" />
              <PartnerLogo src="assets/partner9.jpg" />
              <PartnerLogo src="assets/partenr8.jpg" />
              <PartnerLogo src="assets/partner4.png" />
              <PartnerLogo src="assets/partner5.jpg" />
              <PartnerLogo src="assets/partner6.jpg" />
            </div>
          </div>
          <div className="marquee_fade"></div>
        </div>
      </div>
    </section>
  );
};

export default Partners;
