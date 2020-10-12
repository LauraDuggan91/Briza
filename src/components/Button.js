import '../styles/button.scss'

import React from 'react';

const Button = props => {
    const { size, variant, onClick, disabled } = props

  return (
    <button onClick={onClick} className={`btn-${variant} btn-${size}`} disabled={disabled}>{props.children}</button>
  );
}

export default Button;