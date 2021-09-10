import * as React from "react"
import * as styles from "./footer.module.css"
import { Link } from "gatsby"

import img1 from '../images/purple-sector-avatar-rev.svg'
import linkedIn from '../images/linkedIn.svg'
import twitter from '../images/twitter-logo.png'

const Footer = () => (
  <footer>
    <div className="ContentContainer">
      <div className={styles.navFlex}>
        <div className={styles.navCol}>
          <div className={styles.navMenu}>
            <Link className={styles.navA} to="/about">About us</Link>
            <Link className={styles.navA} to="/services">Services</Link>
            <Link className={styles.navA} to="https://thepitwall.purplesector.ca" rel="noopener" target="_blank" >Newsletter</Link>
            <Link className={styles.navA} data-savvycal-embed to="https://savvycal.com/purplesector/free-consult">Book a free consult</Link>
          </div>
          <div className={styles.contactUs}>
            <h3>Contact us</h3>
            <p>Email: <a href="mailto:hello@purplesector.ca">hello@purplesector.ca</a></p>
            <h3>Follow us</h3>
            <div className={styles.flexIcons}>
              <Link className={styles.social} rel="noopener" to="https://www.linkedin.com/company/purple-sector/" target="_blank" aria-label="Purple Sector's Linkedin"><img role="presentation" alt="LinkedIn Logo" src={linkedIn}/></Link>
              <Link className={styles.social} rel="noopener" to="https://twitter.com/purplesector_ca" target="_blank" aria-label="Purple Sector's Twitter"><img role="presentation" alt="twitter Logo" src={twitter}/></Link>
            </div>
          </div>
        </div>
        <Link to="/" aria-label="Homepage"><img role="presentation" alt="Purple Sector Logo" src={img1} className={styles.purpleIcon}/></Link>
      </div>
    </div>

    <div className={styles.sideBox}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <iframe className={styles.signUp} title="Purple Sector Newsletter Signup" src="https://thepitwall.purplesector.ca/embed"  height="320" style={{background: '#da9eee'}} frameBorder="0" scrolling="no"></iframe>
        </div>
      </div>
    </div>

    <p className={styles.copyRight}>© 2021 Purple Sector Strategy Inc. All rights reserved. Failure to comply will result in awkward stares.</p>
  </footer>
)


export default Footer
