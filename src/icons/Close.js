import React from 'react'
import PropTypes from 'prop-types'
import Icon from '../components/Icon'


const Close = props => {
  const { size, color, title, onClick } = props
  return (
    <Icon
      viewBox={`0 0 24 24`}
      size={size}
      color={color}
      onClick={onClick}
      aria-label={title}
      {...props}
    >
        <path fillRule="evenodd" clipRule="evenodd" d="M18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289Z" fill="#0074D9"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z" fill="#0074D9"/>
    </Icon>
  )
}

Close.propTypes = {
  title: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.number
}

Close.defaultProps = {
  title: 'Close',
  color: null,
  size: null
}
Close.displayName = 'Close'
export default Close