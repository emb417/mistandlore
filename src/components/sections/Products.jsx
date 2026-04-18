import styles from './Products.module.css'

const ETSY_URL = 'https://mistandlore.etsy.com'

const categories = [
  {
    image: '/vintage_green_chrome_spray.jpg',
    name: 'sprays',
    desc: 'Bespoke fine mist sprays for room, linens, and body elevate the essence of home and spirit.',
    url: "https://www.etsy.com/shop/mistandlore/?etsrc=sdt&section_id=57292809",
  },
  {
    image: '/scrub_eucalyptus.jpg',
    name: 'salts and scrubs',
    desc: 'Restorative mineral soaks and scrubs formulated to revitalize the body. A blend of magnesium-rich salts, pure essential oils, and botanicals designed to support physical recovery and intentional rest.',
    url: "https://www.etsy.com/shop/mistandlore/?etsrc=sdt&section_id=57708486",
  },
  {
    image: '/boho_eye_pillows.jpg',
    name: 'hot and cold therapy',
    desc: 'Restorative weighted wraps and pillows formulated to provide targeted relief. A blend of temperature-responsive grains, pure essential oils, and botanicals designed to support physical comfort and intentional stillness.',
    url: "https://www.etsy.com/shop/mistandlore/?etsrc=sdt&section_id=57551100",
  },
  {
    image: '/kyphi_new_2.jpg',
    name: 'Incense',
    desc: 'Restorative resins and sticks formulated to shift the atmosphere. A blend of traditional aromatics, rare resins, and harvested botanicals designed to support sensory presence and intentional ritual.',
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
            -botanical provisions for body and atmosphere-
          </h2>
        </div>

        <div className={styles.grid}>
          {categories.map(({ image, name, desc, url }) => (
            <div key={name} className={styles.tile}>
              <div className={styles.imageWrapper}>
                <img src={image} alt={name} className={styles.image} />
              </div>
              <div className={styles.tileContent}>
                <h3 className={styles.tileName}>-{name}-</h3>
                <p className={styles.tileDesc}>{desc}</p>
                <a href={url} className={styles.tileLink}>Shop Category</a>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.footer}>
          <p className={styles.footerText}>
            Meticulously crafted in small batches and made to order in our Portland, Oregon studio.
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