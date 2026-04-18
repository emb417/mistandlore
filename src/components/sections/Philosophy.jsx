import styles from './Philosophy.module.css'

const moods = [
  'Peaceful', 'Cozy', 'Loving', 'Restorative', 'Grounded', 'Uplifted', 'Beautiful',
]

const audience = [
  'Yoga and meditation lovers',
  'Migraine and stress sufferers',
  'Busy moms seeking moments of calm',
  'Spiritual and ritual-minded souls',
  'Cozy-home enthusiasts',
  'Thoughtful gift-givers',
]

export default function Philosophy() {
  return (
    <section id="philosophy" className={`${styles.philosophy} section`}>
      <div className={styles.backdrop} aria-hidden="true" />

      <div className={`${styles.inner} container`}>

        <div>
          <p className={`eyebrow ${styles.label}`}>Our Philosophy</p>
          <h2 className={`display ${styles.heading}`}>
            Choose Your Environment
          </h2>

          <div className={styles.body}>
            <p>
              We believe <strong>scent is a quiet form of storytelling.</strong>{' '}
              It can calm or energize, ground or uplift, soften a space or make
              it feel alive.
            </p>
            <p>
              With mist + lore, you are invited to choose your environment —
              whether that's peaceful, cozy, loving, restorative, or simply
              beautiful.
            </p>
            <p>
              All items are <strong>handmade in small batches</strong> in
              Portland, Oregon. Our sprays are crafted in reusable recycled-glass
              bottles, and many items are customizable — allowing you to select
              the scent, vessel, and finish that best reflects the atmosphere
              you want to create.
            </p>
          </div>
        </div>

        <div className={styles.right}>
          <div>
            <p className={styles.moodsLabel}>Create the feeling of</p>
            <div className={styles.moods}>
              {moods.map((mood) => (
                <span key={mood} className={styles.mood}>{mood}</span>
              ))}
            </div>
          </div>

          <div className={styles.audience}>
            <p className={styles.audienceLabel}>Made for</p>
            {audience.map((item) => (
              <div key={item} className={styles.audienceItem}>
                <span className={styles.audienceDot} aria-hidden="true" />
                {item}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}