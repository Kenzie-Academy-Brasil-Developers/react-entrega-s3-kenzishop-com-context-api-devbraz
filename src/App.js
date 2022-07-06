import GlobalStyle from './styles/global.js'
import ProductList from "./components/product-list";
import { CatalogueProvider } from "./providers/catalogue/catalogue";
import { CartProvider } from "./providers/cart/cart";
import { ContainerCatalogue, ContainerCart, Container } from './styles'

function App() {

  return (
    <>    
      <Container>

        <CatalogueProvider>
          <CartProvider>

            <ContainerCatalogue>
            <p>LOJA</p>
              <ProductList type="catalogue" /> 
            </ContainerCatalogue>

            <ContainerCart>
            <p>CARRINHO</p>
              <ProductList type="cart" />
            </ContainerCart> 

          </CartProvider>
        </CatalogueProvider>
      </Container>  

      <GlobalStyle/>   
    </>
  )
}

export default App;

