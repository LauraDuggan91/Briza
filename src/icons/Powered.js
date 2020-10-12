import React from 'react'
import PropTypes from 'prop-types'
import Icon from '../components/Icon'


const Powered = props => {
  const { size, color, title } = props
  return (
    <Icon
      viewBox='0 0 18 18'
      size={size}
      color={color}
      aria-label={title}
      {...props}
    >
    <path fillRule='evenodd' clipRule='evenodd' d='M9.82761 0.874983C10.1567 1.01784 10.3522 1.36054 10.3077 1.71653L9.61312 7.27327H15.9709C16.2845 7.27327 16.5698 7.45466 16.7028 7.73863C16.8358 8.0226 16.7925 8.35787 16.5918 8.59877L8.51037 18.2964C8.2807 18.572 7.89683 18.6632 7.56774 18.5204C7.23866 18.3775 7.04314 18.0348 7.08764 17.6788L7.78223 12.1221H1.42442C1.11085 12.1221 0.825582 11.9407 0.692579 11.6567C0.559575 11.3728 0.602847 11.0375 0.803591 10.7966L8.88499 1.09893C9.11466 0.823329 9.49853 0.732129 9.82761 0.874983ZM3.14983 10.5058H8.69768C8.92948 10.5058 9.15012 10.6054 9.30352 10.7791C9.45693 10.9529 9.52833 11.1842 9.49958 11.4142L9.03333 15.1442L14.2455 8.88955H8.69768C8.46588 8.88955 8.24524 8.79001 8.09183 8.61624C7.93843 8.44246 7.86703 8.21118 7.89578 7.98117L8.36203 4.25119L3.14983 10.5058Z' fill='#BDBDBD' />
</Icon>
  )
}

Powered.propTypes = {
  title: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.number
}

Powered.defaultProps = {
  title: 'Powered',
  color: null,
  size: null
}
Powered.displayName = 'Powered'
export default Powered