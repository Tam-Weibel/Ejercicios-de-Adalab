import scroll from "../assets/ico-scroll-down.svg"
import "../scss/core/Variables.scss"
import "../scss/layout/Hero.scss"
import "../scss/layout/Connect.scss"
import "../scss/layout/NewYear.scss"

const Main = () => {
    return (
      <>
        <main>
          <section className="hero" id="hero">
            <h1 className="hero__title">Hasta un 50% de descuento</h1>
            <p className="hero__text">
              Ya están aquí las ofertas de fin de temporada
            </p>
            <figure className="hero__button">
              <a href="#new-year">
                <img src={scroll} alt="scroll down" />
              </a>
            </figure>
          </section>
          <section className="connect">
            <p className="connect__orange">Los sentimientos nos inspiran</p>
            <h2 className="connect__title">Conecta Contigo</h2>
            <p className="connect__text">
              Esto es una celebración de todo lo que nos mueve. Del poder de
              elegir y de la libertad de ser. Rendimos homenaje al hermoso caos
              del movimiento y a la plena consciencia que tan bien nos hacen
              sentir.
            </p>
            <div className="connect__button">
              <a href="#">Comprar</a>
            </div>
          </section>
          <section className="new-year" id="new-year">
            <h3 className="new-year__title">Año nuevo, movimientos nuevos</h3>
            <div className="new-year__text new-year__item1">
              <h4>Entrenamientos</h4>
              <p>Sesiones de running y entrenamientos.</p>
            </div>
            <div className="new-year__text new-year__item2">
              <h4>Cualquier nivel</h4>
              <p>Entrenamientos para cada nivel</p>
            </div>
            <div className="new-year__text new-year__item3">
              <h4>Exclusividad</h4>
              <p>Productos para miembros premium</p>
            </div>
            <div className="new-year__button">
              <a href="#">Empezar ahora</a>
            </div>
          </section>
        </main>
      </>
    );
  }
  
  export default Main;