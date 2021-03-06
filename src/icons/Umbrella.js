import React from 'react'
import PropTypes from 'prop-types'
import Icon from '../components/Icon'


const Umbrella = props => {
  const { size, color, title, viewBox } = props
  return (
    <Icon
      viewBox={viewBox}
      size={size}
      color={color}
      aria-label={title}
      {...props}
    >
      <path fillRule='evenodd' clipRule='evenodd' d='M9.73574 8.3343C15.2809 3.29324 22.5059 0.5 30 0.5C37.4941 0.5 44.7191 3.29324 50.2643 8.3343C55.8095 13.3754 59.2766 20.3023 59.9887 27.7624C60.0556 28.4636 59.8237 29.1605 59.3499 29.6817C58.8761 30.2029 58.2044 30.5 57.5 30.5H32.5V45.5C32.5 46.8261 33.0268 48.0979 33.9645 49.0355C34.9022 49.9732 36.1739 50.5 37.5 50.5C38.8261 50.5 40.0979 49.9732 41.0356 49.0355C41.9732 48.0979 42.5 46.8261 42.5 45.5C42.5 44.1193 43.6193 43 45 43C46.3807 43 47.5 44.1193 47.5 45.5C47.5 48.1522 46.4464 50.6957 44.5711 52.5711C42.6957 54.4464 40.1522 55.5 37.5 55.5C34.8479 55.5 32.3043 54.4464 30.4289 52.5711C28.5536 50.6957 27.5 48.1522 27.5 45.5V30.5H2.50001C1.79565 30.5 1.12397 30.2029 0.65016 29.6817C0.176354 29.1605 -0.0556084 28.4636 0.0113221 27.7624C0.723429 20.3023 4.19057 13.3754 9.73574 8.3343ZM54.5968 25.5C53.5208 20.3352 50.8393 15.6143 46.9009 12.034C42.2761 7.82963 36.2503 5.5 30 5.5C23.7498 5.5 17.7239 7.82963 13.0991 12.034C9.16077 15.6143 6.47924 20.3352 5.4032 25.5H54.5968Z' fill="#0074D9"/>
    </Icon>
  )
}

Umbrella.propTypes = {
  title: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.number
}

Umbrella.defaultProps = {
  title: 'Umbrella',
  color: null,
  size: null
}
Umbrella.displayName = 'Umbrella'
export default Umbrella