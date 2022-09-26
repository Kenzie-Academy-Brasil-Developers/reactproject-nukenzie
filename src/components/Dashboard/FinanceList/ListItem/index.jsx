import { FaTrash } from "react-icons/fa";
import "./index.css";
const ListItem = (props) => {
  const { type, price, id, name } = props.item;

  return (
    <li key={props.index} className="card">
      {type == "Entrada" ? (
        <span className="card-type input"></span>
      ) : (
        <span className="card-type output"></span>
      )}
      <div className="card-wrap">
        <div className="card__description flex-column">
          <p className="font-title-2">{name}</p>
          <span className="font-text-2 output">{type}</span>
        </div>
        <div className="card__info">
          <p className="font-text-2">
            R$ {Number(price).toFixed(2).replace(".", ",")}
          </p>
          <button
            id={id}
            className="button-remove"
            onClick={() => props.removeFinance(props.item)}
          >
            <FaTrash />
          </button>
        </div>
      </div>
    </li>
  );
};

export default ListItem;
