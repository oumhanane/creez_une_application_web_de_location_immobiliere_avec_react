import "./AboutPage.css"
import Apartment_banner from "../components/Apartment_banner"
import Apartment_description from "../components/Apartment_description"

function AboutPage() {
  return (
    <>
    < Apartment_banner />
    <div className="apartment_description_container">
        < Apartment_description title="Fiabilité" content="Lorem ipsum dolor sit ame"/>
        < Apartment_description title="Respect" content="Lorem ipsum dolor sit ame"/>
        < Apartment_description title="Service" content="Lorem ipsum dolor sit ame"/>
        < Apartment_description title="Responsabilité" content="Lorem ipsum dolor sit ame"/>
    </div>
    </>
  )
}

export default AboutPage