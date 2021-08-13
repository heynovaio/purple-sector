import * as React from "react"
import * as styles from "./what.module.css"
import { Link } from "gatsby"

import icon1 from "../../images/icon-5.svg"
import icon2 from "../../images/icon-6.svg"
import icon3 from "../../images/icon-7.svg"
import icon4 from "../../images/icon-8.svg"

const What = () => (
  <section className={styles.whatSection}>
    <div className="ContentContainer">
      <h2>What you get</h2>
      <div className={styles.cardBox}>
        <div className="card what">
          <img role="presentation" alt="" src={icon1}/>
          <h3>Aligned vision</h3>
          <p>We help create a <mark>shared understanding</mark> that 
          encompasses the entire organization</p>
        </div>
        <div className="card what">
          <img role="presentation" alt="" src={icon2}/>
          <h3>Strategic support</h3>
          <p>Just show up with the <mark>knowledge</mark> you already 
          have, and we’ll map out your workflow.</p>
        </div>
        <div className="card what">
          <img role="presentation" alt="" src={icon3}/>
          <h3>Energized teams</h3>
          <p>We create the space to onboard <mark>smoothly</mark> and 
          get your team on track</p>
        </div>
        <div className="card what">
          <img role="presentation" alt="" src={icon4}/>
          <h3>Actionable tools</h3>
          <p>Walk away with tangible plans and move forward 
          with <mark>effective</mark> habits</p>
        </div>
      </div>
      <div className={styles.trackEnd}>
        <h2>Ready to start the conversation?</h2>
        <p>What would change about the work of your team if everyone had 
        exactly what they needed to move forward? Come learn more about 
        how we can help you build better teams and better products. It 
        all starts with a simple conversation.</p>
        <p>There are better ways to work. Let’s bring out the best of 
        everyone.</p>
        <Link className="learnBtn alt" to="/contact/">Book a Free Consult</Link>
      </div>
    </div>
  </section>
)
export default What