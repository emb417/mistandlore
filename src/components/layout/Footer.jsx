import styles from "./Footer.module.css";

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
        </div>

        <div className={styles.bottom}>
          <p className={styles.copyright}>&copy; {year} mist + lore</p>
          <p className={styles.tagline}>Handcrafted aromatherapy essentials.</p>
        </div>
      </div>
    </footer>
  );
}
