import "@/styles/globals.css";

export const metadata = {
  title: "Mist + Lore — Handmade Aromatherapy & Wellness Goods",
  description:
    "Elevated handmade aromatherapy designed to transform everyday spaces into intentional environments. Incense, room sprays, eye pillows, and more — handmade in small batches in Portland, Oregon.",
  openGraph: {
    title: "Mist + Lore",
    description: "An heirloom approach to elevated aromatherapy.",
    url: "https://mistandlore.com",
    siteName: "Mist + Lore",
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
