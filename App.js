import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import Products from './components/Products';
import Services from './components/Services';
import Contact from './components/Contact';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <main>
        <HomePage />
        <AboutPage />
        <Products />
        <Services />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
