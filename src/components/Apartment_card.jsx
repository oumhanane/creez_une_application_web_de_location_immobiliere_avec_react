import "./Apartment_card.css";
import {Link} from "react-router-dom"

function Apartment_card() {
  return (
    <div className='apartment_card'>
      <Link to="/Apartments">      
        <div className="apartment_title">
          Titre de la location
        </div>
      </Link>
    </div> 
  )
}

export default Apartment_card