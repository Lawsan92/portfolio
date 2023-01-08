import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import {
  Home,
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
      <Route path='/' element={<Home/>}></Route>
      {/* <Route></Route>
      <Route></Route>
      <Route></Route> */}
    </Routes>
  )
}

export default Router;