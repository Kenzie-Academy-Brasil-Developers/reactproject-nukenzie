import "./styles.css";
import logo from "./assets/HomeIlustration.svg";

const Home = ({ pageRedirect }) => {
  return (
    <div className="home">
      <div className="homeContainer">
        <section className="homeTitle">
          <h1 className="logo font-title-logo">
            <span>Nu</span> Kenzie
          </h1>
          <h2 className="font-title-1">
            Centralize o controle das suas finanças
          </h2>
          <p className="font-text-1">de forma rápida e segura</p>

          <button onClick={pageRedirect} className="font-button-1 button-large">
            Iniciar
          </button>
        </section>
        <img className="HomeIlustration" src={logo} alt="Home" />
      </div>
    </div>
  );
};

export default Home;
