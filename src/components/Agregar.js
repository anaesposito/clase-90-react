import { Divider } from "@material-ui/core";
import { useState } from "react";

const Agregar = () => {
  const [contador, setContador] = useState(0);
  const handleClickMas = () => {
    setContador(contador + 1);
  };

  const handleClickMenos = () => {
    setContador(contador - 1);
  };

  const handleClickBorrar = () => {
    setContador(0);
  };
  return (
    <div>
      <p>Agregar</p>
      <button onClick={handleClickMas}>+</button>
      <button onClick={handleClickMenos}>-</button>
      <p>{contador}</p>
      <button onClick={handleClickBorrar}>Vaciar carrito</button>
    </div>
  );
};

export default Agregar;
