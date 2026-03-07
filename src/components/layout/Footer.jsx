import styles from './Footer.module.css'

const ETSY_URL = 'https://mistandlore.etsy.com'
const CHEEKY_URL = 'https://cheekylinens.etsy.com'

const shopLinks = [
  { label: 'All Products',    href: ETSY_URL },
  { label: 'Room Sprays',     href: ETSY_URL },
  { label: 'Incense & Resin', href: ETSY_URL },
  { label: 'Eye Pillows',     href: ETSY_URL },
  { label: 'Wraps & Warmers', href: ETSY_URL },
]

const siteLinks = [
  { label: 'Our Story',  href: '#story'      },
  { label: 'Products',   href: '#products'   },
  { label: 'Philosophy', href: '#philosophy' },
  { label: 'The Maker',  href: '#maker'      },
  { label: 'CheekyLinens', href: CHEEKY_URL, external: true },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className="container">

        <div className={styles.inner}>
          <div className={styles.brand}>
            <a href="#" className={styles.wordmark}>
              Mist <span>+</span> Lore
            </a>
            <p className={styles.tagline}>
              Handmade aromatherapy &amp; wellness goods rooted in legacy,
              intention, and sensory experience.
            </p>
            <span className={styles.location}>
              <span className={styles.locationDot} aria-hidden="true" />
              Handmade in Portland, Oregon
            </span>
          </div>

          <div className={styles.col}>
            <p className={styles.colLabel}>Shop</p>
            {shopLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.colLink}
              >
                {label}
              </a>
            ))}
          </div>

          <div className={styles.col}>
            <p className={styles.colLabel}>Navigate</p>
            {siteLinks.map(({ label, href, external }) => (
              <a
                key={label}
                href={href}
                className={styles.colLink}
                {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              >
                {label}
              </a>
            ))}
          </div>
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            &copy; {year} Mist + Lore. Made with{' '}
            <span className={styles.heart}>♥</span> by Nikki.
          </p>
          <p className={styles.madeIn}>
            Small batches, big intention.
          </p>
        </div>

      </div>
    </footer>
  )
}