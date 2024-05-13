import { Routes, Route, Navigate } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import CheckOutPage from "./pages/CheckOutPage";
import PageNotFound from "./pages/404";
import ProductsProvider from "./context/ProductContext";
import CartProvider from "./context/CartContext";

function App() {
  return (
    <CartProvider>
      <ProductsProvider>
        <Routes>
          <Route path="/" element={<Navigate to="/products" replace />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products/:id" element={<ProductDetailsPage />} />
          <Route path="/checkout" element={<CheckOutPage />} />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
      </ProductsProvider>
    </CartProvider>
  );
}

export default App;
