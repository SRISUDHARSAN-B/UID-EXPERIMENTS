import React from 'react';

const homeStyle = {
  textAlign: 'center',
  padding: '50px 0',
  backgroundColor: '#f4f4f4',
};

const Home = ({ title, description, extraInfo }) => {
  return (
    <section id="home" style={homeStyle}>
      <div>
        <br></br>
        <h2>{title}</h2>
        <p>{description}</p>
        <div>
          <p>{extraInfo}</p>
        </div>
      </div>
    </section>
  );
};

export default Home;
