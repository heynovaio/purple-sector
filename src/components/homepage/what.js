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
      <h2><mark>Align</mark> your vision</h2>
      <div className={styles.cardBox}>
        <div className="card what">
          <img role="presentation" alt="" src={icon1}/>
          <h3>Shared purpose</h3>
          <p>We help create a shared understanding that encompasses the entire organization.</p>
        </div>
        <div className="card what">
          <img role="presentation" alt="" src={icon2}/>
          <h3>Strategic support</h3>
          <p>We show  you methods to organize your ideas, knowledge, and workflow.</p>
        </div>
        <div className="card what">
          <img role="presentation" alt="" src={icon3}/>
          <h3>Energized teams</h3>
          <p>Activate the team and the talents you already have on hand.</p>
        </div>
        <div className="card what">
          <img role="presentation" alt="" src={icon4}/>
          <h3>Actionable tools</h3>
          <p>Walk away with tangible plans and move forward to effective habits.</p>
        </div>
      </div>
      <div className={styles.trackEnd}>
        <h2>Ready to start the conversation?</h2>
        <p>What would change about the work of your team if everyone had the clarity to move forward? Come learn more about how we can help you build better teams and better products. It all starts with a simple conversation.</p>
        <p>There are better ways to work. Let’s bring out the best of everyone.</p>
        <Link className="learnBtn alt" to="https://savvycal.com/purplesector/free-consult" target="_blank">Book a Free Consult</Link>
      </div>
    </div>
  </section>
)
export default What