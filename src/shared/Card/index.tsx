import { FC } from "react";

import "./style.scss";

type Props = {
  product: any;
  widget: any;
  addToCart: (product: any) => void;
};

const Card: FC<Props> = ({ product, widget, addToCart }) => {
  const applyProduct = async () => {
    console.log(product);
    widget.applyProduct(product);

    await widget.open();
    // await widget.useWebcam();
  };

  return (
    <article className="card">
      <div className="card__image">
        <img src={product.cover} alt={product.name} className="card__image" />
      </div>

      <div className="card__info">
        <h1 className="card__title">{product.name}</h1>

        <div className="card__actions">
          <button onClick={applyProduct} className="card__button-m">
            Open preview
          </button>

          <button
            onClick={() => addToCart([product])}
            className="card__button-s"
          >
            Cart
          </button>
        </div>
      </div>
    </article>
  );
};

export default Card;
