import Header from './component/Header';
import HeroSection from './component/HeroSection';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css'
import ImagesSection from './component/ImageSection';
import Experiences from './component/Experiences';
import Footer from './component/Footer';

function App() {

  function About() {
    return <h1 className="text-center mt-10">About Page</h1>;
  }
  function Articles() {
    return <h1 className="text-center mt-10">Articles Page</h1>;
  }
  function Projects() {
    return <h1 className="text-center mt-10">Projects Page</h1>;
  }
  function Speaking() {
    return <h1 className="text-center mt-10">Speaking Page</h1>;
  }
  function Uses() {
    return <h1 className="text-center mt-10">Uses Page</h1>;
  }
  return (
    <>
     <Router>
      <Header />
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/speaking" element={<Speaking />} />
        <Route path="/uses" element={<Uses />} />
      </Routes>
    </Router>
    <HeroSection />
    <ImagesSection />
    <Experiences />
    <Footer />
    </>
  )
}

export default App
