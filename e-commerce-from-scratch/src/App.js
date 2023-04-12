import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ProductsRender from './components/ProductsRender';
import FavoriteProducts from './components/FavoriteProducts';
import CartProducts from './components/CartProducts';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/products" exact element={<ProductsRender/>}>
              <Route path="favorites" element={<FavoriteProducts/>} />
              <Route path="cart" element={<CartProducts/>} />
            </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
