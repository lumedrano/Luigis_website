import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Test from './pages/test';
import ValentinesInvite from './pages/Valentine';
import SplineScene  from './pages/spline';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/test" element={<Test />} />
        <Route path="/valentines" element={<ValentinesInvite />}/>
        <Route path="/spline" element={<SplineScene />} />
      </Routes>
    </Router>
  );
}

export default App;
