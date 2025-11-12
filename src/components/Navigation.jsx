import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { navLinks } from '../data/content.js';

function Navigation() {
  const [open, setOpen] = useState(false);

  const mobileClasses = open
    ? 'max-h-96 opacity-100'
    : 'pointer-events-none max-h-0 opacity-0';

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-slate-950/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 text-white">
        <div className="text-lg font-black tracking-tight text-cyan-300">MAXIMIZED PT</div>

        <button
          className="text-2xl text-white lg:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle navigation"
        >
          {open ? '✕' : '☰'}
        </button>

        <nav
          className={`${mobileClasses} absolute left-0 right-0 top-full origin-top border-b border-white/5 bg-slate-950/95 px-4 transition-all duration-300 lg:static lg:max-h-none lg:border-none lg:bg-transparent lg:px-0 lg:opacity-100 lg:pointer-events-auto`}
        >
          <ul className="flex flex-col gap-3 py-4 text-base font-semibold lg:flex-row lg:items-center lg:gap-6 lg:py-0">
            {navLinks.map(({ label, to }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `relative block text-left transition ${
                      isActive ? 'text-cyan-300' : 'text-white/80 hover:text-cyan-300'
                    }`
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
            <li className="lg:hidden">
              <Link
                to="/book"
                onClick={() => setOpen(false)}
                className="btn-gradient w-full text-center text-base"
              >
                Book Now
              </Link>
            </li>
          </ul>
        </nav>

        <div className="hidden lg:block">
          <Link to="/book" className="btn-gradient px-6 py-3 text-base">
            Book Now
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Navigation;
