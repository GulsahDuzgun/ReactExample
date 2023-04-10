import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ProductsRender from './components/ProductsRender';
import ProductDetails from './components/ProductDetails';
import FavoriteProducts from "./components/FavoriteProducts"
import ShoppingCart from "./components/ShoppingCart"

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<ProductsRender/>} />
          <Route path="/productDetails/:productID" element={<ProductDetails/>} />
          <Route path="/favoriteProducts" element={<FavoriteProducts/>} />
          <Route path="/ShoppingCart" element={<ShoppingCart/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
