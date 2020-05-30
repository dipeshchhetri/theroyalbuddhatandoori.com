import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import cn from 'classnames';
import { useStaticQuery, graphql } from 'gatsby';

import Facebook from '../../icons/facebook';
import Tripadvisor from '../../icons/tripadvisor';

import Header from '../header/index';

import s from './layout.module.scss';

const Layout = ({ children }) => {
  const { site: { siteMetadata: { facebook, tripadvisor }} } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            facebook
            tripadvisor
          }
        }
      }
    `
  );

  return (
    <>
      <Header facebook={facebook} tripadvisor={tripadvisor} />
      <div className={s.root}>
        <main>
          {children}
        </main>
        <footer className={s.footer}>
          <hr className={cn(s.hr, 'd-md-none')} />
          <nav className={cn(s.nav, 'd-md-none row no-gutters')}>
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
          </nav>
          <hr className={s.hr} />
          © Copyright {new Date().getFullYear()}.
        </footer>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
