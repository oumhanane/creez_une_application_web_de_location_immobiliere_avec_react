/* eslint-disable react/prop-types */
import "./Apartment_card.css";
import {Link} from "react-router-dom"

function Apartment_card(props) {
  return (
    <div className='apartment_card'>
      <Link 
      to="/Apartments"
      state={{ 
        // eslint-disable-next-line react/prop-types
        apartmentId: props.id 
        }}
      >
      <div className="apartment_card_detail">   
        <img src={props.imageUrl} alt="" />
        <div className="apartment_title">{props.title}</div>
      </div>
      </Link>
    </div>  
  )
}

export default Apartment_card