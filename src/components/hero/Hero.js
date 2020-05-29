import PropTypes from "prop-types"
import React from "react"

const Hero = ({ image }) => (
  <div style={{
    backgroundImage: `url('${image}')`,
    paddingBottom: '50%',
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