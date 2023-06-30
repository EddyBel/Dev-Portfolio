import { BsArrowRight } from 'react-icons/bs';
import { TechnologyIcon } from '../components/commons/index';

const cards = [{}, {}, {}, {}, {}, {}, {}, {}, {}];
const tech = ['javascript', 'typescript', 'python', 'java', 'css', 'sass', 'c++', 'c#'];

export function Repos() {
  return (
    <section className="respositories__page">
      <div className="repositories__buttons__section">
        {tech.map((item) => (
          <button className={`repositories__button__tech`}>{item}</button>
        ))}
      </div>
      <div className="repositories__cards">
        {cards.map(() => (
          <div className="card__github">
            <div className="card__github__container__data">
              <p className="card__github__data">
                <TechnologyIcon technology="python" />
                <span>20Mb</span>
              </p>
              <div className="card__github__description">
                <h1>Tite repo</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos debitis sint recusandae</p>
              </div>
            </div>
            <div className="card__github__button">
              <p>Go to repository</p> <BsArrowRight className="card__github__arrow" />
            </div>
          </div>
        ))}
      </div>{' '}
    </section>
  );
}
