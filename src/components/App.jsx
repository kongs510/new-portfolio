import React, { useState, useEffect } from 'react';
import Hero from './Hero/Hero';
import About from './About/About';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import Nav from './Nav/Nav';
import MiniProjects from './Projects/MiniProjects';
import { PortfolioProvider } from '../context/context';

import {
  heroData,
  aboutData,
  projectsData,
  leftProjectsData,
  rightProjectsData,
  contactData,
  footerData,
} from '../mock/data';
import LeftProject from './Projects/LeftProject';
import RightProject from './Projects/RightProject';

function App() {
  const [nav, setNav] = useState({});
  const [hero, setHero] = useState({});
  const [about, setAbout] = useState({});
  const [projects, setProjects] = useState([]);
  const [leftprojects, setLeftProjects] = useState([]);
  const [rightprojects, setRightProjects] = useState([]);
  const [contact, setContact] = useState({});
  const [footer, setFooter] = useState({});

  useEffect(() => {
    setNav({ ...heroData });
    setHero({ ...heroData });
    setAbout({ ...aboutData });
    setProjects([...projectsData]);
    setLeftProjects([...leftProjectsData]);
    setRightProjects([...rightProjectsData]);
    setContact({ ...contactData });
    setFooter({ ...footerData });
  }, []);

  return (
    <PortfolioProvider
      value={{ nav, hero, about, projects, leftprojects, rightprojects, contact, footer }}
    >
      <Nav />
      <Hero />
      <About />
      <Projects />
      <MiniProjects />
      <Contact />
      <Footer />
    </PortfolioProvider>
  );
}

export default App;
