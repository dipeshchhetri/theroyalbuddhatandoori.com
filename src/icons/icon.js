import React from 'react';
import PropTypes from 'prop-types';

const Icon = ({ children, icon, style }) => {
  const { type: Icon, props } = icon;
  const iconStyle = {
    height: 20,
    width: 20,
    marginRight: 5,
  };

  return (
    children ? (
      <span style={{
        ...style
      }}>
        <Icon {...props} style={iconStyle}/>
        {children}
      </span>
    ) : (
      <Icon {...props} style={{
        ...iconStyle,
        ...style,
      }} />
    )
  );
};

Icon.propTypes = {
  children: PropTypes.string,
  icon: PropTypes.node.isRequired,
  style: PropTypes.object,
};

Icon.defaultProps = {
  children: ''
};

export default Icon;