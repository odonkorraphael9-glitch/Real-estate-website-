import { useEffect } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import HomePage, { Advertise, Footer, Navbar } from "./pages/HomePage.jsx";
import DevelopersPage from "./pages/DevelopersPage.jsx";
import BuyingGuidePage from "./pages/BuyingGuidePage.jsx";
import DueDiligencePage from "./pages/DueDiligencePage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";

function RouteContent() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      requestAnimationFrame(() => document.querySelector(hash)?.scrollIntoView());
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/developers" element={<DevelopersPage />} />
        <Route path="/buying-guide" element={<BuyingGuidePage />} />
        <Route path="/due-diligence" element={<DueDiligencePage />} />
        <Route path="/advertise" element={<Advertise />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <RouteContent />
    </BrowserRouter>
  );
}
