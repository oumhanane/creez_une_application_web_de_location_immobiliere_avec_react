import "./Apartment_header.css";

function Apartment_header() {
  return (
    <div className="apartment_header">
            <div className="title">
                <h1>Crazy loft on the Canal Saint Martin</h1>
                <h2>Paris, Ile de France</h2>
                <div className="apartment_place">
                    <span className="apartment_tag">Cosy</span>
                    <span className="apartment_tag">Canal</span>
                    <span className="apartment_tag">Paris 10</span> 
                </div> 
            </div>
            <div className="proprio">
                <div className="badge_proprio">
                    <h3 className="nom_proprio"><span>Alexandre</span><span>Dumas</span> </h3>
                    <div className="badge"></div>
                </div>
                <div className="stars">
                    <span className="apartment_stars">★</span>
                    <span className="apartment_stars">★</span>
                    <span className="apartment_stars">★</span>
                    <span className="apartment_stars">★</span>
                    <span className="apartment_stars">★</span>
                </div>
            </div>
        </div>
  )
}

export default Apartment_header