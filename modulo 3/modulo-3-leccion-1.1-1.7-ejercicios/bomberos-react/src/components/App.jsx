import { useState } from "react";
import logo from '../images/logo.png';
import "../styles/App.scss";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
        <main className="page">
          <h1 className="page__title">#cc212a</h1>
          <p className="page__text">Fire engine red</p>
        </main>
        <footer className="footer">
          <p className="footer__r">R</p>
          <p className="footer__copy">© 2024 FER.</p>
          <img className="footer__img" src={logo} alt="TW-logo"/>
        </footer>
    </>
  );
}

export default App;
