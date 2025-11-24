import React, { useState, useEffect } from "react";
import Navbar from "./SectionComponents/Navbar";
import Logo from "../style/assets/images/Logo.png";
import ListGroup from "./SectionComponents/ListGroup";
import Sidebar from "./SectionComponents/Sidebar";
import { Menu, X } from "lucide-react";
// import { Link } from "react-scroll";
import { Link as ScrollLink } from "react-scroll";

export default function NavbarSection() {
  const [scrolling, setScrolling] = useState(false);
  const [showListGroup, setShowListGroup] = useState(true);
  const [showSidebar, setShowSidebar] = useState(false);
  const [showMenuIcon, setShowMenuIcon] = useState(true);
  const [showSidebarContent, setShowSidebarContent] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  const toggleSidebar = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setShowMenuIcon(!showMenuIcon);
      setShowSidebarContent(!showSidebarContent);
      if (showSidebar) {
        setTimeout(() => {
          setShowSidebar(false);
          setIsAnimating(false);
        }, 950);
      } else {
        setShowSidebar(true);
        setTimeout(() => {
          setIsAnimating(false);
        }, 0);
      }
    }
  };

  const handleResize = () => {
    if (window.innerWidth < 768) {
      setShowListGroup(false);
    } else {
      setShowListGroup(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="content">
      <div
        className={`fixed z-30 w-full h-auto desktop1:h-25 bg-white bg-opacity-0 ${
          scrolling
            ? "bg-opacity-100 shadow-lg bg-transition-opacity duration-1000"
            : ""
        }`}
      >
        <Navbar>
          <div className="flex items-center justify-between w-full relative">
            <ScrollLink
              to="home"
              className="cursor-pointer max-w-[300px] "
              spy={true}
              smooth={true}
              duration={500}
              offset={-100}
              href="#"
            >
              <img
                src={Logo}
                alt="Logo"
                className={`bg-transparent ${
                  scrolling
                    ? "w-[50%] phone2:w-[50%] phone3:w-[50%] tablet1:w-[50%] tablet2:w-[50%] desktop1:w-[50%] desktop2:w-[50%]"
                    : " w-[100%] "
                } transition-all duration-1000`}
              />
            </ScrollLink>

            <button onClick={toggleSidebar} className="desktop1:hidden">
              {showMenuIcon ? (
                <Menu
                  className={`w-12 h-12 ${
                    scrolling ? "text-secondary" : "text-white"
                  }`}
                />
              ) : (
                <X
                  className={`w-12 h-12 ${
                    scrolling ? "text-secondary" : "text-white"
                  }`}
                />
              )}
            </button>
          </div>

          {showListGroup ? <ListGroup /> : null}
        </Navbar>
        <div
          className={`animate-${
            showSidebar ? "slide-down block" : "slide-up hidden"
          }`}
        >
          {showSidebar ? <Sidebar showSidebar={showSidebarContent} /> : null}
        </div>
      </div>
    </div>
  );
}
