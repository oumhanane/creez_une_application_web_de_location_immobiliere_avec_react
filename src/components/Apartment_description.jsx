import "./Apartment_description.css";
import { useState } from "react";
import PropTypes from 'prop-types';

function Apartment_description(props) {
  const [isContentVisible, setIsContentVisible] = useState(true);

  const showContent = () => {
    setIsContentVisible(!isContentVisible);
  };

  console.log('isContentVisible:', isContentVisible);

  
  const contentStyle = {
    backgroundColor: 'rgb(240, 240, 225)',
    paddingInline: '1rem',
    fontSize: '1.2rem',
    color: '#FF6060',
    overflow: 'hidden',
    maxHeight: isContentVisible ? '1000px' : '0',
    transition: 'max-height 0.3s ease-in-out',
  };

  return (
    <div className="description">
      <p className="description_header" onClick={showContent}>
        <span>{props.title}</span>
        <i className={`fas ${isContentVisible ? "fa-chevron-up" : "fa-chevron-down"}`}></i>
      </p>
      <p style={contentStyle}>{props.content}</p>
    </div>
  )
}

Apartment_description.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
};

export default Apartment_description;
