import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import * as styles from "./header.module.css"
import img1 from '../images/purplesector-logo.png'
const Header = ({ siteTitle }) => (

  <header>
    <div className={styles.headerBox}>
      <img role="presentation" alt="Purple Sector Logo" src={img1}/>
      <div className={styles.navMenu}>
        <Link className={styles.navA} to="/">About Us</Link>
        <Link className={styles.navA} to="/blog/">Services</Link>
        <Link className={styles.navA} to="/accessibility/">Newsletter</Link>
        <Link className={styles.navBtn} to="/contact/">Book a Free Consult</Link>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
