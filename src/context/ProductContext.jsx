import { createContext, useContext, useEffect, useState } from "react";
import api from "../services/config";

export const ProductContext = createContext();

function ProductsProvider({ children }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await api.get("/products");
        setProducts(response);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider value={products}>
      {children}
    </ProductContext.Provider>
  );
}

//custom hook
const useProducts = () => {
  const products = useContext(ProductContext);
  return products;
};

export default ProductsProvider;
export { useProducts };
