import "./index.css";
import { useState } from "react";
import FinanceList from "./FinanceList";
import FinanceRegister from "./FinanceRegister";
import Header from "./Header";
import TotalMoney from "./TotalMoney";

const Dashboard = ({ pageRedirect }) => {
  const [finance, setFinance] = useState([]);
  const [filterList, setFilterList] = useState([]);
  return (
    <>
      <Header pageRedirect={pageRedirect} />

      <div className="container">
        <main>
          <FinanceRegister
            setFinance={setFinance}
            setFilterList={setFilterList}
          >
            <TotalMoney finance={finance} />
          </FinanceRegister>
          <FinanceList
            finance={finance}
            setFinance={setFinance}
            filterList={filterList}
            setFilterList={setFilterList}
          />
        </main>
      </div>
    </>
  );
};

export default Dashboard;
