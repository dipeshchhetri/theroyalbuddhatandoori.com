import React from "react"

import Layout from "../components/layout/index"
import SEO from "../components/seo/index"
import Hero from "../components/hero/index"

import bannerImage from '../images/the-royal-buddha-tandoori-front.jpg'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero image={bannerImage} />
  </Layout>
)

export default IndexPage
