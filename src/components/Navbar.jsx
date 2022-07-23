import { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <div className="flex flex-col md:flex-row md:h-12 md:justify-between border-b-2 border-slate-200 px-3 py-2 bg-white">
      <div className="flex flex-row justify-between">
        <h5>Portofolio</h5>
        <div className="md:hidden">
          <button onClick={() => setIsMobile(!isMobile)}>#</button>
        </div>
      </div>
      <div className={isMobile ? 'hidden md:block' : 'block'}>
        <div className="flex flex-col md:flex-row text-center gap-2 md:gap-8 pt-3 md:pt-0 md:pr-4">
          <Link
            to="/"
            className="text-lg font-semibold hover:border-b-2 border-slate-500"
          >
            Home
          </Link>
          <Link
            to="/projects"
            className="text-lg font-semibold hover:border-b-2 border-slate-500"
          >
            Projects
          </Link>
          <Link
            to="/certificates"
            className="text-lg font-semibold hover:border-b-2 border-slate-500"
          >
            Certificate
          </Link>
          <Link
            to="/skills"
            className="text-lg font-semibold hover:border-b-2 border-slate-500"
          >
            Skills
          </Link>
          <Link
            to="/contact"
            className="text-lg font-semibold hover:border-b-2 border-slate-500"
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
