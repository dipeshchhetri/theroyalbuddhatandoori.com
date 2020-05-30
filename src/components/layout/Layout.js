import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import cn from "classnames"

import Facebook from '../../icons/facebook';
import Tripadvisor from '../../icons/tripadvisor';

import Header from "../header/index"

import s from './layout.module.scss'

const Layout = ({ children }) => (
  <>
    <Header />
    <div className={s.root}>
      <main>
        {children}
      </main>
      <footer className={s.footer}>
        <hr className={cn(s.hr, 'd-md-none')} />
        <nav className={cn(s.nav, 'd-md-none row no-gutters')}>
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
        <hr className={s.hr} />
        © Copyright {new Date().getFullYear()}.
      </footer>
    </div>
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
