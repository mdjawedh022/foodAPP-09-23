import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login/Login";
import ProductDetail from "./components/ProductDetail/ProductDetail";
import Register from "./pages/Register/Register";
import Home from "./pages/Home/Home";
import Product from "./pages/Products/Product";

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product-detail" element={<ProductDetail />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element="<h1>Page not found😔<h1/>" />
      </Routes>
    </div>
  );
}

export default App;
