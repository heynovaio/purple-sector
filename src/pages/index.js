import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"


import Layout from "../components/layout"
import Seo from "../components/seo"
import Hero from "../components/homepage/hero"
import AboutUs from "../components/homepage/about-us"
import Who from "../components/homepage/who"
import Why from "../components/homepage/why"
import What from "../components/homepage/what"
import Testimonials from "../components/homepage/testimonials"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Hero/>
    <AboutUs/>
    <Who/>
    <Why/>
    <What/>
    <Testimonials/>
  </Layout>
)

export default IndexPage
