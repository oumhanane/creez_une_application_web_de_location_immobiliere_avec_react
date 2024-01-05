import "./AboutPage.css"
import Apartment_banner from "../components/Apartment_banner"
import Apartment_description from "../components/Apartment_description"

function AboutPage() {
  return (
    <>
    < Apartment_banner />
    <div className="apartment_description_container">
        < Apartment_description />
        < Apartment_description />
        < Apartment_description />
        < Apartment_description />
    </div>
    </>
  )
}

export default AboutPage