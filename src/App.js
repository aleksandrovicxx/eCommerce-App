import './App.css';
import instance from './utils/api';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/views/homePage';
import Navbar from './components/navbar/Navbar';
import ProductPage from './components/views/ProductsPage';
import ContactUsPage from './components/views/ContactUsPage';
import CartPage from "./components/views/CartPage"
import Footer from './components/footer/footer';
import SingleProductPage from './components/views/SingleProductPage';

function App() {
  return (
    <div className="App">
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/CartPage' element={<CartPage/>} />
        <Route path="/Home" element={<HomePage/>} />
        <Route path="/Products" element={<ProductPage/>} />
        <Route path='/product/:productId' element={<SingleProductPage/>}/>
        <Route path="/ContactUs" element={<ContactUsPage/>} />
      </Routes>
      <Footer/>
    </Router>

    </div>
  );
}

export default App;
