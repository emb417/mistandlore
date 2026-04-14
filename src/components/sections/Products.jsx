import styles from './Products.module.css'

const ETSY_URL = 'https://mistandlore.etsy.com'

const categories = [
  {
    image: '/vintage_green_chrome_spray.jpg',
    name: 'Sprays',
    desc: 'Artisanal body and linen mists for home and spirit.',
    url: "https://www.etsy.com/shop/mistandlore/?etsrc=sdt&section_id=57292809",
  },
  {
    image: '/scrub_eucalyptus.jpg',
    name: 'Salts and Scrubs',
    desc: 'Mineral-rich exfoliants infused with pure essential oils.',
    url: "https://www.etsy.com/shop/mistandlore/?etsrc=sdt&section_id=57708486",
  },
  {
    image: '/boho_eye_pillows.jpg',
    name: 'Hot/Cold Therapy',
    desc: 'Weighted eye pillows and wraps for deep relaxation.',
    url: "https://www.etsy.com/shop/mistandlore/?etsrc=sdt&section_id=57551100",
  },
  {
    image: '/kyphi_new_2.jpg',
    name: 'Incense',
    desc: 'Ancient Egyptian Kyphi and hand-dipped botanical sticks.',
    url: "https://www.etsy.com/shop/mistandlore/?etsrc=sdt&section_id=57225275",
  },
]

export default function Products() {
  return (
    <section id="products" className={`${styles.products} section`}>
      <div className="container">

        <div className={styles.header}>
          <p className="eyebrow">Our Products</p>
          <h2 className={`display ${styles.heading}`}>
            Handcrafted for Rest &amp; Ritual
          </h2>
        </div>

        <div className={styles.grid}>
          {categories.map(({ image, name, desc, url }) => (
            <div key={name} className={styles.tile}>
              <div className={styles.imageWrapper}>
                <img src={image} alt={name} className={styles.image} />
              </div>
              <div className={styles.tileContent}>
                <h3 className={styles.tileName}>{name}</h3>
                <p className={styles.tileDesc}>{desc}</p>
                <a href={url} className={styles.tileLink}>Shop Category</a>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.footer}>
          <p className={styles.footerText}>
            Every item is handmade in small batches in Portland, Oregon.
          </p>
          <a
            href={ETSY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaBtn}
          >
            Explore the Etsy Shop
          </a>
        </div>

      </div>
    </section>
  )
}