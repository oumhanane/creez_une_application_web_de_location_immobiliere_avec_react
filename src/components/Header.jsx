import './Header.css'
import {Link} from "react-router-dom"

function Header() {
  return (
    <div className='container'>
        <div>
          <Link to="/">
            <img className='logo' src="logo.png" alt="logo" />
          </Link>
        </div>
        <div className="navbar">
          <Link to="/">
            <div className='nav_li'>Accueil</div>
          </Link>
          <Link to="/About">
            <div className='nav_li'>A propos</div>
          </Link>
        </div>
    </div>
  )
}

export default Header