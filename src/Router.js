import React from 'react';
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Art from './components/Art'
import Contact from './components/Contact'

export const routes = {
  "/": () => <Home />,
  "/about": () => <About />,
  "/projects": () => <Projects />,
  "/art": () => <Art />,
  "/contact": () => <Contact />
};
