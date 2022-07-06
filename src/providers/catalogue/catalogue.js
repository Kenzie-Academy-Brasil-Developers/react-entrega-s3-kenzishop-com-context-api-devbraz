// fazer os imports
import { createContext, useState } from 'react';
import iphone from './iphone-x.png'
import lg from './lg-g6.png'
import xiomi from './xiomi.png'
// criar o context
export const CatalogueContext = createContext([]);

// criar o provider
export const CatalogueProvider = ({ children }) => {
	const [catalogue, setCatalogue] = useState([
    {id: 1, name: "Iphone X", price: 5279.00, image: iphone},
    {id: 2, name: "LG G6", price: 1499.00, image: lg},
    {id: 3, name: "Xiomi Redmi", price: 3499.00, image: xiomi}
  ]);

        // criar a lógica para adicionar
  const addToCatalogue = (item) => {
    setCatalogue([...catalogue, item]);
  };

	// criar a lógica para remover
  const removeFromCatalogue = (item) => {
    const newCatalogue = catalogue.filter(
      (itemOnCatalogue) => itemOnCatalogue.name !== item.name
    );
    setCatalogue(newCatalogue);
  };

return (
  <CatalogueContext.Provider
   value={{ catalogue, addToCatalogue, removeFromCatalogue }}>
	{children}
  </CatalogueContext.Provider>
 )
}