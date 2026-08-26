import React from 'react'

import PropTypes from 'prop-types'

import './you-tube.css'

const YouTube = (props) => {
  return (
    <div className="you-tube-you-tube">
      <img
        alt={props.pastedImageAlt}
        src={props.pastedImageSrc}
        className="you-tube-pasted-image"
      />
    </div>
  )
}

YouTube.defaultProps = {
  pastedImageSrc: '/logos/pastedimage-smjb.svg',
  pastedImageAlt: 'pastedImage',
}

YouTube.propTypes = {
  pastedImageSrc: PropTypes.string,
  pastedImageAlt: PropTypes.string,
}

export default YouTube
