import { FC } from "react";

import "./style.scss";

type Props = {
  product: any;
  removeFromCart: (product: any) => void;
};

const CartCard: FC<Props> = ({ product, removeFromCart }) => (
  <article className="cart-card">
    <button
      onClick={() => removeFromCart(product)}
      className="cart-card__close"
    >
      x
    </button>

    <div className="cart-card__image">
      <img
        src={product.cover}
        alt={product.name}
        className="cart-card__image"
      />
    </div>

    <span className="card-cart__price">{product.id} $</span>
  </article>
);

export default CartCard;
