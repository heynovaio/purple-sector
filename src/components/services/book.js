import * as React from "react"
import * as styles from "./book.module.css"
import { Link } from "gatsby"

const Book = () => (
  <section>
    <div className="ContentContainer">
      <div className={styles.wrapper}>
        <h2>Ready to dive in?</h2>
        <p>Alignment brings out the best of everyone on the team. We’re here 
        to help you create the conditions to get clear about a shared vision.</p>
        <p>All it takes is a conversation to start building strong habits that your 
        team can continue to practice and model within your organization. Explore 
        our strategic programs and workshops, or ask us how we can customize a 
        service package that is unique to your organization. Our strategy services 
        are widely applicable, and we can design workshops and programs specifically 
        branded for your business.</p>
        <Link className="learnBtn alt" to="https://savvycal.com/purplesector/free-consult" target="_blank">Schedule a call with us</Link>
      </div>
    </div>
  </section>
)
export default Book

 


