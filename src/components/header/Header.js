import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import logo from '../../images/logo.jpg'
import Facebook from '../../icons/facebook';
import Tripadvisor from '../../icons/tripadvisor';

import s from './header.module.scss'

const Header = () => (
  <header className={s.root}>
    <nav className="container">
      <div className="row justify-content-center">
        <div className="col row justify-content-center text-center align-items-center">
          <div className="col" />
          <Link
            className="col"
            to="/menu"
          >
            Menu
          </Link>
          <Link
            className="col"
            to="/catering"
          >
            Catering
          </Link>
          <Link
            className="col"
            to="/gallery"
          >
            Gallery
          </Link>
        </div>
        <Link
          className="col-auto"
          to="/"
        >
          <img className={s.logo} src={logo} width="100" height="100" alt="The Royal Buddha Tandoori Logo" loading="lazy" />
        </Link>
        <div className="col row justify-content-center text-center align-items-center">
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
        </div>
      </div>
    </nav>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
