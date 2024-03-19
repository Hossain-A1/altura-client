import { Route, Routes } from "react-router-dom";
import Navber from "./components/Navbar";
import HomePage from "./pages/home";
import MenPage from "./pages/men";
import WomenPage from "./pages/women";
import OurStore from "./pages/story";
import KidsPage from "./pages/kids";
import CartPage from "./pages/cart";
import LoginPage from "./pages/login";
import RegisterPage from "./pages/register";
import { Toaster } from "react-hot-toast";
import ProfilePage from "./pages/profile";
import MenId from "./pages/menId";
import WomenId from "./pages/womenId";
import KidId from "./pages/kidId";
import Footer from "./components/Footer";
import NotFoundPage from "./pages/notFound";
import SuccessPage from "./pages/success";
import AllUserPage from "./pages/alluser";

const App = () => {
  return (
    <main>
      <Toaster />
      <Navber />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/men' element={<MenPage native />} />
        <Route path='/men/:id' element={<MenId />} />
        <Route path='/women' element={<WomenPage native />} />
        <Route path='/women/:id' element={<WomenId />} />
        <Route path='/kids' element={<KidsPage native />} />
        <Route path='/kid/:id' element={<KidId />} />
        <Route path='/story' element={<OurStore />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/alluser' element={<AllUserPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/profile' element={<ProfilePage />} />
        <Route path='/success' element={<SuccessPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </main>
  );
};

export default App;
