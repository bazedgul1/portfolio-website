import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./component/Header";
import Footer from "./component/Footer";
import HeroSection from "./component/HeroSection";
import ImagesSection from "./component/ImageSection";
import Experiences from "./component/Experiences";
import About from "./component/About";
import Articles from "./component/Articles";
import Projects from "./component/Projects";
// import Speaking from "./component/Speaking";
import Uses from "./component/Uses";
import Breadcrumbs from "./component/BreadCumb";
// import { Outlet } from "react-router-dom";

function App() {
  return (
    <Router>
      {/* Header will be common for all pages */}
      <Header />
      <Breadcrumbs />
      {/* Define Routes */}
      <Routes>
        {/* Default Home Page */}
        <Route
          path="/"
          element={
            <>
              <HeroSection />
              <ImagesSection />
              <Experiences />
            </>
          }
        />

        {/* Other Pages */}
        <Route path="/about" element={<About />} />
        <Route path="/articles" element={<Articles />} /> 
       
        <Route path="/projects" element={<Projects />} />
        {/* <Route path="/speaking" element={<Speaking />} /> */}
        <Route path="/uses" element={<Uses />} />
      </Routes>

      {/* Footer will also be common for all pages */}
      <Footer />
    </Router>
  );
}

export default App;

