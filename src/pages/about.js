import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/about/hero"
import WhoWeAre from "../components/about/whoWeAre"
import Questions from "../components/about/questions"
import Book from "../components/about/book"

const About = () => (
  <Layout>
    <Seo title="About" />
    <Hero/>
    <WhoWeAre/>
    <Questions/>
    <Book/>
  </Layout>
)

export default About