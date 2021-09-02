import * as React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/homepage/hero"
import AboutUs from "../components/homepage/about-us"
import Who from "../components/homepage/who"
import Why from "../components/homepage/why"
import What from "../components/homepage/what"
import Testimonials from "../components/homepage/testimonials"

const IndexPage = ({ location }) => (
  <Layout location={location}>
    <SEO 
      title="Aligning teams around a shared vision | Purple Sector Strategy" 
      description="Creating the conditions to capture knowledge, shape plans, and activate people around what matters most to your business through facilitated sessions." 
    />
    <Hero/>
    <AboutUs/>
    <Who/>
    <Why/>
    <What/>
    <Testimonials/>
  </Layout>
)

export default IndexPage