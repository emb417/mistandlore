import Nav from "@/components/layout/Nav";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Story from "@/components/sections/Story";
import Products from "@/components/sections/Products";
import Philosophy from "@/components/sections/Philosophy";
import Maker from "@/components/sections/Maker";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Story />
      <Products />
      <Philosophy />
      <Maker />
      <Footer />
    </main>
  );
}
