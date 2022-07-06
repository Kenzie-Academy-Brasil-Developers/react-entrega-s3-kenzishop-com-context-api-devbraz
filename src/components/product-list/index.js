import ButtonCard from "../button-card"
import { useContext } from "react"
import { CatalogueContext } from "../../providers/catalogue/catalogue"
import { CartContext } from "../../providers/cart/cart"
import { Container, ContentCatalogue, ContentCart } from "./styles"

const ProductList = ({ type }) => {

  const { catalogue } = useContext(CatalogueContext)
  const { cart } = useContext(CartContext)

  return (
    <Container>
      <ContentCatalogue>
        {type === "catalogue" &&
          catalogue.map((item, index) => (
            <div key={index}>
              <img src={item.image} alt={item.name} />
              <h4>{item.name}</h4>
              <h3>{item.price}</h3>
              <ButtonCard type={type} item={item} />
            </div>
          ))}
        {type === "cart" &&
          cart.map((item, index) => (
            <div key={index}>
              <img src={item.image} alt={item.name}/>
              <h4>{item.name}</h4>
              <h3>{item.price}</h3>
              <ButtonCard type={type} item={item} />
            </div>
          ))}
      </ContentCatalogue>
    </Container>
  )
}

export default ProductList