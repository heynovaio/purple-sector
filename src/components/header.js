import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import * as styles from "./header.module.css"
import img1 from '../images/purplesector-logo.png'


const Header = ({ siteTitle }) => (
  <header className={styles.header}>
    <Link to="/"><img role="presentation" alt="Purple Sector Logo" src={img1}/></Link>
    <input className={styles.menuBtn} type="checkbox" id="menu"/>
    <label className={styles.menuIcon} htmlFor="menu"><span className={styles.navicon}></span></label>
    <ul className={styles.navMenu} id="navMenu">
      <li><Link className={styles.navA} to="/about">About Us</Link></li>
      <li><Link className={styles.navA} to="/services">Services</Link></li>
      <li><Link className={styles.navA} to="https://thepitwall.purplesector.ca/" target="_blank">Newsletter</Link></li>
      <li><Link className={styles.navB} to="https://savvycal.com/purplesector/free-consult" target="_blank">Book a Free Consult</Link></li>
    </ul>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
