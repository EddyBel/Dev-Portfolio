import { BiSend } from 'react-icons/bi';
import { InputLinearStyle } from '../components/commons/index';

export function Contact() {
  return (
    <section className="contact__page">
      <div className="contact__message">
        <h1>Contact me at</h1>
        <p>
          If you're looking for an exciting project, you've come to the right place! I am a passionate professional with
          experience in several areas, and I am ready to help you achieve your goals.
        </p>
        <ul>
          <li>
            <a href="#"></a>
          </li>
        </ul>
      </div>
      <form className="form">
        <div className="form__name__container">
          <InputLinearStyle label="What is your name?" id="input-name" maxWidth={350} />
          <InputLinearStyle label="What is your lastname?" id="input-name" maxWidth={350} />
        </div>
        <InputLinearStyle label="What is your email?" id="input-name" />
        <InputLinearStyle label="What is your subject?" id="input-name" />
        <div className="form__message__containet">
          <label htmlFor="What is your message" className="message__label">
            What is your message?
          </label>
          <textarea name="message" id="message" cols="30" rows="10" className="message__input"></textarea>
        </div>

        <button className="animated-button">
          <span className="animated-button-text">
            Hover me <BiSend />
          </span>
          <span></span>
        </button>
      </form>
    </section>
  );
}
