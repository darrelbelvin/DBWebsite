import React from 'react'
import PropTypes from 'prop-types'
import logo from '../images/D-cubed Logo white shadow.png'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            <img className="icon" src={logo} alt=""/>
        </div>
        <div className="content">
            <div className="inner">
                <h1>Darrel Belvin</h1>
                <h3>Data Scientist<br />Computer Vision Engineer</h3>
            </div>
        </div>
        <nav>
            <ul>
                <li><button onClick={() => {props.onOpenArticle('intro')}}>Intro</button></li>
                <li><button onClick={() => {props.onOpenArticle('work')}}>Work</button></li>
                {/*<li><button onClick={() => {props.onOpenArticle('play')}}>Play</button></li>*/}
                <li><button onClick={() => {props.onOpenArticle('contact')}}>Contact</button></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
