import { Route, Routes } from "react-router-dom";
import Navber from "./components/Navber";
import HomePage from "./pages/home";
import MenPage from "./pages/men";
import WomenPage from "./pages/women";
import OurStore from "./pages/story";
import KidsPage from "./pages/kids";
import CartPage from "./pages/cart";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";

const App = () => {
  return (
    <main>
      <Navber />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/men' element={<MenPage />} />
        <Route path='/women' element={<WomenPage />} />
        <Route path='/kids' element={<KidsPage />} />
        <Route path='/story' element={<OurStore />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
      </Routes>
    </main>
  );
};

export default App;
