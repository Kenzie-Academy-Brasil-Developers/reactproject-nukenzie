import { useState } from "react";
import "./index.css";
const FinanceRegister = ({ setFinance, setFilterList, children }) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [type, setType] = useState("");
  const [register, setRegister] = useState(0);

  const filterReload = () => {
    const btnActive = document.querySelector(".button-default--active");
    if (btnActive.innerHTML == "Entradas") {
      setFilterList((oldFinances) =>
        oldFinances.filter(({ type }) => type == "Entrada")
      );
    } else if (btnActive.innerHTML == "Despesas") {
      setFilterList((oldFinances) =>
        oldFinances.filter(({ type }) => type == "Despesa")
      );
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFinance((oldFinances) => [
      ...oldFinances,
      { name: name, price: price, type: type, id: register },
    ]);
    setFilterList((oldFilterList) => [
      ...oldFilterList,
      { name: name, price: price, type: type, id: register },
    ]);
    setRegister(register + 1);
    filterReload();
    setName("");
    setPrice("");
    setType("");
  };

  return (
    <section className="firstColumn flex-column">
      <form onSubmit={handleSubmit} className="flex-column">
        <div className="form__description input-group flex-column">
          <label htmlFor="description" className="font-text-2">
            Descrição
          </label>
          <input
            className="input-default font-text-1"
            type="text"
            placeholder="Digite aqui sua descrição"
            name="description"
            id="description"
            maxLength={40}
            value={name}
            required
            onChange={(event) => setName(event.target.value)}
          />
          <span className="font-text-2">Ex: Compra de roupas</span>
        </div>

        <div className="value-input">
          <div className="input-group flex-column">
            <label htmlFor="amount" className="font-text-2">
              Valor
            </label>
            <div className="input-container font-text-2">
              <input
                type="number"
                className="input-default"
                placeholder="1"
                name="amount"
                id="amount"
                step="any"
                min={1}
                value={price}
                required
                onChange={(event) => setPrice(event.target.value)}
              />
              <label htmlFor="amount" className="icon">
                R$
              </label>
            </div>
          </div>
          <div className="input-group flex-column">
            <label className="font-text-2">Tipo de valor</label>
            <div className="select-wrap">
              <select
                className="font-text-2 input-default"
                name="entry"
                required
                value={type}
                onChange={(event) => setType(event.target.value)}
              >
                <option value="">Selecione</option>
                <option value="Entrada">Entrada</option>
                <option value="Despesa">Despesa</option>
              </select>
            </div>
          </div>
        </div>

        <button className="button-large font-button-1" type="submit">
          Inserir valor
        </button>
      </form>

      {children}
    </section>
  );
};

export default FinanceRegister;
