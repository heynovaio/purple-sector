import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/services/hero"
import Strategy from "../components/services/strategy"
import Approach from "../components/services/approach"
import Book from "../components/services/book"

const Services = () => (
  <Layout>
    <Seo title="Services" />
    <Hero/>
    <Strategy/>
    <Approach/>
    <Book/>
  </Layout>
)

export default Services