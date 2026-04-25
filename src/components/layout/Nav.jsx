"use client";

import { useState, useEffect, useRef } from "react";
import styles from "./Nav.module.css";

const ETSY_URL = "https://mistandlore.etsy.com";

const navLinks = [
  { label: "Our Story", href: "#story" },
  { label: "Philosophy", href: "#philosophy" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav
      ref={navRef}
      className={`${styles.nav}${scrolled ? ` ${styles["nav--scrolled"]}` : ""}${isMenuOpen ? ` ${styles["nav--menu-open"]}` : ""}`}
    >
      <div className={`${styles.inner} container`}>
        <h1 className={styles.brand}>
          <a href="#" className={styles.wordmark} onClick={closeMenu}>
            mist <span>+</span> lore
          </a>
        </h1>

        <button
          className={`${styles.hamburger} ${isMenuOpen ? styles["hamburger--open"] : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
        </button>

        <ul
          className={`${styles.links} ${isMenuOpen ? styles["links--open"] : ""}`}
        >
          {navLinks.map(({ label, href }) => (
            <li key={href}>
              <a href={href} className={styles.link} onClick={closeMenu}>
                {label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={ETSY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.shopLink}
              onClick={closeMenu}
            >
              Shop Now
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
