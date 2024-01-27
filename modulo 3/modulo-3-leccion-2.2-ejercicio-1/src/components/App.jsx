import "../scss/App.scss"
import { useState } from "react";

const App = () => {
  const [email, setEmail] = useState("");
  const handleEmail = (ev) => {
    const inputValue = ev.target.value;
    setEmail(inputValue);
  };

  return (
    <div>
      <h1>Generador de emails:</h1>
      <form>
        <label>
          Escribe un email:
          <input
            className="form__input-text"
            type="email"
            name="name"
            onChange={handleEmail}
          />
        </label>
      </form>
      <p>Tu email es: {email}.</p>
      <p>
        Pulsa en <a href={`mailto:${email}`}>{email}</a> para enviar un email.
      </p>
    </div>
  );
};

export default App;
