import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
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
  return (
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/skills' element={<Skills/>}></Route>
      <Route path='/projects' element={<Projects/>}></Route>
      <Route path='/experience' element={<Experience/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
    </Routes>
  )
}

export default Router;