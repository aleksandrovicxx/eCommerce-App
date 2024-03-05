import './App.css';
import instance from './services/productService';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/views/homePage';
import Navbar from './components/navbar/Navbar';
import ProductPage from './components/views/ProductsPage';
import ContactUsPage from './components/views/ContactUsPage';


function App() {
  return (
    <div className="App">
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/Home" element={<HomePage/>} />
        <Route path="/Products" element={<ProductPage/>} />
        <Route path="/ContactUs" element={<ContactUsPage/>} />
      </Routes>
    </Router>

    </div>
  );
}

export default App;
