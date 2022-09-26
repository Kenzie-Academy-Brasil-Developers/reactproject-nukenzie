import "./index.css";

const ListFilter = ({ finance, setFilterAuth, setFilterList }) => {
  const buttonVerify = (name) => {
    const buttonsFilter = document.querySelectorAll(".button-filter");
    buttonsFilter.forEach((btn) => {
      if (btn.innerText == name) {
        btn.classList.add("button-default--active");
      } else {
        btn.classList.remove("button-default--active");
      }
    });
  };

  const inputFilter = () => {
    setFilterList(finance.filter(({ type }) => type == "Entrada"));
    setFilterAuth(true);
    buttonVerify("Entradas");
  };

  const outputFilter = () => {
    setFilterList(finance.filter(({ type }) => type == "Despesa"));
    setFilterAuth(true);
    buttonVerify("Despesas");
  };

  const allFilter = () => {
    setFilterAuth(false);
    buttonVerify("Todos");
  };

  return (
    <div className="secondColumn__header">
      <h2 className="font-title-2">Resumo Financeiro</h2>
      <nav className="filter">
        <button
          onClick={allFilter}
          className="button-default button-default--active button-filter"
        >
          Todos
        </button>
        <button onClick={inputFilter} className="button-default button-filter">
          Entradas
        </button>
        <button onClick={outputFilter} className="button-default button-filter">
          Despesas
        </button>
      </nav>
    </div>
  );
};

export default ListFilter;
