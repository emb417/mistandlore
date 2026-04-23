import styles from "./Footer.module.css";

const shopLinks = [
  {
    label: "Sprays",
    href: "https://www.etsy.com/shop/mistandlore/?etsrc=sdt&section_id=57292809",
  },
  {
    label: "Salts and Scrubs",
    href: "https://www.etsy.com/shop/mistandlore/?etsrc=sdt&section_id=57708486",
  },
  {
    label: "Hot and Cold Therapy",
    href: "https://www.etsy.com/shop/mistandlore/?etsrc=sdt&section_id=57551100",
  },
  {
    label: "Incense",
    href: "https://www.etsy.com/shop/mistandlore/?etsrc=sdt&section_id=57225275",
  },
];

const siteLinks = [
  { label: "Our Story", href: "#story" },
  { label: "Philosophy", href: "#philosophy" },
  {
    label: "CheekyLinens",
    href: "https://cheekylinens.etsy.com",
    external: true,
  },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.inner}>
          <div className={styles.brand}>
            <a href="#" className={styles.wordmark}>
              mist <span>+</span> lore
            </a>
            <span className={styles.location}>
              <span className={styles.locationDot} aria-hidden="true" />
              Made in Portland, Oregon
            </span>
          </div>

          {/* <div className={styles.col}>
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
                {...(external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                {label}
              </a>
            ))}
          </div> */}
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>&copy; {year} mist + lore.</p>
          <p className={styles.madeIn}>Handcrafted aromatherapy essentials.</p>
        </div>
      </div>
    </footer>
  );
}
