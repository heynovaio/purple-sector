import * as React from "react"
import * as styles from "./hero.module.css"
import { Link } from "gatsby"

import img1 from "../../images/circle.svg"
import img2 from "../../images/blue-shape.svg"
import img3 from "../../images/grey-shape.svg"

const Hero = () => (
  <section className={styles.hero}>
    <div className="ContentContainer">
      <div className={styles.heroBox}>
        <div className={styles.textBox}>
          <h1>Align your team around 
            a <mark>shared</mark> vision
          </h1>
          <p>Work with us to create the conditions to capture knowledge, shape plans, and activate people around what matters most.
          </p>
          <Link className="learnBtn" aria-label="Learn more by booking a free consult" to="/services">Work with us</Link>
          </div>
      </div>
    </div>
      <div className={styles.shapeBox}>
        <img role="presentation" alt="" src={img1}/>
        <img role="presentation" alt="" src={img2}/>
        <img role="presentation" alt="" src={img3}/> 
      </div>
  </section>
)
export default Hero