import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Acerca de nosotros</h3>
            <p>Somos una empresa dedicada a brindar soluciones innovadoras y de calidad a nuestros clientes.</p>
          </div>
          <div className="footer-section">
            <h3>Contacto</h3>
            <p>Dirección: Calle Principal 123, Ciudad, País</p>
            <p>Teléfono: +1 234 567 890</p>
            <p>Email: info@empresa.com</p>
          </div>
          <div className="footer-section">
            <h3>Enlaces útiles</h3>
            <ul>
              <li><a href="#">Inicio</a></li>
              <li><a href="#">Productos</a></li>
              <li><a href="#">Servicios</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Redes sociales</h3>
            <ul className="social-icons">
              <li><a href="#"><i className="fab fa-facebook"></i></a></li>
              <li><a href="#"><i className="fab fa-twitter"></i></a></li>
              <li><a href="#"><i className="fab fa-instagram"></i></a></li>
              <li><a href="#"><i className="fab fa-linkedin"></i></a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Nombre de la empresa. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;