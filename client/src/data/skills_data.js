import React from 'react';
import { FrontEndSVG, BackEndSVG, NodeSVG, ReactSVG, PostgresSVG } from '../components/pages/SVGicons.js';

export const skills_data = [
  {
    header: `Front-End`,
    className: `front-end`,
    svg: () => {return <FrontEndSVG/>}
  },
  {
    header: `Back-End`,
    className: `back-end`,
    svg: () => {return <BackEndSVG/>}
  },
  {
    header: 'ReactJS',
    className: 'react',
    svg: () => {return <ReactSVG/>}
  },
  {
    header: 'NodeJS',
    className: 'node',
    svg: () => {return <NodeSVG/>}
  },
  {
    header: 'PostgreSQL',
    className: 'postgres',
    svg: () => {return <PostgresSVG/>}
  },
]