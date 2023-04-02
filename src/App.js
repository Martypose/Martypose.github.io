import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/About';
import Projects from './pages/Projects';
import Education from './pages/Education';
import Navbar from './pages/Navbar';
import Header from './pages/Header';
import ProjectDetails from './pages/ProjectDetails';


function App() {
  return (
    <Router>
      <div className="App">
      <Header />
      <Navbar />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:projectName" component={ProjectDetails} />
          <Route path="/education" element={<Education />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
