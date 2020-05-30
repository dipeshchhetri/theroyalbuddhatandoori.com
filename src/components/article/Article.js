import PropTypes from 'prop-types';
import React from 'react';
import cn from 'classnames';

import s from './article.module.scss';

const Image = ({ image, style, className }) => (
  <div style={{
    backgroundImage: `url('${image}')`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    ...style
  }} className={className}></div>
);

const Article = ({ title, image, children, className }) => (
  <article className={cn(s.root, className)}>
    <h1 className={cn(s.header)}>{title}</h1>
    {image && (
      <Image className={s.image} image={image} />
    )}
    <div className={s.content}>
      {children}
    </div>
  </article>
)

Article.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

Article.defaultProps = {
  image: '',
  className: '',
};

export default Article;
