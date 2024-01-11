// App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import ProductDetails from './components/ProductDetails';
import './App.css';

const Home = () => {
  const products = [
    { id: 1, name: 'Jeans', price: 20, image: 'jeans.jpg' },
    { id: 2, name: 'Watch', price: 30, image: 'watch.jpg' },
    { id: 3, name: 'PS4 Controller', price: 60, image: 'controller.jpg' },
  ];

  return (
    <div>
      <Header />
      <ProductList products={products} />
    </div>
  );
};

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/product/:id"
            element={<ProductDetails />}
            render={({ match }) => (
              <ProductDetails product={products.find(p => p.id == match.params.id)} />
            )}
          />
        </Routes>
        <Cart cartItems={cartItems} />
      </div>
    </Router>
  );
};

export default App;
