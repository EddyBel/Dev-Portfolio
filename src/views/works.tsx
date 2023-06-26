import { PiGithubLogoFill } from 'react-icons/pi';
import { PiGithubLogoBold } from 'react-icons/pi';
import { GrLinkNext } from 'react-icons/gr';
import { TechnologyIcon, InfiniteTextSlider } from '../components/commons/index';

const cards = [
  {
    title: 'Portafolio Web',
    description: 'Portafolio Web donde presento mis proyectos',
    cover:
      'https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    technologies: ['TypeScript', 'Sass', 'React', 'Vite'],
  },
  {
    title: 'Neovim Configuration',
    description: 'Portafolio Web donde presento mis proyectos',
    cover: 'assets/projects/vimpc.jpeg',
    technologies: ['VimScript', 'Lua'],
  },
  {
    title: 'Scanner de Puertos',
    description: 'Portafolio Web donde presento mis proyectos',
    cover: 'assets/projects/scanner.jpeg',
    technologies: ['Python', 'system', 'host'],
  },
  {
    title: 'Chat Terminal',
    description: 'Portafolio Web donde presento mis proyectos',
    cover: 'assets/projects/robot en laptop.jpeg',
    technologies: ['Python', 'Terminal'],
  },
  {
    title: 'My Personal API',
    description: 'Portafolio Web donde presento mis proyectos',
    cover: 'assets/projects/restapi.jpeg',
    technologies: ['python', 'backend', 'Flask'],
  },
  {
    title: 'Notes',
    description: 'Portafolio Web donde presento mis proyectos',
    cover:
      'https://images.pexels.com/photos/317356/pexels-photo-317356.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    technologies: ['Markdown', 'Code', 'Note'],
  },
];

export function Works() {
  let delay = 0;

  return (
    <div className="works_page">
      <h1 className="works__title">works and developments</h1>
      <p className="works__description__page">
        Here are some of my outstanding projects in web development: I have developed a fully functional e-commerce
        website, created a social networking platform with interactive features and implemented a custom content
        management system. These projects demonstrate my ability to create innovative and high quality web solutions.
      </p>
      <section></section>
      <section className="works__container__cards">
        {cards.map((item, index) => {
          if (index > 1) delay = delay + 50;
          return (
            <div
              className="work__card"
              style={{ backgroundImage: `url("${item.cover}")`, animationDelay: `${delay}ms` }}
            >
              <div className="work__card__container__content">
                <div className="work__card__container__text">
                  <h1 className="work__card__title">{item.title}</h1>
                  <p className="work__card__description">{item.description} </p>
                </div>
                <div className="work__card__container__technologys">
                  <ul>
                    {item.technologies.map((tech) => (
                      <li>
                        <TechnologyIcon technology={tech} color={'#eee'} />
                      </li>
                    ))}
                  </ul>
                  <a className="work__card__button__github">
                    <PiGithubLogoFill size={20} />
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </section>
      <section className="works__data">
        <div className="card__data__works">
          <div className="card__data__works__info">
            <div>
              <h1 className="card__data__works__property">Works</h1>
              <h1>13</h1>
            </div>
            <div>
              <h1 className="card__data__works__property">Commits</h1>
              <h1>800</h1>
            </div>
            <div>
              <h1 className="card__data__works__property">Code Lines</h1>
              <h1>360.3K</h1>
            </div>
          </div>
        </div>

        <div className="works__data__more__works">
          <img src="assets/laptop-minimalistic.jpeg" className="works__data__more__works__image" />
          <div className="works__data__more__works__text">
            <h1>Would you like to know more about our projects?</h1>
            <p>Visit my github or the repository section if you want to see other projects</p>
            <div className="works__data__more__container__buttons">
              <a className="works__button__github">
                <PiGithubLogoBold className="works__more__github" /> Github
              </a>
              <a className="works__button__link">
                More Works <GrLinkNext className="works__more__link-arrow" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

// <section className="work__about__section"></section>
