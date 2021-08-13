import * as React from "react"
import * as styles from "./footer.module.css"
import { Link } from "gatsby"

import img1 from '../images/purplesector-logo2.png'
import linkedIn from '../images/linkedIn.svg'
import blob from '../images/bottom-blob.png'

const Footer = () => (
  <footer>
    <img role="presentation" alt="Purple Sector Logo" src={img1} className={styles.purpleIcon}/>
    <div className="ContentContainer">
      <div className={styles.navCol}>
        <div className={styles.navMenu}>
          <Link className={styles.navA} to="/about">About Us</Link>
          <Link className={styles.navA} to="/services">Services</Link>
          <Link className={styles.navA} to="/">Blog</Link>
          <Link className={styles.navA} to="/">Book a Free Consult</Link>
        </div>
        <div className={styles.contactUs}>
          <h3>Contact Us</h3>
          <p>Email: hello@purplesector.com</p>
          <h3>Follow us</h3>
          <Link className={styles.social}to="/contact/"><img role="presentation" alt="LinkedIn Logo" src={linkedIn}/></Link>
        </div>
      </div>
      
    </div>
    <div className={styles.sideBox}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <h3>Sign up for our Pit Wall Newsletter</h3>
          <p>We’re always thinking about alignment strategy. Get tips for practicing alignment in your day-to-day work.</p> 
          <form className={styles.signUp}>
            <input
              type="email"
              required
              max_length="512"
              className={styles.registerEmail}
              name="email"
              placeholder="Your Email"
            />
            <input
              className={styles.submitBtn}
              type="submit"
              value={`Sign Up`}
            />
          </form>
        </div>
        <img role="presentation" alt="" src={blob}/>
      </div>
    </div>
    <p className={styles.copyRight}>Copyright © 2020. LogoIpsum. All rights reserved.</p>
  </footer>
)


export default Footer
