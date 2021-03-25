import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import Agregar from "./Agregar";
import "./Tarjeta.scss";
import StarIcon from "@material-ui/icons/Star";
const Tarjeta = ({ title, type, price, rating, img, isAvailable, onSale }) => {
  return (
    <div>
      <div>
        <h1>{title}</h1>
        <p>{isAvailable ? "Disponible" : "No Disponible"}</p>
        <p>{onSale ? "EN OFERTA" : ""}</p>
        <p>Tipo: {type}</p>
        <p>${price}</p>
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
      <Agregar />
    </div>
  );
};

export default Tarjeta;
