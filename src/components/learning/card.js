import React from "react";
import PropTypes from "prop-types";
import "./card.css";

const Cards = ({ womenData }) => {
  return (
    <div className="thq-section-padding">
      <div className="thq-section-max-width">
        {womenData.map((woman, index) => (
          <div className="cta26-accent2-bg" key={index}>
            <div className="cta26-accent1-bg">
              <div className="cta26-container2">
                <div className="cta26-content">
                  {woman.name && (
                    <span className="thq-heading-2">{woman.name}</span>
                  )}
                  {woman.journey && (
                    <p className="thq-body-large">{woman.journey}</p>
                    
                  )}
                </div>

                <div className="cta26-actions">
                  {woman.actionText && (
                    <a
                      href={woman.link}
                      className="thq-button-filled cta26-button"
                      textDecoration="none"
                    >
                      <span>{woman.actionText}</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

Cards.defaultProps = {
  womenData: [],
};

Cards.propTypes = {
  womenData: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      journey: PropTypes.string,
      tips: PropTypes.string,
      content: PropTypes.string,
      actionText: PropTypes.string,
      link: PropTypes.string,
    })
  ),
};

export default Cards;
