import { useContext } from "react";

import { CartContext } from "../../providers/cart/cart";
import { CatalogueContext } from "../../providers/catalogue/catalogue";

const ButtonCard = ({ type, item }) => {
  const { cart, addToCart, removeFromCart } = useContext(CartContext);
  const { catalogue, addToCatalogue, removeFromCatalogue } = useContext(
    CatalogueContext
  );

  const text = type === "catalogue" ? "Add to cart" : "Remove from cart";

  const handleClick = () => {
    if (type === "catalogue") {
      removeFromCatalogue(item);
      addToCart(item);
    } else {
      removeFromCart(item);
      addToCatalogue(item);
    }
  };

  return <button onClick={handleClick}>{text}</button>;
};

export default ButtonCard;