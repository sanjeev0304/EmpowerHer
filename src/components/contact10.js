import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './contact10.css'

const Contact10 = (props) => {
  return (
    <div className="contact10-container1 thq-section-padding">
      <div className="contact10-max-width thq-section-max-width">
        <div className="contact10-content1 thq-flex-row">
          <div className="contact10-content2">
            <h2 className="thq-heading-2">
              {props.heading1 ?? (
                <Fragment>
                  <span className="contact10-text18">Contact Us</span>
                </Fragment>
              )}
            </h2>
            <p className="thq-body-large">
              {props.content1 ?? (
                <Fragment>
                  <span className="contact10-text16">
                    Feel free to reach out to us for any inquiries or
                    collaborations.
                  </span>
                </Fragment>
              )}
            </p>
          </div>
        </div>
        <div className="contact10-content3 thq-flex-row">
          <div className="contact10-container2">
            <img
              alt={props.location1ImageAlt}
              src={props.location1ImageSrc}
              className="contact10-image1 thq-img-ratio-16-9"
            />
            <h3 className="contact10-text12 thq-heading-3">
              {props.location1 ?? (
                <Fragment>
                  <span className="contact10-text20">New York Office</span>
                </Fragment>
              )}
            </h3>
            <p className="thq-body-large">
              {props.location1Description ?? (
                <Fragment>
                  <span className="contact10-text17">
                    123 Main Street, New York, NY 10001
                  </span>
                </Fragment>
              )}
            </p>
            <div className="contact10-container3">
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="thq-button-flat thq-body-small"
              >
                Get directions
              </a>
            </div>
          </div>
          <div className="contact10-container4">
            <img
              alt={props.location2ImageAlt}
              src={props.location2ImageSrc}
              className="contact10-image2 thq-img-ratio-16-9"
            />
            <h3 className="contact10-text14 thq-heading-3">
              {props.location2 ?? (
                <Fragment>
                  <span className="contact10-text21">San Francisco Office</span>
                </Fragment>
              )}
            </h3>
            <p className="thq-body-large">
              {props.location2Description ?? (
                <Fragment>
                  <span className="contact10-text19">
                    456 Market Street, San Francisco, CA 94105
                  </span>
                </Fragment>
              )}
            </p>
            <div className="contact10-container5">
              <a
                href="https://example.com"
                target="_blank"
                rel="noreferrer noopener"
                className="thq-button-flat thq-body-small"
              >
                Get directions
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Contact10.defaultProps = {
  content1: undefined,
  location2ImageSrc:
    'https://images.unsplash.com/photo-1517398747128-cd2271140a0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMzE5NjMwNHw&ixlib=rb-4.0.3&q=80&w=1080',
  location1ImageSrc:
    'https://images.unsplash.com/photo-1533109721025-d1ae7ee7c1e1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMzE5NjMwNHw&ixlib=rb-4.0.3&q=80&w=1080',
  location1Description: undefined,
  location2ImageAlt: 'San Francisco Office Image',
  heading1: undefined,
  location2Description: undefined,
  location1ImageAlt: 'New York Office Image',
  location1: undefined,
  location2: undefined,
}

Contact10.propTypes = {
  content1: PropTypes.element,
  location2ImageSrc: PropTypes.string,
  location1ImageSrc: PropTypes.string,
  location1Description: PropTypes.element,
  location2ImageAlt: PropTypes.string,
  heading1: PropTypes.element,
  location2Description: PropTypes.element,
  location1ImageAlt: PropTypes.string,
  location1: PropTypes.element,
  location2: PropTypes.element,
}

export default Contact10
