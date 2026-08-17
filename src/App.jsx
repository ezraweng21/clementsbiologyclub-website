import { useEffect } from "react";
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
import BioBox from "./pages/BioBox";
import BioBoxDetail from "./pages/BioBoxDetail";
import Articles from "./pages/Articles";
import Competitions from "./pages/Competitions";
import GetInvolved from "./pages/GetInvolved";

function PageWrapper({ children }) {
  return (
    <Motion.div
      className="page-transition-shell"
      initial={{ opacity: 0, y: 20, scale: 0.997 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -10, scale: 0.999 }}
      transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Motion.div>
  );
}

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);

  return null;
}

function App() {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />
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
              path="/biobox"
              element={
                <PageWrapper>
                  <BioBox />
                </PageWrapper>
              }
            />
            <Route
              path="/biobox/:kitSlug"
              element={
                <PageWrapper>
                  <BioBoxDetail />
                </PageWrapper>
              }
            />
            <Route
              path="/articles"
              element={
                <PageWrapper>
                  <Articles />
                </PageWrapper>
              }
            />
            <Route
              path="/competitions"
              element={
                <PageWrapper>
                  <Competitions />
                </PageWrapper>
              }
            />
            <Route
              path="/get-involved"
              element={
                <PageWrapper>
                  <GetInvolved />
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
