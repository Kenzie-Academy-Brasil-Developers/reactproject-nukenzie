import "./index.css";
const TotalMoney = ({ finance }) => {
  const entry = finance.filter((item) => item.type == "Entrada") || [];
  const expense = finance.filter((item) => item.type !== "Entrada") || [];

  const entryValue = entry.reduce((ac, vt) => ac + +vt.price, 0) || 0;
  const expenseValue = expense.reduce((ac, vt) => ac + +vt.price, 0) || 0;

  const total = entryValue - expenseValue;

  if (finance.length) {
    return (
      <div className="resume">
        <div className="resume__value font-title-2">
          <p>Valor Total:</p>
          <span>R$ {total.toFixed(2).replace(".", ",")}</span>
        </div>
        <span className="resume-details font-text-2 ">
          o valor se refere ao saldo
        </span>
      </div>
    );
  }
};
export default TotalMoney;
