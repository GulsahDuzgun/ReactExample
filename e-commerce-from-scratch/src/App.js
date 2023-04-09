import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ProductsRender from './components/ProductsRender';
import ProductDetails from './components/ProductDetails';
import FavoriteProducts from "./components/FavoriteProducts"
import Sepetim from "./components/Sepetim"

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<ProductsRender/>} />
          <Route path="/productDetails/:productID" element={<ProductDetails/>} />
          <Route path="/favoriteProducts" element={<FavoriteProducts/>} />
          <Route path="/sepetim" element={<Sepetim/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
