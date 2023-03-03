//import { Route, Router, Routes } from "react-router-dom";

import { Routes, Route, useLocation } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./Route-pages/Home";
import PageNotFound from "./Route-pages/PageNotFound";
import ContactUs from "./Route-pages/ContactUs";
import AboutUs from "./Route-pages/AboutUs";
import Footer from "./Components/Footer";
import { AnimatePresence, motion } from "framer-motion";




function App() {

  const location = useLocation();
  return (
    <motion.div className="App"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <NavBar />
      <AnimatePresence mode='wait'>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </AnimatePresence>
      <Footer />


    </motion.div>
  );
}

export default App;
