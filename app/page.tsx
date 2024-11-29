import Header from "./components/header";
import Hero from "./components/hero";
import PopularDestinations from "./components/popular-destinations";
import SpecialOffers from "./components/special-offers";
import Footer from "./components/footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main>
        <Hero />
        <PopularDestinations />
        <SpecialOffers />
      </main>
      <Footer />
    </div>
  );
}
