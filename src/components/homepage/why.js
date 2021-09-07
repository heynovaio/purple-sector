import * as React from "react"
import * as styles from "./why.module.css"
import { Link } from "gatsby"

import blob from "../../images/side-blob2.svg"
import groupPic from "../../images/groupPic.jpg"

const Why = () => (
  <section className={styles.whySection}>
    <div className="ContentContainer">
      <div className={styles.flexBox}>
        <div className={styles.pictureStack}>
          <h2><mark>Why</mark> Purple Sector</h2>
          <div><img role="presentation" alt="" src={groupPic} /></div>
          <Link className="learnBtn" to="/about">What drives us</Link>
        </div>
        <div className={styles.cardStack}>
          <div className="card right">
            <h3>Passionate about meaningful work</h3>
            <p>We know the value to your business and your customers when people are aligned around meaningful work. We equip leaders with the confidence to create conditions that bring out the best of everyone. </p>
          </div>
          <div className="card right">
            <h3>Experience with tech teams</h3>
            <p>With over 15 years of experience building up effective tech products and the teams that create them, we’re committed to supporting people in maximizing the impact of their teams.</p>
          </div>
          <div className="card right">
            <h3>Thoughtful third party</h3>
            <p>The products you create have the power to change lives. We confront competing priorities and create space to talk about how pieces of product development fit together.</p>
          </div>
        </div>
      </div>
    </div>
    <div className={styles.sideBox}>
      <img role="presentation" alt="" src={blob}/>
    </div>
  </section>
)
export default Why