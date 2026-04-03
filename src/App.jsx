import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion as Motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Officers from "./pages/Officers";
import Events from "./pages/Events";
import Resources from "./pages/Resources";
import Contact from "./pages/Contact";

function PageWrapper({ children }) {
  return (
    <Motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.28, ease: "easeOut" }}
    >
      {children}
    </Motion.div>
  );
}

function App() {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <main>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <PageWrapper>
                  <Home />
                </PageWrapper>
              }
            />
            <Route
              path="/about"
              element={
                <PageWrapper>
                  <About />
                </PageWrapper>
              }
            />
            <Route
              path="/officers"
              element={
                <PageWrapper>
                  <Officers />
                </PageWrapper>
              }
            />
            <Route
              path="/events"
              element={
                <PageWrapper>
                  <Events />
                </PageWrapper>
              }
            />
            <Route
              path="/resources"
              element={
                <PageWrapper>
                  <Resources />
                </PageWrapper>
              }
            />
            <Route
              path="/contact"
              element={
                <PageWrapper>
                  <Contact />
                </PageWrapper>
              }
            />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </>
  );
}

export default App;
