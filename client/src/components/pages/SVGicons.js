import React, { useState } from 'react';
import NavBar from './NavBar.js';
import { useTheme } from '../ThemeContext.js';

const SVGicons = ({ emailModal, isOpen }) => {

  const darkTheme = useTheme();

  const [isHover, setHover] = useState(false);

  return (
    <div className='svg_icons container'>
      <a href='https://www.linkedin.com/in/lawrencesanzogni/'>
        <svg title='Linkedin' className={ !darkTheme ?'svg_icons entry' : 'svg_icons entry dark' } width="40" height="40" viewBox="0 0 96 96" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M48 8C25.908 8 8 25.908 8 48C8 70.092 25.908 88 48 88C70.092 88 88 70.092 88 48C88 25.908 70.092 8 48 8Z" fill="#4682B4"/>
          <path opacity="0.05" d="M60 70V52C60 49.794 58.206 48 56 48C53.794 48 52 49.794 52 52V70H40V36H52V38.054C54.08 36.718 56.504 36 59 36C66.168 36 72 41.832 72 49V70H60ZM26 70V36H31.932C28.494 36 26 33.476 26 29.998C26 26.522 28.534 24 32.022 24C35.414 24 37.928 26.504 38 29.958C38 33.466 35.466 36 31.976 36H38V70H26Z" fill="black"/>
          <path opacity="0.07" d="M61 69V52C61 49.244 58.758 47 56 47C53.242 47 51 49.244 51 52V69H41V37H51V40.068C53.18 38.114 56.024 37 59 37C65.618 37 71 42.382 71 49V69H61ZM27 69V37H37V69H27ZM31.932 35C29.074 35 27 32.896 27 29.998C27 27.102 29.112 25 32.022 25C34.894 25 36.94 27.046 37 29.978C37 32.896 34.886 35 31.976 35H31.932Z" fill="black"/>
          <path d="M28 38H36V68H28V38ZM31.976 34H31.932C29.544 34 28 32.22 28 29.998C28 27.728 29.592 26 32.022 26C34.456 26 35.954 27.728 36 29.998C36 32.22 34.456 34 31.976 34ZM70 49C70 42.924 65.076 38 59 38C55.276 38 51.99 39.856 50 42.688V38H42V68H50V52C50 48.686 52.686 46 56 46C59.314 46 62 48.686 62 52V68H70C70 68 70 49.842 70 49Z" fill="white"/>
        </svg>
      </a>
      <a href='https://github.com/Lawsan92'>
        <svg title='Github' className={ !darkTheme ?'svg_icons entry' : 'svg_icons entry dark' } width="40" height="40" viewBox="0 0 128 128" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M64 12C35.282 12 12 35.282 12 64C12 88.554 29.024 109.12 51.91 114.572C50.726 114.29 49.552 113.974 48.4 113.614V101.7C48.4 101.7 46.45 102.35 43.85 102.35C36.576 102.35 33.554 95.86 32.8 92.6C32.342 90.614 31.146 88.732 29.862 87.582C28.328 86.214 27.61 86.21 27.6 85.742C27.58 84.76 28.916 84.8 29.55 84.8C32.8 84.8 35.264 88.258 36.408 90.046C39.242 94.46 42.284 95.2 43.85 95.2C45.8 95.2 47.484 94.908 48.644 94.348C49.18 90.572 50.86 87.208 53.6 84.8C41.406 82.362 32.8 75.368 32.8 64C32.8 58.144 35.15 52.762 39.066 48.416C38.666 47.282 38 44.988 38 41.25C38 38.78 38.172 35.748 39.3 32.8C39.3 32.8 46.716 32.852 53.71 39.476C56.938 38.536 60.392 38 64 38C67.608 38 71.062 38.536 74.29 39.476C81.284 32.852 88.7 32.8 88.7 32.8C89.834 35.748 90 38.78 90 41.25C90 45.28 89.464 47.63 89.136 48.644C92.932 52.95 95.2 58.248 95.2 64C95.2 75.368 86.594 82.362 74.4 84.8C77.656 87.66 79.6 91.826 79.6 96.5V113.614C78.448 113.976 77.276 114.29 76.09 114.572C98.976 109.12 116 88.554 116 64C116 35.282 92.718 12 64 12ZM67.626 115.86C66.428 115.944 65.22 116 64 116C65.22 116 66.426 115.942 67.626 115.86ZM64 116C62.78 116 61.572 115.944 60.374 115.86C61.574 115.942 62.78 116 64 116ZM59.576 115.8C57.142 115.594 54.754 115.222 52.428 114.692C54.756 115.22 57.142 115.594 59.576 115.8Z" fill="#4682B4"/>
        </svg>
      </a>
      <a href=''>
        <svg title='Gmail' className={ !darkTheme ?'svg_icons entry' : 'svg_icons entry dark' } width="40" height="40" viewBox="0 0 144 144" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M16.5 121.5H127.5C133.299 121.5 138 116.799 138 111V33C138 27.201 133.299 22.5 127.5 22.5H16.5C10.701 22.5 6 27.201 6 33V111C6 116.799 10.701 121.5 16.5 121.5Z" fill="#E0E0E0"/>
          <path d="M78 121.5H127.5C133.299 121.5 138 116.799 138 111V33C138 27.201 133.299 22.5 127.5 22.5H16.5C10.701 22.5 6 27.201 6 33L78 121.5Z" fill="#D9D9D9"/>
          <path d="M20.2351 121.5H127.5C133.299 121.5 138 116.799 138 111V34.5L20.2351 121.5Z" fill="#EEEEEE"/>
          <path d="M77.235 121.5H127.5C133.299 121.5 138 116.799 138 111V34.5L56.313 94.848L77.235 121.5Z" fill="#E0E0E0"/>
          <path d="M127.5 28.4998H16.5C10.701 28.4998 6 27.2008 6 32.9998V111C6 116.799 10.701 121.5 16.5 121.5H21V35.9998H123V121.5H127.5C133.299 121.5 138 116.799 138 111V32.9998C138 27.2008 133.299 28.4998 127.5 28.4998Z" fill="#4682B4"/>
          <path d="M127.5 22.5H72H16.5C10.701 22.5 6 27.108 6 33C6 36.618 10.554 39.774 10.554 39.774L72 83.268L133.446 39.777C133.446 39.777 138 36.618 138 33.003C138 27.108 133.299 22.5 127.5 22.5Z" fill="#F5F5F5"/>
          <path d="M129.738 22.7461L72 63.0001L14.262 22.7461C9.54 23.7571 6 27.8911 6 33.0001C6 36.6181 10.554 39.7741 10.554 39.7741L72 83.2681L133.446 39.7771C133.446 39.7771 138 36.6181 138 33.0031C138 27.8911 134.46 23.7571 129.738 22.7461Z" fill="#4682B4" onClick={() => {isOpen(true)}} />
        </svg>
      </a>
    </div>
  )
}

export default SVGicons;