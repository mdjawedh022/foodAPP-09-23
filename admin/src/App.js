
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Product from './pages/Product/Product';
import Order from './pages/Order/Order';

function App() {
  return (
    <>
    <Header/>
    <div class="container-fluid">
    <div class="row">
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/product" element={<Product/>}/>
      <Route path="/order" element={<Order/>}/>
    </Routes>
    </div>  
    </div>
    </>
  );
}

export default App;
