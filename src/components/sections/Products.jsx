import styles from './Products.module.css'

const ETSY_URL = 'https://mistandlore.etsy.com'

const products = [
  {
    icon: '🌿',
    name: 'Egyptian Kyphi & Incense',
    desc: 'Ancient resin incense and hand-dipped sticks rooted in ritual. Slow-burning, deeply aromatic, made to mark moments.',
    tag: 'Ritual',
  },
  {
    icon: '✨',
    name: 'Room, Body & Linen Sprays',
    desc: 'Crafted in reusable recycled-glass bottles with thoughtfully chosen spray tops. Customizable scent, vessel, and finish.',
    tag: 'Customizable',
  },
  {
    icon: '🌙',
    name: 'Weighted Eye Pillows',
    desc: 'Aromatherapy eye pillows designed for deep rest — ideal for yoga, meditation, migraine relief, and quiet moments.',
    tag: 'Wellness',
  },
  {
    icon: '🔥',
    name: 'Wraps & Foot Warmers',
    desc: 'Warm and cold wraps and cozy foot warmers infused with calming scents. Comfort you can feel from head to toe.',
    tag: 'Comfort',
  },
]

export default function Products() {
  return (
    <section id="products" className={`${styles.products} section`}>
      <div className="container">

        <div className={styles.header}>
          <p className={`eyebrow ${styles.label}`}>What We Make</p>
          <h2 className={`display ${styles.heading}`}>
            Goods Made to Invite Rest, Ritual &amp; Beauty
          </h2>
          <p className={styles.subhead}>
            Every item is handmade in small batches in Portland, Oregon.
            Some are ready to ship — others are made-to-order with care and intention.
          </p>
        </div>

        <div className={styles.grid}>
          {products.map(({ icon, name, desc, tag }) => (
            <div key={name} className={styles.card}>
              <span className={styles.cardIcon} aria-hidden="true">{icon}</span>
              <h3 className={styles.cardName}>{name}</h3>
              <p className={styles.cardDesc}>{desc}</p>
              <span className={styles.cardTag}>{tag}</span>
            </div>
          ))}
        </div>

        <div className={styles.cta}>
          <p className={styles.ctaText}>
            <strong>All items are available on Etsy.</strong>{' '}
            Many can be customized — scent, vessel, and finish.
          </p>
          <a
            href={ETSY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaBtn}
          >
            Browse the Full Collection
          </a>
        </div>

      </div>
    </section>
  )
}