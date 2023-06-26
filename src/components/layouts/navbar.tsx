import { useState } from 'react';
import { Link } from 'react-router-dom';
import { PATHS } from '../../web.config';

export function NavBar() {
  const [gliderClass, setGliderClass] = useState('hidden');

  const moveGlider = (value: any) => {
    const focusElement: string = value.target.innerHTML;
    setGliderClass(focusElement.toLowerCase());
  };

  return (
    <nav className="navbar">
      <ul className="navbar__container__menus">
        <li className={`navbar__glider ${gliderClass}`}></li>
        {Object.keys(PATHS).map((key) => (
          <li className={`navbar__item ${key.toLowerCase()}`} key={`option-${key}`}>
            <Link to={PATHS[key]} className="navbar__item__link" onClick={moveGlider}>
              {key}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
