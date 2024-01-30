import "./Apartment_description.css";
import { useState } from "react";
import PropTypes from 'prop-types';

function Apartment_description(props) {
  const [isContentVisible, setIsContentVisible] = useState(true);

  const showContent = () => {
    setIsContentVisible(!isContentVisible);
  };

  // const contentClass = (isContentVisible ? "visible" : "hidden") + "description__content";
  // const chevronClass = (isContentVisible ? "fa-chevron-up" : "fa-chevron-down") + " fas";

  const contentClass = `description_content ${isContentVisible ? "visible" : "hidden"}`;
  const chevronClass = `fas ${isContentVisible ? "fa-chevron-up" : "fa-chevron-down"}`;

  return (
    <div className="description">
      <p className="description_header" onClick={showContent}>
        <span>{props.title}</span>
        <i className={chevronClass}></i>
      </p>
      <p className={contentClass}>{props.content}</p>
    </div>
  )
}

Apartment_description.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
};

export default Apartment_description;
