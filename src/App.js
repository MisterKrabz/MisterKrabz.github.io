import React from 'react';
import Navbar from './components/navbar/navbar';
import Intro from './components/Intro/intro';
import About from './components/About/about';
import Skills from './components/Skills/skills';
import WorkExpierence from './components/WorkExpierence/workExpierence';
import Courses from './components/Courses/courses';
import Contact from './components/Contact/contact';

function App() {
  return (
    <div className='App'>
      <Navbar/>
      <Intro/>
      <About/>
      <Skills/>
      <Contact/>
    </div>
  );
}

export default App;
