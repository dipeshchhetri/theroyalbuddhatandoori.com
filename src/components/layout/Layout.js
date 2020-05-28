import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "../header/index"

const s = {
  hr: {
    margin: '0 0 1rem 0'
  },
  footer: {
    textAlign: 'center',
    fontSize: 12,
    paddingBottom: '1rem'
  }
}

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div>
        <main>
          {children}
        </main>
        <footer style={s.footer}>
          <hr style={s.hr} />
          © Copyright {new Date().getFullYear()}.
          {` `}
          Made by <a href="https://sandeshshrestha.com">Sandesh Shrestha</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
