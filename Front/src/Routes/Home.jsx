<<<<<<< HEAD
import React from 'react';
=======
>>>>>>> 0674e90a2174c38ecce97c09a968dde202e2d19a
import "./Home.css";
import lupa from "../assets/lupa.png";
import { Link } from 'react-router-dom';
import Categorias from "../Components/Categoria/Categorias";
import ProductList from "../Components/ProducList/ProductList";


const Home = ({ products }) => {
  return (
    <div className="home">
      <section className="buscador">
<<<<<<< HEAD
        <input type="text" placeholder="¿Qué Disfraz buscas?"/>
        <Link><img src={lupa} alt="" /></Link>
=======
        <h2>Bienvenido te invitamos a explorar Categorias</h2>
        <p>Encuentra el disfraz que necesitas alquilar</p>
        <div>
          <input type="text" placeholder="¿Qué Disfraz buscas?"/>
          <Link><img src={lupa} alt="" /></Link>
        </div>
>>>>>>> 0674e90a2174c38ecce97c09a968dde202e2d19a
      </section>
      <Categorias/>
<<<<<<< HEAD
   
      <ProductList products={products} />
=======
      <Recomendaciones/>
  
>>>>>>> 0674e90a2174c38ecce97c09a968dde202e2d19a
    </div>
  );
};

export default Home;
