import * as React from "react"
import * as styles from "./about-us.module.css"
import { Link } from "gatsby"

import img1 from "../../images/side-blob.svg"
import img2 from "../../images/mechanics.svg"

const AboutUs = () => (
  <section className={styles.aboutUs}>
    <div className={styles.sideBox}>
      <img role="presentation" alt="" src={img1}/>
    </div>
    <div className="ContentContainer">
      <div className={styles.topContent}>
        <h2>Looking to <mark>shift</mark> gears?</h2>
        <p>We love working with companies trying to do things differently. If you need to energize your team around good habits, Purple Sector can help find alignment with your business goals and get you grounded in the needs of your customer. We provide premium programs specialized for remote and hybrid teams, offering facilitated workshops, coaching, and strategic support so that you can build better teams and better products.</p>
      </div>
      
      <div className={styles.bottomContent}>
        <div className={styles.cardStack}>
          <div className="card left">
            <h3>Get your team on track</h3>
            <p>Our 6-week Alignment Program is customized to accelerate a shared understanding of what drives your business, your customers, and your teams so that you can focus on building great products.</p>
          </div>
          <div className="card left">
            <h3>Refocus on key priorities</h3>
            <p>Our Sparkline Workshop is a great way to get going with team alignment. This half-day session is centred around a particular workflow in your product that needs attention.</p>
          </div>
          <div className="card left">
            <h3>Nurture best practices</h3>
            <p>Strategic alignment is more than a checkbox, it’s a leadership practice. We provide 1:1 virtual coaching sessions to help move things forward through times of change. </p>
          </div>
        </div>
        <div className={styles.pictureStack}>
          <h2>We can <mark>help</mark> you</h2>
          <img role="presentation" alt="" src={img2}/>
          <Link className="learnBtn" to="/services/">Our Services</Link>
        </div>
      </div>
    </div>
    
  </section>
)
export default AboutUs