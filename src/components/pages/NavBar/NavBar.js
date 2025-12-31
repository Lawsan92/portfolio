import React, { useRef, useState, useEffect, lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import { useTheme, useThemeUpdate } from "../../ThemeContext.js";
import { motion } from "framer-motion";
import resume from "../../../../public/assets/Lawrence_Sanzogni.pdf";
const NavBar = () => {
  const darkTheme = useTheme();
  const toggleTheme = useThemeUpdate();

  // STATE & HANDLERS: modal scroll
  const [docPosition, getPosition] = useState(
    document.documentElement.scrollTop
  );
  const [windowWidth, getWidth] = useState(window.innerWidth);

  const handlePosition = () => {
    window.addEventListener("scroll", () => {
      getPosition(document.documentElement.scrollTop);
    });
  };

  const handleWidth = () => {
    window.addEventListener("scroll", () => {
      getWidth(window.innerWidth);
    });
  };

  useEffect(() => {
    handlePosition();
    handleWidth();
  }, [docPosition, windowWidth]);

  return (
    <section
      className={darkTheme ? "navbar dark" : "navbar"}
      style={{ top: windowWidth > 1000 ? docPosition : "" }}
    >
      <div className={!darkTheme ? "nav-buttons" : "nav-buttons dark"}>
        <Link to="/">
          <h3>/ Home</h3>
        </Link>
        <Link to="/about">
          <h3>/ About</h3>
        </Link>
        <Link to="/projects">
          <h3>/ Projects</h3>
        </Link>
        <a href="https://docs.google.com/document/d/1nrUwap4LzXaiWbC4XCv2hUr39Pyzet0Pfi6I7uZuAKA/edit?usp=sharing">
          <h3>/ Resume</h3>
        </a>
        <button
          className={
            darkTheme ? "navbar_themebutton dark" : "navbar_themebutton"
          }
          onClick={() => {
            toggleTheme();
          }}
        >
          {darkTheme ? (
            <img
              src="https://res.cloudinary.com/ducqdbpaw/image/upload/v1764274796/portfolio/_toggle_light__gu2iz8.svg"
              alt="crescent moon icon for dark mode"
            />
          ) : (
            <img
              src="https://res.cloudinary.com/ducqdbpaw/image/upload/v1764275687/portfolio/_toggle_light__1_dbaspj.svg"
              alt="crescent moon icon for dark mode"
            />
          )}
        </button>
      </div>
    </section>
  );
};

export default NavBar;
