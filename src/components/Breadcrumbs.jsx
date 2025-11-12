import { Link } from 'react-router-dom';

function Breadcrumbs({ items }) {
  if (!items?.length) {
    return null;
  }

  return (
    <nav aria-label="Breadcrumb" className="text-sm text-white/60">
      <ol className="flex flex-wrap items-center gap-2">
        {items.map((item, index) => (
          <li key={item.label} className="flex items-center gap-2">
            {index > 0 && <span className="text-white/30">/</span>}
            {item.to ? (
              <Link to={item.to} className="hover:text-cyan-300">
                {item.label}
              </Link>
            ) : (
              <span className="text-white/80">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

export default Breadcrumbs;
