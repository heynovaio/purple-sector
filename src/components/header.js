import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import * as styles from "./header.module.css"
import img1 from '../images/purplesector-logo.png'


const Header = ({ siteTitle }) => (
  <>
    <a href="#main" className={styles.skipButton}>   
        Skip to Content
    </a>
    <header className={styles.header}>
      <Link to="/" aria-label="Homepage"><img role="presentation" alt="Purple Sector Logo" src={img1}/></Link>
      <input className={styles.menuBtn} type="checkbox" id="menu"/>
      <label className={styles.menuIcon} htmlFor="menu"><span className={styles.navicon}></span></label>
      <ul className={styles.navMenu} id="navMenu">
        <li><Link className={styles.navA} to="/about">About us</Link></li>
        <li><Link className={styles.navA} to="/services">Services</Link></li>
        <li><Link className={styles.navA} to="https://thepitwall.purplesector.ca/" rel="noopener" target="_blank">Newsletter</Link></li>
        <li><Link className={styles.navB} data-savvycal-embed to="https://savvycal.com/purplesector/free-consult">Book a free consult</Link></li>
      </ul>
    </header>
  </>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
