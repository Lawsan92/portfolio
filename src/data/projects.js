import React from 'react';

let projects = [
  {
    name:'SiteScan',
    url:[ 'https://res.cloudinary.com/ducqdbpaw/image/upload/v1764277932/portfolio/sitescan/home_page_tui6o7.jpg'],
    techstack: ['https://img.shields.io/badge/Python-yellow?logo=python', 'https://img.shields.io/badge/Django-green?logo=django'],
    githref: 'https://github.com/Lawsan92/SiteScan',
    summary: 'A financial forecasting application that assists in evaluating location suitability for expanding store operations using supervised an unsupervised machine learning algorithms',
    type: 'programming',
  },
  {
    name:'WGUPS Parcel Delivery',
    url:[ 'https://res.cloudinary.com/ducqdbpaw/image/upload/v1764392682/portfolio/wgups_main_owdsg8.png'],
    techstack: ['https://img.shields.io/badge/Python-yellow?logo=python'],
    githref: 'https://github.com/Lawsan92/WGUPS-Parcel-Delivery-Service',
    summary: 'A delivery service application that predicts the most efficient route using a greedy and nearest neighbor based algorithm',
    type: 'programming',
  },
  {
    name:'Flaamenco (aka SDC)',
    url:[ 'https://res.cloudinary.com/darp0mj9i/image/upload/v1667429336/icons/Screen_Shot_2022-08-08_at_10.56.02_pyaaun.jpg'],
    meta: 'graphic of reports',
    href: '',
    githref: 'https://github.com/Team-Dagobah/SDC-Ratings-and-Reviews',
    techstack: ['https://img.shields.io/badge/JavaScript%20-%23323330.svg?&style=flat-square&logo=javascript&logoColor=%23F7DF1E', 'https://img.shields.io/badge/NodeJS-white?logo=nodedotjs'],
    type: 'programming',
    summary: 'Built a RESTful API service for a clothing website that can handle web scale traffic of up to 120 000 client requests per minute.',
    gallery: [
      {
        url:[ 'https://res.cloudinary.com/darp0mj9i/image/upload/v1674779204/projects%20gallery/SDC/Screen_Shot_2022-08-08_at_11.19.17_hefdgw.jpg'],
        meta: 'loadio.io stress test graph'
      }
    ]
  },
  {
    name:'DocuScraper',
    url:[ 'https://res.cloudinary.com/darp0mj9i/image/upload/v1681265313/Screen_Shot_2023-04-11_at_21.08.26_litouv.jpg'],
    meta: 'logo of file',
    href: '',
    githref: 'https://github.com/Lawsan92/docscraper',
    techstack: ['https://img.shields.io/badge/JavaScript%20-%23323330.svg?&style=flat-square&logo=javascript&logoColor=%23F7DF1E', 'https://img.shields.io/badge/NodeJS-white?logo=nodedotjs', 'https://img.shields.io/badge/React-white?logo=react'],
    type: 'programming',
    summary: 'Programmed a document scraper using built in Regex node methods.',
    gallery: [
      {
        url:[ 'https://res.cloudinary.com/darp0mj9i/image/upload/v1681252199/projects%20gallery/Docuscraper/Screen_Shot_2023-04-11_at_17.29.48_fsogak.jpg'],
        meta: 'landing page, logo'
      }
    ],
  },
  {
    name:'FabiosArts',
    url:[ 'https://res.cloudinary.com/darp0mj9i/image/upload/v1702350516/Screenshot_2023-12-11_at_21.03.16_htxgyz.jpg'],
    meta: 'landing page',
    href: '',
    githref: 'https://github.com/Lawsan92/fabiosarts',
    techstack: ['https://img.shields.io/badge/JavaScript%20-%23323330.svg?&style=flat-square&logo=javascript&logoColor=%23F7DF1E', 'https://img.shields.io/badge/NodeJS-white?logo=nodedotjs', 'https://img.shields.io/badge/React-white?logo=react'],
    type: 'programming',
    summary: 'A dynamic and responsive client website that has leverages spring animations.',
    gallery: [
      {
        url:[ 'https://res.cloudinary.com/darp0mj9i/image/upload/v1702350516/Screenshot_2023-12-11_at_21.03.16_htxgyz.jpg'],
        meta: 'landing page, logo'
      }
    ]
  }
  ,
  {
    name:'CareerBot documentation (WGU C951)',
    url:['https://res.cloudinary.com/ducqdbpaw/image/upload/v1764343820/portfolio/C951_-_Task_l_oruazg.jpg', 'https://res.cloudinary.com/ducqdbpaw/image/upload/v1764511344/Screenshot_2025-11-30_at_07.45.18-Photoroom_ebxzlp.png'],
    gallery: [],
    href: 'assets/pdfs/C951_Task_l.pdf',
    type:'documentation',
    summary: 'User guide and development document for a custom chatbot agent that provides career assistance to students.',
    techstack: ['https://img.shields.io/badge/docs-black?logo=googlesheets&logoColor=white'],
  },
  {
    name:'Data reducer documentation (WGU D326)',
    url:['https://res.cloudinary.com/ducqdbpaw/image/upload/v1764344211/portfolio/D326_Performance_Assessment_yn1yop.jpg', 'https://res.cloudinary.com/ducqdbpaw/image/upload/v1764535988/Screenshot_2025-11-30_at_14.53.02_cny5cv.jpg'],
    gallery: [],
    href: 'assets/pdfs/D326.pdf',
    type:'documentation',
    summary: 'User guide and development document for PostgreSQL ETL queries that allow data manipulation and extraction to track sales performance.',
    techstack: ['https://img.shields.io/badge/docs-black?logo=googlesheets&logoColor=white'],
  },
  {
    name:'CoppeliaSim Robot documentation (WGU 951)',
    url:['https://res.cloudinary.com/ducqdbpaw/image/upload/v1764357072/portfolio/C951_-_Task_ll_oqjaxk.jpg', 'https://res.cloudinary.com/ducqdbpaw/image/upload/v1764535537/Screenshot_2025-11-30_at_14.44.56_ub5v66.jpg'],
    gallery: [],
    href: 'assets/pdfs/C951_II.pdf',
    type:'documentation',
    summary: 'User guide and development document for 3D robot agent that demonstrates artificial intelligence capabilites through objective-based behavior, and reasoning.',
    techstack: ['https://img.shields.io/badge/docs-black?logo=googlesheets&logoColor=white'],
  },
  {
    name:'SiteScan documentation (WGU 951)',
    url:['https://res.cloudinary.com/ducqdbpaw/image/upload/v1764357593/portfolio/SiteScan_Doc_xfmkct.jpg', 'https://res.cloudinary.com/ducqdbpaw/image/upload/v1764277932/portfolio/sitescan/home_page_tui6o7.jpg'],
    gallery: [],
    href: 'assets/pdfs/SiteScan_Doc.pdf',
    type:'documentation',
    summary: 'Business proposal and development document for SiteScan financial forecast application.',
    techstack: ['https://img.shields.io/badge/docs-black?logo=googlesheets&logoColor=white']
  },
    {
    name:'WGUPS documentation (WGU C950)',
    url:['https://res.cloudinary.com/ducqdbpaw/image/upload/v1764737400/wgups/C950_Submission_acpsnx.jpg', 'https://res.cloudinary.com/ducqdbpaw/image/upload/v1764392682/portfolio/wgups_main_owdsg8.png'],
    techstack: ['https://img.shields.io/badge/docs-black?logo=googlesheets&logoColor=white'],
    githref: 'https://github.com/Lawsan92/WGUPS-Parcel-Delivery-Service',
    summary: 'Development and techncal documentation for WGUPS routing app',
    type:'documentation',
  },
  /*
  {
    name:'Template',
    url:[''],
    gallery: [],
    githref: '',
    type:''
  },
  {
    name:'Template',
    gallery: [],
    githref: '',
  },
  {
    name:'Template',
    gallery: [],
    githref: '',
  },
  {
    name:'Template',
    gallery: [],
    githref: '',
  }
    */
]

export default projects;