import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import './Header.css';

const Header = () => {
  return (
    <header className='header'>
      <div className='header__left'>
        <Link to="/">
          <img src={logo} alt="" />
          <span>Lema</span>
        </Link>
      </div>
      <div className='header__right'>
        <button>Crear cuenta</button>
        <button>Iniciar sesión</button>
      </div>
    </header>
  )
}

export default Header;