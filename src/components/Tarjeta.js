import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import { useState } from "react";
import Agregar from "./Agregar";
import "./Tarjeta.scss";

import StarIcon from "@material-ui/icons/Star";
import { formatMs } from "@material-ui/core";
const Tarjeta = ({ title, type, price, rating, img, category, collection }) => {
  const [borrador, setBorrador] = useState(false);

  const handleClickBorrarTodos = () => {
    setBorrador(true);
  };
  return (
    <div className="product-card">
      <div>
        <h1>{title}</h1>
        <p>Tipo: {type}</p>
        <p>${price}</p>
        <p>Categoria: {category}</p>
        <p>Coleccion:{collection}</p>
        <p>
          {rating === 4 ? (
            <span>
              <StarIcon /> <StarIcon /> <StarIcon />
              <StarIcon />
            </span>
          ) : (
            ""
          )}
        </p>
      </div>
      <img src={img} />
      <AddShoppingCartIcon />
      {/* <Agregar handleClickBorrarTodos={handleClickBorrarTodos} /> */}
    </div>
  );
};

export default Tarjeta;
