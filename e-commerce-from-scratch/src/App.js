import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ProductsRender from './components/ProductsRender';
import ListProducts from "./components/ListProducts"
import AllProduct from './components/AllProduct';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<ProductsRender/>}>
              <Route path="List/:pageName" element={<ListProducts/>} />
            </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
