import styles from './Hero.module.css'

const ETSY_URL = 'https://mistandlore.etsy.com'

const TILES = [
  { src: '/spray_clear_black_cap.jpg', alt: 'Handcrafted Room Sprays', label: 'Shop Sprays', url: "https://www.etsy.com/shop/mistandlore/?etsrc=sdt&section_id=57292809" },
  { src: '/scrub_eucalyptus.jpg', alt: 'Alaea Sea Salt Foot Scrub', label: 'Shop Salts and Scrubs', url: "https://www.etsy.com/shop/mistandlore/?etsrc=sdt&section_id=57708486" },
  { src: '/boho_eye_pillows.jpg', alt: 'Handmade Eye Pillows', label: 'Shop Hot/Cold Therapy', url: "https://www.etsy.com/shop/mistandlore/?etsrc=sdt&section_id=57551100" },
  { src: '/kyphi_new_3.jpg', alt: 'Egyptian Kyphi Incense', label: 'Shop Incense', url: "https://www.etsy.com/shop/mistandlore/?etsrc=sdt&section_id=57225275" },
]

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.grid}>
        {TILES.map((tile, i) => (
          <a 
            key={i} 
            href={tile.url} 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.tile}
          >
            <img 
              src={tile.src} 
              alt={tile.alt} 
              className={styles.image}
              loading="eager"
            />
            <div className={styles.tileOverlay}>
              <span className={styles.tileLabel}>{tile.label}</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
