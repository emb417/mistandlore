'use client'

import { useState, useEffect } from 'react'
import styles from './Nav.module.css'

const ETSY_URL = 'https://mistandlore.etsy.com'

const navLinks = [
  { label: 'Our Story',  href: '#story'      },
  { label: 'Products',   href: '#products'   },
  { label: 'Philosophy', href: '#philosophy' },
  { label: 'The Maker',  href: '#maker'      },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav className={`${styles.nav}${scrolled ? ` ${styles['nav--scrolled']}` : ''}`}>
      <div className={`${styles.inner} container`}>
        <a href="#" className={styles.wordmark}>
          Mist <span>+</span> Lore
        </a>

        <ul className={styles.links}>
          {navLinks.map(({ label, href }) => (
            <li key={href}>
              <a href={href} className={styles.link}>{label}</a>
            </li>
          ))}
          <li>
            <a
              href={ETSY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.shopLink}
            >
              Shop Now
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}