import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaAlignRight } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';

function Navbar({ active }) {
  console.log(window.location.href.split('/'));
  const [isMobile, setIsMobile] = useState(true);
  const [isActive, setIsActive] = useState(window.location.href.split('/')[3]);

  let activeHome,
    activeCertificates,
    activeProjects,
    activeSkills,
    activeContact = '';
  if (isActive == 'Home') {
    activeHome = 'md:border-b-2 md:border-orange-500 text-blue-500';
  } else if (isActive == 'projects') {
    activeProjects = 'md:border-b-2 md:border-orange-500 text-blue-500';
  } else if (isActive == 'certificates') {
    activeCertificates = 'md:border-b-2 md:border-orange-500 text-blue-500';
  } else if (isActive == 'skills') {
    activeSkills = 'md:border-b-2 md:border-orange-500 text-blue-500';
  } else if (isActive == 'contact') {
    activeContact = 'md:border-b-2 md:border-orange-500 text-blue-500';
  }

  return (
    <div className="flex flex-col md:flex-row md:h-12 md:justify-between border-b-2 border-slate-200 px-3 py-2 bg-white">
      <div className="flex flex-row justify-between">
        <h5>Portofolio</h5>
        <div className="md:hidden">
          <button onClick={() => setIsMobile(!isMobile)}>
            {isMobile ? <FaAlignRight /> : <ImCross />}
          </button>
        </div>
      </div>
      <div className={isMobile ? 'hidden md:block' : 'block'}>
        <div className="flex flex-col md:flex-row text-center gap-2 md:gap-8 pt-3 md:pt-0 md:pr-4">
          <Link
            onClick={() => setIsActive('Home')}
            to="/"
            className={
              'text-lg font-semibold hover:text-blue-500 ' + activeHome
            }
          >
            Home
          </Link>
          <Link
            onClick={() => setIsActive('projects')}
            to="/projects"
            className={
              'text-lg font-semibold hover:text-blue-500 ' + activeProjects
            }
          >
            Projects
          </Link>
          <Link
            onClick={() => setIsActive('certificates')}
            to="/certificates"
            className={
              'text-lg font-semibold hover:text-blue-500 ' + activeCertificates
            }
          >
            Certificate
          </Link>
          <Link
            onClick={() => setIsActive('skills')}
            to="/skills"
            className={
              'text-lg font-semibold hover:text-blue-500 ' + activeSkills
            }
          >
            Skills
          </Link>
          <Link
            onClick={() => setIsActive('contact')}
            to="/contact"
            className={
              'text-lg font-semibold hover:text-blue-500 ' + activeContact
            }
          >
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
