import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './testimonial17.css'

const Testimonial17 = (props) => {
  return (

<>
    <h2 className="thq-heading-2">
            {props.heading1 ?? (
              <Fragment>
                <span className="testimonial17-text35">Testimonials</span>
              </Fragment>
            )}
          </h2>
          <div>
          <h1>Still Loading.....</h1>
          </div>
          </>
    // <div className="thq-section-padding">
    //   <div className="testimonial17-max-width thq-section-max-width">
    //     <div className="testimonial17-container10">
    //       <h2 className="thq-heading-2">
    //         {props.heading1 ?? (
    //           <Fragment>
    //             <span className="testimonial17-text35">Testimonials</span>
    //           </Fragment>
    //         )}
    //       </h2>
    //       <span className="testimonial17-text11 thq-body-small">
    //         {props.content1 ?? (
    //           <Fragment>
    //             <span className="testimonial17-text32">
    //               See what our clients have to say about their experience with
    //               AI for Women Entrepreneurs.
    //             </span>
    //           </Fragment>
    //         )}
    //       </span>
    //     </div>
    //     <div className="thq-grid-2">
    //       <div className="thq-animated-card-bg-2">
    //         <div className="thq-animated-card-bg-1">
    //           <div
    //             data-animated="true"
    //             className="thq-card testimonial17-card1"
    //           >
    //             <div className="testimonial17-container12">
    //               <img
    //                 alt={props.author1Alt}
    //                 src={props.author1Src}
    //                 className="testimonial17-image1"
    //               />
    //               <div className="testimonial17-container13">
    //                 <strong className="thq-body-large">
    //                   {props.author1Name ?? (
    //                     <Fragment>
    //                       <span className="testimonial17-text26">
    //                         Sara Johnson
    //                       </span>
    //                     </Fragment>
    //                   )}
    //                 </strong>
    //                 <span className="thq-body-small">
    //                   {props.author1Position ?? (
    //                     <Fragment>
    //                       <span className="testimonial17-text25">
    //                         Founder &amp; CEO, TechSavvy Solutions
    //                       </span>
    //                     </Fragment>
    //                   )}
    //                 </span>
    //               </div>
    //             </div>
    //             <span className="testimonial17-text14 thq-body-small">
    //               {props.review1 ?? (
    //                 <Fragment>
    //                   <span className="testimonial17-text34">
    //                     AI for Women Entrepreneurs has truly transformed the way
    //                     we approach business. The insights and support provided
    //                     have been invaluable.
    //                   </span>
    //                 </Fragment>
    //               )}
    //             </span>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="thq-animated-card-bg-2">
    //         <div className="thq-animated-card-bg-1">
    //           <div
    //             data-animated="true"
    //             className="thq-card testimonial17-card2"
    //           >
    //             <div className="testimonial17-container14">
    //               <img
    //                 alt={props.author2Alt}
    //                 src={props.author2Src}
    //                 className="testimonial17-image2"
    //               />
    //               <div className="testimonial17-container15">
    //                 <strong className="thq-body-large">
    //                   {props.author2Name ?? (
    //                     <Fragment>
    //                       <span className="testimonial17-text29">
    //                         Emily Chen
    //                       </span>
    //                     </Fragment>
    //                   )}
    //                 </strong>
    //                 <span className="thq-body-small">
    //                   {props.author2Position ?? (
    //                     <Fragment>
    //                       <span className="testimonial17-text24">
    //                         Co-founder, InnovateHer Labs
    //                       </span>
    //                     </Fragment>
    //                   )}
    //                 </span>
    //               </div>
    //             </div>
    //             <span className="testimonial17-text17 thq-body-small">
    //               {props.review2 ?? (
    //                 <Fragment>
    //                   <span className="testimonial17-text28">
    //                     I can&apos;t recommend AI for Women Entrepreneurs
    //                     enough. The tools and resources offered have helped us
    //                     streamline our operations and drive growth.
    //                   </span>
    //                 </Fragment>
    //               )}
    //             </span>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="thq-animated-card-bg-2">
    //         <div className="thq-animated-card-bg-1">
    //           <div
    //             data-animated="true"
    //             className="thq-card testimonial17-card3"
    //           >
    //             <div className="testimonial17-container16">
    //               <img
    //                 alt={props.author3Alt}
    //                 src={props.author3Src}
    //                 className="testimonial17-image3"
    //               />
    //               <div className="testimonial17-container17">
    //                 <strong className="thq-body-large">
    //                   {props.author3Name ?? (
    //                     <Fragment>
    //                       <span className="testimonial17-text27">
    //                         Maria Rodriguez
    //                       </span>
    //                     </Fragment>
    //                   )}
    //                 </strong>
    //                 <span className="thq-body-small">
    //                   {props.author3Position ?? (
    //                     <Fragment>
    //                       <span className="testimonial17-text33">
    //                         CEO, EmpowerTech Solutions
    //                       </span>
    //                     </Fragment>
    //                   )}
    //                 </span>
    //               </div>
    //             </div>
    //             <span className="testimonial17-text20 thq-body-small">
    //               {props.review3 ?? (
    //                 <Fragment>
    //                   <span className="testimonial17-text36">
    //                     Being a part of AI for Women Entrepreneurs has been a
    //                     game-changer for our company. The mentorship and
    //                     guidance received have been instrumental in our success.
    //                   </span>
    //                 </Fragment>
    //               )}
    //             </span>
    //           </div>
    //         </div>
    //       </div>
    //       <div className="thq-animated-card-bg-2">
    //         <div className="thq-animated-card-bg-1">
    //           <div
    //             data-animated="true"
    //             className="thq-card testimonial17-card4"
    //           >
    //             <div className="testimonial17-container18">
    //               <img
    //                 alt={props.author4Alt}
    //                 src={props.author4Src}
    //                 className="testimonial17-image4"
    //               />
    //               <div className="testimonial17-container19">
    //                 <strong className="thq-body-large">
    //                   {props.author4Name ?? (
    //                     <Fragment>
    //                       <span className="testimonial17-text31">
    //                         Linda Smith
    //                       </span>
    //                     </Fragment>
    //                   )}
    //                 </strong>
    //                 <span className="thq-body-small">
    //                   {props.author4Position ?? (
    //                     <Fragment>
    //                       <span className="testimonial17-text30">
    //                         Founder, SheLeads Inc.
    //                       </span>
    //                     </Fragment>
    //                   )}
    //                 </span>
    //               </div>
    //             </div>
    //             <span className="testimonial17-text23 thq-body-small">
    //               {props.review4 ?? (
    //                 <Fragment>
    //                   <span className="testimonial17-text37">
    //                     AI for Women Entrepreneurs is a must for any female
    //                     founder looking to leverage AI technology. The community
    //                     and knowledge shared here are unparalleled.
    //                   </span>
    //                 </Fragment>
    //               )}
    //             </span>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
   
  )
}

Testimonial17.defaultProps = {
  author2Position: undefined,
  author1Position: undefined,
  author3Alt: 'Maria Rodriguez - CEO, EmpowerTech Solutions',
  author1Name: undefined,
  author1Src:
    'https://images.unsplash.com/photo-1706606999710-72658165a73d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMzE5NjMwNHw&ixlib=rb-4.0.3&q=80&w=1080',
  author3Name: undefined,
  review2: undefined,
  author2Name: undefined,
  author4Position: undefined,
  author4Name: undefined,
  author4Src:
    'https://images.unsplash.com/photo-1508186225823-0963cf9ab0de?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMzE5NjMwNHw&ixlib=rb-4.0.3&q=80&w=1080',
  author1Alt: 'Sara Johnson - Founder & CEO, TechSavvy Solutions',
  author2Src:
    'https://images.unsplash.com/photo-1511367461989-f85a21fda167?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMzE5NjMwNXw&ixlib=rb-4.0.3&q=80&w=1080',
  author3Src:
    'https://images.unsplash.com/photo-1682084252486-6d5e7f261666?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMzE5NjMwNXw&ixlib=rb-4.0.3&q=80&w=1080',
  author2Alt: 'Emily Chen - Co-founder, InnovateHer Labs',
  author4Alt: 'Linda Smith - Founder, SheLeads Inc.',
  content1: undefined,
  author3Position: undefined,
  review1: undefined,
  heading1: undefined,
  review3: undefined,
  review4: undefined,
}

Testimonial17.propTypes = {
  author2Position: PropTypes.element,
  author1Position: PropTypes.element,
  author3Alt: PropTypes.string,
  author1Name: PropTypes.element,
  author1Src: PropTypes.string,
  author3Name: PropTypes.element,
  review2: PropTypes.element,
  author2Name: PropTypes.element,
  author4Position: PropTypes.element,
  author4Name: PropTypes.element,
  author4Src: PropTypes.string,
  author1Alt: PropTypes.string,
  author2Src: PropTypes.string,
  author3Src: PropTypes.string,
  author2Alt: PropTypes.string,
  author4Alt: PropTypes.string,
  content1: PropTypes.element,
  author3Position: PropTypes.element,
  review1: PropTypes.element,
  heading1: PropTypes.element,
  review3: PropTypes.element,
  review4: PropTypes.element,
}

export default Testimonial17
