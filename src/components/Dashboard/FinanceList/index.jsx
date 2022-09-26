import "./index.css";
import { useState } from "react";
import ListItem from "./ListItem";

const FinanceList = ({ finance, setFinance }) => {
  const [filterList, setFilterList] = useState([]);
  const [filterAuth, setFilterAuth] = useState(false);

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

  const allFilter = (event) => {
    setFilterAuth(false);
    buttonVerify("Todos");
  };

  const removeFinance = (item) => {
    setFinance(finance.filter(({ id }) => id !== item.id));

    // VERIFICAÇÃO PRA ATUALIZAR A LISTAGEM NO FILTRO QUE ESTA PRE-SELECIONADO
    // TA COM BUG DE TER QUE CLICAR 2X
    const activeBtn = document.querySelectorAll(".button-default--active");
    activeBtn.forEach((btn) => {
      if (btn.innerText == "Entradas") {
        inputFilter();
      } else if (btn.innerText == "Despesas") {
        outputFilter();
      } else {
        allFilter();
      }
    });
  };

  return (
    <section className="secondColumn flex-column">
      <div className="secondColumn__header">
        <h2 className="font-title-2">Resumo Financeiro</h2>
        <nav className="filter">
          <button
            onClick={allFilter}
            className="button-default button-default--active button-filter"
          >
            Todos
          </button>
          <button
            onClick={inputFilter}
            className="button-default button-filter"
          >
            Entradas
          </button>
          <button
            onClick={outputFilter}
            className="button-default button-filter"
          >
            Despesas
          </button>
        </nav>
      </div>

      <ul className="secondColumn__list flex-column ">
        {filterAuth && filterList.length ? (
          filterList.map((item, index) => {
            return (
              <ListItem
                key={index}
                item={item}
                index={index}
                removeFinance={removeFinance}
              />
            );
          })
        ) : !filterAuth && finance.length ? (
          finance.map((item, index) => {
            return (
              <ListItem
                key={index}
                item={item}
                index={index}
                removeFinance={removeFinance}
              />
            );
          })
        ) : (
          <div className="alert font-alert-1">
            Você ainda não possui nenhum lançamento...
          </div>
        )}
      </ul>
    </section>
  );
};

export default FinanceList;
