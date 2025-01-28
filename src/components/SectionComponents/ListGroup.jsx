import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

export default function ListGroup() {
  const [scrolling, setScrolling] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <ul
      className={`flex items-center justify-end gap-8 w-full h-auto font-bold text-sm font-poppins ${
        scrolling
          ? "text-black transition-color duration-500"
          : "text-white transition-color duration-500"
      }`}
    >
      <Link
        to="home"
        className="cursor-pointer"
        spy={true}
        smooth={true}
        duration={500}
        offset={-100}
      >
        INÍCIO
      </Link>
      <Link
        to="about"
        className="cursor-pointer"
        spy={true}
        smooth={true}
        duration={500}
        offset={-100}
      >
        SOBRE NÓS
      </Link>
      <Link
        to="services"
        className="cursor-pointer"
        spy={true}
        smooth={true}
        duration={500}
        offset={-100}
      >
        SERVIÇOS
      </Link>
      <Link
        to="links"
        className="cursor-pointer"
        spy={true}
        smooth={true}
        duration={500}
        offset={-100}
      >
        LINKS
      </Link>
      <Link
        to="certificates"
        className="cursor-pointer"
        spy={true}
        smooth={true}
        duration={500}
        offset={-100}
      >
        CERTIDÕES
      </Link>
      <Link
        to="contact"
        className="cursor-pointer"
        spy={true}
        smooth={true}
        duration={500}
        offset={-170}
      >
        CONTATO
      </Link>
    </ul>
  );
}
