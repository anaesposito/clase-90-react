import Tarjeta from "./components/Tarjeta";
import Search from "./components/Search";
import "./App.css";

/* <AddShoppingCartIcon color="black" size="medium" /> */

const App = () => {
  const products = [
    {
      title: "Coombes",
      type: "Lounge",
      price: 2600,
      rating: 4,
      img: "https://i.imgur.com/ZAxMGG5.png",
      category: "furniture",
      color: "gray",
      collection: "classic",
    },
    {
      title: "Keeve Set",
      type: "Table & Chairs",
      price: 590,
      rating: 4,
      img: "https://i.imgur.com/tT8sFIs.jpeg",
      category: "furniture",
      color: "wood",
      collection: "modern",
    },
    {
      title: "Nillè",
      type: "Armchair",
      price: 950,
      rating: 5,
      img: "https://i.imgur.com/Vx1cZY0.png",
      category: "furniture",
      color: "orange",
      collection: "classic",
    },
    {
      title: "Blanko",
      type: "Side table",
      price: 90,
      rating: 4,
      img: "https://i.imgur.com/N1Bf4ox.jpg",
      category: "furniture",
      color: "white",
      collection: "modern",
    },
    {
      title: "Momo",
      type: "Shelves",
      price: 890,
      rating: 4,
      img: "https://i.imgur.com/AlKxDE4.jpeg",
      category: "auxiliars",
      color: "wood",
      collection: "classic",
    },
    {
      title: "Penemillè",
      type: "Chair",
      price: 120,
      rating: 4,
      img: "https://i.imgur.com/pmANPjN.jpeg",
      category: "furniture",
      color: "white",
      collection: "modern",
    },
    {
      title: "Kappu",
      type: "Shelves",
      price: 420,
      rating: 4,
      img: "https://i.imgur.com/s2rsPa1.jpg",
      category: "auxiliars",
      color: "wood",
      collection: "classic",
    },
  ];
  return (
    <div>
      <Search />

      {products.map((producto, i) => (
        <Tarjeta
          key={`idTarjeta-${i}`}
          title={producto.title}
          type={producto.type}
          price={producto.price}
          rating={producto.rating}
          img={producto.img}
          category={producto.category}
          collection={producto.collection}
        />
      ))}
    </div>
  );
};
export default App;
