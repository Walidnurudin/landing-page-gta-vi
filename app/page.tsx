import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Trailers from "./sections/Trailers";
import Editions from "./sections/Editions";
import Story from "./sections/Story";
import QuickLinks from "./sections/QuickLinks";
import News from "./sections/News";
import Footer from "./sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Trailers />
        <Editions />
        <Story />
        <QuickLinks />
        <News />
      </main>
      <Footer />
    </>
  );
}
