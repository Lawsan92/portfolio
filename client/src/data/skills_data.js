import React from 'react';
import { FrontEndSVG, BackEndSVG } from '../components/pages/SVGicons.js';

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
    img:'https://res.cloudinary.com/darp0mj9i/image/upload/v1667313722/icons/icons8-react-native_muuptm.svg'
  },
  {
    header: 'NodeJS',
    className: 'node',
    img:'https://res.cloudinary.com/darp0mj9i/image/upload/v1667313787/icons/icons8-node-js_atum9p.svg'
  },
  {
    header: 'PostgreSQL',
    className: 'postgres',
    img:'https://res.cloudinary.com/darp0mj9i/image/upload/v1667313754/icons/icons8-postgresql_sjrwkg.svg'
  },
]