import "./Apartments.css";
import Apartment_card from "./Apartment_card.jsx"; 
import { useApartments } from "./../hooks/useApartments.jsx"

function Apartments() {
const apartments = useApartments()
  
  return (
    <div className='apartments'>
      {apartments.map((apartment) => (
        <Apartment_card
          title={apartment.title}
          imageUrl={apartment.cover}
          id={apartment.id}
          key={apartment.id}
        />
      ))}
      </div>
  )
}

export default Apartments;
