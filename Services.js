import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <section id="services" className="services">
      <header className="services-header">
        <h1>Our Services</h1>
        <p>Innovative Solutions for the Modern World</p>
      </header>

      <div className="services-container">
        <div className="service-card">
          <img 
            src="https://www.zakeke.com/wp-content/uploads/2022/06/customization-in-marketing-scaled.webp" 
            alt="Smartphone Customization"
            className="service-image"
          />
          <h2>Smartphone Customization</h2>
          <p>
            Tailor your Redmi experience with our extensive customization options, from themes and wallpapers to advanced settings that suit your style.
          </p>
        </div>

        <div className="service-card">
          <img 
            src="https://image.shutterstock.com/image-vector/shield-wrench-icon-protection-service-260nw-1395918443.jpg" 
            alt="After-Sales Support"
            className="service-image"
          />
          <h2>After-Sales Support</h2>
          <p>
            We stand by our products with comprehensive after-sales support. Whether it's repairs, replacements, or technical assistance, we’ve got you covered.
          </p>
        </div>

        <div className="service-card">
          <img 
            src="https://media.istockphoto.com/id/966932508/photo/cloud-computing.jpg?s=612x612&w=0&k=20&c=YEmVN-cXgr9guGaKeKVySncn9FipECc81KsjvJOxDyA=" 
            alt="Cloud Services"
            className="service-image"
          />
          <h2>Cloud Services</h2>
          <p>
            Sync your data across all your Redmi devices effortlessly with our secure cloud services, ensuring your information is always up-to-date and accessible.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
