import React from 'react';
import Gallery from 'react-photo-gallery';

import Layout from '../components/layout/index';
import SEO from '../components/seo/index';
import Article from '../components/article/index';

import food1 from '../images/food-1.jpg';
import food2 from '../images/food-2.jpg';
import food3 from '../images/food-3.jpg';
import food4 from '../images/food-4.jpg';

const images = [
  {
    src: food1,
    width: 4,
    height: 3
  },
  {
    src: food2,
    width: 1,
    height: 1
  },
  {
    src: food3,
    width: 4,
    height: 3
  },
  {
    src: food4,
    width: 4,
    height: 3
  },
];

const GalleryPage = () => (
  <Layout>
    <SEO title="The Royal Buddha Tandoori food gallery" />
    <Article className="container" title="Food gallery">
      <Gallery photos={images} />
    </Article>
  </Layout>
);

export default GalleryPage;
