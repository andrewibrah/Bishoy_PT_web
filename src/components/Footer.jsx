import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-slate-950 px-4 py-16 text-white">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-3">
        <div>
          <h4 className="text-lg font-semibold">Contact</h4>
          <p className="mt-2 text-white/70">Dr. Bishoy Maximous, DPT</p>
          <a href="tel:646-240-5299" className="mt-2 block text-white/80">
            646-240-5299
          </a>
          <a href="mailto:info@maximizedpt.com" className="block text-white/80">
            info@maximizedpt.com
          </a>
          <p className="mt-2 text-white/60">New York, NY</p>
        </div>
        <div>
          <h4 className="text-lg font-semibold">Quick Links</h4>
          <ul className="mt-3 flex flex-col gap-2 text-white/70">
            <li>
              <Link to="/services" className="transition hover:text-cyan-300">
                Programs &amp; Services
              </Link>
            </li>
            <li>
              <Link to="/advantage" className="transition hover:text-cyan-300">
                In-Gym Advantage
              </Link>
            </li>
            <li>
              <Link to="/about" className="transition hover:text-cyan-300">
                Meet Dr. Bishoy
              </Link>
            </li>
            <li>
              <Link to="/proof" className="transition hover:text-cyan-300">
                Proof &amp; FAQ
              </Link>
            </li>
            <li>
              <Link to="/book" className="transition hover:text-cyan-300">
                Book / Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold">Connect</h4>
          <div className="mt-3 flex gap-4 text-2xl">
            <a
              href="https://www.instagram.com/maximized_pt_sportsrehab/"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-cyan-300"
            >
              📷
            </a>
            <a
              href="https://maximizedphysicaltherapysportsrehab.square.site/"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-cyan-300"
            >
              🌐
            </a>
          </div>
          <p className="mt-4 text-sm text-white/70">
            Follow @maximized_pt_sportsrehab for daily tips, success stories, and movement insights.
          </p>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-6xl border-t border-white/10 pt-6 text-sm text-white/60">
        <p>&copy; {new Date().getFullYear()} Maximized Physical Therapy &amp; Sports Rehab. All rights reserved.</p>
        <p className="mt-2">Licensed Physical Therapy Practice in New York</p>
      </div>
    </footer>
  );
}

export default Footer;
