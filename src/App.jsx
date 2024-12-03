import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Header from "./component/Header";
import Footer from "./component/Footer";
import Breadcrumbs from "./component/BreadCumb";
import Spinner from "./component/Spinner";

// Lazy-loaded Components
const HeroSection = lazy(() => import("./component/HeroSection"));
const ImagesSection = lazy(() => import("./component/ImageSection"));
const Experiences = lazy(() => import("./component/Experiences"));
const About = lazy(() => import("./component/About"));
const Articles = lazy(() => import("./component/Articles"));
const Projects = lazy(() => import("./component/Projects"));
const Uses = lazy(() => import("./component/Uses"));

// Spinner Component
// const Spinner = () => (
//   // <div className="flex items-center justify-center h-screen">
//   //   <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
//   // </div>
//   return(

    
//   )
// );

// 404 Page Component
const NotFound = () => (
  <div className="flex items-center justify-center h-screen flex-col">
    <h1 className="text-4xl font-bold text-red-600">404</h1>
    <p className="text-lg text-gray-700">Page Not Found</p>
  </div>
);

function App() {
  return (
    <Router>
      <Header />
      <Breadcrumbs />
      <Suspense fallback={<Spinner />}>
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
          <Route path="/uses" element={<Uses />} />

          {/* 404 Page */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <Footer />
    </Router>
  );
}

export default App;


