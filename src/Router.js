import React from 'react';
import Home from './components/Home'
import About from './components/About'

export const routes = {
  "/": () => <Home />,
  "/about": () => <About />,
};
