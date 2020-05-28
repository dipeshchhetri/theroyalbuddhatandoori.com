import React from "react"

export default ({ children, icon, style }) => {
  const { type: Icon, props } = icon;
  const iconStyle = {
    height: 20,
    width: 20,
    marginRight: 5,
  };

  return (
    children ? (
      <span style={{
        display: 'flex',
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