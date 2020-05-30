import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout/index"
import SEO from "../components/seo/index"
import Article from "../components/article/index"

import image from '../images/the-royal-buddha-tandoori.jpg'

const CateringPage = () => {
  const { site: { siteMetadata: { phone }} } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            phone
          }
        }
      }
    `
  )

  return (
    <Layout>
    <SEO title="The Royal Buddha Tandoori catering" />
    <Article className="container" title="Catering" image={image}>
      <p>We offer catering service as well. So you can order the best nepalese and indian food from your home.</p>
      <a className="btn btn-primary btn-lg" href={`tel://${phone}`} role="button">Call us</a>
    </Article>
    </Layout>
  );
};

export default CateringPage;
