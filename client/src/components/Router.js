import React from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import {
  Home,
  Skills,
  Projects,
  NavBar,
  Email,
  Contact,
  Experience,
} from './Exports.js';

const Router = () => {

  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/skills' element={<Skills/>}></Route>
        <Route path='/projects' element={<Projects/>}></Route>
        <Route path='/experience' element={<Experience/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
      </Routes>
    </AnimatePresence>
  );
}

export default Router;