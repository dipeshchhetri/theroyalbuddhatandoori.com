import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Facebook from '../../icons/facebook';
import Tripadvisor from '../../icons/tripadvisor';

import Header from "../header/index"

const s = {
  hr: {
    margin: '1rem 0'
  },
  footer: {
    textAlign: 'center',
    fontSize: 12,
    paddingBottom: '1rem',
    marginTop: '-1rem'
  },
  nav: {
    fontSize: 16
  }
}

const Layout = ({ children }) => (
  <>
    <Header />
    <div>
      <main>
        {children}
      </main>
      <footer style={s.footer}>
        <hr style={s.hr} className="d-md-none" />
        <nav className="d-md-none row" style={s.nav}>
          <Link
            className="col"
            to="/contact-us"
          >
            Contact us
          </Link>
          <a className="col" href="https://www.facebook.com/royalbuddhatandoori" rel="noreferrer" target="_blank">
            <Facebook>Facebook</Facebook>
          </a>
          <a className="col" rel="noreferrer" href="https://www.tripadvisor.com/Restaurant_Review-g736284-d6914859-Reviews-The_Royal_Buddha_Tandoori-Moraira_Costa_Blanca_Province_of_Alicante_Valencian_Cou.html" target="_blank">
            <Tripadvisor>Tripadvisor</Tripadvisor>
          </a>
        </nav>
        <hr style={s.hr} />
        © Copyright {new Date().getFullYear()}.
      </footer>
    </div>
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
