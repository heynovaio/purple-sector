import * as React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/services/hero"
import Strategy from "../components/services/strategy"
import Approach from "../components/services/approach"
import Book from "../components/services/book"

const Services = ({ location }) => (
  <Layout location={location}>
    <SEO title="Strategy service packages | Purple Sector Strategy" description="Our facilitated workshops and coaching help teams declutter the noise, identify areas of misalignment, and bring actionable priorities into focus." />
    <Hero/>
    <Strategy/>
    <Approach/>
    <Book/>
  </Layout>
)

export default Services
