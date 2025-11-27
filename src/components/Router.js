import React, { useState } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import {
  Home,
  About,
  Projects,
  Email,
  Contact,
  Experience,
  Analytics
} from './Exports.js';

const Router = ({ visits, analytics }) => {

  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Home visits={ visits }/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/projects' element={<Projects/>}></Route>
        <Route path='/analytics' element={<Analytics visits={ visits } analytics={ analytics }/>}></Route>
      </Routes>
    </AnimatePresence>
  );
}

export default Router;