import * as React from "react"
import * as styles from "./approach.module.css"
import { Link } from "gatsby"

import blob from "../../images/side-blob3.svg"

const Approach = () => (
  <section className={styles.approach}>
    <div className="ContentContainer">
      <h2>Our <mark>Approach</mark></h2>
      <div className={styles.cardRow}>
        <div className={styles.card}>
          <h3>Flexible Scheduling</h3>
          <p>We know that it’s a challenge to carve out time to 
          focus on strategy. We work with you to determine a 
          schedule that works best for your team and the realities 
          of your day-to-day work. </p>
        </div>
        <div className={styles.card}>
          <h3>Tailored Programs and Packages</h3>
          <p>Our premium alignment strategy programming is flexible 
          and tailored around the areas that matter most to your team. 
          Ask us how we can shape a service package that’s right for you!</p>
        </div>
        <div className={styles.card}>
          <h3>Remote Friendly Programming</h3>
          <p>The world of work is changing, and it’s more important than ever 
          to get everyone on the same page. Our programs and coaching services 
          are designed to work seamlessly for remote and hybrid teams.</p>
        </div>
      </div>
      <div className={styles.consultBtn}>
        <Link className="learnBtn" to="https://savvycal.com/purplesector/free-consult" target="_blank">Book a free consult</Link>
      </div>
    </div>
    <div className={styles.sideBox}>
      <img role="presentation" alt="" src={blob}/>
    </div>
  </section>
)
export default Approach