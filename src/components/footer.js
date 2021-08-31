import * as React from "react"
import * as styles from "./footer.module.css"
import { Link } from "gatsby"

import img1 from '../images/purple-sector-avatar-rev.svg'
import linkedIn from '../images/linkedIn.svg'
import twitter from '../images/twitter-logo.png'
import circle from "../images/circle.svg"

const Footer = () => (
  <footer>
    <div className="ContentContainer">
      <div className={styles.navFlex}>
        <div className={styles.navCol}>
          <div className={styles.navMenu}>
            <Link className={styles.navA} to="/about">About Us</Link>
            <Link className={styles.navA} to="/services">Services</Link>
            <Link className={styles.navA} to="https://thepitwall.purplesector.ca" target="_blank" >Blog</Link>
            <Link className={styles.navA} to="https://savvycal.com/purplesector/free-consult" target="_blank">Book a Free Consult</Link>
          </div>
          <div className={styles.contactUs}>
            <h3>Contact Us</h3>
            <p>Email: <Link to="mailto:hello@purplesector.ca">hello@purplesector.ca</Link></p>
            <h3>Follow us</h3>
            <div className={styles.flexIcons}>
              <Link className={styles.social} to="https://www.linkedin.com/company/purple-sector/" target="_blank"><img role="presentation" alt="LinkedIn Logo" src={linkedIn}/></Link>
              <Link className={styles.social} to="https://twitter.com/purplesector_ca" target="_blank"><img role="presentation" alt="twitter Logo" src={twitter}/></Link>
            </div>
          </div>
        </div>
        <Link  to="/"><img role="presentation" alt="Purple Sector Logo" src={img1} className={styles.purpleIcon}/></Link>
      </div>
    </div>

    <div className={styles.sideBox}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <iframe className={styles.signUp} title="Purple Sector Newsletter Signup" src="https://thepitwall.purplesector.ca/embed" width="480" height="320" style={{background: '#da9eee'}} frameBorder="0" scrolling="no"></iframe>
        </div>
        <img role="presentation" alt="" src={circle}/>
      </div>
    </div>

    <p className={styles.copyRight}>© 2021 Purple Sector Strategy Inc. All rights reserved. Failure to comply will result in awkward stares.</p>
  </footer>
)


export default Footer
