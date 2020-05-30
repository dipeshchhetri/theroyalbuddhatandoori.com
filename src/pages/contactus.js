import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../components/layout/index"
import SEO from "../components/seo/index"
import Article from "../components/article/index"

import image from '../images/royal-buddha-tandoori-contact.jpg'

import s from './contactus.module.scss';

const ContactUsPage = () => {
  const { site: { siteMetadata: { phone, email }} } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            phone
            email
          }
        }
      }
    `
  )

  return (
    <Layout>
      <SEO title="The Royal Buddha Tandoori contact details" />
      <Article className="container" title="Contact us" image={image}>
        <h3>The Royal Buddha Tandoori</h3>
        <p>Carretera Moraira a Teulada 10B 10b, 03724 Moraira, Spain</p>
        <a className={s.link} href={`tel://${phone}`}>Phone: {phone}</a><br />
        <a className={s.link} href={`mailto://${email}`}>Email: {email}</a><br />
        <p className={s.openingTime}>
          <b>Opening time:</b><br />
          Sun 12:00 AM - 3:30 PM 6:00 PM - 11:30 PM<br />
          Mon 6:00 PM - 11:30 PM<br />
          Tue 12:00 AM - 3:30 PM 6:00 PM - 11:30 PM<br />
          Wed 12:00 AM - 3:30 PM 6:00 PM - 11:30 PM<br />
          Thu 12:00 AM - 3:30 PM 6:00 PM - 11:30 PM<br />
          Fri 12:00 AM - 3:30 PM 6:00 PM - 11:30 PM<br />
          Sat 12:00 AM - 3:30 PM 6:00 PM - 11:30 PM<br />
        </p>
      </Article>
    </Layout>
  );
};

export default ContactUsPage;
