import Hero from "../components/Hero";
import About from "../components/About";
import OfficersPreview from "../components/OfficersPreview";
import EventsPreview from "../components/EventsPreview";
import WhyJoin from "../components/WhyJoin";

function Home() {
  return (
    <>
      <Hero />
      <About />
      <WhyJoin />
      <OfficersPreview />
      <EventsPreview />
    </>
  );
}

export default Home;
