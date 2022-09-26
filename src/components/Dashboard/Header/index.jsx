import "./index.css";

const Header = ({ pageRedirect }) => {
  return (
    <header>
      <div className="container">
        <nav>
          <h1 className="logo font-title-logo">
            <span>Nu</span>Kenzie
          </h1>

          <button
            onClick={pageRedirect}
            className="button-default font-button-2 "
          >
            Inicio
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
