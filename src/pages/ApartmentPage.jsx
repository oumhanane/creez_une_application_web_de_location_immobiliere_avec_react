import Apartment_description from "../components/Apartment_description"
import Apartment_banner from "../components/Apartment_banner"
import Apartment_header from "../components/Apartment_header"
import "./ApartmentPage.css"
import {useApartment} from "../hooks/useApartment"

function ApartmentPage() {
  const flat = useApartment();

  if (flat == null) return <div>Loading... </div>
  return (
    <div className="container_apartmentPage">
        < Apartment_banner pictures={flat.pictures} />
        < Apartment_header flat={flat} />
        <div className="description_area">
            < Apartment_description 
              title="Description" 
              content={flat.description} />
            < Apartment_description 
              title="Equipements" 
              content={flat.equipements ? flat.equipements.map((eq,i) => (
                <li key={i}>{eq}</li>
              )) : null }
            />
        </div>
    </div>
  )
}

export default ApartmentPage

