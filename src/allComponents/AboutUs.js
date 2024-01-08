import React from 'react';

function AboutUs() {
  return (
    <div>
      <div style={{ backgroundColor: '#4d63d1', padding: '20px 0' }}>
        <div style={{ color: 'white', textAlign: 'center' }}>
          <h1>About Us Page</h1>
          <p>Discover more about our identity and mission. Resize your browser window to witness the responsive design of this page.</p>
        </div>
      </div>

      <h2 style={{ textAlign: 'center' }}>Our Team</h2>

      <div className="row" style={{ maxWidth: '900px', margin: '0 auto' }}>
        <div className="column">
          <div className="card">
            <div className="james"></div>
            <div className="container">
              <h2>James Anderson</h2>
              <p className="title">CEO & Founder</p>
              <p>Leads with innovation, integrity, and strategic prowess, shaping industry excellence.</p>
              <p>james@wealthcreation.com</p>
              <p>
                <button className="button">Contact</button>
              </p>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <div className="emily"></div>
            <div className="container">
              <h2>Emily Parker</h2>
              <p className="title">Art Director</p>
              <p>Crafts visual stories with precision and creativity, captivating audiences.</p>
              <p>emily@wealthcreation.com</p>
              <p>
                <button className="button">Contact</button>
              </p>
            </div>
          </div>
        </div>

        <div className="column">
          <div className="card">
            <div className="benjamin"></div>
            <div className="container">
              <h2>Benjamin Hughes</h2>
              <p className="title">Designer</p>
              <p>Blends aesthetics and creating visually stunning solutions.</p>
              <p>benjamin@wealthcreation.com</p>
              <p>
                <button className="button">Contact</button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
