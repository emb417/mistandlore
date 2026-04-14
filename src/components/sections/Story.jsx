import styles from './Story.module.css'

const timeline = [
  {
    year: 'Origin',
    text: 'CheekyLinens begins — handmade napkins and home textiles.',
  },
  {
    year: '2019',
    text: 'Our beloved aromatherapist and mentor passes, leaving behind her recipes, knowledge, and spirit.',
  },
  {
    year: 'Now',
    text: 'Mist + Lore carries her work forward — honoring her legacy while making it our own.',
  },
]

export default function Story() {
  return (
    <section id="story" className={`${styles.story} section`}>
      <div className={`${styles.inner} container`}>

        <div className={styles.content}>
          <p className={`eyebrow ${styles.label}`}>Our Story</p>
          <h2 className={`display ${styles.heading}`}>
            An Heirloom Approach to Elevated Aromatherapy
          </h2>

          <div className={styles.body}>
            <p>
              Mist + Lore was created as a natural evolution of our original
              shop, <a href="https://cheekylinens.etsy.com" target="_blank" rel="noopener noreferrer"><strong>CheekyLinens</strong></a>, which began with handmade
              napkins and home textiles. As our offerings expanded into
              aromatherapy and ritual goods, we realized these pieces deserved
              a space of their own — one rooted in atmosphere, intention, and
              sensory experience.
            </p>

            <div className={styles.divider} />

            <p>
              The heart of Mist + Lore comes from legacy. My mother-in-law was
              a <strong>certified aromatherapist</strong> whose knowledge,
              recipes, and deep respect for scent as ritual shaped everything
              she created. For years, I worked alongside her in her shop,
              Pink Moon Hallow, and at her booth at the{' '}
              <strong>Minnesota Renaissance Fair</strong> — learning not just
              formulas, but the quiet art of creating mood, memory, and comfort
              through aroma.
            </p>

            <p>
              When she passed in 2019, we felt called to carry her work
              forward — honoring her spirit while infusing it with our own.
            </p>
          </div>
        </div>

        <div className={styles.aside}>
          <div className={styles.pullquote}>
            <blockquote>
              "Scent is a quiet form of storytelling."
            </blockquote>
            <cite>Nikki, maker &amp; founder</cite>
          </div>

          <div className={styles.origins}>
            <p className={styles.originsLabel}>How we got here</p>
            {timeline.map(({ year, text }) => (
              <div key={year} className={styles.originsItem}>
                <span className={styles.originsYear}>{year}</span>
                <p className={styles.originsText}>{text}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}