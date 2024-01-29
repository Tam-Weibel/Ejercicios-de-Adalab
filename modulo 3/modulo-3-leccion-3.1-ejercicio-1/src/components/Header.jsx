import menu from "../assets/ico-menu.svg"
import "../scss/core/Variables.scss"
import "../scss/layout/Header.scss"

const Header = () => {
  return (
    <>
      <header>
        <figure className="header">
          <a href="https://adalab.es/" target="_blank">
            <img className="header__img" src={menu} alt="menu" />
          </a>
        </figure>
      </header>
    </>
  );
};

export default Header;
