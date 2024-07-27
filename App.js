
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Shop from './Pages/Shop';
import LoginSignUp from './Pages/LoginSignUp';
import Cart from './Pages/Cart';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner_mens.png';
import women_banner from './Components/Assets/banner_women.png';
import kid_banner from './Components/Assets/banner_kids.png';
// import OrderPlaced from './Pages/OrderPlaced';
import PaymentDetails from './Pages/PaymentDetails';
import OrderPlaced from './Pages/OrderPlaced';



function App() {
  return (
    <div >
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>}/>
        <Route path='/mens' element={<ShopCategory banner={men_banner} category="men" />}/>
        <Route path='/womens' element={<ShopCategory banner={women_banner} category="women"/>}/>
        <Route path='/kids' element={<ShopCategory banner={kid_banner} category="kid"/>}/>
        <Route path="/product" element={<Product/>}>
        <Route path=":productId" element={<Product/>}/>
        </Route>
        
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/checkout' element={<LoginSignUp/>}/>
        <Route path='/payment' element={<PaymentDetails/>}/>
        <Route path='/placed' element={<OrderPlaced/>}/>


      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
