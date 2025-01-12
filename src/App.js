import './App.css';
import HomePage from './pages/HomePage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Layout from './Layout';
import Signup from "./pages/Signup";
import OrderComplete from "./pages/OrderComplete";
import Product from "./components/Products/Products";
import SellPage from "./Sell/Sell"; //update10/12/66

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="Login" element={<Login />} />
            <Route path="Signup" element={<Signup />} />
            <Route path="Complete" element={<OrderComplete />} />
            <Route path="/products/:productID" element={<Product />} />
            <Route path="/Sell" element={<SellPage />} />
            <Route path="/Ordercomplete" element={<OrderComplete />} />
          </Route>
        </Routes>
      </BrowserRouter>  
    </div>
  );
}

export default App;
