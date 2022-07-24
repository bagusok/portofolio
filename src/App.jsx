import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Certificate from './pages/Certificates';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Projects from './pages/Project';
import Skills from './pages/Skills';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="box-border px-3 min-h-screen w-full bg-slate-100">
        <Routes basename="/">
          <Route path="/" element={<Home />}></Route>
          <Route path="/projects" element={<Projects />}></Route>
          <Route path="/skills" element={<Skills />}></Route>
          <Route
            path="/certificates"
            element={<Certificate setActive={'abc'} />}
          ></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
