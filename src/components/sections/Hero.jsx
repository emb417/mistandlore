"use client";

import { useState } from "react";
import styles from "./Hero.module.css";

const TILES = [
  {
    src: "/spray_clear_black_cap.jpg",
    name: "Sprays",
    desc: "Custom fine mist sprays for room, linens, and body to elevate the essence of your home and spirit.",
    url: "https://www.etsy.com/shop/mistandlore/?etsrc=sdt&section_id=57292809",
  },
  {
    src: "/scrub_eucalyptus.jpg",
    name: "Salts and Scrubs",
    desc: "Mineral soaks and scrubs formulated to revitalize the body. A blend of magnesium-rich salts, pure essential oils, and botanicals designed to support physical recovery and intentional rest.",
    url: "https://www.etsy.com/shop/mistandlore/?etsrc=sdt&section_id=57708486",
  },
  {
    src: "/boho_eye_pillows.jpg",
    name: "Hot and Cold Therapy",
    desc: "Weighted wraps and pillows to provide targeted relief. A blend of temperature-responsive grains, pure essential oils, and botanicals designed to support physical comfort and intentional stillness.",
    url: "https://www.etsy.com/shop/mistandlore/?etsrc=sdt&section_id=57551100",
  },
  {
    src: "/kyphi_new_3.jpg",
    name: "Incense",
    desc: "Resins and sticks formulated to shift the atmosphere. A blend of traditional aromatics, rare resins, and harvested botanicals designed to support sensory presence and intentional ritual.",
    url: "https://www.etsy.com/shop/mistandlore/?etsrc=sdt&section_id=57225275",
  },
];

export default function Hero() {
  const [activeTile, setActiveTile] = useState(null);

  return (
    <section className={styles.hero}>
      <div className={styles.intro}>
        <p className={`eyebrow ${styles.label}`}>aromatherapy essentials</p>
        Handcrafted for mind, body, and home.
        <br />
        We use premium materials designed for restorative focus and sensory
        presence.
      </div>
      <div className={styles.grid}>
        {TILES.map((tile, i) => (
          <div
            key={i}
            className={`${styles.tile} ${activeTile === i ? styles.active : ""}`}
            onClick={() => setActiveTile(activeTile === i ? null : i)}
          >
            <img
              src={tile.src}
              alt={tile.name}
              className={styles.image}
              loading="eager"
            />
            <div className={styles.tileOverlay}>
              <p className={styles.tileDesc}>{tile.desc}</p>
              <a
                href={tile.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.tileLink}
                onClick={(e) => e.stopPropagation()}
              >
                Shop {tile.name}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
