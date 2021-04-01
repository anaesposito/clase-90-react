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
    <article className="product-card">
      <img src={img} />
      <div className="card-info">
        <div className="description-section">
          <h4>{title}</h4>
          <h6>{type}</h6>
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
        <div className="price-section">
          <p>${price}</p>
          <AddShoppingCartIcon />
        </div>
      </div>
      {/* <Agregar handleClickBorrarTodos={handleClickBorrarTodos} /> */}
    </article>
  );
};

export default Tarjeta;
