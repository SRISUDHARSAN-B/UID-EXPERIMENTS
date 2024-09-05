import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const skills = [
    { name: 'HTML', level: '90%' },
    { name: 'CSS', level: '85%' },
    { name: 'JavaScript', level: '80%' },
    { name: 'React', level: '75%' }
  ];

  const projects = [
    { title: 'Tic Tac Toe Game', imageUrl: 'https://images.playground.com/f6b7588178414befab6019b272813804.jpeg' },
    { title: 'Weather Forecasting System', imageUrl: 'https://images.playground.com/1b18389762964f048f2eef6f44944c60.jpeg' }
  ];

  return (
    <div className="App">
      <Header siteTitle="My Portfolio" />
      <Home 
        title="Welcome to My Portfolio"
        description="I am a web developer specializing in front-end and back-end development."
        extraInfo="I have worked on various web technologies and am passionate about creating user-friendly web applications."
      />
      <Skills skills={skills} />
      <Projects projects={projects} />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
