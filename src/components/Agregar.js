import { useState } from "react";

const Agregar = (handleClickBorrarTodos) => {
  const [contador, setContador] = useState(0);
  const handleClickMas = () => {
    setContador(contador + 1);
  };

  const handleClickMenos = () => {
    setContador(contador - 1);
  };

  // const [borrador, setBorrador] = useState(false);
  // const handleClickBorrarTodos = () => {
  //   setBorrador(true);
  // };

  return (
    <div>
      <p>Agregar</p>
      <button onClick={handleClickMas}>+</button>
      <button onClick={handleClickMenos}>-</button>
      <p>{contador}</p>
      <button onClick={handleClickBorrarTodos}>Vaciar carrito</button>
    </div>
  );
};

export default Agregar;
