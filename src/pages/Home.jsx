import Hero from "../components/Hero";
import QuickAccess from "../components/QuickAccess";
import About from "../components/About";
import WhyJoin from "../components/WhyJoin";
import OfficersPreview from "../components/OfficersPreview";
import EventsPreview from "../components/EventsPreview";

function Home() {
  return (
    <>
      <Hero />
      <QuickAccess />
      <About />
      <WhyJoin />
      <OfficersPreview />
      <EventsPreview />
    </>
  );
}

export default Home;
