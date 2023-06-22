import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Register from "./pages/register";
import CartPage from "./pages/cart";
import CartProvider from "./providers/Cart";
import UserProvider from "./providers/User";
import Login from "./pages/login";
import ProfilePage from "./pages/profile";
import "./App.css";

function App() {
  return (
    <UserProvider>
      <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/cart" element={<CartPage />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/profile" element={<ProfilePage />}></Route>
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </UserProvider>
  );
}

export default App;
