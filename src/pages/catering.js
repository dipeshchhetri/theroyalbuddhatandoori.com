import React from "react"

import Layout from "../components/layout/index"
import SEO from "../components/seo/index"

import menu1 from '../images/menu/1.jpg'
import menu2 from '../images/menu/2.jpg'
import menu3 from '../images/menu/3.jpg'
import menu4 from '../images/menu/4.jpg'
import menu5 from '../images/menu/5.jpg'
import menu6 from '../images/menu/6.jpg'
import menu7 from '../images/menu/7.jpg'

import s from './menu.module.scss';

const menuImages = [menu1, menu2, menu3, menu4, menu5, menu6, menu7];

const CateringPage = () => (
  <Layout>
    <SEO title="Page two" />
    <div className="container">
      {menuImages.map(x => (
        <img className={s.image} key={x} src={x} alt="The Royal Buddha Tandoori menu" loading="lazy" />
      ))}
    </div>
  </Layout>
)

export default CateringPage;
