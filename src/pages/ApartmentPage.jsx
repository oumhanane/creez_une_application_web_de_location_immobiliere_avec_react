import Apartment_description from "../components/Apartment_description"
import Apartment_banner from "../components/Apartment_banner"
import Apartment_header from "../components/Apartment_header"
import "./ApartmentPage.css"

function ApartmentPage() {
  return (
    <div className="container_apartmentPage">
        < Apartment_banner />
        < Apartment_header />
        <div className="description_area">
            < Apartment_description />
            < Apartment_description />
        </div>
    </div>
  )
}

export default ApartmentPage