import "../scss/core/Variables.scss"
import "../scss/layout/Footer.scss"

const Link = (props) => {
    const target = "_blank";
  return (
    <>
      <li>
        <a href="https://adalab.es/" >
        {props.text}
        </a>
      </li>
    </>
  );
};

export default Link;
