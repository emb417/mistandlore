import "@/styles/globals.css";

export const metadata = {
  title: "mist + lore — Aromatherapy Essentials",
  description:
    "Sprays, salts and scrubs, hot and cold therapy, and incense. All items are handcrafted in small batches, or made to order in Portland, Oregon.",
  metadataBase: new URL("https://www.mistandlore.com"),
  openGraph: {
    title: "mist + lore",
    description: "An heirloom approach to elevated aromatherapy.",
    url: "https://www.mistandlore.com",
    siteName: "mist + lore",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/banner.png",
        width: 1200,
        height: 630,
        alt: "mist + lore aromatherapy essentials",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
