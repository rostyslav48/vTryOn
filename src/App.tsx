// @ts-nocheck

import { useEffect, useState } from "react";

import { products } from "./constants";

import "./App.css";
import Card from "./shared/Card";
import CartCard from "./shared/CartCard";

function App() {
  const [cartData, setCartData] = useState<any[]>([]);
  const widgetRef = document.querySelector("tint-vto");

  const removeFromCart = (productToRemove: any) => {
    setCartData((prevState) =>
      prevState.filter((product) => product.name !== productToRemove.name)
    );
  };

  const addToCart = (productsToAdd: any[]) => {
    const dataProducts = productsToAdd.map((product) =>
      products.find(({ name }) => name === product.name)
    );

    console.log(dataProducts);

    setCartData((prevState) => [...prevState, ...dataProducts]);
  };

  useEffect(() => {
    const widget: any = widgetRef;

    const handleAdd = ({ detail }) => {
      addToCart(detail);
    };

    widget.addEventListener("addToCart", handleAdd);

    return () => widget.removeEventListener("addToCart", handleAdd);
  }, []);

  useEffect(() => {
    const widget: any = widgetRef;

    const handleRemove = ({ detail }) => {
      const productToRemove = detail[0];
      removeFromCart(productToRemove);
    };

    widget.addEventListener("removeFromCart", handleRemove);

    return () => widget.removeEventListener("removeFromCart", handleRemove);
  }, []);

  return (
    <main className="main">
      <section className="catalog">
        {products.map((product) => (
          <Card addToCart={addToCart} product={product} widget={widgetRef} />
        ))}
      </section>

      <section className="cart">
        <h2>Cart</h2>
        {cartData.map((product) => (
          <CartCard removeFromCart={removeFromCart} product={product} />
        ))}
      </section>
    </main>
  );
}

export default App;
