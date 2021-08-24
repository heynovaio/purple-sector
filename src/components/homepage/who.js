import * as React from "react"
import * as styles from "./who.module.css"

import img1 from "../../images/squiggle1.svg"
import img2 from "../../images/squiggle2.svg"
import icon1 from "../../images/icon-1.svg"
import icon2 from "../../images/icon-2.svg"
import icon3 from "../../images/icon-3.svg"
import icon4 from "../../images/icon-4.svg"

const Who = () => (
  <section className={styles.whoSection}>
    <div className={styles.squiggleTop}>
      <img role="presentation" alt="" src={img1}/>
    </div>
    <div className="ContentContainer who">
      <div className={styles.whoHeader}>
        <h2><mark>Who</mark> we work with</h2>
      </div>
      <div className={styles.whoPanel}>
        <div className={styles.whoCard}>
          <img role="presentation" alt="" src={icon1}/>
          <h3>Product Teams</h3>
          <p>Rallying dynamic product builders around a shared vision</p>
        </div>
        <div className={styles.whoCard}>
          <img role="presentation" alt="" src={icon2}/>
          <h3>HealthTech Teams</h3>
          <p>Supporting patients and providers with healthcare-focused applications</p>
        </div>
        <div className={styles.whoCard}>
          <img role="presentation" alt="" src={icon3}/>
          <h3>Social Impact VCs</h3>
          <p>Nurturing new or pivoting portfolio companies</p>
        </div>
        <div className={styles.whoCard}>
          <img role="presentation" alt="" src={icon4}/>
          <h3>Project Leads</h3>
          <p>Taking on a new project or guiding a shift in focus</p>
        </div>
      </div>
    </div>
    <div className={styles.squiggleBottom}>
      <img role="presentation" alt="" src={img2}/>
    </div>
  </section>
)
export default Who