import "./Apartment_header.css";
import PropTypes from 'prop-types';

function Apartment_header( { flat }) {
    
    const { name } = flat.host;
    const [firstName, lastName] = name.split(" ");
    const rating = Number(flat.rating);

    return (
        <div className="apartment_header">
            <div className="title">
                <h1>{flat.title}</h1>
                <h2>{flat.location}</h2>
                <div className="apartment_place">
                    {flat.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                     ))}
                </div> 
            </div>
            <div className="proprio">
                <div className="badge_proprio">
                    <h3 className="nom_proprio">
                        <span>{firstName}</span>
                        <span>{lastName}</span> 
                    </h3>
                    <div className="badge">
                        <img src={flat.host.picture} alt="" />
                    </div>
                </div>
                <div className="stars">
                    {[1, 2, 3, 4, 5].map((num) => (
                        <span key={num} className={rating >= num ? "on" : ""}>
                            ★
                        </span>
                    ))}
                </div>
            </div>
        </div>
  )
}

Apartment_header.propTypes = {
    flat: PropTypes.shape({
        title: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        tags: PropTypes.arrayOf(PropTypes.string).isRequired,
        host: PropTypes.shape({
            name: PropTypes.string.isRequired,
            picture: PropTypes.string.isRequired,
        }).isRequired,
        rating: PropTypes.number.isRequired,
    }).isRequired,
};

export default Apartment_header