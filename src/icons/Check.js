import React from 'react'
import PropTypes from 'prop-types'
import Icon from '../components/Icon'


const Check = props => {
  const { size, color, title } = props
  return (
    <Icon
      viewBox='0 0 36 36'
      size={size}
      color={color}
      aria-label={title}
      {...props}
    >
        <path fillRule="evenodd" clipRule="evenodd" d="M22.4327 5.7338C22.8558 6.15687 22.8558 6.8428 22.4327 7.26587L10.516 19.1825C10.093 19.6056 9.40704 19.6056 8.98397 19.1825L3.5673 13.7659C3.14423 13.3428 3.14423 12.6569 3.5673 12.2338C3.99037 11.8107 4.6763 11.8107 5.09937 12.2338L9.75 16.8844L20.9006 5.7338C21.3237 5.31074 22.0096 5.31074 22.4327 5.7338Z" fill="#0074D9"/>
    </Icon>
  )
}

Check.propTypes = {
  title: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.number
}

Check.defaultProps = {
  title: 'Check',
  color: null,
  size: null
}
Check.displayName = 'Check'
export default Check