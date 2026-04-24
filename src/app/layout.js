import "@/styles/globals.css";

export const metadata = {
  title: "mist + lore — Aromatherapy Essentials",
  description:
    "An heirloom approach to elevated aromatherapy. Whether you're looking for a sense of calm, uplifting engergy, or anything in-between, mist + lore is a place for you to create the perfect atmosphere. Sprays, salts and scrubs, hot and cold therapy, and incense. All items are handcrafted in small batches, or made to order in Portland, Oregon.",
  metadataBase: new URL("https://www.mistandlore.com"),
  openGraph: {
    title: "mist + lore",
    description: "An heirloom approach to elevated aromatherapy.",
    url: "https://www.mistandlore.com",
    siteName: "mist + lore",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
