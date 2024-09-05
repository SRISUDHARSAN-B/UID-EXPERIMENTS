import React from 'react';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <div className="about-page">
      <section id="aboutpage" className='aboutpage'>
      <header className="about-header" id="about-header">
        <h1>About Redmi</h1>
        <p>Your Gateway to Affordable Innovation</p>
      </header>
      </section>  
      <section className="about-section" id="about-section">
        <div className="about-content">
          <div className="about-image-wrapper">
            <img 
              src="https://www.gizchina.com/wp-content/uploads/images/2021/04/Redmi-gaming-smartphone.jpg" 
              alt="Redmi Gaming Smartphone"
              className="about-image"
            />
          </div>
          <div className="about-text">
            <h2>Who We Are</h2>
            <p>
              Redmi is more than just a smartphone brand; it's a philosophy of democratizing technology. Launched as a sub-brand of Xiaomi, Redmi has quickly grown into a global phenomenon, known for delivering high-quality, feature-rich smartphones at an affordable price. We believe in empowering the new generation with technology that is accessible yet cutting-edge.
            </p>
            <p>
              From our humble beginnings to our current status as a major player in over 35 global markets, our mission has always been to bring the power of technology to everyone. Whether it’s our iconic Redmi Note series or our latest innovations, we continue to push the boundaries of what's possible.
            </p>
          </div>
        </div>
      </section>
      
      <section className="about-mission" id="about-mission">
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Redmi_by_Xiaomi_Logo.svg/2560px-Redmi_by_Xiaomi_Logo.svg.png"
          alt="Redmi Logo"
          className="about-logo"
        />
        <div className="mission-text">
          <h2>Our Mission</h2>
          <p>
            At Redmi, our mission is simple: to provide ‘Everything you need, nothing you don’t’. We focus on delivering products that resonate with our users, offering unbeatable value and uncompromised performance. Our commitment to our fans is at the heart of everything we do, driving us to continuously innovate and improve.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
