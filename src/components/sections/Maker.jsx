import styles from './Maker.module.css'

const ETSY_URL = 'https://mistandlore.etsy.com'
const CHEEKY_URL = 'https://cheekylinens.etsy.com'

export default function Maker() {
  return (
    <section id="maker" className={`${styles.maker} section`}>
      <div className={`${styles.inner} container`}>

        <div className={styles.portrait}>
          <div className={styles.avatarRing}>
            <div className={styles.avatar} aria-hidden="true">🌿</div>
          </div>
          <p className={styles.portraitName}>Nikki</p>
          <p className={styles.portraitRole}>Maker &amp; Founder</p>
        </div>

        <div className={styles.content}>
          <p className={`eyebrow ${styles.label}`}>From the Maker</p>
          <h2 className={`display ${styles.heading}`}>
            Made with Warmth, Comfort &amp; a Little Magic
          </h2>

          <div className={styles.body}>
            <p>
              I'm <strong>Nikki</strong>, the maker behind <a href={ETSY_URL} target="_blank" rel="noopener noreferrer" className={styles.link}>mist + lore</a> and{" "} 
              <a href={CHEEKY_URL} target="_blank" rel="noopener noreferrer" className={styles.link}>CheekyLinens</a>. 
              I find joy in creating goods that bring warmth,
              comfort, and beauty into people's homes — objects that feel both
              functional and a little bit magical.
            </p>
            <p>
              Everything I make carries the influence of my mother-in-law, a
              certified aromatherapist who taught me that scent is never just
              scent — it's memory, mood, and meaning. I worked alongside her
              for years, and when she passed in 2019, continuing her work felt
              less like a choice and more like a calling.
            </p>
            <p>
              All of my goods are <strong>handmade in small batches</strong> in
              Portland, Oregon, with care and intention in every step. Thank you
              for being part of this story.
            </p>
          </div>

          <div className={styles.shops}>
            <a
              href={ETSY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.shopBadge}
            >
              <span className={styles.shopBadgeDot} aria-hidden="true" />
              Mist + Lore on Etsy
            </a>
            <a
              href={CHEEKY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.shopBadge}
            >
              <span className={styles.shopBadgeDot} aria-hidden="true" />
              CheekyLinens on Etsy
            </a>
          </div>
        </div>

      </div>
    </section>
  )
}