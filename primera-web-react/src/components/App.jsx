import "../styles/App.scss";
import logo from "../images/logo.png";

function App() {
  const user = "Anacleta";
  const age = 80;
  return (
    <>
      <h1>Bienvenida {user} y tienes {age} años</h1>
      <img src={logo} alt="TW-logo" />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus culpa
        distinctio officiis ex, voluptate consequatur similique error possimus
        reprehenderit maiores explicabo maxime illum, pariatur fugit. Dolor,
        itaque qui? Autem, temporibus.
      </p>
    </>
  );
}

export default App;
