import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Certificate from './pages/Certificates';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Projects from './pages/Project';
import Skills from './pages/Skills';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/projects" element={<Projects />}></Route>
        <Route path="/skills" element={<Skills />}></Route>
        <Route path="/certificates" element={<Certificate />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
