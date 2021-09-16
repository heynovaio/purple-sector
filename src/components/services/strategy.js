import * as React from "react"
import * as styles from "./strategy.module.css"


import clock from "../../images/clock-icon.svg"
import pitStop from "../../images/pit-icon.svg"
import people from "../../images/people-icon.svg"
import coach from "../../images/coach-icon.svg"

const Strategy = () => (
  <section className={styles.strategy}>
    <div className="ContentContainer strategy">
      <div className={styles.topWrapper}>
        <h2><mark>Strategy</mark> service packages</h2>
        <p>Our facilitated workshops and coaching help product teams 
        create the conditions to declutter the noise,  identify areas 
        of misalignment, and bring actionable priorities into focus.</p>
      </div>
      <div className={styles.cardCols}>
        <div className={styles.card}>
          <h3>Alignment Program</h3>
          <p><strong>Great for onboarding critical hires or supporting organizational transformation initiatives</strong></p>
          <p>This 6-week program is designed to accelerate a shared understanding 
          of what drives your business, your customers, and your teams so that you 
          can focus on building great products. Three core alignment modules help 
          you capture knowledge, shape plans, and activate your people. </p>
          <div className={styles.iconGrid}>
            <div className={styles.iconCard}>
              <img role="presentation" alt="" src={pitStop}/>
              <div className={styles.gridText}>
                <h4>Session Format</h4>
                <p>12 x 2-hour sessions</p>
              </div>
            </div>
            <div className={styles.iconCard}>
              <img role="presentation" alt="" src={clock}/>
              <div className={styles.gridText}>
                <h4>Duration</h4>
                <p>6 weeks</p>
              </div>
            </div>
            <div className={styles.iconCard}>
              <img role="presentation" alt="" src={people}/>
              <div className={styles.gridText}>
                <h4>Group Size</h4>
                <p>3-5 participants</p>
              </div>
            </div>
            <div className={styles.iconCard}>
              <img role="presentation" alt="" src={coach}/>
              <div className={styles.gridText}>
                <h4>Coaching Included</h4>
                <p>6 hours</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <h3>Sparkline Workshop</h3>
          <p><strong>Ideal for tackling new features, projects, customers, or markets</strong></p>
          <p>This half-day workshop is a great way to align your team around 
          a workflow or feature that needs focus. Bring in a fresh set of eyes 
          and apply our product expertise to drive the conversation forward. </p>
          <div className={styles.iconGrid}>
            <div className={styles.iconCard}>
              <img role="presentation" alt="" src={pitStop}/>
              <div className={styles.gridText}>
                <h4>Session Format</h4>
                <p>2 x 2-hour sessions</p>
              </div>
            </div>
            <div className={styles.iconCard}>
              <img role="presentation" alt="" src={clock}/>
              <div className={styles.gridText}>
                <h4>Duration</h4>
                <p>Half day</p>
              </div>
            </div>
            <div className={styles.iconCard}>
              <img role="presentation" alt="" src={people}/>
              <div className={styles.gridText}>
                <h4>Group Size</h4>
                <p>Max 6 participants</p>
              </div>
            </div>
            <div className={styles.iconCard}>
              <img role="presentation" alt="" src={coach}/>
              <div className={styles.gridText}>
                <h4>Coaching Included</h4>
                <p>1 hour</p>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.card}>
          <h3>1:1 Coaching</h3>
          <p><strong>Great for those in need of a thoughtful third party to
          move things forward with their team</strong></p>
          <p>Strategic alignment is more than a checkbox — it’s a leadership 
          practice. Through coaching, we support you to nurture best practices 
          in your organization. Long-term change is challenging to navigate, 
          and we're to guide you through it.</p>
          <div className={styles.iconGrid}>
            <div className={styles.iconCard}>
              <img role="presentation" alt="" src={pitStop}/>
              <div className={styles.gridText}>
                <h4>Session Format</h4>
                <p>1 hr sessions via Zoom</p>
              </div>
            </div>
            <div className={styles.iconCard}>
              <img role="presentation" alt="" src={clock}/>
              <div className={styles.gridText}>
                <h4>Duration</h4>
                <p>By the hour</p>
              </div>
            </div>
            <div className={styles.iconCard}>
              <img role="presentation" alt="" src={people}/>
              <div className={styles.gridText}>
                <h4>Group Size</h4>
                <p>1 on 1</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)
export default Strategy