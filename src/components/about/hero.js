import * as React from "react"
import * as styles from "./hero.module.css"
import { Link } from "gatsby"

import img1 from "../../images/circle.svg"
import img2 from "../../images/short-blue-shape.svg"
import img3 from "../../images/curved-rectangle.svg"

import img4 from "../../images/circle2.svg"
import img5 from "../../images/side-blob4.svg"
import img6 from "../../images/squiggle3.svg"

const Hero = () => (
  <section className={styles.hero}>
    <div className="ContentContainer">
      <div className={styles.heroBox}>
        <div className={styles.textBox}>
          <h1>About Our Strategy</h1>
          <p>We bring together the experience and innovation you 
          need to support your team’s journey to alignment.</p>
        </div>
        <div className={styles.shapeBox}>
          <img role="presentation" alt="" src={img1}/>
          <img role="presentation" alt="" src={img2}/>
          <img role="presentation" alt="" src={img3}/> 
        </div>
      </div>
      <div className={styles.storyWrapper}>
        <h2>What's the story behind <mark>"Purple Sector"</mark>?</h2>
        <p>We are huge fans of Formula 1 racing, and we love the excitement 
        of seeing teams perform at a world-class level. A ‘purple sector’ 
        refers to the best overall time set by a driver in a section of a 
        lap. Achieving a purple sector means everything is aligning — driver, 
        car, team, strategy. It’s a measure of excellence that reflects a 
        whole team with a shared vision of success. That kind of alignment 
        is what we help our clients achieve.</p>
        <div className={styles.alignBtn}>
          <Link className="learnBtn" to="/contact/">Align your team with us</Link>
        </div>
      </div>
    </div>
    <div className={styles.shapeBox2}>
      <img role="presentation" alt="" src={img4}/>
      <img role="presentation" alt="" src={img5}/>
      <img role="presentation" alt="" src={img6}/> 
    </div>
  </section>
)
export default Hero