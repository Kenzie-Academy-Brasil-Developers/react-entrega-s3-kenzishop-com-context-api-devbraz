import { useContext } from "react";
import { CartContext } from "../../providers/cart/cart";
import { CatalogueContext } from "../../providers/catalogue/catalogue";
import { Button } from "./styles"

const ButtonCard = ({ type, item }) => {
  const { addToCart, removeFromCart } = useContext(CartContext);
  const { addToCatalogue, removeFromCatalogue } = useContext(
    CatalogueContext
  );

  const text = type === "catalogue" ? "Adicionar ao carrinho" : "Remover do carrinho";

  const handleClick = () => {
    if (type === "catalogue") {
      removeFromCatalogue(item);
      addToCart(item);
    } else {
      removeFromCart(item);
      addToCatalogue(item);
    }
  };

  return <Button onClick={handleClick}>{text}</Button>;
};

export default ButtonCard;