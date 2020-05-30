import { Link } from 'gatsby';
import React from 'react';
import cn from 'classnames';
import PropTypes from 'prop-types';

import logo from '../../images/logo.jpg';
import Facebook from '../../icons/facebook';
import Tripadvisor from '../../icons/tripadvisor';

import s from './header.module.scss'

const Header = ({ facebook, tripadvisor }) => (
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
          <a className="col" href={facebook} rel="noreferrer" target="_blank">
            <Facebook>Facebook</Facebook>
          </a>
          <a className="col" rel="noreferrer" href={tripadvisor} target="_blank">
            <Tripadvisor>Tripadvisor</Tripadvisor>
          </a>
        </div>
      </div>
    </nav>
  </header>
);

Header.propTypes = {
  facebook: PropTypes.string.isRequired,
  tripadvisor: PropTypes.string.isRequired,
};

export default Header;
