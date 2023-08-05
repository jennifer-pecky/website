import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './pages/about';
import Contact from './pages/contact';
import Experience from './pages/experience';
import Footer from './pages/footer';
import Home from './pages/home';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path="/home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="experience" element={<Experience />} />
          <Route path="footer" element={<Footer />} />
        </Route>
        {/* <Route path="footer" element={<Footer />} /> */}
      </Routes>
    </>
  );
}

export default App;
