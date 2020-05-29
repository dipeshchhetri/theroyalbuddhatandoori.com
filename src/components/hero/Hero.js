import PropTypes from "prop-types"
import React from "react"

const Hero = ({ image }) => (
  <div style={{
    backgroundImage: `url('${image}')`,
    height: 'calc(100vh - 250px)',
    minHeight: 300,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  }}>
    
  </div>
);

Hero.propTypes = {
  image: PropTypes.string.isRequired
}

export default Hero;
