import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import OfficersPreview from "./components/OfficersPreview";
import EventsPreview from "./components/EventsPreview";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <OfficersPreview />
        <EventsPreview />
      </main>
      <Footer />
    </>
  );
}

export default App;
