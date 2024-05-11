import Card from "../Components/Card/Card";
import "./Home.css";
import lupa from "../assets/lupa.png";
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <div className="home">

      <section className="buscador">
          <input type="text" placeholder="¿Qué Disfraz buscas?"/>
          <Link><img src={lupa} alt="" /></Link>
      </section>
      
      <section>
        <h2>SECCION</h2>
        <div>
          <Card />
          <Card />
          <Card />
        </div>  
      </section>
 
      <section className="recomendado">
        <h2>RECOMENDACIONES</h2>
        <div>
          <Card />
          <Card />
          <Card />
        </div>        
      </section>
  
    </div>
  );
};

export default Home;