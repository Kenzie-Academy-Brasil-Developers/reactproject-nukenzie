import "./index.css";
import { useState } from "react";
import logo from "./assets/NoCard.svg";
import ListItem from "./ListItem";
import ListFilter from "./ListFilter";

const FinanceList = ({ finance, setFinance }) => {
  const [filterList, setFilterList] = useState([]);
  const [filterAuth, setFilterAuth] = useState(false);

  const removeFinance = (item) => {
    setFinance(finance.filter(({ id }) => id !== item.id));
    setFilterList(filterList.filter(({ id }) => id !== item.id));
  };

  return (
    <section className="secondColumn flex-column">
      <ListFilter
        finance={finance}
        setFilterAuth={setFilterAuth}
        setFilterList={setFilterList}
      />

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
          <div className="alert font-alert-1 flex-column">
            <span className="font-alert-1">
              Você ainda não possui nenhum lançamento...
            </span>
            <img src={logo} alt="" />
          </div>
        )}
      </ul>
    </section>
  );
};

export default FinanceList;
