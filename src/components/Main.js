import React from 'react'
import PropTypes from 'prop-types'

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css';

import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/pic03.jpg'

import cabDes1 from '../images/cabDes1.png'
import cabDes2 from '../images/cabDes2.png'
import cabDes3 from '../images/cabDes3.png'
import cabDes4 from '../images/cabDes4.png'
import cabDes5 from '../images/cabDes5.png'
import cabDes6 from '../images/cabDes6.png'
import cabThumbs from '../images/cabThumbs.png'

const imageSets = {
  elevators: [cabDes1, cabDes2, cabDes3, cabDes4, cabDes5, cabDes6]
}

const WorkIcon = () => <svg class="jss1" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"></path></svg>
const SchoolIcon = () => <svg class="jss1" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"></path></svg>
const StarIcon = () => <svg class="jss1" focusable="false" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>

class Main extends React.Component {
  constructor(props) {
    super(props);
 
    this.state = {
      photoSet: "elevators",
      photoIndex: 0,
      isLightboxOpen: false,
    };
  }

  render() {
    const { photoSet, photoIndex, isLightboxOpen } = this.state, images = imageSets[photoSet];

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}} className={isLightboxOpen ? "" : "scrollDisabled"}>

        <article ref={this.props.article === 'intro' && this.props.setWrapperRef} id="intro" className={`${this.props.article === 'intro' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Intro</h2>
          <span className="image main"><img src={pic01} alt="" /></span>
          <p>Darrel is my name and I love building stuff. I've been challenging myself to create more impressive things since before I can remember.
          My older brother introduced me to programming at age 13 and I've been tinkering with scripts and applications ever since, over half my life now.<br/>
          Being self taught and a fiercely independent thinker gives me an advantage in situations where creative, out of the box thinking is required.
          If you're looking for a fresh perspective or unique solution, I'm your man.
          I love puzzles (I collect them), challenges, and beautiful solutions.</p> {// eslint-disable-next-line
}         <p>Check out <a onClick={() => this.props.onOpenArticle('work')}>my work</a>.</p>
          {close}
        </article>

        <article ref={(this.props.article === 'work' && !isLightboxOpen) && this.props.setWrapperRef} id="work" className={`${this.props.article === 'work' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none', width: '1400px'}}>
          <h2 className="major">Work</h2>
          <p>I have been tinkering with scripts and applications for over 13 years and have used 16 different programming languages, all self-taught.</p>
          <p>This is a sampling of some of my larger projects over the years. </p>
          
          <VerticalTimeline>
            <VerticalTimelineElement
              date="2019"
              icon={<WorkIcon />}
            >
              <h3 className="vertical-timeline-element-title"><a href="http://qcdesignerbeta.netlify.com" target="_blank" rel="noopener noreferrer">Elevator Interior Designer</a></h3>
              <h4 className="vertical-timeline-element-subtitle">Vertical Dimensions, Tukwila, WA</h4>
              <p>
                <strong>Problem:</strong> Competition offers online interior designers and Vertical Dimensions did not.<br/>
                <strong>Solution:</strong> A website module that designs and renders elevator interiors live in 3D. Vertical Dimensions now has the most advanced elevator interior designer in existence. <a href="http://qcdesignerbeta.netlify.com" target="_blank" rel="noopener noreferrer">Go check it out.</a>
              </p>
              <img className="image main" style={{maxWidth: "500px"}} src={cabThumbs} alt="error" onClick ={() => this.setState({ isLightboxOpen: true})} />
            </VerticalTimelineElement>
            <VerticalTimelineElement
              date="2018"
              icon={<WorkIcon />}
            >
              <h3 className="vertical-timeline-element-title">SOLIDWORKS Engine</h3>
              <h4 className="vertical-timeline-element-subtitle">Vertical Dimensions, Tukwila, WA</h4>
              <p>
                <strong>Problem:</strong> Company's primary drafting software, SOLIDWORKS, doesn't handle large sets of formulas well, running slowly and making frequent errors.<br/>
                <strong>Solution:</strong> An Excel plugin that drives part data in SOLIDWORKS, allowing the power and speed of Excel's equation solver to be used in SOLIDWORKS.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              date="2017 - 2018"
              icon={<WorkIcon />}
            >
              <h3 className="vertical-timeline-element-title">Vertical Dimensions Integrated System</h3>
              <h4 className="vertical-timeline-element-subtitle">Vertical Dimensions, Tukwila, WA</h4>
              <p>
                <strong>Problem:</strong> Company growth overloaded old paper system for tracking purchases and many other aspects of business.<br/>
                <strong>Solution:</strong> A custom purchase tracking system using Microsoft Access front-end and MySQL back-end. Expanded into project management, shipment tracking, and more.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              date="2016"
              icon={<WorkIcon />}
            >
              <h3 className="vertical-timeline-element-title">Engineering Software Extension</h3>
              <h4 className="vertical-timeline-element-subtitle">DHP Engineering, Federal Way, WA</h4>
              <p>
                <strong>Problem:</strong> Finite element analysis software unable to solve for data needed for customer requested design tables. Guess and check methods will take weeks to run.<br/>
                <strong>Solution:</strong> Extend software capabilities using QuickMacros to solve.............
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              date="2014 - 2017"
              icon={<WorkIcon />}
            >
              <h3 className="vertical-timeline-element-title">Drafting Tools</h3>
              <h4 className="vertical-timeline-element-subtitle">DHP Engineering, Federal Way, WA</h4>
              <p>
                <strong>Problem:</strong> <br/>
                <strong>Solution:</strong> 
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              date="2011"
              icon={<SchoolIcon />}
            >
              <h3 className="vertical-timeline-element-title">Tracing Keplers Path with Mathematica</h3>
              <h4 className="vertical-timeline-element-subtitle">Highline College, Des Moines, WA</h4>
              <p>
                <strong>Problem:</strong> <br/>
                <strong>Solution:</strong> 
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              date="November 2010"
              icon={<SchoolIcon />}
            >
              <h3 className="vertical-timeline-element-title">Pac-Man Remake</h3>
              <h4 className="vertical-timeline-element-subtitle">Highline College, Des Moines, WA</h4>
              <p>
                <strong>Problem:</strong> <br/>
                <strong>Solution:</strong> 
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              date="2007"
              icon={<StarIcon />}
            >
              <h3 className="vertical-timeline-element-title">Skin.rb</h3>
              <p>
                <strong>Problem:</strong> <br/>
                <strong>Solution:</strong> 
              </p>
            </VerticalTimelineElement>
            
          </VerticalTimeline>
          {close}
        </article>

        <article ref={this.props.article === 'play' && this.props.setWrapperRef} id="play" className={`${this.props.article === 'play' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Play</h2>
          <span className="image main"><img src={pic02} alt="" /></span>
          <p>I love playing with puzzles, tennis, and minecraft.<br/>
          I'm a huge fan of science and futurism, AI, rockets, and astronomy.<br/>
          I'm learning guitar and re-learning piano.</p>
          {close}
        </article>        

        <article ref={this.props.article === 'about' && this.props.setWrapperRef} id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">About</h2>
          <span className="image main"><img src={pic03} alt="" /></span>
          <p>Lorem ipsum dolor sit amet, consectetur et adipiscing elit. Praesent eleifend dignissim arcu, at eleifend sapien imperdiet ac. Aliquam erat volutpat. Praesent urna nisi, fringila lorem et vehicula lacinia quam. Integer sollicitudin mauris nec lorem luctus ultrices. Aliquam libero et malesuada fames ac ante ipsum primis in faucibus. Cras viverra ligula sit amet ex mollis mattis lorem ipsum dolor sit amet.</p>
          {close}
        </article>

        <article ref={this.props.article === 'contact' && this.props.setWrapperRef} id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li><input type="submit" value="Send Message" className="special" /></li>
              <li><input type="reset" value="Reset" /></li>
            </ul>
          </form>
          {/*<ul className="icons">
            <li><a href="#" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
            <li><a href="#" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
            <li><a href="#" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
            <li><a href="#" className="icon fa-github"><span className="label">GitHub</span></a></li>
          </ul>*/}
          {close}
        </article>

        {isLightboxOpen && (
          <Lightbox
            mainSrc={images[photoIndex]}
            nextSrc={images[(photoIndex + 1) % images.length]}
            prevSrc={images[(photoIndex + images.length - 1) % images.length]}
            onCloseRequest={() => this.setState({ isLightboxOpen: false })}
            onMovePrevRequest={() =>
              this.setState({
                photoIndex: (photoIndex + images.length - 1) % images.length,
              })
            }
            onMoveNextRequest={() =>
              this.setState({
                photoIndex: (photoIndex + 1) % images.length,
              })
            }
          />
        )}

      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  onOpenArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main