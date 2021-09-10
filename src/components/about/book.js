import * as React from "react"
import * as styles from "./book.module.css"
import { Link } from "gatsby"

const Book = () => (
  <section>
    <div className="ContentContainer">
      <div className={styles.wrapper}>
        <h2>Why we do it</h2>
        <p>Everyone deserves a sense of purpose about their work. We’re passionate 
        about helping teams uncover meaningful roles and a clear sense of direction.</p>
        <p>We’re driven by the question “Why wouldn’t we strive to make this more meaningful 
        for everyone involved?” Because when each member of the team is aligned around a 
        shared vision, we can build better teams and better products.</p>
        <Link className="learnBtn alt" data-savvycal-embed to="https://savvycal.com/purplesector/free-consult">Get in touch</Link>
      </div>
    </div>
  </section>
)
export default Book

 





