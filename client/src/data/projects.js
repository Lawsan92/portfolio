import React from 'react';

let projects = [
  {
    name:'Planets',
    url: 'https://res.cloudinary.com/darp0mj9i/image/upload/v1668106566/icons/Screen_Shot_2022-11-10_at_12.55.28_otnqpi.jpg',
    meta: 'purple planet logo',
    href: 'http://18.223.155.77',
    githref: 'https://github.com/Lawsan92/MVP_planets',
    techstack: 'ReactJS',
    summary: 'Built a web application that allows users to interact with and create custom 3D models of planets.',
    gallery: [
      {
        url: 'https://res.cloudinary.com/darp0mj9i/image/upload/v1674772929/projects%20gallery/planets/Screen_Shot_2023-01-26_at_16.42.02_hjdvv9.jpg',
        meta: '3D planet logo'
      },
      {
        url: 'https://res.cloudinary.com/darp0mj9i/image/upload/v1674772979/projects%20gallery/planets/Screen_Shot_2023-01-26_at_16.42.55_z0b1yi.jpg',
        meta: '3D earth and cards'
      },
      {
       url: 'https://res.cloudinary.com/darp0mj9i/image/upload/v1674773007/projects%20gallery/planets/Screen_Shot_2023-01-26_at_16.43.20_d6c5bi.jpg',
       meta: '3D Saturn and stats'

      },
      {
        url: 'https://res.cloudinary.com/darp0mj9i/image/upload/v1674773051/projects%20gallery/planets/Screen_Shot_2023-01-26_at_16.44.07_nuytxl.jpg',
        meta: 'custo planet with rings'
      },
      {
        url: 'https://res.cloudinary.com/darp0mj9i/image/upload/v1674773065/projects%20gallery/planets/Screen_Shot_2023-01-26_at_16.44.21_rmw8zy.jpg',
        meta: 'login card'
      }
    ]
  },
  {
    name:'Guitune',
    url: 'https://res.cloudinary.com/darp0mj9i/image/upload/v1678901338/projects%20gallery/Guitune/Screen_Shot_2023-03-15_at_12.26.12_ogyrog.jpg',
    meta: 'white guitar headstock logo',
    href: '',
    githref: 'https://github.com/Lawsan92/guitarTuner',
    techstack: 'Mobile',
    summary: 'Designed a mobile guitar tuner application for musicians that converts audio data to a single pitch value.',
    gallery: [
      {
        url: 'https://res.cloudinary.com/darp0mj9i/image/upload/v1678899776/projects%20gallery/Guitune/Screen_Shot_2023-03-15_at_12.00.38_arnpnq.jpg',
        meta: 'landing page, guitar icon'
      },
      {
        url: 'https://res.cloudinary.com/darp0mj9i/image/upload/v1678899926/projects%20gallery/Guitune/Screen_Shot_2023-03-15_at_12.03.47_z4ypol.jpg',
        meta: 'tuning page, dash'
      },
      {
        url: 'https://res.cloudinary.com/darp0mj9i/image/upload/v1678899927/projects%20gallery/Guitune/Screen_Shot_2023-03-15_at_12.04.04_uvlrt9.jpg',
        meta: 'tuning page w/navbar open'
      },
      {
        url: 'https://res.cloudinary.com/darp0mj9i/image/upload/v1678901336/projects%20gallery/Guitune/Screen_Shot_2023-03-15_at_12.18.35_3_nen0tk.jpg',
        meta: 'tuning page, active tuner, flat, red icon'
      },
      {
        url: 'https://res.cloudinary.com/darp0mj9i/image/upload/v1678901205/projects%20gallery/Guitune/Screen_Shot_2023-03-15_at_12.16.52_3_co05rz.jpg',
        meta: 'tuning page, active tuner, sharp, red icon'
      },
      {
        url: 'https://res.cloudinary.com/darp0mj9i/image/upload/v1678901329/projects%20gallery/Guitune/Screen_Shot_2023-03-15_at_12.17.59_3_pjsg0e.jpg',
        meta: 'tuning page, active tuner, green icon'
      }
    ]
  },
  {
    name:'Project Atelier',
    url: 'https://res.cloudinary.com/darp0mj9i/image/upload/v1667428981/icons/Screen_Shot_2022-11-02_at_17.42.38_ffhyud.jpg',
    meta: 'landing page of retail site',
    href: '',
    githref: 'https://github.com/RFC2205-FEC-Io/FEC-Team-Io',
    techstack: 'FrontEnd',
    summary: 'Architected various UI components using ReactJS to update and improve the visual presentation of an e-commerce web application.',
    gallery: [
      {
        url: 'https://res.cloudinary.com/darp0mj9i/image/upload/v1674778674/projects%20gallery/FEC/Screen_Shot_2023-01-26_at_18.17.49_s13cec.jpg',
        meta: 'landing page retail, shoes'
      },
      {
        url: 'https://res.cloudinary.com/darp0mj9i/image/upload/v1674778724/projects%20gallery/FEC/Screen_Shot_2023-01-26_at_18.18.41_iif3qc.jpg',
        meta: 'product carousel'
      },
      {
        url: 'https://res.cloudinary.com/darp0mj9i/image/upload/v1674778884/projects%20gallery/FEC/Screen_Shot_2023-01-26_at_18.21.21_h1libb.jpg',
        meta: 'customer reviews and comments'
      }
    ]
  },
  {
    name:'System PERN Aggregator',
    url: 'https://res.cloudinary.com/darp0mj9i/image/upload/v1667429336/icons/Screen_Shot_2022-08-08_at_10.56.02_pyaaun.jpg',
    meta: 'graphic of reports',
    href: '',
    githref: 'https://github.com/Team-Dagobah/SDC-Ratings-and-Reviews',
    techstack: 'BackEnd',
    summary: 'Built a RESTful API service for a clothing website that can handle web scale traffic of up to 120 000 client requests per minute.',
    gallery: [
      {
        url: 'https://res.cloudinary.com/darp0mj9i/image/upload/v1674779204/projects%20gallery/SDC/Screen_Shot_2022-08-08_at_11.19.17_hefdgw.jpg',
        meta: 'loadio.io stress test graph'
      },
      {
        url: 'https://res.cloudinary.com/darp0mj9i/image/upload/v1674779479/projects%20gallery/SDC/Screen_Shot_2023-01-26_at_18.31.16_mux6qj.jpg',
        meta: 'k6 notes'
      },
      {
        url: 'https://res.cloudinary.com/darp0mj9i/image/upload/v1674779084/projects%20gallery/SDC/Screen_Shot_2022-08-07_at_12.50.59_eqkkfh.jpg',
        meta: 'k6 cli stress test print'
      },
      {
        url: 'https://res.cloudinary.com/darp0mj9i/image/upload/v1674779347/projects%20gallery/SDC/Screen_Shot_2023-01-26_at_18.29.04_gkzqzu.jpg',
        meta: 'nodejs sql'
      },
      {
        url: 'https://res.cloudinary.com/darp0mj9i/image/upload/v1674779431/projects%20gallery/SDC/Screen_Shot_2023-01-26_at_18.30.28_xxpcsq.jpg',
        meta: 'thunderclient test'
      },
      {
        url: 'https://res.cloudinary.com/darp0mj9i/image/upload/v1674779486/projects%20gallery/SDC/Screen_Shot_2023-01-26_at_18.31.24_eunqet.jpg',
        meta: 'other notes'
      }
    ]
  },
  {
    name:'Studio D\'Arte',
    url: 'https://res.cloudinary.com/darp0mj9i/image/upload/v1674061527/fabio/Screen_Shot_2023-01-18_at_11.04.04_mbykzw.jpg',
    meta: 'landing page of artist site',
    href: '',
    githref: 'https://github.com/Lawsan92/studioDarte',
    techstack: 'Web Dev',
    summary: 'Updated legacy website made from PHP using ReactJS, Nodejs, React-Router-DOM.',
    gallery: [
      {
        url: 'https://res.cloudinary.com/darp0mj9i/image/upload/v1674434341/projects%20gallery/Screen_Shot_2023-01-22_at_18.38.58_b3f2s2.jpg',
        meta: 'landing page and logo'
      },
      {
        url: 'https://res.cloudinary.com/darp0mj9i/image/upload/v1674434362/projects%20gallery/Screen_Shot_2023-01-22_at_18.39.19_dqbkj9.jpg',
        meta: 'gallery page with paintings'
      },
      {
        url: 'https://res.cloudinary.com/darp0mj9i/image/upload/v1674434381/projects%20gallery/Screen_Shot_2023-01-22_at_18.39.38_rvcczj.jpg',
        meta: 'painting modal page'
      },
      {
        url: 'https://res.cloudinary.com/darp0mj9i/image/upload/v1674434399/projects%20gallery/Screen_Shot_2023-01-22_at_18.39.53_ilfpk0.jpg',
        meta: 'contact page'
      }
    ]
  },
  {
    name:'DocuScraper',
    url: 'https://res.cloudinary.com/darp0mj9i/image/upload/v1681265313/Screen_Shot_2023-04-11_at_21.08.26_litouv.jpg',
    meta: 'logo of file',
    href: '',
    githref: 'https://github.com/Lawsan92/docscraper',
    techstack: 'ReactJS',
    summary: 'Programmed a document scraper using built in Regex node methods.',
    gallery: [
      {
        url: 'https://res.cloudinary.com/darp0mj9i/image/upload/v1681252199/projects%20gallery/Docuscraper/Screen_Shot_2023-04-11_at_17.29.48_fsogak.jpg',
        meta: 'landing page, logo'
      },
      {
      url: 'https://res.cloudinary.com/darp0mj9i/image/upload/v1681253492/projects%20gallery/Docuscraper/Screen_Shot_2023-04-11_at_17.50.42_ufefwh.jpg',
      meta: 'main page, grep options'
      },
      {
        url: 'https://res.cloudinary.com/darp0mj9i/image/upload/v1681253496/projects%20gallery/Docuscraper/Screen_Shot_2023-04-11_at_17.51.03_vpxmd3.jpg',
        meta: 'main page, grep email'
      },
      {
        url: 'https://res.cloudinary.com/darp0mj9i/image/upload/v1681253498/projects%20gallery/Docuscraper/Screen_Shot_2023-04-11_at_17.51.20_zcw7w5.jpg',
        meta: 'main page, grep phone numbers'
      },
      {
        url: 'https://res.cloudinary.com/darp0mj9i/image/upload/v1681253598/projects%20gallery/Docuscraper/Screen_Shot_2023-04-11_at_17.53.12_q1l9er.jpg',
        meta: 'main page, grep ip address'
      },
    ],
  },
  {
    name:'FabiosArts',
    url: 'https://res.cloudinary.com/darp0mj9i/image/upload/v1689459794/projects%20gallery/Fabios%20Arts/Screen_Shot_2023-07-15_at_17.23.00_wjdx6y.jpg',
    meta: 'landing page',
    href: '',
    githref: 'https://github.com/Lawsan92/fabiosarts',
    techstack: 'ReactJS',
    summary: 'Programmed a desktop and mobile versions of artist website.',
    gallery: [
      {
        url: 'https://res.cloudinary.com/darp0mj9i/image/upload/v1689459794/projects%20gallery/Fabios%20Arts/Screen_Shot_2023-07-15_at_17.23.00_wjdx6y.jpg',
        meta: 'landing page, logo'
      },
      {
      url: 'https://res.cloudinary.com/darp0mj9i/image/upload/v1689459844/projects%20gallery/Fabios%20Arts/Screen_Shot_2023-07-15_at_17.23.47_aihjvu.jpg',
      meta: 'main page, grep options'
      },
      {
        url: 'https://res.cloudinary.com/darp0mj9i/image/upload/v1689459871/projects%20gallery/Fabios%20Arts/Screen_Shot_2023-07-15_at_17.24.25_ea62t3.jpg',
        meta: 'main page, grep email'
      },
      {
        url: 'https://res.cloudinary.com/darp0mj9i/image/upload/v1689459901/projects%20gallery/Fabios%20Arts/Screen_Shot_2023-07-15_at_17.24.57_uzg4qr.jpg',
        meta: 'main page, grep phone numbers'
      },
      {
        url: 'https://res.cloudinary.com/darp0mj9i/image/upload/v1689459914/projects%20gallery/Fabios%20Arts/Screen_Shot_2023-07-15_at_17.25.11_z6lsyi.jpg',
        meta: 'main page, grep ip address'
      },
      {
        url: 'https://res.cloudinary.com/darp0mj9i/image/upload/v1689459937/projects%20gallery/Fabios%20Arts/Screen_Shot_2023-07-15_at_17.25.33_py3brc.jpg',
        meta: 'main page, grep ip address'
      },
      {
        url: 'https://res.cloudinary.com/darp0mj9i/image/upload/v1689459979/projects%20gallery/Fabios%20Arts/Screen_Shot_2023-07-15_at_17.26.16_kifsqu.jpg',
        meta: 'main page, grep ip address'
      },
    ],
  }
  // {
  //   name:'Template',
  //   gallery: [],
  //   githref: '',
  // },
  // {
  //   name:'Template',
  //   gallery: [],
  //   githref: '',
  // },
  // {
  //   name:'Template',
  //   gallery: [],
  //   githref: '',
  // },
  // {
  //   name:'Template',
  //   gallery: [],
  //   githref: '',
  // }
]

export default projects;

// https://res.cloudinary.com/darp0mj9i/image/upload/v1667429336/icons/Screen_Shot_2022-08-08_at_10.56.02_pyaaun.jpg
