import React from 'react'
import PropTypes from 'prop-types'
import Icon from '../components/Icon'


const ChevronUp = props => {
  const { size, color, title } = props
  return (
    <Icon
      viewBox='2 -2 28 28'
      size={size}
      color={color}
      aria-label={title}
      {...props}
    >
        <path fillRule="evenodd" clipRule="evenodd" d="M11.2929 8.29289C11.6834 7.90237 12.3166 7.90237 12.7071 8.29289L18.7071 14.2929C19.0976 14.6834 19.0976 15.3166 18.7071 15.7071C18.3166 16.0976 17.6834 16.0976 17.2929 15.7071L12 10.4142L6.70711 15.7071C6.31658 16.0976 5.68342 16.0976 5.29289 15.7071C4.90237 15.3166 4.90237 14.6834 5.29289 14.2929L11.2929 8.29289Z" fill="black"/>
    </Icon>
  )
}

ChevronUp.propTypes = {
  title: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.number
}

ChevronUp.defaultProps = {
  title: 'ChevronUp',
  color: null,
  size: null
}
ChevronUp.displayName = 'ChevronUp'
export default ChevronUp