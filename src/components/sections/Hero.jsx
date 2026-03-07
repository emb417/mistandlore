import styles from './Hero.module.css'

const ETSY_URL = 'https://mistandlore.etsy.com'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.backdrop} aria-hidden="true" />
      <div className={styles.grain} aria-hidden="true" />

      <div className={`${styles.content} container`}>
        <p className={`eyebrow ${styles.eyebrow}`}>
          Handmade Wellness · Portland, Oregon
        </p>

        <h1 className={styles.headline}>
          Scent as a quiet form of <em>storytelling</em>
        </h1>

        <p className={styles.subhead}>
          Elevated aromatherapy goods handcrafted in small batches —
          incense, room sprays, eye pillows, and ritual goods designed
          to transform your everyday space into an intentional one.
        </p>

        <div className={styles.actions}>
          <a
            href={ETSY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.btnPrimary}
          >
            Shop the Collection
          </a>
          <a href="#story" className={styles.btnSecondary}>
            Our Story
          </a>
        </div>
      </div>

      <div className={styles.scrollHint} aria-hidden="true">
        <div className={styles.scrollLine} />
        <span>Scroll</span>
      </div>
    </section>
  )
}