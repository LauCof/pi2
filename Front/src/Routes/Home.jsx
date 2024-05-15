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
        <input type="text" placeholder="¿Qué Disfraz buscas?"/>
        <Link><img src={lupa} alt="" /></Link>
      </section>
      <Categorias/>
   
      <ProductList products={products} />
    </div>
  );
};

export default Home;
