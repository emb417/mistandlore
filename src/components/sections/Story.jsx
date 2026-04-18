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
    text: 'mist + lore carries her work forward — honoring her legacy while making it our own.',
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
              mist + lore was created as a natural evolution of our original
              shop, <a href="https://cheekylinens.etsy.com" target="_blank" rel="noopener noreferrer"><strong>CheekyLinens</strong></a>, which began with handmade
              napkins and home textiles. As our offerings expanded into
              aromatherapy and ritual goods, we realized these pieces deserved
              a space of their own — one rooted in atmosphere, intention, and
              sensory experience.
            </p>

            <div className={styles.divider} />

            <p>
              The heart of mist + lore comes from legacy. My mother-in-law was
              a <strong>certified aromatherapist</strong> whose knowledge,
              recipes, and deep respect for scent as ritual shaped everything
              she created. Learning from her at Pink Moon Hallow and the 
              <strong>Minnesota Renaissance Fair</strong> — not just formulas, 
              but the quiet art of creating mood, memory, and comfort through aroma. 
            </p>

            <p>
              When she passed in 2019, we felt called to carry her work
              forward — honoring her spirit while infusing it with our own.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}