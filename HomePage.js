import React from 'react';
import './HomePage.css';

const HomePage = () => {
  return (
    <div id="home-page" className="home-page">
    <section id="homepage" className="homepage">    
      <header className="home-header">
        <h1>Welcome to Redmi</h1>
        <p>Experience Innovation and Power at Your Fingertips</p>
      </header>
    </section>  
      <section className="home-features" id="home-features">
        <div className="feature-card">
          <img 
            src="https://image.shutterstock.com/image-vector/high-performance-icon-260nw-1538408387.jpg" 
            alt="High Performance"
            className="feature-image"
          />
          <h2>High Performance</h2>
          <p>Our devices are engineered for exceptional performance, delivering power and speed for all your needs.</p>
        </div>

        <div className="feature-card">
          <img 
            src="https://www.hoover.org/sites/default/files/research/images/istock-1064169272_1.jpg" 
            alt="Affordable Prices"
            className="feature-image"
          />
          <h2>Affordable Prices</h2>
          <p>Get the best value for your money with our competitively priced products that offer top-notch features.</p>
        </div>

        <div className="feature-card">
          <img 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3JN1VG2kDqJZvtrG6EnZt_92XtKjaFzEDHgMhW6Ed3DZnkI6Bk0XFN6rMIsin4xUG1JM&usqp=CAU" 
            alt="Stylish Design"
            className="feature-image"
          />
          <h2>Stylish Design</h2>
          <p>Our devices feature sleek and modern designs that are both functional and aesthetically pleasing.</p>
        </div>
      </section>

      <section className="home-promotion" id="home-promotion">
        <img 
          src="https://www.gizchina.com/wp-content/uploads/images/2021/04/Redmi-gaming-smartphone.jpg" 
          alt="Redmi Promotion"
          className="promotion-image"
        />
        <div className="promotion-text">
          <h2>Discover the Latest Redmi Innovations</h2>
          <p>Explore our newest range of smartphones and accessories designed to enhance your digital experience.</p>
          <button className="btn-primary">Shop Now</button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
