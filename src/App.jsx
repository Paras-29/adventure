import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import About from "./pages/About";
import Pricing from "./pages/Pricing";
import Footer from "./component/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Team from "./pages/Team";



// import Home from "./pages/Home";




function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={
          <>
            <Home/>
          </>
        } />
        <Route path="/about" element={<About/>} />
        
        
        <Route path="/pricing" element={<Pricing/>} />
        <Route path="/team" element={<Team/>} />
        <Route path="/blog" element={<Blog/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
