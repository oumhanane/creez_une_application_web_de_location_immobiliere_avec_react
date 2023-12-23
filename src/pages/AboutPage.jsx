import "./AboutPage.css"
import Banner from "../components/Banner"
import Apartment_description from "../components/Apartment_description"

function AboutPage() {
  return (
    <div>
    < Banner />
    <div className="apartment_description_container">
        < Apartment_description />
        < Apartment_description />
        < Apartment_description />
        < Apartment_description />
    </div>
    </div>
  )
}

export default AboutPage