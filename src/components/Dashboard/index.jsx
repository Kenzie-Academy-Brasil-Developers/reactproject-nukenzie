import "./index.css";
import { useState } from "react";
import FinanceList from "./FinanceList";
import FinanceRegister from "./FinanceRegister";
import Header from "./Header";
import TotalMoney from "./TotalMoney";
const Dashboard = ({ pageRedirect }) => {
  const [finance, setFinance] = useState([]);

  return (
    <>
      <Header pageRedirect={pageRedirect} />

      <div className="container">
        <main>
          <FinanceRegister setFinance={setFinance}>
            <TotalMoney finance={finance} />
          </FinanceRegister>
          <FinanceList finance={finance} setFinance={setFinance} />
        </main>
      </div>
    </>
  );
};

export default Dashboard;
