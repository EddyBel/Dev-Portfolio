import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';
import { RiLinksLine } from 'react-icons/ri';
import { AiOutlineAppstore, AiFillPhone } from 'react-icons/ai';
import { MdVideogameAsset, MdOutlineAlternateEmail } from 'react-icons/md';
import { HiOutlineDocument } from 'react-icons/hi';

const color = '#eeee';
const size = '20px';

const FooterOptions = [
  [
    {
      name: 'NoteBook',
      path: '/',
      icon: <RiLinksLine size={size} color={color} />,
    },
    {
      name: 'Portfolio',
      path: '/',
      icon: <RiLinksLine size={size} color={color} />,
    },
    {
      name: 'EddyBel',
      path: '/',
      icon: <RiLinksLine size={size} color={color} />,
    },
  ],
  [
    {
      name: 'Applications',
      path: '/',
      icon: <AiOutlineAppstore size={size} color={color} />,
    },
    {
      name: 'VideoGames',
      path: '/',
      icon: <MdVideogameAsset size={size} color={color} />,
    },
    {
      name: 'Documentation',
      path: '/',
      icon: <HiOutlineDocument size={size} color={color} />,
    },
  ],
  [
    {
      name: 'Github',
      path: 'https://github.com/EddyBel',
      icon: <FiGithub size={size} color={color} />,
    },
    {
      name: 'Linkedin',
      path: 'https://github.com/EddyBel',
      icon: <FiLinkedin size={size} color={color} />,
    },
    {
      name: 'Twitter',
      path: 'https://github.com/EddyBel',
      icon: <FiTwitter size={size} color={color} />,
    },
    {
      name: 'kratos61918@gmail.com',
      path: 'https://github.com/EddyBel',
      icon: <MdOutlineAlternateEmail size={size} color={color} />,
    },
    {
      name: 'eduardoantonio72432@gmail.com',
      path: 'https://github.com/EddyBel',
      icon: <MdOutlineAlternateEmail size={size} color={color} />,
    },
    {
      name: '+52 5621836340',
      path: 'https://github.com/EddyBel',
      icon: <AiFillPhone size={size} color={color} />,
    },
  ],
];

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer__user__content">
        <img
          src={'https://avatars.githubusercontent.com/u/111319309?v=4'}
          alt="user__img"
          className="footer__user__content__img"
        />
        <p className="footer__user__content__description">
          I'm Eduardo, a software developer. I specialize in mobile applications, websites and artificial intelligence
          projects.{' '}
        </p>
      </div>
      <div className="footer__container__links">
        <h1>Other Pages</h1>
        <ul>
          {FooterOptions[0].map((options) => (
            <li>
              <a href={options.path}>
                {options.icon}
                {options.name}
              </a>
              <div className="footer__line__decoration"></div>
            </li>
          ))}
        </ul>
      </div>

      <div className="footer__container__links">
        <h1>Resources</h1>
        <ul>
          {FooterOptions[1].map((options) => (
            <li>
              <a href={options.path}>
                {options.icon}
                {options.name}
              </a>
              <div className="footer__line__decoration"></div>
            </li>
          ))}
        </ul>
      </div>

      <div className="footer__container__links">
        <h1>Contacts</h1>
        <ul>
          {FooterOptions[2].map((options) => (
            <li>
              <a href={options.path}>
                {options.icon}
                {options.name}
              </a>
              <div className="footer__line__decoration"></div>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
