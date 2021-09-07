import * as React from "react"
import * as styles from "./whoWeAre.module.css"
import { Link } from "gatsby"

import pin from "../../images/locationPin.svg"
import medal from "../../images/medal.svg"
import magnify from "../../images/magnifyGlass.svg"
import gear from "../../images/gearHand.svg"

import Meredith from "../../images/meredith.jpg"
import Carlos from "../../images/carlos.jpg"

const WhoWeAre = () => (
  <section className={styles.whoWeAre}>
    <div className={styles.greyBanner}>
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.copyWrap}>
            <h2><mark>Who</mark> we are</h2>
            <p>We're a strategy company that focuses on team alignment, 
            and we love working with companies trying to do things 
            differently. We know the value of aligning people around 
            meaningful work for your business and customers, and when we 
            get involved with your organization, we focus on re-energizing 
            stalled teams and realigning them around your business goals.</p>
          </div>
          <div className={styles.copyWrap}>
            <div className={styles.cardGrid}>
              <div className={styles.card}>
                <img role="presentation" alt="" src={pin}/>
                <h3>Where</h3>
                <p>Based out of Waterloo, Ontario, Canada</p>
              </div>
              <div className={styles.card}>
                <img role="presentation" alt="" src={medal}/>
                <h3>Specialty</h3>
                <p>Supporting remote and hybrid product teams</p>
              </div>
              <div className={styles.card}>
                <img role="presentation" alt="" src={magnify}/>
                <h3>Focus</h3>
                <p>Realigning and activating teams around big picture goals</p>
              </div>
              <div className={styles.card}>
                <img role="presentation" alt="" src={gear}/>
                <h3>Services</h3>
                <p>Program facilitation, coaching, and alignment strategy support</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> 
    <div className={styles.teamContainer}>
      <div className="ContentContainer">
        <div className={styles.row}>
            <div className={styles.copyWrap}>
              <div><img role="presentation" alt="" src={Meredith}/></div>
            </div>
            <div className={styles.copyWrap}>
              <h2>Meredith Perez</h2>
              <h4>Co-Founder, Alignment Strategist, and Facilitator</h4>
              <p>Meredith brings years of experience in marketing and strategy 
              development, rallying competing organizations around common industry
              goals. With a love for finding connections between differing points
              of view, Meredith channels that experience in creating high performing
              teams that prioritize sound decision-making to get good work done. You 
              can find her on F1 race-days cheering on Max Verstappen with a croissant 
              in hand, as per tradition.</p>
            </div>
          </div>
          <div className={styles.row}>
            <div className={styles.copyWrap}>
              <h2>Carlos Perez</h2>
              <h4>Co-Founder, Alignment Strategist, and Coach</h4>
              <p>With over 15 years of experience building up effective tech products and 
              the teams that create them, Carlos is passionate about bringing people 
              together around common goals to do their best work. He applies his educational 
              background in Business Administration and his practical experience working with 
              organizations of all shapes and sizes in the areas of product management, product 
              design, and marketing.  You’re also likely to find Carlos watching a Formula 1 
              race and spending time with Meredith and their daughter Arya.</p>
            </div>
            <div className={styles.copyWrap}>
              <div><img role="presentation" alt="" src={Carlos}/></div>
            </div>
          </div>
          <div className={styles.btnWrap}>
            <Link className="learnBtn" to="https://savvycal.com/purplesector/free-consult" target="_blank">Schedule a call with us</Link>
          </div>
        </div>  
      </div>
  </section>
)
export default WhoWeAre