import '../styles/home.css';
import CV from '../images/Resume.pdf';
import ME from '../images/me.jpg';
import HeaderScocials from '../components/HeaderScocials';
export default function Home() {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I`m</h5>
        <h1>Maduagwu Jennifer Chioma</h1>
        <h5 className="text-light">Front-end developer</h5>
        <div className="cta">
          <a href={CV} download className="btn">
            Download CV
          </a>
          <a href="#contact" className="btn btn-primary">
            Let`s Talk
          </a>
        </div>
        <HeaderScocials />

        <div className="me">
          <img src={ME} alt="me" className="me" />
        </div>

        <a href="#contact" className="scroll__down">
          Scroll Down
        </a>
      </div>
    </header>
  );
}
