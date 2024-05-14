import Card from "../Components/Card/Card";
import "./Home.css";
import lupa from "../assets/lupa.png";
import { Link } from 'react-router-dom';
import Categorias from "../Components/Categoria/Categorias";
import Recomendaciones from "../Components/Recomendacion/Recomendaciones";


const Home = () => {
  return (
    <div className="home">

      <section className="buscador">
          <input type="text" placeholder="¿Qué Disfraz buscas?"/>
          <Link><img src={lupa} alt="" /></Link>
      </section>
      
      <Categorias/>
 
      <Recomendaciones/>
  
    </div>
  );
};

export default Home;