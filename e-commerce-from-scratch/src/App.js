import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ProductsRender from './components/ProductsRender';
import FavoriteProducts from './components/FavoriteProducts';
import CartProducts from './components/CartProducts';
import AllProduct from './components/AllProduct';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" exact element={<ProductsRender/>}>
              <Route path='products' element={<AllProduct/>} />
              <Route path="favorites" element={<FavoriteProducts/>} />
              <Route path="cart" element={<CartProducts/>} />
            </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
