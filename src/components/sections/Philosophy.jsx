import styles from "./Philosophy.module.css";

const moods = [
  "Calm & Relaxed",
  "Energized & Alert",
  "Focused & Clear",
  "Grounded & Stable",
  "Uplifted & Joyful",
];

const audience = [
  "Yoga and meditation lovers",
  "Busy moms seeking moments of calm",
  "Spiritual and ritual-minded souls",
  "Cozy-home enthusiasts",
  "Thoughtful gift-givers",
];

export default function Philosophy() {
  return (
    <section id="philosophy" className={`${styles.philosophy} section`}>
      <div className={styles.backdrop} aria-hidden="true" />

      <div className={`${styles.inner} container`}>
        <div>
          <p className={`eyebrow ${styles.label}`}>Our Philosophy</p>
          <h2 className={`display ${styles.heading}`}>
            Choose Your Atmosphere
          </h2>

          <div className={styles.body}>
            <p>
              We believe <strong>scent is a quiet form of storytelling.</strong>{" "}
              Whether you're looking for a sense of calm, uplifting engergy, or
              anything in-between, mist + lore is a place for you to create the
              perfect atmosphere.
            </p>
          </div>
        </div>

        <div className={styles.right}>
          <div>
            <p className={styles.moodsLabel}>Create the feeling of</p>
            <div className={styles.moods}>
              {moods.map((mood) => (
                <span key={mood} className={styles.mood}>
                  {mood}
                </span>
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
  );
}
