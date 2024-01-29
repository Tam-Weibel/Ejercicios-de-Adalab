import "../scss/App.scss"
import "../scss/core/Reset.scss"
import "../scss/core/Variables.scss"
import "../scss/layout/Header.scss"
import "../scss/layout/Hero.scss"
import "../scss/layout/Connect.scss"
import "../scss/layout/NewYear.scss"
import "../scss/layout/Footer.scss"
import Header from "./Header.jsx"
import Main from "./Main.jsx"
import Footer from "./Footer.jsx"


const App = () => {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;
