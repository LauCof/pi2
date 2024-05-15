import React from 'react';
import "./Home.css";
import lupa from "../assets/lupa.png";
import { Link } from 'react-router-dom';
import Categorias from "../Components/Categoria/Categorias";
import ProductList from "../Components/ProducList/ProductList";


const Home = ({ products }) => {
  return (
    <div className="home">
      <section className="buscador">
        
        <h2>Bienvenido te invitamos a explorar Categorias</h2>
        <p>Encuentra el disfraz que necesitas alquilar</p>
        <div>
          <input type="text" placeholder="¿Qué Disfraz buscas?"/>
          <Link><img src={lupa} alt="" /></Link>
        </div>
      </section>
      <Categorias/>
     
      <ProductList products={products} />
    </div>
  );
};

export default Home;
