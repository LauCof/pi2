import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Routes/Home'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Admin from './Routes/Admin'
import AddProduct from './Routes/AddProduct'
import React, { useState } from 'react';

function App() {

  const [products, setProducts] = useState([
    { id: 1, name: 'Producto 1', description: 'Descripción 1', price: 10.99, imageUrl: 'https://example.com/imagen1.jpg' },
    { id: 2, name: 'Producto 2', description: 'Descripción 2', price: 15.99, imageUrl: 'https://example.com/imagen2.jpg' },
    { id: 3, name: 'Producto 3', description: 'Descripción 2', price: 15.99, imageUrl: 'https://example.com/imagen2.jpg' },
    { id: 4, name: 'Producto 4', description: 'Descripción 2', price: 15.99, imageUrl: 'https://example.com/imagen2.jpg' },
    { id: 5, name: 'Producto 5', description: 'Descripción 2', price: 15.99, imageUrl: 'https://example.com/imagen2.jpg' },
    { id: 6, name: 'Producto 6', description: 'Descripción 2', price: 15.99, imageUrl: 'https://example.com/imagen2.jpg' },
    { id: 7, name: 'Producto 7', description: 'Descripción 2', price: 15.99, imageUrl: 'https://example.com/imagen2.jpg' },
    { id: 8, name: 'Producto 8', description: 'Descripción 2', price: 15.99, imageUrl: 'https://example.com/imagen2.jpg' },
    { id: 8, name: 'Producto 8', description: 'Descripción 2', price: 15.99, imageUrl: 'https://example.com/imagen2.jpg' },
    { id: 8, name: 'Producto 8', description: 'Descripción 2', price: 15.99, imageUrl: 'https://example.com/imagen2.jpg' },
    { id: 8, name: 'Producto 8', description: 'Descripción 2', price: 15.99, imageUrl: 'https://example.com/imagen2.jpg' },
  ]);

  return (
    <div>
          <Header/>
          <Routes>
            <Route path="/" element={<Home products={products} />}/>
            <Route path="/admin" element={<Admin/>} />
            <Route path="/card/:id" element={""} />
            <Route path='/admin/AddProduct' element={<AddProduct />}/>
          </Routes>
          <Footer/>
    </div>
  )
}

export default App
