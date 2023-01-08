import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import {
  About,
  Skills,
  Projects,
  Contact,
  NavBar,
  Footer,
  Email,
  Experience
} from './Exports.js';


const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<About/>}></Route>
      {/* <Route></Route>
      <Route></Route>
      <Route></Route> */}
    </Routes>
  )
}

export default Router;