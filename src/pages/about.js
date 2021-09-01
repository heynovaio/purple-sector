import * as React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/about/hero"
import WhoWeAre from "../components/about/whoWeAre"
import Questions from "../components/about/questions"
import Book from "../components/about/book"

const About  = ({ location }) => (
  <Layout location={location}>
    <SEO title="Meet our alignment strategists | Purple Sector Strategy" description="Meet the team leveraging years of experience in innovation, a passion for meaningful work, and the facilitation and coaching skills to drive positive change." />
    <Hero/>
    <WhoWeAre/>
    <Questions/>
    <Book/>
  </Layout>
)

export default About
