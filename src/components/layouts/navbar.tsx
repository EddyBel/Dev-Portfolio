import { Link, useLocation } from 'react-router-dom';
import { PATHS } from '../../web.config';

export function NavBar() {
  const location = useLocation();

  return (
    <nav className="navbar">
      <ul className="navbar__container__menus">
        <li
          className={`navbar__glider ${location.pathname == '/' ? 'home' : location.pathname.replace(/\//g, '')}`}
        ></li>
        {Object.keys(PATHS).map((key) => (
          <li className={`navbar__item ${key.toLowerCase()}`} key={`option-${key}`}>
            <Link to={PATHS[key]} className="navbar__item__link">
              {key}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
