import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import cn from 'classnames'

import logo from '../../images/logo.jpg'
import Facebook from '../../icons/facebook';
import Tripadvisor from '../../icons/tripadvisor';

import s from './header.module.scss'

const Header = () => (
  <header className={s.root}>
    <nav className="container">
      <div className="row justify-content-center">
        <Link
          className="col-auto order-md-2"
          to="/"
        >
          <img className={s.logo} src={logo} alt="The Royal Buddha Tandoori Logo" loading="lazy" />
        </Link>
        <div className={cn(s.leftNav, "col-12 col-md row justify-content-center text-center align-items-center order-md-1")}>
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
        <div className="col-12 col-md row justify-content-center text-center align-items-center order-md-3 d-none d-md-flex">
          <Link
            className="col"
            to="/contactus"
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
