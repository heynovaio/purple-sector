import * as React from "react"
import * as styles from "./hero.module.css"

import img1 from "../../images/circle.svg"
import img2 from "../../images/blue-shape.svg"
import img3 from "../../images/grey-shape.svg"


const Hero = () => (
  <section className={styles.hero}>
    <div className="ContentContainer">
      <div className={styles.heroBox}>
        <div className={styles.textBox}>
          <h1>Our services</h1>
          <p>Purple Sector Strategy provides tailored programs and packages to help drive positive change in your organization</p>
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