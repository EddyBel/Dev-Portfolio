export function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar__container__title">
        <img className="navbar__logo" src="logo.jpeg" alt="LOGO IMG" />
        <h1 className="navbar__title">EddyBel</h1>
      </div>
      <ul className="navbar__container__menus">
        <li>
          <a className="navbar__option" href="#">
            Home
          </a>
        </li>
        <li>
          <a className="navbar__option" href="#">
            About
          </a>
        </li>
        <li>
          <a className="navbar__option" href="#">
            Works
          </a>
        </li>
        <li>
          <a className="navbar__option" href="#">
            Capabilities
          </a>
        </li>
        <li>
          <a className="navbar__option" href="#">
            Contact
          </a>
        </li>
      </ul>
      <div className="navbar__container__buttons">
        <button className="navbar__button_shadow">Blog</button>
        <button className="navbar__button__rounded">Notes</button>
      </div>
    </nav>
  );
}
