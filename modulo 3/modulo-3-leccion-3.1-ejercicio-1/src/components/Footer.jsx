import arrow from "../assets/ico-arrow.svg"
import Link from "./Link.jsx"
import "../scss/core/Variables.scss"
import "../scss/layout/Footer.scss"

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <figure className="footer__button">
          <a href="#hero">
            <img src={arrow} alt="scroll down" />
          </a>
        </figure>
        <div className="footer__menu">
          <ul>
            <Link text="zapatillas" />
            <Link text="ropa" />
            <Link text="niño/a" />
            <Link text="destacados" />
            <Link text="tips" />
          </ul>
          <ul>
            <li>
              <a href="https://adalab.es/" target="_blank">
                twitter
              </a>
            </li>
            <li>
              <a href="https://adalab.es/" target="_blank">
                instagram
              </a>
            </li>
            <li>
              <a href="https://adalab.es/" target="_blank">
                youtube
              </a>
            </li>
          </ul>
          <div>
            <p>©2023</p>
            <p>
              we <span>❤</span> run
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
